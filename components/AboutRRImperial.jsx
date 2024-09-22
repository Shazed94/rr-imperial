"use client";
import {
  AnnualGrowthIcon,
  AwardCertificationHome,
  CompanyProfileIcon,
  LottieAboutLeft,
  MissionVisionIcon,
} from "./LottieComponents";
import { useEffect } from "react";
import Aos from "aos";
import Link from "next/link";

const AboutRRImperial = () => {

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <section className="about_us bg-[#ececec] px-4 lg:px-0 py-10 lg:py-20">
        <div className="container">
          <div className="grid grid-cols-12  gap-4 lg:gap-8">
            <div
              id="animationWindow"
              className="col-span-12 md:col-span-5 lg:col-span-5 lg:h-56"
            >
              <LottieAboutLeft className="h-[400px] lg:h-[620px]" />
            </div>
            <div className="col-span-12 md:col-span-7 lg:col-span-7 ">
              <div className="mb-8">
                <h2
                  data-aos="fade-right"
                  data-aos-offset="100"
                  data-aos-duration="800"
                  data-aos-easing="ease-in-out"
                  className="text-333 text-f28 lg:text-f38 font-bold mb-5 "
                >
                  ABOUT RR IMPERIAL
                </h2>
                <p
                  data-aos="fade-up"
                  data-aos-offset="100"
                  data-aos-duration="800"
                  data-aos-easing="ease-in-out"
                  className="text-333 text-f14 font-tahoma-normal"
                >
                  RR-Imperial Electricals Limited is an ISO-certified sister concern of Imperial Group. Manufacturer of Electric Cables, Super Enamelled Wires, Bare Copper Strips etc.
                </p>
              </div>
              <div
                data-aos="fade-left"
                data-aos-offset="100"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
                className="grid grod-cols-1 lg:grid-cols-2 gap-6"
              >
                <div className="h-[210px] bg-white rounded-lg flex flex-col justify-between gap-2 relative">
                  <CompanyProfileIcon className="absolute z-40" />

                  <Link
                    href="/who-we-are/our-profile"
                    className="text-333 text-f28 font-bold hover:text-[#e61616] absolute top-20 left-5 z-50 transition-colors"
                  >
                    {" "}
                    Company Profile
                  </Link>
                  <p className="text-f14 text-333 font-tahoma-normal absolute bottom-4 left-5">
                    Merging two industry leaders with 45+ years&apos;
                    experience, aims to lead Bangladesh’s electrical industry.
                  </p>
                </div>
                <div className="h-[210px] bg-white rounded-lg flex flex-col justify-between gap-2 relative">
                  <MissionVisionIcon className="absolute z-40" />
                  <Link
                    href="/who-we-are/mission"
                    className="text-333 text-f28 font-bold hover:text-[#e61616] absolute top-20 left-5 z-50 transition-colors"
                  >
                    {" "}
                    Mission & Vision
                  </Link>
                  <p className="text-f14 text-333 font-tahoma-normal absolute bottom-[35px] left-5">
                    RR-Imperial prioritizes quality cables, innovation, and
                    global leadership for Bangladesh&apos;s growth.
                  </p>
                </div>
                <div className="h-[190px] bg-white rounded-lg flex flex-col justify-between gap-2 relative">
                  <AwardCertificationHome className="absolute z-40" />
                  <Link
                    href="/who-we-are/awards-certifications"
                    className="text-333 text-f28 font-bold hover:text-[#e61616] absolute top-20 left-5 z-50 transition-colors"
                  >
                    Awards & Certifications
                  </Link>
                  <p className="text-f14 text-333 font-tahoma-normal absolute bottom-4 left-5">
                    RR Imperials is one of the most awarded electricals company
                    with multiple international certifications.
                  </p>

                </div>
                <div className="h-[190px] bg-white rounded-lg flex flex-col justify-between gap-2 relative">
                  <AnnualGrowthIcon className="absolute z-40" />
                  <Link
                    href="/who-we-are/research-innovation"
                    className="text-333 text-f28 font-bold hover:text-[#e61616] absolute top-20 left-5 z-50  transition-colors"
                  >
                    Annual Growth
                  </Link>
                  <p className="text-f14 text-333 font-tahoma-normal absolute bottom-4 left-5">
                    Our company has experienced consistent and remarkable growth
                    since its inception.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutRRImperial;
