import { notFound } from "next/navigation";
import AdminNav from "../Components/adminnav";

async function getData() {
  const res = await fetch("https://davidlaidworkout.vercel.app/api/subscribers", {
    headers: {
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Pragma: "no-cache",
      Expires: "0",
    },
  });
  if (!res.ok) return notFound();
  return res.json();
}

const Admin = async () => {
  const data = await getData();
  return (
    <div className="max-w-[1300px] mx-auto min-h-screen flex flex-col">
      <AdminNav />
      <div className="flex flex-col flex-grow items-center">
        <h1 className="text-white text-2xl mt-7 ">Subscribers</h1>
        {data &&
          data.map((e) => (
            <div key={e._id} className="text-white text-xl mt-5 w-[400px] h-[100px] p-9 rounded-lg bg-[#0f0f0f]">
              {e.email}
              </div>
          ))}
      </div>
    </div>
  );
};

export default Admin;
