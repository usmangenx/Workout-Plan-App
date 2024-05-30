import connectDB from "/src/app/lib/db";
import Subscriber from "/src/app/models/Subscriber";
import { NextResponse } from "next/server";

export async function GET(req) {
  await connectDB(); // Connect to the database

  if (req.method !== "GET") {
    return NextResponse.json({ message: "Method Not Allowed" });
  }

  const subscriberId = req.nextUrl.searchParams.get("subscriberId"); // Access subscriber ID from query parameters

  if (!subscriberId) {
    return NextResponse.json({ error: "Subscriber ID not provided" }, { status: 400 });
  }

  try {
    // Find the subscriber by the ID
    const subscriber = await Subscriber.findById(subscriberId);
    if (!subscriber) {
      return NextResponse.json({ error: "Subscriber not found." }, { status: 404 });
    }

    // Remove the subscriber from the database
    await Subscriber.deleteOne({ _id: subscriberId });

    return NextResponse.json({ message: "Unsubscribed successfully!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to unsubscribe." });
  }
}
