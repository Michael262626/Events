import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
    const prisma = new PrismaClient();
    try {
      const { searchParams } = new URL(request.url);
      const userId = searchParams.get("id");
  
      if (!userId) {
        return NextResponse.json(
          { error: "User ID is required" },
          { status: 400 }
        );
      }
  
      console.log(`Deleting user with ID: ${userId}`);
  
      const deletedUser = await prisma.user.delete({
        where: { id: userId },
      });
  
      return NextResponse.json(
        { message: "User deleted successfully", user: deletedUser },
        { status: 200 }
      );
    } catch (error: any) {
      console.error("Error deleting user:", error);
      return NextResponse.json(
        { error: error.message || "Internal Server Error" },
        { status: 500 }
      );
    }
  }