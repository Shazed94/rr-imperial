"use client";
import Lottie, { useLottie } from "lottie-react";
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
import annualGrowth from "../public/lottie/annualGrowthIcon.json";
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
  const interactivity = {
    mode: "cursor",
    actions: [
      {
        position: { x: [0, 1], y: [0, 1] },
        visibility: [0, 1],
        type: "loop",
        frames: [0, 55],
      },
      {
        position: { x: -1, y: -1 },
        type: "stop",
        frames: [0],
      },
    ],
  };

  return (
    <div>
      <Lottie
        animationData={awardIcon}
        loop={false}
        autoPlay={false}
        className={className}
        interactivity={interactivity}
      />
    </div>
  );
}

export function MissionVisionIcon({ className }) {
  const interactivity = {
    mode: "cursor",
    actions: [
      {
        position: { x: [0, 1], y: [0, 1] },
        visibility: [0, 1],
        type: "loop",
        frames: [0, 60],
      },
      {
        position: { x: -1, y: -1 },
        type: "stop",
        frames: [0],
      },
    ],
  };
  return (
    <Lottie
      animationData={missionVisionIcon}
      interactivity={interactivity}
      className={className}
    />
  );
}
export function CompanyProfileIcon({ className }) {
  const interactivity = {
    mode: "cursor",
    actions: [
      {
        position: { x: [0, 1], y: [0, 1] },
        visibility: [0, 1],
        type: "loop",
        frames: [0, 60],
      },
      {
        position: { x: -1, y: -1 },
        type: "stop",
        frames: [0],
      },
    ],
  };
  return (
    <Lottie
      animationData={companyProfileIcon}
      interactivity={interactivity}
      className={className}
    />
  );
}
export function AnnualGrowthIcon({ className }) {
  const interactivity = {
    mode: "cursor",
    actions: [
      {
        position: { x: [0, 1], y: [0, 1] },
        visibility: [0, 1],
        type: "loop",
        frames: [0, 60],
      },
      {
        position: { x: -1, y: -1 },
        type: "stop",
        frames: [0],
      },
    ],
  };
  return (
    <Lottie
      animationData={annualGrowth}
      interactivity={interactivity}
      className={className}
    />
  );
}

export function DistrictIcon({ className }) {
  const interactivity = {
    mode: "cursor",
    actions: [
      {
        position: { x: [0, 1], y: [0, 1] },
        visibility: [0, 1],
        type: "loop",
        frames: [0, 100],
      },
      {
        position: { x: -1, y: -1 },
        type: "stop",
        frames: [0],
      },
    ],
  };
  return <Lottie animationData={districtIcon}  interactivity={interactivity} className={className} />;
}
export function DealerIcon({ className }) {
  const interactivity = {
    mode: "cursor",
    actions: [
      {
        position: { x: [0, 1], y: [0, 1] },
        visibility: [0, 1],
        type: "loop",
        frames: [0, 60],
      },
      {
        position: { x: -1, y: -1 },
        type: "stop",
        frames: [0],
      },
    ],
  };
  return (
    <Lottie
      animationData={dealerIcon}
      interactivity={interactivity}
      className={className}
    />
  );
}
export function FullSizeJson({ className }) {
  const interactivity = {
    mode: "cursor",
    actions: [
      {
        position: { x: [0, 1], y: [0, 1] },
        visibility: [0, 1],
        type: "loop",
        frames: [0, 60],
      },
      {
        position: { x: -1, y: -1 },
        type: "stop",
        frames: [0],
      },
    ],
  };
  return (
    <Lottie
      animationData={FullSize}
      interactivity={interactivity}
      className={className}
    />
  );
}
export function EmployeeIcon({ className }) {
  const interactivity = {
    mode: "cursor",
    actions: [
      {
        position: { x: [0, 1], y: [0, 1] },
        visibility: [0, 1],
        type: "loop",
        frames: [0, 60],
      },
      {
        position: { x: -1, y: -1 },
        type: "stop",
        frames: [0],
      },
    ],
  };
  return (
    <Lottie
      animationData={employeesIcon}
      interactivity={interactivity}
      className={className}
    />
  );
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
