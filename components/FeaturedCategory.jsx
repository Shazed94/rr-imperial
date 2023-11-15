"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const FeaturedCategory = ({ title }) => {
  const cat1 = useRef();
  const cat2 = useRef();
  const cat3 = useRef();
  const cat4 = useRef();
  const cat5 = useRef();
  const cat6 = useRef();
  const cat7 = useRef();
  const cat8 = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: [cat1.current, cat2.current, cat3.current, cat4.current],
        start: "top 70%",
        end: "top 70%",
        // markers: true,
        scrub: 1,
        once: true,
      },
    });
    tl.fromTo(
      cat1.current,
      { left: -window.innerWidth - 100, opacity: 0 },
      { left: 0, duration: 0.4, opacity: 1, ease: "expo.out" }
    );
    tl.fromTo(
      cat2.current,
      { left: -window.innerWidth - 100, opacity: 0 },
      { left: 0, duration: 0.4, opacity: 1, ease: "expo.out" }
    );
    tl.fromTo(
      cat3.current,
      { left: -window.innerWidth - 100, opacity: 0 },
      { left: 0, duration: 0.4, opacity: 1, ease: "expo.out" }
    );
    tl.fromTo(
      cat4.current,
      { left: -window.innerWidth - 100, opacity: 0 },
      { left: 0, duration: 0.4, opacity: 1, ease: "expo.out" }
    );
    // gsap.fromTo(
    //   ".category_card",
    //   { left: -window.innerWidth - 100, opacity: 0 },
    //   {
    //     left: 0,
    //     duration: 0.4,
    //     opacity: 1,
    //     stagger: 0.2,
    //     ease: "sine.out",
    //   }
    // );

    // ==============================================
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: [cat5.current, cat6.current, cat7.current, cat8.current],
        start: "top 70%",
        end: "top 70%",
        // markers: true,
        scrub: 1,
        once: true,
      },
    });
    tl2.fromTo(
      cat5.current,
      { left: window.innerWidth + 100, opacity: 0 },
      { left: 0, duration: 0.4, opacity: 1, ease: "expo.out" }
    );
    tl2.fromTo(
      cat6.current,
      { left: +window.innerWidth + 100, opacity: 0 },
      { left: 0, duration: 0.4, opacity: 1, ease: "expo.out" }
    );
    tl2.fromTo(
      cat7.current,
      { left: +window.innerWidth + 100, opacity: 0 },
      { left: 0, duration: 0.4, opacity: 1, ease: "expo.out" }
    );
    tl2.fromTo(
      cat8.current,
      { left: +window.innerWidth + 100, opacity: 0 },
      { left: 0, duration: 0.4, opacity: 1, ease: "expo.out" }
    );
  }, []);

  return (
    <div>
      <section className="featured_categories mb-20">
        {title && (
          <div className="text-center mb-5">
            <h2 className="text-333 text-f38 font-tahoma-bold uppercase mb-1">
              FEATURED CATEGORIES
            </h2>
            <p className="text-333 text-f16 font-tahoma-regular">
              This category includes all the wires and cables necessary for
              residential, commercial and public infrastructures.
            </p>
          </div>
        )}

        <div className="container grid grid-cols-4 gap-14 pt-5">
          <Link
            href="/products/house-wire-cables"
            ref={cat1}
            className="category_card hover:scale-110 transition-all rounded-[20px] overflow-hidden border-2 border-[#e61616] relative"
          >
            <img
              src={"img/homepage/1.webp"}
              alt=""
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-0 left-0 right-0 py-4 bg-[#e61616] text-white text-center uppercase text-f20 font-bold">
              HOUSE WIRE CABLES
            </span>
          </Link>
          <Link
            href="/products/low-voltage-cables"
            ref={cat2}
            className="category_card hover:scale-110 transition-all rounded-[20px] overflow-hidden border-2 border-[#e61616] relative"
          >
            <img
              src={"img/homepage/2.webp"}
              alt=""
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-0 left-0 right-0 py-4 bg-[#e61616] text-white text-center uppercase text-f20 font-bold">
              LOW VOLTAGE CABLES
            </span>
          </Link>
          <Link
            href="/products/medium-voltage-cables"
            ref={cat3}
            className="category_card hover:scale-110 transition-all rounded-[20px] overflow-hidden border-2 border-[#e61616] relative"
          >
            <img
              src={"img/homepage/3.webp"}
              alt=""
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-0 left-0 right-0 py-4 bg-[#e61616] text-white text-center uppercase text-f20 font-bold">
              MEDIUM VOLTAGE CABLES
            </span>
          </Link>
          <Link
            href="/products/high-voltage-cables"
            ref={cat4}
            className="category_card hover:scale-110 transition-all rounded-[20px] overflow-hidden border-2 border-[#e61616] relative"
          >
            <img
              src={"img/homepage/4.webp"}
              alt=""
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-0 left-0 right-0 py-4 bg-[#e61616] text-white text-center uppercase text-f20 font-bold">
              HIGH VOLTAGE CABLES
            </span>
          </Link>
          <Link
            href="/products/fire-survival-cables"
            ref={cat5}
            className="category_card hover:scale-110 transition-all rounded-[20px] overflow-hidden border-2 border-[#e61616] relative"
          >
            <img
              src={"img/homepage/5.webp"}
              alt=""
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-0 left-0 right-0 py-4 bg-[#e61616] text-white text-center uppercase text-f20 font-bold">
              FIRE SURVIVAL CABLES
            </span>
          </Link>
          <Link
            href="/products/communication-cables"
            ref={cat6}
            className="category_card hover:scale-110 transition-all rounded-[20px] overflow-hidden border-2 border-[#e61616] relative"
          >
            <img
              src={"/img/homepage/6.webp"}
              alt=""
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-0 left-0 right-0 py-4 bg-[#e61616] text-white text-center uppercase text-f20 font-bold">
              COMMUNICATION CABLES
            </span>
          </Link>
          <Link
            href="/products/instrumation-cables"
            ref={cat7}
            className="category_card hover:scale-110 transition-all rounded-[20px] overflow-hidden border-2 border-[#e61616] relative"
          >
            <img
              src={"/img/homepage/7.webp"}
              alt=""
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-0 left-0 right-0 py-4 bg-[#e61616] text-white text-center uppercase text-f20 font-bold">
              INSTRUMENTATION CABLES
            </span>
          </Link>
          <Link
            href="/products/overhead-cables"
            ref={cat8}
            className="category_card hover:scale-110 transition-all rounded-[20px] overflow-hidden border-2 border-[#e61616] relative"
          >
            <img
              src={"img/homepage/8.webp"}
              alt=""
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-0 left-0 right-0 py-4 bg-[#e61616] text-white text-center uppercase text-f20 font-bold">
              OVERHEAD CONDUCTOR
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FeaturedCategory;
