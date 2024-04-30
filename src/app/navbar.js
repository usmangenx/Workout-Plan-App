import Link from "next/link";


export default function Nav() {
    return (
      <div className="flex items-center bg-[#242323] text-[#ffffff] mx-auto h-[6rem]">
       
       <Link href="/"> <h1 className="font-bold text-3xl pl-12  pr-14">David Laid Workouts</h1></Link>
          <ul className="flex">
           <Link href="/"> <li className="m-8 font-semibold ">Home</li></Link>
           <Link href="./chest"> <li className="m-8 font-semibold ">Chest</li></Link>
           <Link href="./back"> <li className="m-8 font-semibold ">Back</li></Link>
           <Link href="./shoulder"> <li className="m-8 font-semibold ">Shoulder</li></Link>
           <Link href="./leg"> <li className="m-8 font-semibold ">Leg</li></Link>
           <Link href="./arm"> <li className="m-8 font-semibold ">Arm</li></Link>
          </ul>
        </div>
      
    );
  }
  