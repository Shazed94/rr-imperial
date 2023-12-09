"use client";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { BACKEND_BASE_URL } from "./GlobalVariables";
import { all_featured_categories } from "@/utility/api";
import { useEffect, useState } from "react";
// gsap.registerPlugin(ScrollTrigger);

const FeaturedCategory = ({ title, data }) => {
  const [allCategories, setAllCategories] = useState([]);
  useEffect(() => {
    all_featured_categories().then((res) => {
      setAllCategories(res.data.categories);
    });
  }, []);
  console.log(allCategories);
  return (
    <div>
      <section className="featured_categories px-4 lg:px-0 mb-20">
        {title && (
          <div className="text-center mb-5">
            <h2 className="text-333 text-f28 lg:text-f38 font-bold uppercase mb-1">
              FEATURED CATEGORIES
            </h2>
            <p className="text-333 text-f15 lg:text-f16 font-normal ">
              This category includes all the wires and cables necessary for
              residential, commercial and public infrastructures.
            </p>
          </div>
        )}

        <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 pt-5">
          <Link
            href={`/products/${allCategories[0]?.category_slug}`}
            data-aos="fade-right-150"
            data-aos-delay="600"
            className="group category_card rounded-[20px] overflow-hidden border-2 border-[#e61616] relative"
          >
            <Image
              src={`${BACKEND_BASE_URL}/${allCategories[0]?.category_image}`}
              alt=""
              className="w-full h-full object-cover"
              width={284}
              height={284}
            />
            <span className="absolute bottom-0 left-0 right-0 py-4 bg-[#e61616] text-white group-hover:text-[#e61616] transition text-center uppercase text-f20 font-bold z-10">
              HOUSE WIRE CABLES
              <span className="w-0 group-hover:w-full group-hover:bg-white duration-300 absolute inset-0 transition-all -z-10"></span>
            </span>
          </Link>
          <Link
            href={`/products/${allCategories[1]?.category_slug}`}
            data-aos="fade-right-150"
            data-aos-delay="400"
            className="group category_card rounded-[20px] overflow-hidden border-2 border-[#e61616] relative"
          >
            <Image
              src={`${BACKEND_BASE_URL}/${allCategories[1]?.category_image}`}
              alt=""
              className="w-full h-full object-cover"
              width={284}
              height={284}
            />
            <span className="absolute bottom-0 left-0 right-0 py-4 bg-[#e61616] text-white group-hover:text-[#e61616] transition text-center uppercase text-f20 font-bold z-10 ">
              LOW VOLTAGE CABLES
              <span className="w-0 group-hover:w-full group-hover:bg-white duration-300 absolute inset-0 transition-all -z-10"></span>
            </span>
          </Link>
          <Link
            href={`/products/${allCategories[2]?.category_slug}`}
            data-aos="fade-right-150"
            data-aos-delay="200"
            className="group category_card  rounded-[20px] overflow-hidden border-2 border-[#e61616] relative"
          >
            <Image
              src={`${BACKEND_BASE_URL}/${allCategories[2]?.category_image}`}
              alt=""
              className="w-full h-full object-cover"
              width={284}
              height={284}
            />
            <span className="absolute bottom-0 left-0 right-0 py-4 bg-[#e61616] text-white group-hover:text-[#e61616] transition text-center uppercase text-f20 font-bold z-10">
              MEDIUM VOLTAGE CABLES
              <span className="w-0 group-hover:w-full group-hover:bg-white duration-300 absolute inset-0 transition-all -z-10"></span>
            </span>
          </Link>
          <Link
            href={`/products/${allCategories[3]?.category_slug}`}
            data-aos="fade-right-150"
            className="group category_card rounded-[20px] overflow-hidden border-2 border-[#e61616] relative"
          >
            <Image
              src={`${BACKEND_BASE_URL}/${allCategories[3]?.category_image}`}
              alt=""
              className="w-full h-full object-cover"
              width={284}
              height={284}
            />
            <span className="absolute bottom-0 left-0 right-0 py-4 bg-[#e61616] text-white group-hover:text-[#e61616] transition text-center uppercase text-f20 font-bold z-10">
              HIGH VOLTAGE CABLES
              <span className="w-0 group-hover:w-full group-hover:bg-white duration-300 absolute inset-0 transition-all -z-10"></span>
            </span>
          </Link>
          <Link
            href={`/products/${allCategories[4]?.category_slug}`}
            data-aos="fade-left-150"
            className="group category_card rounded-[20px] overflow-hidden border-2 border-[#e61616] relative"
          >
            <Image
              src={`${BACKEND_BASE_URL}/${allCategories[4]?.category_image}`}
              alt=""
              className="w-full h-full object-cover"
              width={284}
              height={284}
            />
            <span className="absolute bottom-0 left-0 right-0 py-4 bg-[#e61616] text-white group-hover:text-[#e61616] transition text-center uppercase text-f20 font-bold z-10">
              FIRE SURVIVAL CABLES
              <span className="w-0 group-hover:w-full group-hover:bg-white duration-300 absolute inset-0 transition-all -z-10"></span>
            </span>
          </Link>
          <Link
            href={`/products/${allCategories[5]?.category_slug}`}
            data-aos="fade-left-150"
            data-aos-delay="200"
            className="group category_card rounded-[20px] overflow-hidden border-2 border-[#e61616] relative"
          >
            <Image
              src={`${BACKEND_BASE_URL}/${allCategories[5]?.category_image}`}
              alt=""
              className="w-full h-full object-cover"
              width={284}
              height={284}
            />
            <span className="absolute bottom-0 left-0 right-0 py-4 bg-[#e61616] text-white group-hover:text-[#e61616] transition text-center uppercase text-f20 font-bold z-10">
              COMMUNICATION CABLES
              <span className="w-0 group-hover:w-full group-hover:bg-white duration-300 absolute inset-0 transition-all -z-10"></span>
            </span>
          </Link>
          <Link
            href={`/products/${allCategories[6]?.category_slug}`}
            data-aos="fade-left-150"
            data-aos-delay="400"
            className="group category_card rounded-[20px] overflow-hidden border-2 border-[#e61616] relative"
          >
            <Image
              src={`${BACKEND_BASE_URL}/${allCategories[6]?.category_image}`}
              alt=""
              className="w-full h-full object-cover"
              width={284}
              height={284}
            />
            <span className="absolute bottom-0 left-0 right-0 py-4 bg-[#e61616] text-white group-hover:text-[#e61616] transition text-center uppercase text-f20 font-bold z-10">
              INSTRUMENTATION CABLES
              <span className="w-0 group-hover:w-full group-hover:bg-white duration-300 absolute inset-0 transition-all -z-10"></span>
            </span>
          </Link>
          <Link
            href={`/products/${allCategories[7]?.category_slug}`}
            data-aos="fade-left-150"
            data-aos-delay="600"
            className="group category_card rounded-[20px] overflow-hidden border-2 border-[#e61616] relative"
          >
            <Image
              src={`${BACKEND_BASE_URL}/${allCategories[7]?.category_image}`}
              alt=""
              className="w-full h-full object-cover"
              width={284}
              height={284}
            />
            <span className="absolute bottom-0 left-0 right-0 py-4 bg-[#e61616] text-white group-hover:text-[#e61616] transition text-center uppercase text-f20 font-bold z-10">
              OVERHEAD CONDUCTOR
              <span className="w-0 group-hover:w-full group-hover:bg-white duration-300 absolute inset-0 transition-all -z-10"></span>
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FeaturedCategory;
