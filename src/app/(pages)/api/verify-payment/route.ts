import { NextResponse } from "next/server";

export async function POST() {
  // Redirect to the existing Selar payment page
  return NextResponse.json({ paymentUrl: "https://selar.co/m/advancemusicconference" });
}
