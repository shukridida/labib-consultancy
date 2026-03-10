"use client";
import { useState } from "react";

export default function Booking() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch("/api/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await res.json();
    setSuccess(data.message);

    // clear form
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <main className="bg-[#E6F4FF] text-[#0B1C2D] min-h-screen py-20 px-6">

      <h1 className="text-4xl font-bold text-center mb-12">
        Book a Consultation
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white max-w-3xl mx-auto p-10 rounded-xl shadow-md space-y-6"
      >

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-3 rounded-lg"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full border p-3 rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <textarea
          placeholder="Describe your needs..."
          className="w-full border p-3 rounded-lg"
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button className="bg-[#38B000] text-white px-6 py-3 rounded-lg hover:bg-green-700 transition w-full">
          Submit Booking
        </button>

        {success && (
          <p className="text-green-600 text-center font-medium">
            {success}
          </p>
        )}

      </form>

    </main>
  );
}