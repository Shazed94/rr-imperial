"use client";
import Lottie, { useLottie, useLottieInteractivity } from "lottie-react";
import heroVideo from "../public/lottie/Slider.json";
import aboutLeftVideo from "../public/lottie/AboutLeft.json";
import learnMoreAboutUsBtn from "../public/lottie/BesideButton.json";
// import icon1 from "../public/lottie/icon1.json";
import { useRef } from "react";

export function LottieSlider() {
  return <Lottie animationData={heroVideo} loop={true} />;
}
// export function LottieIcon() {
//   const iconRef = useRef();
//   const interactivity = {
//     mode: "scroll",
//     actions: [
//       {
//         visibility: [0, 1],
//         type: "seek",
//         frames: [0, 60],
//       },
//     ],
//   };

//   // return Animation;
//   return (
//     <Lottie
//       lottieRef={iconRef}
//       animationData={icon1}
//       // loop={true}
//       style={{ width: 120 }}
//       interactivity={interactivity}
//       // onComplete={() => {
//       //   iconRef.current?.setDirection(-1);
//       //   iconRef.current?.play();
//       // }}
//     />
//   );
// }

export function LottieAboutLeft() {
  const options = {
    animationData: aboutLeftVideo,
  };
  const lottieObj = useLottie(options, {
    height: 620,
  });
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: "scroll",
    actions: [
      {
        visibility: [0.2, 1],
        type: "seek",
        frames: [0, 120],
      },
    ],
  });

  return Animation;
}
export function LearnMoreAboutUs() {
  const options = {
    animationData: learnMoreAboutUsBtn,
  };
  const lottieObj = useLottie(options);
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: "scroll",
    actions: [
      {
        visibility: [0, 1],
        type: "seek",
        frames: [0, 40],
      },
    ],
  });

  return Animation;
}
