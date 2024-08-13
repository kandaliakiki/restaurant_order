import Lottie from "lottie-react";
import React from "react";
import heartAnimation from "../../public/animations/heart-animation.json";

const HeartAnimation = () => {
  return (
    <Lottie
      animationData={heartAnimation}
      loop={false}
      className="absolute w-[60px] h-[60px] "
    />
  );
};

export default HeartAnimation;
