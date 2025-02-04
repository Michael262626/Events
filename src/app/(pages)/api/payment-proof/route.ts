import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { userId, fileUrl, status } = await req.json();

    if (!userId || !fileUrl) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Log the uploaded file URL
    console.log(`User ID: ${userId} uploaded file: ${fileUrl}`);

    const paymentProof = await prisma.paymentProof.create({
      data: {
        userId,
        fileUrl,
        status,
      },
    });

    return NextResponse.json({ success: true, paymentProof });
  } catch (error) {
    console.error("Error saving payment proof:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
