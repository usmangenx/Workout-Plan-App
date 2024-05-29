import nodemailer from "nodemailer";

export async function sendWelcomeEmail(email) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"David Laid Workouts" <${SMTP_EMAIL}>`,
      to: email,
      subject: "Welcome to David Laid Workouts Newsletter!",
      text: "Thank you for subscribing to David Laid Workouts newsletter. We're excited to have you on board!",
    });

    console.log("Welcome email sent successfully!");
  } catch (error) {
    console.error("Failed to send welcome email:", error);
    throw error;
  }
}
