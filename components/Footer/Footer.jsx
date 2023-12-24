"use client";

import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { BiMap, BiTime } from "react-icons/bi"
import { FiPhoneCall } from "react-icons/fi"
import { useState } from "react";
import Link from "next/link";

const Footer = (props) => {
  const [email, setEmail] = useState("");
  const onChange = ({ target }) => setEmail(target.value);
  return (<>
    <div className='footer_section'>
      {/* top_footer */}
      <div className="bg-[#1A1A1A] border-b-2 border-b-gray-600 py-6 lg:py-0">
        <div className="container flex flex-col lg:flex-row lg:justify-between lg:items-center">
          <div className="flex lg:justify-center items-center gap-5 px-7 py-6 lg:py-14 lg:border-r-2 lg:border-r-gray-600">
            <div className="flex justify-center items-center bg-[#E71D1D] rounded-[5px] w-20 h-20">
              <BiMap size={40} className="text-white" />
            </div>
            <div className="text-white">
              <p className="text-[20px] font-bold uppercase">Location</p>
              <p>Senpara, Kanchpur, Narayanganj</p>
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>
          <div className="flex justify-end lg:justify-center items-center gap-5 px-7 lg:ps-20 lg:pr-[105px] py-6 lg:py-14 lg:border-r-2 lg:border-r-gray-600">
            <div className="flex justify-center items-center bg-[#E71D1D] rounded-[5px] w-20 h-20 order-2 lg:order-1">
              <BiTime size={40} className="text-white" />
            </div>
            <div className="text-white order-1 lg:order-2">
              <p className="text-[20px] font-bold uppercase">WORKING HOURS</p>
              <p>Sat to Thur : 10:00-18:00</p>
              <p>Friday Closed</p>
            </div>
          </div>
          <div className="flex lg:justify-end items-center gap-5  px-7 py-6 lg:py-14">
            <div className="flex justify-center items-center bg-[#E71D1D] rounded-[5px] w-20 h-20">
              <FiPhoneCall size={40} className="text-white" />
            </div>
            <div className="text-white">
              <p className="text-[20px] font-bold uppercase">CONTACT US</p>
              <p>02-55034813</p>
              <p>info@rr-imperial.com</p>
            </div>
          </div>
        </div>
      </div>
      {/* Middle footer */}
      <div className="bg-[#1A1A1A] px-4 lg:px-0">
        <div className="container grid grid-cols-12 gap-4 lg:gap-20 text-white py-6 lg:py-14">
          <div className="col-span-12 lg:col-span-4 lg:pr-20 mb-6 lg:mb-0">
            <h4 className="text-f25  font-bold mb-6">About Us</h4>
            <p className="text-[17px] leading-relaxed mb-8">RR Imperial Electricals Ltd. is One of the leading electrical wires and cables manufacturers in the world, & it&apos;s a joint venture company.</p>
            <div className="flex gap-4 lg:gap-5">
              <a href="https://www.facebook.com/RRImperialElectricalLimited/" target="_blank" className="w-10 h-10 flex justify-center items-center rounded bg-[#E71D1D] text-white hover:bg-white hover:text-[#E71D1D] transition-all duration-500">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com/imperial_rr?lang=en" target="_blank" className="w-10 h-10 flex justify-center items-center rounded bg-[#E71D1D] text-white hover:bg-white hover:text-[#E71D1D] transition-all duration-500">
                <FaTwitter />
              </a>
              <a href="https://www.linkedin.com/company/rr-imperial-electricals-ltd/" target="_blank" className="w-10 h-10 flex justify-center items-center rounded bg-[#E71D1D] text-white hover:bg-white hover:text-[#E71D1D] transition-all duration-500">
                <FaLinkedinIn />
              </a>
              <a href="https://www.youtube.com/channel/UC2Y_uRNmMz6KO3rW-FJHggQ" target="_blank" className="w-10 h-10 flex justify-center items-center rounded bg-[#E71D1D] text-white hover:bg-white hover:text-[#E71D1D] transition-all duration-500">
                <FaYoutube />
              </a>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-2 mb-6 lg:mb-0">
            <h4 className="text-f26 font-bold mb-6">Links</h4>
            <div className="flex flex-col space-y-4">
              <Link href="/who-we-are/our-profile">Who We Are</Link>
              <Link href="/our-brands/rr-kabel">Our Brands</Link>
              <Link href="/products">Products</Link>
              <Link href="/contact-us/head-office">Contact Us</Link>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-2 mb-6 lg:mb-0">
            <h4 className="text-f26 font-bold mb-6">Explore</h4>
            <div className="flex flex-col space-y-4">
              <Link href="/media/news">Media</Link>
              <Link href="/media/events">Our Story</Link>
              <Link href="/media/blogs">Latest Posts</Link>
              <Link href="/career">Help Center</Link>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 mb-6 lg:mb-0">
            <h4 className="text-f26 font-bold mb-6">Offline Maps</h4>
            <iframe title="Office Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29202.2894880896!2d90.39487138189729!3d23.80842031187588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c727497c47e7%3A0x5e18063b966d3e18!2sR.R%20Imperial%20Ltd!5e0!3m2!1sen!2sbd!4v1656416424661!5m2!1sen!2sbd" width="100%" height="200px" style={{ borderRadius: "5px" }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>

      </div>

      {/* bottom footer */}
      <div className="bg-[#323232]">
        <div className="container">
          <p className="py-4 text-f14 text-[#a8a7a7] text-center lg:text-left">2023 RR Imperial, All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </>);
};
export default Footer;
