import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { PrismaClient } from "@prisma/client";

const PAYSTACK_SECRET_KEY = process.env.NEXT_PUBLIC_PAY_STACK_KEY!;
const prisma = new PrismaClient();

async function verifyPayment(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { reference } = req.body;

  if (!reference) {
    return res
      .status(400)
      .json({ status: "error", message: "No reference provided" });
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
      // Step 2: Fetch the user by email (assuming email is unique)
      const user = await prisma.user.findUnique({
        where: { email: verificationData.data.customer.email },
      });

      if (!user) {
        return res.status(400).json({
          status: "error",
          message: "User not found for the provided email",
        });
      }

      // Step 3: Create the transaction data
      const transactionData = {
        reference: verificationData.data.reference,
        amount: verificationData.data.amount,
        email: verificationData.data.customer.email,
        status: verificationData.data.status,
        date: new Date(),
        user: { connect: { id: user.id } }, // Connect the user to the transaction
      };

      // Step 4: Insert the transaction data using Prisma
      const savedTransaction = await prisma.transaction.create({
        data: transactionData,
      });

      // Respond with a success message
      return res.status(200).json({
        status: "success",
        message: "Payment verified and transaction saved successfully!",
        data: savedTransaction,
      });
    } else {
      return res.status(400).json({
        status: "error",
        message: "Payment verification failed",
      });
    }
  } catch (error) {
    console.error("Error verifying payment:", error);
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  } finally {
    // Disconnect Prisma Client
    await prisma.$disconnect();
  }
}

export default verifyPayment;
