import connectDB from "/src/app/lib/db";
import Subscriber from "/src/app/models/Subscriber";
import { NextResponse } from "next/server";

export async function GET(req) {
  

  try {
    await connectDB();
    const subscribers = await Subscriber.find()

    return new NextResponse(JSON.stringify(subscribers),{status: 200})

  } catch(error) {
    return new NextResponse("Error Fetching posts" + error ,{status: 500})
  }
}
