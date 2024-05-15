"use client";
import Nav from "./navbar";
import Image from "next/image";
import HeroImage from "/public/Untitled (3).png";
import Hero from "./Components/hero";
import Chest from "./Components/chest";
import Back from "./Components/back";
import Shoulder from "./Components/shoulder";
import Leg from "./Components/leg";
import Arm from "./Components/arm";
import SubscriptionForm from "./Components/SubscriptionForm";
import { useState , useEffect } from "react";
import { IoIosArrowRoundUp } from "react-icons/io";
import Footer from "./Components/footer";

export default function Home() {
  const isBrowser = () => typeof window !== 'undefined';

  function scrollToTop() {
      if (!isBrowser()) return;
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="max-w-[1300px] mx-auto">
      <div>
        <Nav />;
        <Image
          priority={true}
          src={HeroImage}
          sizes="(max-width: 768px), (max-width: 1200px)"
          alt="Hero picture"
          className=""
        />
      </div>
      <Hero />
      <Chest />
      <Back />
      <Shoulder />
      <Leg />
      <Arm />
      <SubscriptionForm />
      <Footer/>
      <button
        className={`... scrollToTopButton ${isVisible ? 'visible' : ''} fixed bottom-0 right-0 text-white bg-black rounded-s-full px-4 py-4 mb-[50px] z-50 items-center text-xs flex gap-2`}
        onClick={scrollToTop}
      >
        BACK TO TOP
        <IoIosArrowRoundUp className="inline-block white h-4 w-4" />
</button>
      
    </div>
  );
}
