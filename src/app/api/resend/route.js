import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import fetch from "node-fetch";

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
      throw new Error("Recipients data is not an array");
    }

    const emailPromises = recipients.map(async (recipient) => {
      // Generate unique unsubscribe token for each recipient
      const unsubscribeToken = generateUnsubscribeToken(recipient.email);

      // Create the unsubscribe link with the token
      const unsubscribeLink = `https://davidlaidworkout.vercel.app/resend?token=${unsubscribeToken}`;

      // Append unsubscribe link to the email text
      const emailText = `${text}\n\nTo unsubscribe, click here: ${unsubscribeLink}`;

      // Send the email
      const info = await transport.sendMail({
        from: STMP_EMAIL,
        to: recipient.email,
        subject,
        text: emailText,
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

// Placeholder function to generate unique unsubscribe token
function generateUnsubscribeToken(email) {
  // Placeholder logic to generate token
  // You can replace this with your actual token generation logic
  return email.toUpperCase(); // Example: Convert email to uppercase as a simple token
}

// Handler for the unsubscribe endpoint
export async function GET(req) {
  const { token } = req.query;

  // Logic to remove the email associated with the token from the database
  const success = await removeFromDatabase(token);

  if (success) {
    return NextResponse.redirect("https://davidlaidworkout.vercel.app/unsubscribed");
  } else {
    return NextResponse.redirect("https://davidlaidworkout.vercel.app/error");
  }
}

// Function to remove email from the database
async function removeFromDatabase(token) {
  // Logic to remove the email associated with the token from the database
  return true; // Return true if successful, false otherwise
}
