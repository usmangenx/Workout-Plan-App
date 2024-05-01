import { MotionDiv } from "./Components/motiondiv";

const Chest = () => {
  return (
    <div>
      <MotionDiv
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className=" h-full w-[3px] mt-7 rounded-md bg-gradient-to-b from-[#7ee787]"
      ></MotionDiv>
    </div>
  );
};

export default Chest;
