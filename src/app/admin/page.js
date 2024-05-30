"use client";
import { useState, useEffect } from "react";
import AdminNav from "../Components/adminnav";
import { notFound } from "next/navigation"; 

async function getData() {
  const res = await fetch(
    "https://davidlaidworkout.vercel.app/api/subscribers",
    {
      cache: "no-store",
    }
  );
  if (!res.ok) return notFound();
  return res.json();
}

const Admin = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchSubscribers() {
      const data = await getData();
      setSubscribers(data);
    }
    fetchSubscribers();
  }, []);

  const handleRemove = async (subscriberId) => {
    try {
      setLoading(true); // Set loading to true when remove operation starts
      const res = await fetch(
        `https://davidlaidworkout.vercel.app/api/unsubscribe?subscriberId=${subscriberId}`,
        {
          method: "DELETE",
        }
      );
      if (!res.ok) throw new Error("Failed to remove subscriber");
      // Remove the subscriber from the local state
      setSubscribers((prevSubscribers) =>
        prevSubscribers.filter((subscriber) => subscriber._id !== subscriberId)
      );
    } catch (error) {
      console.error("Error removing subscriber:", error);
    } finally {
      setLoading(false); // Set loading to false after remove operation completes
    }
  };

  return (
    <div className="max-w-[1300px] mx-auto min-h-screen flex flex-col">
      <AdminNav />
      <div className="flex flex-col flex-grow items-center">
        <h1 className="text-white text-2xl mt-7">Subscribers</h1>
        {loading && <p>Loading...</p>}
        {!loading && subscribers.map((subscriber) => (
          <div
            key={subscriber._id}
            className="text-white text-xl mt-5 w-[400px] h-[100px] p-9 rounded-lg bg-[#0f0f0f] flex justify-between items-center"
          >
            <div>{subscriber.email}</div>
            <button
              onClick={() => handleRemove(subscriber._id)}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
