import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { MoodEntry } from "../ types";

type MoodFormInputs = Omit<MoodEntry, "id">;

export default function MoodForm() {
  const { register, handleSubmit, reset } = useForm<MoodFormInputs>();

  const onSubmit: SubmitHandler<MoodFormInputs> = async (data) => {
    const newEntry = {
      ...data,
      date: new Date().toISOString(),
    };

    await axios.post("/api/save-mood", newEntry);
    reset();
    alert("Mood saved!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>How are you feeling today?</h2>
      <select {...register("mood")} required>
        <option value="">Select Mood</option>
        <option value="Happy">😊 Happy</option>
        <option value="Neutral">😐 Neutral</option>
        <option value="Sad">😢 Sad</option>
      </select>
      <textarea {...register("notes")} placeholder="Add any notes (optional)" />
      <button type="submit">Save Mood</button>
    </form>
  );
}