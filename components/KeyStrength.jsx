"use client";
import { useEffect, useRef } from "react";
import {
  DistrictIcon,
  EmployeeIcon,
  FullSizeJson,
  DealerIcon,
  LearnMoreAboutUs,
} from "./LottieComponents";
import AOS from "aos";
import Link from "next/link";

const KeyStrength = () => {
  const h4 = useRef();
  const title = useRef();
  const p = useRef();
  const grid = useRef();
  const Button = useRef();

  useEffect(() => {
    AOS.init();
    // gsap.fromTo(
    //   [title.current, h4.current],
    //   { opacity: 0, x: "-200" },
    //   {
    //     opacity: 1,
    //     x: "0",
    //     duration: 0.8,
    //     scrollTrigger: {
    //       trigger: [title.current, h4.current],
    //       start: "top 80%",
    //       end: "top 80%",
    //     //   markers: true,
    //     },
    //   }
    // );
    // gsap.fromTo(
    //   p.current,
    //   { opacity: 0, y: "100" },
    //   {
    //     opacity: 1,
    //     y: "0",
    //     duration: 0.8,
    //     scrollTrigger: {
    //       trigger: p.current,
    //       start: "top 90%",
    //       end: "top 90%",
    //     //   markers: true,
    //     },
    //   }
    // );
    // gsap.fromTo(
    //   grid.current,
    //   { opacity: 0, y: "100" },
    //   {
    //     opacity: 1,
    //     y: "0",
    //     duration: 0.8,
    //     scrollTrigger: {
    //       trigger: grid.current,
    //       start: "top 80%",
    //       end: "top 80%",
    //     //   markers: true,
    //     },
    //   }
    // );
    // gsap.fromTo(
    //   Button.current,
    //   { opacity: 0, y: "100" },
    //   {
    //     opacity: 1,
    //     y: "0",
    //     duration: 0.8,
    //     scrollTrigger: {
    //       trigger: Button.current,
    //       start: "top 90%",
    //       end: "top 90%",
    //     //   markers: true,
    //     },
    //   }
    // );
  }, []);

  return (
    <div>
      <section className="key_strength container grid grid-cols-12 gap-4 lg:gap-14 px-4 lg:px-0 py-10 lg:py-20">
        <div className="col-span-12 lg:col-span-6 me-5">
          <div className="flex flex-col justify-center items-start py-6">
            <h4
              data-aos="fade-right"
              data-aos-offset="60"
              data-aos-easing="ease-in-out"
              data-aos-duration="800"
              // data-aos-once="true"
              id="trigger"
              className=" text-333 text-f16 font-bold uppercase mb-5"
            >
              KEY STRENGTHS
            </h4>
            <h2
              data-aos-anchor="#trigger"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-easing="ease-in-out"
              // data-aos-once="true"
              className="text-f28 lg:text-f48 text-[#131316] font-bold mb-6"
            >
              Your Partner in <br />
              <span className="text-[#e61616] border-b-2 border-b-[#e61616] mb-7">
                Electrical Reliability
              </span>
            </h2>
            <p
              data-aos="fade-up"
              data-aos-offset="10"
              data-aos-easing="ease-in-out"
              data-aos-duration="800"
              className="text-333 text-f16 font-normal mb-6"
            >
              We are committed to providing you with the highest quality
              products and services, so you can be confident that your
              electrical needs are met.
            </p>
            <div className="flex flex-col lg:flex-row lg:items-center gap-5">
              <Link
                href="who-we-are/our-profile"
                data-aos="fade-up"
                data-aos-offset="30"
                data-aos-easing="ease-in-out"
                data-aos-duration="800"
                className="block lg:w-1/2 bg-[#f00e0e] text-white text-center font-bold px-8 py-3 rounded-full"
              >
                Learn More About Us
              </Link>
              <div className="lg:w-1/2">
                <LearnMoreAboutUs />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 lg:px-6">
          <div
            data-aos="fade-up"
            data-aos-offset="60"
            data-aos-easing="ease-in-out"
            data-aos-duration="800"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6"
          >
            <div className="p-6  rounded-[24px] flex flex-col justify-between border gap-3">
              <DistrictIcon className={"w-16 h-16"} />
              <h4 className="text-333 text-f18 font-bold">49 Districts</h4>
              <p className="text-333 text-f14 font-normal uppercase">
                COVERED WITH ANEVER GROWING NETWORK
              </p>
            </div>
            <div className="p-6 rounded-[24px] flex flex-col justify-between border gap-3">
              <FullSizeJson className={"w-16 h-16"} />
              <h4 className="text-333 text-f18 font-bold">27 Full Size</h4>
              <p className="text-333 text-f14 font-normal uppercase">
                OPERATION HUB
              </p>
            </div>
            <div className="p-6 rounded-[24px] flex flex-col justify-between border gap-3">
              <EmployeeIcon className={"w-16 h-16"} />
              <h4 className="text-333 text-f18 font-bold">1000+</h4>
              <p className="text-333 text-f14 font-normal uppercase">
                EMPLOYEES
              </p>
            </div>
            <div className="p-6 rounded-[24px] flex flex-col justify-end border gap-3">
              {/* <TwintySevenFullSize /> */}
              <DealerIcon className={"w-16 h-16"} />
              <h4 className="text-333 text-f18 font-bold">4500+</h4>
              <p className="text-333 text-f14 font-normal uppercase">
                PROUD DEALERS
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KeyStrength;
