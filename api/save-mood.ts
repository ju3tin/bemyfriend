import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { MoodEntry } from "../app/types";

// Path to JSON file
const filePath = path.join(process.cwd(), "data", "moods.json");

// Helper to read the JSON file
function readData(): MoodEntry[] {
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data || "[]");
}

// Helper to write to the JSON file
function writeData(data: MoodEntry[]) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    // Parse incoming data
    const { mood, notes, date } = req.body;

    // Create new mood entry
    const newEntry: MoodEntry = {
      id: crypto.randomUUID(),
      mood,
      notes,
      date,
    };

    // Read existing data and append
    const existingData = readData();
    const updatedData = [...existingData, newEntry];

    // Save updated data back to file
    writeData(updatedData);

    res.status(200).json({ message: "Mood saved successfully!", data: newEntry });
  } else if (req.method === "GET") {
    // Read data and return it
    const data = readData();
    res.status(200).json(data);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}