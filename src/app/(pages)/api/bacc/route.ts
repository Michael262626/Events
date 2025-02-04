import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    console.log("Fetching all users...");

    // Retrieve all users including their payment proofs
    const users = await prisma.user.findMany({
      select: {
        id: true,
        fullName: true,
        email: true,
        phoneNumber: true,
        role: true,
        payments: {
          select: {
            fileUrl: true, // Include the fileUrl of the payment proof
          },
        },
      },
    });

    console.log("Users fetched:", users);

    return NextResponse.json(
      { message: "Users retrieved successfully", users },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

