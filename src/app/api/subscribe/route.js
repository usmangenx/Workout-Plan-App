import connectDB from "/src/app/lib/db";
import Subscriber from "/src/app/models/Subscriber";
import { NextResponse } from "next/server";
import { sendWelcomeEmail } from "/src/app/Components/welcome";

export async function POST(req) {
  await connectDB();

  if (req.method !== "POST") {
    return NextResponse.json({ message: "Method Not Allowed" });
  }

  const { email } = await req.json();

  try {
    const existingSubscriber = await Subscriber.findOne({ email });
    if (existingSubscriber) {
      return NextResponse.json(
        { error: "Email is already registered." },
        { status: 409 }
      );
    }

    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();
    await sendWelcomeEmail(email);
    return NextResponse.json({ message: "Subscribed successfully!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to subscribe." });
  }
}
