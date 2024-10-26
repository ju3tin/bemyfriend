"use client"
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';

const BookingForm = () => {
  type Value = string | null;
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [time, setTime] = useState('10:00'); // Default time
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');


  function handleTimeChange(value: string | null) {
    if (value !== null) {
      setTime(value);
    }
  }
  // Function to generate a random 5-character session ID
  const generateSessionId = (): string => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let sessionId = '';
    for (let i = 0; i < 5; i++) {
      sessionId += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return sessionId;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const sessionId = generateSessionId(); // Generate session ID
    // Alert the booking details including session ID
    alert(`Booking confirmed for ${name} on ${startDate?.toLocaleDateString()} at ${time}.\nSession ID: ${sessionId}`);
    // Handle form submission logic here
    console.log({ name, email, startDate, time, sessionId });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Booking Date:</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="MMMM d, yyyy"
          required
        />
      </div>
      <div>
        <label>Booking Time:</label>
        <TimePicker
         onChange={handleTimeChange}
         value={time}
         required
        />
      </div>
      <button type="submit">Book Now</button>
    </form>
  );
};

export default BookingForm;