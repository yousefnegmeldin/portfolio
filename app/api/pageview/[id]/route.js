import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const id = params.id;
  const counterFilePath = path.resolve(`counters/blog${id}.txt`);
  let count = 0;
  if (fs.existsSync(counterFilePath)) {
    count = parseInt(fs.readFileSync(counterFilePath, "utf8")) || 0;
  }
  count += 1;
  fs.writeFileSync(counterFilePath, count.toString());
  return NextResponse.json({ count });
}
