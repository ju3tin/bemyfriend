export interface MoodEntry {
    id: string;
    date: string; // ISO string
    mood: "Happy" | "Neutral" | "Sad";
    notes?: string;
  }