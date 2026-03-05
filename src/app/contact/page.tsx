"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
      e.preventDefault();

      setLoading(true);
      setStatus("Sending...");

       const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
      },
        body: JSON.stringify(form),
      });

  const data = await res.json();

  console.log("API RESPONSE:", data);

  if (res.ok) {
    setStatus("✅ Message sent successfully. I’ll get back to you soon.");
    setForm({ name: "", email: "", message: "", company: "" });
  } else {
    setStatus("Failed to send message. Please try again.");
  }

  setLoading(false);
  }

  return (
    <main className="max-w-2xl mx-auto px-6 py-16">

      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-8">Contact</h1>

      {/* Mission Statement */}
      <p className="text-gray-600 text-center mb-12">
        I'm always open to discussing new opportunities, collaborating on
        interesting projects, or connecting with other developers.
      </p>


      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-white shadow-lg p-8 rounded-xl"
      >
        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border p-3 rounded"
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="border p-3 rounded"
          required
        />

        <textarea
          placeholder="Your Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="border p-3 rounded h-32"
          required
        />

        <input
          type="text"
          name="company"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
          style={{ display: "none" }}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            opacity: loading ? 0.6 : 1,
            backgroundColor: "#2563eb",
            color: "white",
            padding: "12px 20px",
            borderRadius: "8px",
            border: "none",
            cursor: loading ? "not-allowed" : "pointer",
            fontWeight: "600"
          }}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status && (
        <p className="mt-4 text-sm text-gray-700">
          {status}
        </p>
        )}
      </form>

      {/* Divider */}
      <div className="my-10 border-t"></div>

      {/* Social Links */}
      <div className="text-center">

        <h2 className="text-xl font-semibold mb-4">
          Or connect with me
        </h2>

        <div className="flex justify-center gap-6">

          <a
            href="https://github.com/bsilcox1990"
            target="_blank"
            className="border px-5 py-2 rounded-lg hover:bg-black hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/bradleysilcox"
            target="_blank"
            className="border px-5 py-2 rounded-lg hover:bg-black hover:text-white transition"
          >
            LinkedIn
          </a>

        </div>

        <p className="text-gray-500 mt-6 text-sm">
          Based in Washington, United States
        </p>

      </div>

    </main>
  );
}
