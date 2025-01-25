import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { PrismaClient } from "@prisma/client";

const PAYSTACK_SECRET_KEY = process.env.NEXT_PUBLIC_PAY_STACK_KEY!;
const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { reference } = body;

  if (!reference) {
    return NextResponse.json(
      { status: "error", message: "No reference provided" },
      { status: 400 }
    );
  }

  try {
    // Step 1: Verify the transaction with Paystack
    const paystackResponse = await axios.get(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
        },
      }
    );

    const verificationData = paystackResponse.data;

    if (verificationData.status && verificationData.data.status === "success") {
      // Step 2: Fetch the user by email
      const user = await prisma.user.findUnique({
        where: { email: verificationData.data.customer.email },
      });

      if (!user) {
        return NextResponse.json(
          { status: "error", message: "User not found for the provided email" },
          { status: 400 }
        );
      }

      // Step 3: Create the transaction data
      const transactionData = {
        reference: verificationData.data.reference,
        amount: verificationData.data.amount,
        email: verificationData.data.customer.email,
        status: verificationData.data.status,
        date: new Date(),
        user: { connect: { id: user.id } },
      };

      // Step 4: Insert the transaction data using Prisma
      const savedTransaction = await prisma.transaction.create({
        data: transactionData,
      });

      return NextResponse.json({
        status: "success",
        message: "Payment verified and transaction saved successfully!",
        data: savedTransaction,
      });
    } else {
      return NextResponse.json(
        { status: "error", message: "Payment verification failed" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error verifying payment:", error);
    return NextResponse.json(
      { status: "error", message: "Internal server error" },
      { status: 500 }
    );
  } finally {
    // Disconnect Prisma Client
    await prisma.$disconnect();
  }
}
