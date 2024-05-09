

import Image from "next/image";

const Leg = () => {
  return (
    <div className="flex pl-3 pt-5 space-x-3 md:space-x-10">
  <div className="flex flex-col items-center">
    <div className="relative">
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.2739 9.86883L16.8325 4.95392L18.4708 3.80676L21.9122 8.72167L20.2739 9.86883Z"
          fill="white"
        />
        <path
          d="M18.3901 12.4086L16.6694 9.95121L8.47783 15.687L10.1985 18.1444L8.56023 19.2916L3.97162 12.7383L5.60992 11.5912L7.33068 14.0487L15.5222 8.31291L13.8015 5.8554L15.4398 4.70825L20.0284 11.2615L18.3901 12.4086Z"
          fill="white"
        />
        <path
          d="M20.7651 7.08331L22.4034 5.93616L21.2562 4.29785L19.6179 5.445L20.7651 7.08331Z"
          fill="white"
        />
        <path
          d="M7.16753 19.046L3.72607 14.131L2.08777 15.2782L5.52923 20.1931L7.16753 19.046Z"
          fill="white"
        />
        <path
          d="M4.38208 18.5549L2.74377 19.702L1.59662 18.0637L3.23492 16.9166L4.38208 18.5549Z"
          fill="white"
        />
      </svg>
      <span
        className="absolute left-0 top-0 h-full w-full home-campaign-glowing-icon-glow-1 z-3"
        style={{ backgroundColor: "#e77e7e", filter: "blur(17px)" }}
      ></span>
    </div>
    <div className="h-full w-[3px] mt-7 rounded-md bg-gradient-to-b from-[#e77e7e]"></div>
  </div>
  <div id="leg" className="md:w-10/12 pr-8 mb-24">
    <div className="text-[30px] md:text-7xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate">
      Leg Workout
    </div>
    <div className="text-[25px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate">
      <span className="text-[#e77e7e]">Barbell squat with pause</span> <br />
      <span className="text-[20px]">4 sets, 3 reps</span>
      <Image
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExazF6bGJrbjFvZzRlc2xsN252ZDNqdHFjZXR5MDVsbmExdHcyZ3BjbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mQ8QwFOFSfcphejsYt/giphy.gif"
          width={500}
          height={500}
          alt="Barbell squat with pause"
          unoptimized={true}
          className="mt-3 mb-12"
        />
    </div>
    <div className="text-[25px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate">
      <span className="text-[#e77e7e]">Barbell squat</span> <br />
      <span className="text-[20px]">6 sets, 5 reps</span>
    </div>
    <div className="text-[25px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate">
      <span className="text-[#e77e7e]">Machine leg press</span> <br />
      <span className="text-[20px]">3 sets, 20 reps</span>
      <Image
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTN4cDZpNG9lNTg5OW92dTRiMW8wa3A0bDJzOGd6NW9oOGlsZXpnNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xLkMyVaB5xxJ3Uof2T/giphy.gif"
          width={500}
          height={500}
          alt="Machine leg press"
          unoptimized={true}
          className="mt-3 mb-12"
        />
    </div>
    <div className="text-[25px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate">
      <span className="text-[#e77e7e]">Lying hamstring curls</span> <br />
      <span className="text-[20px]">5 sets, 10 reps</span>
      <Image
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGM1NGk2ejJhMGdlNDhvbndqejdyb3V1aWp1ZG56d21rZWczbGg3aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fikZvfAgBbdHPnHKXv/giphy.gif"
          width={500}
          height={500}
          alt="Lying hamstring curls"
          unoptimized={true}
          className="mt-3 mb-3"
        />
    </div>
  </div>
</div>

  )
}

export default Leg