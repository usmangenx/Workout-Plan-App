import Nav from "./navbar";
import Image from "next/image";
import HeroImage from "/public/AdobeStock_135096108.jpeg";
import { MotionDiv } from "./Components/motiondiv";

export default function Home() {
  return (
    <div>
      <Nav />;
      <Image
        src={HeroImage}
        sizes="(max-width: 768px), (max-width: 1200px)"
        alt="Hero picture"
        className=""
      />
      <div className="flex flex-col w-10 h-[20rem] items-center">

        <MotionDiv
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className=" h-full w-[3px] mt-7 rounded-md bg-gradient-to-b from-[#7ee787]"
        ></MotionDiv>
      </div>
    </div>
  );
}
