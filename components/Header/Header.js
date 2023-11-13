'use client';

import { BACKEND_BASE_URL } from "../GlobalVariables";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Header.css";
import Link from "next/link";
import Image from "next/image";


const Header = () => {
  const [priceList, setPriceList] = useState();
  const [openNav, setOpenNav] = useState(false);

  const fetchPdfInfo = () => {
    axios
      .get(`${BACKEND_BASE_URL}/api/get-price-list`)
      .then((res) => {
        setPriceList(res.data.price_list);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // =============== Search Product ====================

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchPdfInfo();

    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <>
      {/* top_Header */}
      <div className="topHeader bg-[#e9e9e9]">
        <div className="container">
          <div className="flex flex-wrap justify-between items-center py-2">
            <div className="left_content">
              <span className="font-tahoma-regular">
                Welcome to RR-Imperial Electricals Limited
              </span>
            </div>
            <div className="right_content">
              <ul className="flex flex-wrap m-0 p-0">
                <a
                  href="https://www.facebook.com/RRImperialElectricalLimited/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <li className="ms-3 border border-[#e91111] bg-[#e91111] rounded-[4px] p-[2px]">
                    <FaFacebookF size={18} color="#fff" />
                  </li>
                </a>
                <a
                  href="https://twitter.com/imperial_rr?lang=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  <li className="ms-3 border border-[#e91111] rounded-[4px] p-[2px]">
                    <FaTwitter size={18} color="#ed1d24" />
                  </li>
                </a>
                <a href="" target="_blank" rel="noreferrer">
                  <li className="ms-3 border border-[#e91111] rounded-[4px] p-[2px]">
                    <FaInstagram size={18} color="#ed1d24" />
                  </li>
                </a>
                <a
                  href="https://www.linkedin.com/company/rr-imperial-electricals-ltd/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <li className="ms-3 border border-[#e91111] rounded-[4px] p-[2px]">
                    <FaLinkedinIn size={18} color="#ed1d24" />
                  </li>
                </a>

                <a
                  href="https://www.youtube.com/channel/UC2Y_uRNmMz6KO3rW-FJHggQ"
                  target="_blank"
                  rel="noreferrer"
                >
                  <li className="ms-3 border border-[#e91111] rounded-[4px] p-[2px]">
                    <FaYoutube size={18} color="#ed1d24" />
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="navbar bg-[#e71d1d]">
        <div className="container flex justify-between p-0">
          <div className="w-[45%] bg-white h-24">
            <Link href="/" className="grid w-48 h-full relative ps-5">
              <Image
                src="/img/logo.png"
                alt="logo"
                width={150}
                height={150}
                className="self-center"
              />
            </Link>
          </div>

          <div className="w-[65%]">
            <div className="flex flex-wrap justify-end h-24">
              <Link
                href="/"
                className="text-white hover:bg-white hover:text-[#ed1d24] font-tahoma-regular transition-colors pt-9 px-4"
              >
                Home
              </Link>
              <Link
                href="/"
                className="text-white hover:bg-white hover:text-[#ed1d24] font-tahoma-regular transition-colors pt-9 px-4"
              >
                Who We Are
              </Link>
              <Link
                href="/"
                className="text-white hover:bg-white hover:text-[#ed1d24] font-tahoma-regular transition-colors pt-9 px-4"
              >
                Our Brands
              </Link>
              <Link
                href="/products"
                className="text-white hover:bg-white hover:text-[#ed1d24] font-tahoma-regular transition-colors pt-9 px-4"
              >
                Products
              </Link>
              <Link
                href="/"
                className="text-white hover:bg-white hover:text-[#ed1d24] font-tahoma-regular transition-colors pt-9 px-4"
              >
                Media
              </Link>
              <Link
                href="/"
                className="text-white hover:bg-white hover:text-[#ed1d24] font-tahoma-regular transition-colors pt-9 px-4"
              >
                Career
              </Link>
              <Link
                href="/"
                className="text-white hover:bg-white hover:text-[#ed1d24] font-tahoma-regular transition-colors pt-9 px-4"
              >
                Wired
              </Link>
              <Link
                href="/contact-us"
                className="text-white hover:bg-white hover:text-[#ed1d24] font-tahoma-regular transition-colors pt-9 px-4"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
