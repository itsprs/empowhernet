"use server"

import fs from "fs"
import path from "path"

const filePath = path.join(process.cwd(), "data", "jobs.json")

export async function getJobs() {
  const data = fs.readFileSync(filePath, "utf-8")
  return JSON.parse(data)
}
