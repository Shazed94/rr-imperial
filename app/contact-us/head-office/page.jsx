import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import SubmitQueryForm from "@/components/SubmitQueryForm";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <div className="container flex justify-center items-center bg-[url('/svg/head_office.svg')] bg-cover py-28">
        <h2 className="text-f38 font-tahoma-bold text-white">Head Office</h2>
      </div>

      <div className="container max-w-2xl text-center py-14">
        <h3 className="text-[#E62020] text-f25 font-tahoma-bold">
          Contact Details
        </h3>
        <p className="text-[#58595B]">
          Welcome to RR Imperial Electrical Ltd. Please feel free to contact
          with us any time. We are always here for your help. For any kind of
          queries please submit the forms below. And for sales related
          information, Corporate Sales Hotline: +880 17 55552582, 017 55552589.
        </p>
      </div>

      <div className="container flex justify-between mb-14">
        <div className="flex gap-5">
          <img src={"/svg/map.svg"} alt="" className="w-10 " />
          <div>
            <h5 className="text-[#E62020] font-tahoma-bold">Location</h5>
            <p>
              House # 9, Road # 25/A, Block # A, <br />
              Banani Dhaka-1213, Bangladesh
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <img src={"/svg/phone.svg"} alt="" className="w-10 " />
          <div>
            <h5 className="text-[#E62020] font-tahoma-bold">Phone</h5>
            <p>
              +88 02 55034813
              <br />
              +88 02 55034814
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <img src={"/svg/mail.svg"} alt="" className="w-10 " />
          <div>
            <h5 className="text-[#E62020] font-tahoma-bold">Email</h5>
            <p>info@rr-imperial.com</p>
          </div>
        </div>
      </div>

      <div className="bg-[#F2F5F6] py-5">
        <div className="container max-w-xl">
          <SubmitQueryForm />
        </div>
      </div>

      <div className="container py-12 ">
        <img src="/svg/rr-imperial-map.svg" alt="" />
      </div>

      <Footer />
    </div>
  );
};

export default page;
