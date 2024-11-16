import { NextApiRequest, NextApiResponse } from "next";
import { MoodEntry } from "../ types";

let moodData: MoodEntry[] = []; // Temporary storage (replace with DB in production)

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { mood, notes, date } = req.body;

    const newEntry: MoodEntry = {
      id: crypto.randomUUID(),
      mood,
      notes,
      date,
    };

    moodData.push(newEntry);
    res.status(200).json({ message: "Mood saved successfully!" });
  } else if (req.method === "GET") {
    res.status(200).json(moodData);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}