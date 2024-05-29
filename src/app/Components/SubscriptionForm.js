"use client";
import { useState } from "react";

const SubscriptionForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        if (response.status === 409) {
          setError("Email is already registered.");
        } else {
          setError("Failed to subscribe.");
        }
      } else {
        setMessage("Subscribed successfully!");
        setEmail("");
      }
    } catch (error) {
      setError("Failed to subscribe.");
      console.error(error);
    } finally {
      setLoading(false); 
      setTimeout(() => {
        setMessage("");
        setError("");
      }, 5000);
    }
  };

  return (
    <section className="">
      <div className="py-8 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ml-10 mr-7">
        <div className="mx-auto max-w-screen-md sm:text-center">
          <h2 className="mb-4 text-3xl tracking-tight font-medium text-white">
            Sign up for our newsletter
          </h2>
          <p className="mx-auto mb-10 max-w-2xl font-light text-gray-400 md:mb-12 sm:text-xl">
            Stay up to date with the Workouts
          </p>
          <form action="#" onSubmit={handleSubmit}>
            <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
              <div className="relative w-full">
                <label
                  htmlFor="email"
                  className="hidden mb-2 text-sm font-medium text-gray-300"
                >
                  Email address
                </label>
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400 sm:mb-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="(link unavailable)"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <input
                  className="block p-3 pl-10 w-full text-sm text-white bg-gray-700 rounded-lg border mb-5 border-gray-600 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter your email"
                  type="email"
                  id="email"
                  required=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="py-3 px-5 w-full sm:ml-3 sm:mb-5 text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-600 border-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-800"
                  disabled={loading} 
                >
                  {loading ? "Submitting.." : "Subscribe"} {}
                </button>
              </div>
            </div>
            {error && <div className="text-red-500 text-sm">{error}</div>}
            {message && <div className="text-green-500 text-sm">{message}</div>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionForm;