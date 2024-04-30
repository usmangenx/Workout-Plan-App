"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";



export default function Nav() {

  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenu = () =>{
     setMenuOpen(!menuOpen)
  }
   

    return (
      <div className="flex justify-between  items-center bg-[#242323] text-[#ffffff] mx-auto h-[6rem]">
       
       <Link href="/"> <h1 className="font-bold text-2xl md:text-3xl pl-12  pr-3">David Laid Workouts</h1></Link>
          <ul className="hidden md:flex pr-10">
           <Link href="/"> <li className="m-8 font-semibold ">Home</li></Link>
           <Link href="./chest"> <li className="m-8 font-semibold ">Chest</li></Link>
           <Link href="./back"> <li className="m-8 font-semibold ">Back</li></Link>
           <Link href="./shoulder"> <li className="m-8 font-semibold ">Shoulder</li></Link>
           <Link href="./leg"> <li className="m-8 font-semibold ">Leg</li></Link>
           <Link href="./arm"> <li className="m-8 font-semibold ">Arm</li></Link>
          </ul>
         <div onClick={handleMenu} className="md:hidden ml-7 mr-8 ">
         <AiOutlineMenu size={25} />
         </div>
         <div className={menuOpen ? "fixed left-0 top-0 md:hidden w-[65%] h-screen bg-[#2e2e2e] ease-in duration-200"
         :"fixed left-[-100] top-0 ease-out duration-200"}>
         {menuOpen && (<div className="flex w-full items-center justify-end">
          <div onClick={handleMenu} className="p-5">
         <AiOutlineClose size={25}/>
         </div>
         </div>)}
         { menuOpen && ( <div className=" ">
        <ul className="">
           <Link onClick={()=>setMenuOpen(false)} href="/"> <li className="m-8 font-semibold ">Home</li></Link>
           <Link onClick={()=>setMenuOpen(false)} href="./chest"> <li className="m-8 font-semibold ">Chest</li></Link>
           <Link onClick={()=>setMenuOpen(false)} href="./back"> <li className="m-8 font-semibold ">Back</li></Link>
           <Link onClick={()=>setMenuOpen(false)} href="./shoulder"> <li className="m-8 font-semibold ">Shoulder</li></Link>
           <Link onClick={()=>setMenuOpen(false)} href="./leg"> <li className="m-8 font-semibold ">Leg</li></Link>
           <Link onClick={()=>setMenuOpen(false)} href="./arm"> <li className="m-8 font-semibold ">Arm</li></Link>
          </ul>
         </div>)}
         </div>
        </div>


      
    );
  }
  