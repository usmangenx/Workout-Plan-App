import Link from "next/link";
export default function Nav() {
    return (
      <div className="flex justify-between items-center text-[#5f5f5f] max-w-[1240px] mx-auto h-[10rem">
       
       <Link href="/"> <h1 className="font-bold text-3xl pt-5 ">David Laid Workouts</h1></Link>
          <ul className="flex">
           <Link href="/"> <li className="m-5 font-semibold pt-5">Home</li></Link>
           <Link href="./chest"> <li className="m-5 font-semibold pt-5">Chest</li></Link>
           <Link href="./back"> <li className="m-5 font-semibold pt-5">Back</li></Link>
           <Link href="./shoulder"> <li className="m-5 font-semibold pt-5">Shoulder</li></Link>
           <Link href="./leg"> <li className="m-5 font-semibold pt-5">Leg</li></Link>
           <Link href="./arm"> <li className="m-5 font-semibold pt-5">Arm</li></Link>
          </ul>
        </div>
      
    );
  }
  