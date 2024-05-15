import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex">
      <div>
        <div className="mx-auto  ml-[14px] mb-3 mt-10">
          <span className="relative z-[11]">
            <svg
              aria-hidden="true"
              height="30"
              viewBox="0 0 24 24"
              fill="currentColor"
              version="1.1"
              width="24"
              data-view-component="true"
              className=" text-white"
            >
              <path d="M15.22 4.97a.75.75 0 0 1 1.06 0l6.5 6.5a.75.75 0 0 1 0 1.06l-6.5 6.5a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L21.19 12l-5.97-5.97a.75.75 0 0 1 0-1.06Zm-6.44 0a.75.75 0 0 1 0 1.06L2.81 12l5.97 5.97a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.5-6.5a.75.75 0 0 1 0-1.06l6.5-6.5a.75.75 0 0 1 1.06 0Z"></path>
            </svg>
            <span
              className="absolute left-0 top-0 w-6 h-full  home-campaign-glowing-icon-glow "
              style={{ backgroundColor: "#d2a8ff", filter: "blur(17px)" }}
            ></span>
          </span>
        </div>
        <div className="flex flex-col w-10 h-[23rem] items-center">
          <div
            style={{
              background:
                "linear-gradient(#d2a8ff, #a371f7 10%, #196c2e 70%, #2ea043 80%, #56d364)",
              marginLeft: "11px",
            }}
            className=" max-md:w-[2px] w-[3px] h-[450px] max-md:h-[650px] max-sm:h-[750px] max-ssm:h-[900px] max-sssm:h-[1150px] line rounded-md"
          ></div>
        </div>
      </div>
      <div className="flex flex-col ">
        <h1 className="text-white pl-4 pt-9 text-2xl font-extrabold">
          Build Yourself With Us!
        </h1>
        <button className="mt-5 ml-5 mr-5 pt-3 pb-3 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          <Link href="#chest">Chest Workout</Link>
        </button>

        <button className="mt-5 ml-5 mr-5 pt-3 pb-3 text-white bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-500 dark:focus:ring-purple-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          <Link href="#back"> Back Workout </Link>
        </button>
        <button className="text-white mt-5 ml-5 mr-5 pt-3 pb-3 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-800 dark:focus:ring-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        <Link href="#shoulder"> Shoulder Workout </Link>
        </button>
        <button className="text-white mt-5 ml-5 mr-5 pt-3 pb-3 bg-gradient-to-r from-green-600 via-green-700 to-green-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-500 dark:focus:ring-green-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        <Link href="#leg"> Leg Workout </Link>
        </button>
        <button className="text-white mt-5 ml-5 mr-5 pt-3 pb-3 bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        <Link href="#arm"> Arm Workout </Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
