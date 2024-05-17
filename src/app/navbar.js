"use client";
import Link from "next/link"
import Image from "next/image";
import Logo from "/public/Untitled (7).png"




export default function Nav() {

    return (
      <div className="flex justify-start mr-3 ml-3 items-center text-white mx-auto h-[6rem]">
       
       <Link href="/"> <Image
              src={Logo}
              width={70}
              height={70}
              alt="logo"
              className="mt-5 ml-2"
              priority={true}
            /></Link>   
            <h1 className="mt-4 ml-5 text-2xl">David Laid Workouts</h1>
        </div>

    );
  }
  