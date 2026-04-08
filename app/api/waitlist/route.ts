import { NextRequest, NextResponse } from "next/server";
import { waitlistSchema } from "./schema";
import { prisma } from "@/prisma/client";

export async function GET(request: NextRequest) {
  
  return NextResponse.json("Email added in the waitlist", { status: 201 });
}
export async function POST(request: NextRequest) {
  const body = await request.json();
  const validated = await waitlistSchema.safeParse(body);
  if (!validated.success)
    return NextResponse.json(validated.error.format(), { status: 400 });
  let res = await prisma.waitlist.findUnique({
    where: { email: validated.data.email },
  });
  if (!res)
    res = await prisma.waitlist.create({
      data: { email: validated.data.email },
    });
  return NextResponse.json("Email added in the waitlist", { status: 201 });
}
