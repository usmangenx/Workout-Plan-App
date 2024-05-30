import connectDB from "/src/app/lib/db";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  await connectDB(); 

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
      const subscriberId = subscriber._id; 

      const unsubscribeLink = `https://davidlaidworkout.vercel.app/api/unsubscribe?subscriberId=${subscriberId}`;

     
      const combinedHTML = `
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                background-color: #f3f3f3;
                padding: 20px;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #fff;
                border-radius: 10px;
                padding: 20px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              }
              h1 {
                color: #333;
              }
              p {
                color: #666;
              }
              .unsubscribe-link {
                color: #007bff;
                text-decoration: none;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>${subject}</h1>
              <p>${text}</p>
              <p>To unsubscribe, <a href="${unsubscribeLink}" class="unsubscribe-link">click here</a>.</p>
            </div>
          </body>
        </html>
      `;

      const info = await transport.sendMail({
        from: SMTP_EMAIL,
        to: subscriber.email,
        subject,
        html: combinedHTML, // Pass HTML content here
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
