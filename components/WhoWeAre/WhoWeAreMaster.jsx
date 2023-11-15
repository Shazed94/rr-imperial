import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const WhoWeAreMaster = (props) => {
  return (
    <>
      <section className="container">
        <img src="/svg/product_category.svg" alt="" className="" />
        <h2 className="text-f38 text-[#ED1D24] font-tahoma-bold text-center py-8">
          Who We Are
        </h2>
      </section>
      <main className="bg-[#E6E7E8]">
        <section className="container">
          <div className="flex flex-col ">
            <div className="w-full">
              <div className="flex justify-between text-white pt-5">
                <Link
                  className="flex flex-col items-center gap-4 hover:bg-white transition px-8 py-4 rounded-tl-lg rounded-tr-lg text-[#ED1D24] text-f16 font-tahoma-regular"
                  href="our-profile"
                >
                  <img src="/svg/our-profile.svg" alt="" className="w-10 " />
                  <span>Our Profile</span>
                </Link>
                <Link
                  className="flex flex-col items-center gap-4 hover:bg-white transition rounded-tl-lg rounded-tr-lg p-4 text-[#ED1D24] text-f16 font-tahoma-regular"
                  href="awards-certifications"
                >
                  <img src="/svg/certificate.svg" alt="" className="w-10" />{" "}
                  Awards & Certifications
                </Link>
                <Link
                  className="flex flex-col items-center gap-4 hover:bg-white transition rounded-tl-lg rounded-tr-lg p-4 text-[#ED1D24] text-f16 font-tahoma-regular py-3"
                  href="research-innovation"
                >
                  <img src="/svg/certificate.svg" alt="" className="w-10" />{" "}
                  Research & Innovation
                </Link>
                <Link
                  className="flex flex-col items-center gap-4 hover:bg-white transition rounded-tl-lg rounded-tr-lg p-4 text-[#ED1D24] text-f16 font-tahoma-regular py-3"
                  href="quality-assurance"
                >
                  <img src="/svg/certificate.svg" alt="" className="w-10" />{" "}
                  Quality Assurance
                </Link>
                <Link
                  className="flex flex-col items-center gap-4 hover:bg-white transition rounded-tl-lg rounded-tr-lg p-4 text-[#ED1D24] text-f16 font-tahoma-regular py-3"
                  href="research-development"
                >
                  <img src="/svg/certificate.svg" alt="" className="w-10" />{" "}
                  Research & Development
                </Link>
                <Link
                  className="flex flex-col items-center gap-4 hover:bg-white transition rounded-tl-lg rounded-tr-lg p-4 text-[#ED1D24] text-f16 font-tahoma-regular py-3"
                  href="mission"
                >
                  <img src="/svg/certificate.svg" alt="" className="w-10" />{" "}
                  Mission
                </Link>
                <Link
                  className="flex flex-col items-center gap-4 hover:bg-white transition rounded-tl-lg rounded-tr-lg p-4 text-[#ED1D24] text-f16 font-tahoma-regular py-3"
                  href="vision"
                >
                  <img src="/svg/certificate.svg" alt="" className="w-10" />{" "}
                  Vision
                </Link>
                <Link
                  className="flex flex-col items-center gap-4 hover:bg-white transition rounded-tl-lg rounded-tr-lg p-4 text-[#ED1D24] text-f16 font-tahoma-regular py-3"
                  href="policy"
                >
                  <img src="/svg/certificate.svg" alt="" className="w-10" />{" "}
                  Policy
                </Link>
              </div>
            </div>
            <div className="">{props.children}</div>
          </div>
        </section>
      </main>
    </>
  );
};

export default WhoWeAreMaster;
