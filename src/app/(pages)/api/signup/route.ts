import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    await prisma.$connect();
    console.log("Prisma connected successfully.");
    // Parse the request body
    const body = await request.json();
    console.log("Request body:", body);

    const { fullName, email, phoneNumber, role } = body;

    // Validate required fields
    if (!fullName || !email || !phoneNumber || !role) {
      console.error("Validation error: Missing fields");
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check if the user already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    console.log("Existing user:", existingUser);

    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 409 }
      );
    }

    // Create and save a new user
    console.log("Creating user with data:", { fullName, email, phoneNumber, role })
    const newUser = await prisma.user.create({
      data: {
        fullName,
        email,
        phoneNumber,
        role,
      },
    });
    console.log("New user created:", newUser);

    // Respond with success
    return NextResponse.json(
      {
        message: "User registered successfully",
        user: { fullName, email, phoneNumber, role },
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error in signup:", error); // Log the full error
    return NextResponse.json(
      { error: error.message || "Internal Server Error", stack: error.stack }, // Include stack trace
      { status: 500 }
    );
  } finally {
    // // Ensure Prisma Client is properly closed
    // await prisma.$disconnect();
  }
}
