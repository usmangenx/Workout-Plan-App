import Nav from "./navbar";
import Image from "next/image";
import HeroImage from "/public/AdobeStock_99821575.png";

export default function Home() {
  return (
    <div>
      <Nav />;
      <Image
        src={HeroImage}
        sizes="(max-width: 768px), (max-width: 1200px)"
        alt="Hero picture"
        className="pr-6 pl-6 pb-6"
      />
    </div>
  );
}
