"use client";
import { useState } from "react";
import AdminNav from "../Components/adminnav";

export default function Email() {
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);


  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/resend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ subject, text }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error);
      }
      setSuccess(true);
      setSubject("");
      setText("");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <AdminNav />
      <div className="max-w-lg mx-auto p-6 bg-black rounded-lg">
        <h1 className="text-white text-2xl font-bold mb-4">Send Email</h1>
        {success && (
          <p className="text-green-500 mb-4">Emails sent successfully!</p>
        )}
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-white mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-3 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="text" className="block text-white mb-2">
              Text
            </label>
            <textarea
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full px-3 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              rows="4"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
            disabled={loading}
          >
            {loading ? "Sending.." : "Send Email"}
          </button>
        </form>
      </div>
    </div>
  );
}
