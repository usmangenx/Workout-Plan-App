import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { STMP_EMAIL, STMP_PASSWORD } = process.env;
  const { subject, text } = await req.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: STMP_EMAIL,
      pass: STMP_PASSWORD,
    },
  });

  async function getData() {
    const res = await fetch(
      "https://davidlaidworkout.vercel.app/api/subscribers",
      {
        cache: "no-store",
      }
    );
    if (!res.ok) throw new Error("Failed to fetch subscriber data");
    return res.json();
  }

  try {
    const recipients = await getData();

    if (!Array.isArray(recipients)) {
      throw new Error("recipients data is not an array");
    }

    const emailPromises = recipients.map(async (recipient) => {
      const info = await transport.sendMail({
        from: STMP_EMAIL,
        to: recipient.email,
        subject,
        text,
      });
      return { recipient, info };
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
