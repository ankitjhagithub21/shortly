import clientPromise from "./db"

export async function getDb() {
  const client = await clientPromise
  return client.db()
}