"use client";
import Lottie, { useLottie, useLottieInteractivity } from "lottie-react";
import heroVideo from "../public/lottie/Slider.json";
import aboutLeftVideo from "../public/lottie/AboutLeft.json";
import learnMoreAboutUsBtn from "../public/lottie/BesideButton.json";
// import icon1 from "../public/lottie/icon.json";
import ourProfile from "../public/lottie/OurProfileWhoWeAre.json";
import awardCertification from "../public/lottie/CertificateWhoWeAre.json";
import researchInnovation from "../public/lottie/ResearchInnovationWhoWeAre.json";
import mission from "../public/lottie/MisionWhoWeAre.json";
import rrKabel from "../public/lottie/RRKabel.json";
import rrShramik from "../public/lottie/RRShramik.json";
import whoWeAre from "../public/lottie/WhoWeAreHome.json";
import media from "../public/lottie/MediaHome.json";
import product from "../public/lottie/ProductPageMainBanner.json";
import downloadIcon from "../public/lottie/DownloadIcon.json";
import { useRef } from "react";

export function LottieSlider() {
  return <Lottie animationData={heroVideo} loop={true} />;
}
export function OurProfile() {
  return <Lottie animationData={ourProfile} loop={true} />;
}
export function AwardCertification({ className }) {
  return (
    <Lottie
      animationData={awardCertification}
      loop={true}
      className={className}
    />
  );
}
export function ResearchInnovation({ className }) {
  return (
    <Lottie
      animationData={researchInnovation}
      loop={true}
      className={className}
    />
  );
}
export function Mission({ className }) {
  return (
    <Lottie
      animationData={mission}
      loop={true}
      className={className}
      // style={{ height: 520 }}
    />
  );
}
export function RRKabel() {
  return (
    <Lottie
      animationData={rrKabel}
      loop={true}
      // style={{ height: 520 }}
    />
  );
}
export function RRShramik() {
  return (
    <Lottie
      animationData={rrShramik}
      loop={true}
      // style={{ height: 520 }}
    />
  );
}
export function WhoWeAreHome() {
  return (
    <Lottie
      animationData={whoWeAre}
      loop={true}
      // style={{ height: 520 }}
    />
  );
}
export function MediaHome() {
  return (
    <Lottie
      animationData={media}
      loop={true}
      // style={{ height: 520 }}
    />
  );
}
export function ProductHome({ className }) {
  return <Lottie animationData={product} loop={true} className={className} />;
}
export function DownloadIcon() {
  return (
    <Lottie
      animationData={downloadIcon}
      loop={true}
      // style={{ height: 520 }}
    />
  );
}

export function LottieAboutLeft({ className }) {
  const interactivity = {
    mode: "scroll",
    actions: [
      {
        visibility: [0.2, 1],
        type: "seek",
        frames: [0, 120],
      },
    ],
  };

  return (
    <Lottie
      animationData={aboutLeftVideo}
      interactivity={interactivity}
      className={className}
    />
  );
}

export function LearnMoreAboutUs({ className }) {
  const interactivity = {
    mode: "scroll",
    actions: [
      {
        visibility: [0, 1],
        type: "seek",
        frames: [0, 40],
      },
    ],
  };

  return (
    <Lottie
      animationData={learnMoreAboutUsBtn}
      interactivity={interactivity}
      className={className}
    />
  );
}
