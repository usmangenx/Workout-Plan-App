

import Image from "next/image";

const Arm = () => {
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
        style={{ backgroundColor: "#7ee4e7", filter: "blur(17px)" }}
      ></span>
    </div>
    <div className="h-full w-[3px] mt-7 rounded-md bg-gradient-to-b from-[#7ee4e7]"></div>
  </div>
  <div id="arm" className="md:w-10/12 pr-8 mb-24">
    <div className="text-[30px] md:text-7xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate">
      Arm Workout
    </div>
    <div className="text-[25px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white">
      <div className="leading-5">
     <span className="text-[#7ee4e7]">Seated Hammer Curl</span>
      <br />
      <span className="text-[20px]">3 sets, 10, 8, 6 reps</span>
      </div>
      <Image
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjlkMXJteXBpenZmZjQxNXZzejF3Zjc2NTF0aHdiZmNpM2RtOHAydSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZLeQKMOYvI0SBUOxP0/giphy.gif"
          width={500}
          height={500}
          alt="Seated Hammer Curl"
          unoptimized={true}
          className="mt-3 mb-20"
        />
    </div>
    <div className="text-[25px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate">
      <div className="leading-5">
      <span className="text-[#7ee4e7]">Bodyweight dips</span>
      <br />
      <span className="text-[20px]">3 sets, 15 reps</span>
      </div>
      <Image
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnFkOXR4czFlMDgyaTR2aTB4dmk5NGlhaXE2ajlsaGdyMHc1enl6dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Cp39rt1ip6VGn2rVm7/giphy.gif"
          width={500}
          height={500}
          alt="Bodyweight dips"
          unoptimized={true}
          className="mt-3 mb-20"
        />
    </div>
    <div className="text-[25px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate">
      <div className="leading-5">
      <span className="text-[#7ee4e7]">EZ bar curls</span>
      <br />
      <span className="text-[20px]">3 sets, 10, 8, 6 reps</span>
      </div>
      <Image
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdW9raWlhOGN1OGk3Y3Q4OTk4ZzVvNHQ4amQyNjV0bzl2aTc4amVydSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RInHQOWN4ZgBk0LGA8/giphy.gif"
          width={500}
          height={500}
          alt="EZ bar curls"
          unoptimized={true}
          className="mt-3 mb-20"
        />
    </div>
    <div className="text-[25px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate">
      <div className="leading-5">
      <span className="text-[#7ee4e7]">Triceps cable pushdown</span>
      <br />
      <span className="text-[20px]">3 sets, 10, 8, 6 reps</span>
      </div>
      <Image
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHd4c2IweXJ5ODk4ejRoZ3F6cWRiODZjdTc1MDN6c2Y3djJwbDBkeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Uw9m82NR68HHG3rNr4/giphy.gif"
          width={500}
          height={500}
          alt="Triceps cable pushdown"
          unoptimized={true}
          className="mt-3 mb-20"
        />
    </div>
    <div className="text-[25px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate">
      <div className="leading-5">
      <span className="text-[#7ee4e7]">Barbell curl</span>
      <br />
      <span className="text-[20px]">1 burnout set</span>
      </div>
      <Image
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTQ3c2F4amx6andkbWRjZ2VlM2hjaHd3bHQ0eTNicnMxcGZ4dmJmeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QknssWcBv5VgmyTvYE/giphy.gif"
          width={500}
          height={500}
          alt="Barbell curl"
          unoptimized={true}
          className="mt-3 mb-3"
        />
    </div>
  </div>
</div>

  );
};

export default Arm;
