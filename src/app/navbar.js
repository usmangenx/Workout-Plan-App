"use client";
import Link from "next/link";




export default function Nav() {

    return (
      <div className="flex justify-center  items-center text-white mx-auto h-[6rem]">
       
       <Link href="/"> <h1 className="font-bold text-3xl md:text-4xl">David Laid Workouts</h1></Link>   
        </div>
        


    );
  }
  