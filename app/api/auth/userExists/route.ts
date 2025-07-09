import { NextResponse } from "next/server"
import { getDb } from "@/lib/mongo"

export async function POST(req: Request) {
  const { name, email } = await req.json()
 
  const db = await getDb()

  const existing = await db.collection("users").findOne({ email })

  if (existing) {
    return NextResponse.json({ success: false, message: "User already exists" })
  }

  await db.collection("users").insertOne({ name, email })

  return NextResponse.json({ success: true })
}
