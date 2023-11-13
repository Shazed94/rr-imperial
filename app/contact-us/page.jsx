import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import SubmitQueryForm from "@/components/SubmitQueryForm";

import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <div className="container flex justify-center items-center bg-[url('/img/contact/contact-us-cover.png')] bg-cover py-28">
        <h2 className="text-f38 font-tahoma-bold text-white">
          Regional Offices
        </h2>
      </div>
      <div className="container flex flex-wrap justify-between py-12">
        <Link href="/details" className="">
          <button className="w-36 px-4 py-4 rounded-xl text-white bg-[#D1D3D4] hover:bg-[#E62020] transition-colors ">
            Barishal
          </button>
        </Link>
        <Link href="/details">
          <button className="w-36 px-4 py-4 rounded-xl text-white bg-[#D1D3D4] hover:bg-[#E62020] transition-colors ">
            Chattogram
          </button>
        </Link>
        <Link href="/details">
          <button className="w-36 px-4 py-4 rounded-xl text-white bg-[#D1D3D4] hover:bg-[#E62020] transition-colors ">
            Dhaka
          </button>
        </Link>
        <Link href="/details">
          <button className="w-36 px-4 py-4 rounded-xl text-white bg-[#D1D3D4] hover:bg-[#E62020] transition-colors ">
            Khulna
          </button>
        </Link>
        <Link href="/details">
          <button className="w-36 px-4 py-4 rounded-xl text-white bg-[#D1D3D4] hover:bg-[#E62020] transition-colors ">
            Rajshahi
          </button>
        </Link>
        <Link href="/details">
          <button className="w-36 px-4 py-4 rounded-xl text-white bg-[#D1D3D4] hover:bg-[#E62020] transition-colors ">
            Rangpur
          </button>
        </Link>
        <Link href="/details">
          <button className="w-36 px-4 py-4 rounded-xl text-white bg-[#D1D3D4] hover:bg-[#E62020] transition-colors ">
            Mymensingh
          </button>
        </Link>
        <Link href="/details">
          <button className="w-36 px-4 py-4 rounded-xl text-white bg-[#D1D3D4] hover:bg-[#E62020] transition-colors ">
            Sylhet
          </button>
        </Link>
      </div>

      <div className="container">
        <div className="bg-[#F2F5F6] py-10 px-12 mb-12">
          <div className="max-w-[80rem] mx-auto">
            <h3 className="shop border-t border-b border-[#E62020] text-[#E62020] text-f25 font-tahoma-bold py-2 text-center uppercase">
              NAWABPUR DISPLAY CENTER
            </h3>
            <div className="flex justify-between gap-3">
              <div className="flex items-center justify-center gap-5 pt-5 ">
                <img src={"/svg/map.svg"} alt="" className="w-10" />
                <p className="text-black font-tahoma-regular ">
                  Lalmia Electric Market (1st floor), <br /> 144/1, Nawabpur
                  Road, Nawabpur, <br /> Dhaka-1100, Bangladesh
                </p>
              </div>
              <div className="flex items-center justify-center gap-5 pt-5 ">
                <img src={"/svg/phone.svg"} alt="" className="w-10" />
                <div>
                  <p>+880 17-55552593</p>
                  <p>+880 17-55552583</p>
                  <p>+02-9586528</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-5 pt-5 ">
                <img src={"/svg/mail.svg"} alt="" className="w-10" />
                <p>sales.nawabpur@rr-imperial.com</p>
              </div>
              <div className="pt-5 flex items-center">
                <Link
                  href="contact-us/details"
                  className="block relative bg-[#E62020] w-40 py-7 px-14 ms-auto "
                >
                  <button className="absolute inset-0 text-f20 bg-[#939598] rounded-br-[40px] border-[#E62020] text-white">
                    Map Link
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#F2F5F6] py-10 px-12 mb-12">
          <div className="max-w-[80rem] mx-auto">
            <h3 className="shop border-t border-b border-[#E62020] text-[#E62020] text-f25 font-tahoma-bold py-2 text-center uppercase">
              NAWABPUR DISPLAY CENTER
            </h3>
            <div className="flex justify-between gap-3">
              <div className="flex items-center justify-center gap-5 pt-5 ">
                <img src={"/svg/map.svg"} alt="" className="w-10" />
                <p className="text-black font-tahoma-regular ">
                  Lalmia Electric Market (1st floor), <br /> 144/1, Nawabpur
                  Road, Nawabpur, <br /> Dhaka-1100, Bangladesh
                </p>
              </div>
              <div className="flex items-center justify-center gap-5 pt-5 ">
                <img src={"/svg/phone.svg"} alt="" className="w-10" />
                <div>
                  <p>+880 17-55552593</p>
                  <p>+880 17-55552583</p>
                  <p>+02-9586528</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-5 pt-5 ">
                <img src={"/svg/mail.svg"} alt="" className="w-10" />
                <p>sales.nawabpur@rr-imperial.com</p>
              </div>
              <div className="pt-5 flex items-center">
                <Link
                  href="/map"
                  className="block relative bg-[#E62020] w-40 py-7 px-14 ms-auto "
                >
                  <button className="absolute inset-0 text-f20 bg-[#939598] rounded-br-[40px] border-[#E62020] text-white">
                    Map Link
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F2F5F6] py-10 px-12 mb-12">
          <div className="max-w-[80rem] mx-auto">
            <h3 className="shop border-t border-b border-[#E62020] text-[#E62020] text-f25 font-tahoma-bold py-2 text-center uppercase">
              NAWABPUR DISPLAY CENTER
            </h3>
            <div className="flex justify-between gap-3">
              <div className="flex items-center justify-center gap-5 pt-5 ">
                <img src={"/svg/map.svg"} alt="" className="w-10" />
                <p className="text-black font-tahoma-regular ">
                  Lalmia Electric Market (1st floor), <br /> 144/1, Nawabpur
                  Road, Nawabpur, <br /> Dhaka-1100, Bangladesh
                </p>
              </div>
              <div className="flex items-center justify-center gap-5 pt-5 ">
                <img src={"/svg/phone.svg"} alt="" className="w-10" />
                <div>
                  <p>+880 17-55552593</p>
                  <p>+880 17-55552583</p>
                  <p>+02-9586528</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-5 pt-5 ">
                <img src={"/svg/mail.svg"} alt="" className="w-10" />
                <p>sales.nawabpur@rr-imperial.com</p>
              </div>
              <div className="pt-5 flex items-center">
                <Link
                  href="/map"
                  className="block relative bg-[#E62020] w-40 py-7 px-14 ms-auto "
                >
                  <button className="absolute inset-0 text-f20 bg-[#939598] rounded-br-[40px] border-[#E62020] text-white">
                    Map Link
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F2F5F6] py-10 px-12 mb-12">
          <div className="max-w-[80rem] mx-auto">
            <h3 className="shop border-t border-b border-[#E62020] text-[#E62020] text-f25 font-tahoma-bold py-2 text-center uppercase">
              NAWABPUR DISPLAY CENTER
            </h3>
            <div className="flex justify-between gap-3">
              <div className="flex items-center justify-center gap-5 pt-5 ">
                <img src={"/svg/map.svg"} alt="" className="w-10" />
                <p className="text-black font-tahoma-regular ">
                  Lalmia Electric Market (1st floor), <br /> 144/1, Nawabpur
                  Road, Nawabpur, <br /> Dhaka-1100, Bangladesh
                </p>
              </div>
              <div className="flex items-center justify-center gap-5 pt-5 ">
                <img src={"/svg/phone.svg"} alt="" className="w-10" />
                <div>
                  <p>+880 17-55552593</p>
                  <p>+880 17-55552583</p>
                  <p>+02-9586528</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-5 pt-5 ">
                <img src={"/svg/mail.svg"} alt="" className="w-10" />
                <p>sales.nawabpur@rr-imperial.com</p>
              </div>
              <div className="pt-5 flex items-center">
                <Link
                  href="/map"
                  className="block relative bg-[#E62020] w-40 py-7 px-14 ms-auto "
                >
                  <button className="absolute inset-0 text-f20 bg-[#939598] rounded-br-[40px] border-[#E62020] text-white">
                    Map Link
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F2F5F6] py-10 px-12 mb-12">
          <div className="max-w-[80rem] mx-auto">
            <h3 className="shop border-t border-b border-[#E62020] text-[#E62020] text-f25 font-tahoma-bold py-2 text-center uppercase">
              NAWABPUR DISPLAY CENTER
            </h3>
            <div className="flex justify-between gap-3">
              <div className="flex items-center justify-center gap-5 pt-5 ">
                <img src={"/svg/map.svg"} alt="" className="w-10" />
                <p className="text-black font-tahoma-regular ">
                  Lalmia Electric Market (1st floor), <br /> 144/1, Nawabpur
                  Road, Nawabpur, <br /> Dhaka-1100, Bangladesh
                </p>
              </div>
              <div className="flex items-center justify-center gap-5 pt-5 ">
                <img src={"/svg/phone.svg"} alt="" className="w-10" />
                <div>
                  <p>+880 17-55552593</p>
                  <p>+880 17-55552583</p>
                  <p>+02-9586528</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-5 pt-5 ">
                <img src={"/svg/mail.svg"} alt="" className="w-10" />
                <p>sales.nawabpur@rr-imperial.com</p>
              </div>
              <div className="pt-5 flex items-center">
                <Link
                  href="/map"
                  className="block relative bg-[#E62020] w-40 py-7 px-14 ms-auto "
                >
                  <button className="absolute inset-0 text-f20 bg-[#939598] rounded-br-[40px] border-[#E62020] text-white">
                    Map Link
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F2F5F6] py-5">
        <div className="container max-w-xl">
          <SubmitQueryForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
