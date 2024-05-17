"use client";
import Link from "next/link"
import Image from "next/image";
import Logo from "/public/Untitled (5).png"




export default function Nav() {

    return (
      <div className="flex justify-center mr-3 ml-3 items-center text-white mx-auto h-[6rem]">
       
       <Link href="/"> <Image
              src={Logo}
              width={500}
              height={500}
              alt="logo"
              className=""
              priority={true}
            /></Link>   
        </div>
        


    );
  }
  