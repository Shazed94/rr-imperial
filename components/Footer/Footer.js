"use client";

import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

const Footer = (props) => {
  const [email, setEmail] = useState("");
  const onChange = ({ target }) => setEmail(target.value);
  return (
    <div className="footer">
      {/* top_footer */}
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
      {/* mid_footer */}
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
      {/* bottom_footer */}
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
    </div>
  );
};
export default Footer;
