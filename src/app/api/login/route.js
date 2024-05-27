import bcrypt from "bcryptjs";
import Admin from "/src/app/models/admin";
import connectDB from "/src/app/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {

  const { email, password } = await req.json()
  
  await connectDB();
  try {
    

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return NextResponse.error(new Error("Invalid credentials"), {
        status: 401,
      });
    }

    const isValidPassword = await bcrypt.compare(password, admin.password);

    if (!isValidPassword) {
      return NextResponse.error(new Error("Invalid credentials"), {
        status: 401,
      });
    }

    return NextResponse.json({ message: "Login successful" });
  } catch (error) {
    console.error("Error authenticating admin:", error);
    return NextResponse.error(new Error("Internal Server Error"), {
      status: 500,
    });
  }
}

