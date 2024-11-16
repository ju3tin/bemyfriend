"use client"
import React, { useEffect, useState } from "react";
import MoodHistory from "../../../components/mood";
import Link from "next/link";
import { MoodEntry } from "../../../app/types";

export default function Home() {
  const [moodData, setMoodData] = useState<MoodEntry[]>([]);

  useEffect(() => {
    fetch("/api/save-mood")
      .then((res) => res.json())
      .then((data) => setMoodData(data));
  }, []);

  return (
    <div>
      <h1>Mood Tracker Dashboard</h1>
      <MoodHistory data={moodData} />
      <Link href="/new-entry">Add New Mood Entry</Link>
    </div>
  );
}