"use client";
import Lottie from "lottie-react";
import heroVideo from "../public/lottie/Slider.json";
import aboutLeftVideo from "../public/lottie/AboutLeft.json";
import learnMoreAboutUsBtn from "../public/lottie/BesideButton.json";
import awardIcon from "../public/lottie/awardIcon.json";
import missionVisionIcon from "../public/lottie/missionVisionIcon.json";
import companyProfileIcon from "../public/lottie/companyProfileIcon.json";
import districtIcon from "../public/lottie/districtIcon.json";
import FullSize from "../public/lottie/fullSize.json";
import employeesIcon from "../public/lottie/employeesIcon.json";
import dealerIcon from "../public/lottie/dealerIcon.json";
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
import qualityAssurance from "../public/lottie/QualityAssurance.json";
import vision from "../public/lottie/Vision.json";
import policy from "../public/lottie/Policy.json";
import { useEffect, useRef, useState } from "react";
// import lottie from "lottie-web";

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

export function AwardIcon({ className }) {
  const awardLottie = useRef();
  const playAnimation = () => {
    const animationInstance = awardLottie.current;
    animationInstance.play();
  };
  const pauseAnimation = () => {
    const animationInstance = awardLottie.current;
    animationInstance.pause();
  };

  return (
    <div>
      <Lottie
        // lottieRef={awardLottie}
        animationData={awardIcon}
        options={{ autoplay: false }}
        className={className}
      />
    </div>
  );
}
export function MissionVisionIcon({ className }) {
  return <Lottie animationData={missionVisionIcon} className={className} />;
}
export function CompanyProfileIcon({ className }) {
  return <Lottie animationData={companyProfileIcon} className={className} />;
}

export function DistrictIcon({ className }) {
  return <Lottie animationData={districtIcon} className={className} />;
}
export function DealerIcon({ className }) {
  return <Lottie animationData={dealerIcon} className={className} />;
}
export function FullSizeJson({ className }) {
  return <Lottie animationData={FullSize} className={className} />;
}
export function EmployeeIcon({ className }) {
  return <Lottie animationData={employeesIcon} className={className} />;
}
export function QualityAssurance({ className }) {
  return <Lottie animationData={qualityAssurance} className={className} />;
}
export function Vision({ className }) {
  return <Lottie animationData={vision} className={className} />;
}
export function Policy({ className }) {
  return <Lottie animationData={policy} className={className} />;
}
