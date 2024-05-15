"use client";
import Link from "next/link"
import Image from "next/image";




export default function Nav() {

    return (
      <div className="flex justify-center mr-3 ml-3 items-center text-white mx-auto h-[6rem]">
       
       <Link href="/"> <Image
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaG1mazUydm4xdjJzMnRicW9vczdpdzg0YzR6ZjExcnNlMXl1ZzRjaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qKMmvhk2QAbYo1XnmY/giphy.gif"
              width={500}
              height={500}
              alt="Incline bench press"
              unoptimized={true}
              className="mt-3"
            /></Link>   
        </div>
        


    );
  }
  