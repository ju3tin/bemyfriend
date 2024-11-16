import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { MoodEntry } from "../ types";

interface MoodHistoryProps {
  data: MoodEntry[];
}

export default function MoodHistory({ data }: MoodHistoryProps) {
  const moodMap = { Happy: 3, Neutral: 2, Sad: 1 };
  const formattedData = data.map((entry) => ({
    date: new Date(entry.date).toLocaleDateString(),
    mood: moodMap[entry.mood],
  }));

  return (
    <div>
      <h2>Mood History</h2>
      <LineChart width={600} height={300} data={formattedData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis domain={[0, 4]} />
        <Tooltip />
        <Line type="monotone" dataKey="mood" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
}