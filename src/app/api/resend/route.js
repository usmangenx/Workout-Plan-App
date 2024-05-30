import connectDB from "/src/app/lib/db";
import Subscriber from "/src/app/models/Subscriber";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  await connectDB(); // Connect to the database

  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;
  const { subject, text } = await req.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  async function getData() {
    const res = await fetch("https://davidlaidworkout.vercel.app/api/subscribers", {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch subscriber data");
    return res.json();
  }

  try {
    const subscribers = await getData();

    if (!Array.isArray(subscribers)) {
      throw new Error("Subscribers data is not an array");
    }

    const emailPromises = subscribers.map(async (subscriber) => {
      const subscriberId = subscriber._id; // Retrieve subscriber ID

      const unsubscribeLink = `https://davidlaidworkout.vercel.app/api/unsubscribe?subscriberId=${subscriberId}`; // Updated to use subscriberId

      // Combine the original text with the unsubscribe link
      const combinedText = `${text}\n\nTo unsubscribe, click here: ${unsubscribeLink}`;

      const info = await transport.sendMail({
        from: SMTP_EMAIL,
        to: subscriber.email,
        subject,
        text: combinedText, // Use the combined text
      });
      return { recipient: subscriber.email, info };
    });

    const results = await Promise.all(emailPromises);

    return NextResponse.json({ message: "Emails sent successfully", results });
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.json({
      error: error.message || "Failed to send emails",
    });
  }
}
