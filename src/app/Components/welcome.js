import nodemailer from "nodemailer";

export async function sendWelcomeEmail(email) {
  const { STMP_EMAIL, STMP_PASSWORD } = process.env;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: STMP_EMAIL,
      pass: STMP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"David Laid Workouts" <${STMP_EMAIL}>`,
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
