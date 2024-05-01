import Nav from "./navbar";
import Image from "next/image";
import HeroImage from "/public/AdobeStock_135096108.jpeg";
import Hero from "./Components/hero";

export default function Home() {
  return (
    <div className="max-w-[1300px] mx-auto">
      <div>
        <Nav />;
        <Image
          src={HeroImage}
          sizes="(max-width: 768px), (max-width: 1200px)"
          alt="Hero picture"
          className=""
        />
      </div>
      <Hero />
    </div>
  );
}
