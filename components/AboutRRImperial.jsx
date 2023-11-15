"use client";
import gsap from "gsap";
import { scrollTrigger } from "gsap/ScrollTrigger";
import { LottieAboutLeft } from "./LottieComponents";
import { useEffect, useRef } from "react";
import Aos from "aos";
gsap.registerPlugin(scrollTrigger);

const AboutRRImperial = () => {
  const h2 = useRef();
  const p = useRef();
  const grid = useRef();

  useEffect(() => {
    Aos.init();
    // gsap.fromTo(
    //   h2.current,
    //   { opacity: 0, x: "-100" },
    //   {
    //     opacity: 1,
    //     x: "0",
    //     duration: 1,
    //     scrollTrigger: {
    //       trigger: h2.current,
    //       start: "top 90%",
    //       end: "top 90%",
    //       //   markers: true,
    //     },
    //   }
    // );
    // gsap.fromTo(
    //   p.current,
    //   { opacity: 0, y: "100" },
    //   {
    //     opacity: 1,
    //     y: "0",
    //     duration: 1,
    //     scrollTrigger: {
    //       trigger: p.current,
    //       start: "top 90%",
    //       end: "top 90%",
    //       //   markers: true,
    //     },
    //   }
    // );
    // gsap.fromTo(
    //   grid.current,
    //   { opacity: 0, x: "100" },
    //   {
    //     opacity: 1,
    //     x: "0",
    //     duration: 1,
    //     scrollTrigger: {
    //       trigger: grid.current,
    //       start: "top 90%",
    //       end: "top 90%",
    //       //   markers: true,
    //     },
    //   }
    // );
  }, []);

  return (
    <div>
      <section className="about_us bg-[#ececec] py-20">
        <div className="container">
          <div className="grid grid-cols-12 gap-8">
            <div id="animationWindow" className="col-span-5 h-56">
              <LottieAboutLeft />
            </div>
            <div className="col-span-7 ">
              <div className="mb-8">
                <h2
                  data-aos="fade-right"
                  data-aos-offset="100"
                  data-aos-duration="800"
                  data-aos-easing="ease-in-out"
                  className="text-333 text-f38 font-tahoma-bold mb-5"
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
                  One of the leading electrical wires and cables manufacturers
                  in the world, RR Kabel is a joint venture company. RR Kabel is
                  a pioneer in wire design, technology, and applicability. The
                  focus on cutting-edge technology and research has continually
                  enhanced the products&apos; efficiency, reliability, and
                  safety aspects.
                </p>
              </div>
              <div
                data-aos="fade-left"
                data-aos-offset="100"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
                className="grid grid-cols-2 gap-6"
              >
                <div className="p-4 bg-white rounded-lg flex flex-col justify-between gap-2">
                  <img src={"/svg/1.png"} alt="" className="w-14" />
                  <h3 className="text-333 text-f28 font-tahoma-bold hover:text-[#e61616] transition-colors">
                    {" "}
                    Company Profile
                  </h3>
                  <p className="text-f14 text-333 font-tahoma-normal">
                    RR Imperials is one of the most awarded electricals company
                    with multiple international certifications
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg flex flex-col justify-between gap-2">
                  <img src={"/svg/2.png"} alt="" className="w-16" />
                  <h3 className="text-333 text-f28 font-tahoma-bold hover:text-[#e61616] transition-colors">
                    {" "}
                    Mission & Vision
                  </h3>
                  <p className="text-f14 text-333 font-tahoma-normal">
                    RR Imperials is one of the most awarded electricals company
                    with multiple international certifications
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg flex flex-col justify-between gap-2">
                  <img
                    src={"/img/homepage/5.png"}
                    alt=""
                    className="w-16 h-14"
                  />
                  <h3 className="text-333 text-f28 font-tahoma-bold hover:text-[#e61616] transition-colors">
                    {" "}
                    Company Profile
                  </h3>
                  <p className="text-f14 text-333 font-tahoma-normal">
                    RR Imperials is one of the most awarded electricals company
                    with multiple international certifications
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg flex flex-col justify-between gap-2">
                  <img src={"/svg/3.svg"} alt="" className="w-14" />
                  <h3 className="text-333 text-f28 font-tahoma-bold hover:text-[#e61616] transition-colors">
                    {" "}
                    Company Profile
                  </h3>
                  <p className="text-f14 text-333 font-tahoma-normal">
                    RR Imperials is one of the most awarded electricals company
                    with multiple international certifications
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
