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
    {/* <div className="footer">
     
      <div className={`top_footer ${props.topHeader} `}>
        <div className="bg-[#252525] p-10">
          <div className="container bg-[#f5f7fa] p-20">
            <div className="flex justify-between items-center border border-[#e20c0c]">
              <h4 className="text-f24 text-[#e91111] font-tahoma-bold w-1/2 px-5">
                Subscribe Newsletter
              </h4>
              <div className="relative flex w-1/2 h-full">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="bg-white py-3 ps-6 w-full focus-visible:outline-none"
                />
                <button className="absolute right-1 top-1 bg-[#e71010] text-white hover:bg-[#a70c0c] transition-colors uppercase tracking-wider px-4 py-2">
                  Subscribe now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <div className="mid_footer bg-[#252525]">
        <div className="container flex flex-wrap justify-between items-center  border-b border-b-[#e4ebf3] py-10">
          <div className="space-x-14">
            <Link
              href="/"
              className="text-f14 text-white hover:text-[#e91111] hover:bg-white transition-colors font-tahoma-regular py-5 px-[15px]"
            >
              About us
            </Link>
            <Link
              href="/"
              className="text-f14 text-white hover:text-[#e91111] hover:bg-white transition-colors font-tahoma-regular py-5 px-[15px]"
            >
              Features
            </Link>
            <Link
              href="/"
              className="text-f14 text-white hover:text-[#e91111] hover:bg-white transition-colors font-tahoma-regular py-5 px-[15px]"
            >
              User Example
            </Link>
            <Link
              href="/"
              className="text-f14 text-white hover:text-[#e91111] hover:bg-white transition-colors font-tahoma-regular py-5 px-[15px]"
            >
              Pricing
            </Link>
            <Link
              href="/"
              className="text-f14 text-white hover:text-[#e91111] hover:bg-white transition-colors font-tahoma-regular py-5 px-[15px]"
            >
              Resources
            </Link>
          </div>
          <div>
            <ul className="flex flex-wrap m-0 p-0">
              <a
                href="https://www.facebook.com/RRImperialElectricalLimited/"
                target="_blank"
                rel="noreferrer"
              >
                <li className="ms-3 border border-white bg-white rounded-[4px] p-[2px]">
                  <FaFacebookF size={18} color="#ed1d24" />
                </li>
              </a>
              <a
                href="https://twitter.com/imperial_rr?lang=en"
                target="_blank"
                rel="noreferrer"
              >
                <li className="ms-3 border border-gray-400 rounded-[4px] p-[2px]">
                  <FaTwitter size={18} color="#bdbdbd" />
                </li>
              </a>
              <a href="" target="_blank" rel="noreferrer">
                <li className="ms-3 border border-gray-400 rounded-[4px] p-[2px]">
                  <FaInstagram size={18} color="#bdbdbd" />
                </li>
              </a>
              <a
                href="https://www.linkedin.com/company/rr-imperial-electricals-ltd/"
                target="_blank"
                rel="noreferrer"
              >
                <li className="ms-3 border border-gray-400 rounded-[4px] p-[2px]">
                  <FaLinkedinIn size={18} color="#bdbdbd" />
                </li>
              </a>

              <a
                href="https://www.youtube.com/channel/UC2Y_uRNmMz6KO3rW-FJHggQ"
                target="_blank"
                rel="noreferrer"
              >
                <li className="ms-3 border border-gray-400 rounded-[4px] p-[2px]">
                  <FaYoutube size={18} color="#bdbdbd" />
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
     
      <div className="bottom_footer bg-[#252525]">
        <div className="container text-center py-10">
          <div className="flex flex-wrap justify-between items-center text-f14 text-white font-tahoma-regular">
            <small>
              &copy; 2023 RR Imperial Electricals Ltd. All rights reserved.
            </small>

            <div className="space-x-8">
              <Link href="/" className="underline">
                Terms Of Use
              </Link>
              <Link href="/" className="underline">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div> */}

    <div className='footer'>
      {/* top_footer */}
      <div className="bg-[#1A1A1A] border-b-2 border-b-gray-600">
        <div className="container flex justify-between items-center">
          <div className="flex justify-center items-center gap-5  px-7 py-14 border-r-2 border-r-gray-600">
            <div className="flex justify-center items-center bg-[#E71D1D] rounded-[5px] w-20 h-20">
              <BiMap size={40} className="text-white" />
            </div>
            <div className="text-white">
              <p className="text-[20px] font-tahoma-bold uppercase">Location</p>
              <p>Senpara, Kanchpur, Narayanganj</p>
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-5  ps-20 pr-[105px] py-14 border-r-2 border-r-gray-600">
            <div className="flex justify-center items-center bg-[#E71D1D] rounded-[5px] w-20 h-20">
              <BiTime size={40} className="text-white" />
            </div>
            <div className="text-white">
              <p className="text-[20px] font-tahoma-bold uppercase">WORKING HOURS</p>
              <p>Sat to Thur : 10:00-18:00</p>
              <p>Friday Closed</p>
            </div>
          </div>
          <div className="flex justify-end items-center gap-5  px-7 py-14">
            <div className="flex justify-center items-center bg-[#E71D1D] rounded-[5px] w-20 h-20">
              <FiPhoneCall size={40} className="text-white" />
            </div>
            <div className="text-white">
              <p className="text-[20px] font-tahoma-bold uppercase">CONTACT US</p>
              <p>02-55034813</p>
              <p>info@rr-imperial.com</p>
            </div>
          </div>
        </div>
      </div>
      {/* Middle footer */}
      <div className="bg-[#1A1A1A]">
        <div className="container grid grid-cols-12 gap-20 text-white py-14">
          <div className="col-span-4 pr-20">
            <h4 className="text-f25  font-tahoma-bold mb-6">About Us</h4>
            <p className="text-[17px] leading-relaxed mb-8">RR Imperial Electricals Ltd. is One of the leading electrical wires and cables manufacturers in the world, & it&apos;s a joint venture company.</p>
            <div className="flex gap-5">
              <a href="https://www.facebook.com/RRImperialElectricalLimited/" target="_blank" className="w-10 h-10 flex justify-center items-center rounded bg-[#E71D1D] text-white hover:bg-white hover:text-[#E71D1D] transition-all duration-500">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com/imperial_rr?lang=en" target="_blank" className="w-10 h-10 flex justify-center items-center rounded bg-[#E71D1D] text-white hover:bg-white hover:text-[#E71D1D] transition-all duration-500">
                <FaTwitter />
              </a>
              <a href="/" target="_blank" className="w-10 h-10 flex justify-center items-center rounded bg-[#E71D1D] text-white hover:bg-white hover:text-[#E71D1D] transition-all duration-500">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/company/rr-imperial-electricals-ltd/" target="_blank" className="w-10 h-10 flex justify-center items-center rounded bg-[#E71D1D] text-white hover:bg-white hover:text-[#E71D1D] transition-all duration-500">
                <FaLinkedinIn />
              </a>
              <a href="https://www.youtube.com/channel/UC2Y_uRNmMz6KO3rW-FJHggQ" target="_blank" className="w-10 h-10 flex justify-center items-center rounded bg-[#E71D1D] text-white hover:bg-white hover:text-[#E71D1D] transition-all duration-500">
                <FaYoutube />
              </a>
            </div>
          </div>
          <div className="col-span-2">
            <h4 className="text-f26 font-tahoma-bold mb-6">Links</h4>
            <div className="flex flex-col space-y-4">
              <Link href="/">Who We Are</Link>
              <Link href="/">Our Brands</Link>
              <Link href="/">Products</Link>
              <Link href="/">Contact Us</Link>
            </div>
          </div>
          <div className="col-span-2">
            <h4 className="text-f26 font-tahoma-bold mb-6">Explore</h4>
            <div className="flex flex-col space-y-4">
              <Link href="/">Media</Link>
              <Link href="/">Our Story</Link>
              <Link href="/">Latest Posts</Link>
              <Link href="/">Help Center</Link>
            </div>
          </div>
          <div className="col-span-4">
            <h4 className="text-f26 font-tahoma-bold mb-6">Offline Maps</h4>
            <iframe title="Office Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29202.2894880896!2d90.39487138189729!3d23.80842031187588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c727497c47e7%3A0x5e18063b966d3e18!2sR.R%20Imperial%20Ltd!5e0!3m2!1sen!2sbd!4v1656416424661!5m2!1sen!2sbd" width="100%" height="200px" style={{ borderRadius: "5px" }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>

      </div>

      {/* bottom footer */}
      <div className="bg-[#323232]">
        <div className="container">
          <p className="py-4 text-f14 text-[#a8a7a7]">2023 RR Imperial, All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </>);
};
export default Footer;
