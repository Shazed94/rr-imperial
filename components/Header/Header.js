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
import { Menu, MenuHandler, MenuItem, MenuList } from "@material-tailwind/react";


const Header = () => {

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
            <Link href="/" className="grid w-72 h-full relative ps-10">
              <Image
                src="/img/logo.png"
                alt="logo"
                width={350}
                height={60}
                className="self-center "
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
              <Menu
                animate={{
                  mount: { y: 0, opacity: 1, },
                  unmount: { y: 25, opacity: 0, },
                }}
                allowHover
              >
                <MenuHandler>
                  <Link
                    href="/"
                    className="text-white hover:bg-white hover:text-[#ed1d24] font-tahoma-regular transition-colors pt-9 px-4 focus-visible:outline-none hover:focus-visible:outline-none"
                  >
                    Who We Are
                  </Link>
                </MenuHandler>
                <MenuList>
                  <Link href="/who-we-are/our-profile" className="focus-visible:outline-none hover:focus-visible:outline-none">
                    <MenuItem className="">
                      Our Profile
                    </MenuItem>
                  </Link>
                  <Link href="/who-we-are/awards-certifications" className="focus-visible:outline-none hover:focus-visible:outline-none">
                    <MenuItem className="hover:focus-visible:outline-none">
                      Awards & Certifications
                    </MenuItem>
                  </Link>
                  <Link href="/who-we-are/research-innovation" className="focus-visible:outline-none hover:focus-visible:outline-none">
                    <MenuItem className="hover:focus-visible:outline-none">
                      Research & Innovation
                    </MenuItem>
                  </Link>
                  <Link href="/who-we-are/quality-assurance" className="focus-visible:outline-none hover:focus-visible:outline-none">
                    <MenuItem className="hover:focus-visible:outline-none">
                      Quality Assurance
                    </MenuItem>
                  </Link>
                  <Link href="/who-we-are/research-development" className="focus-visible:outline-none hover:focus-visible:outline-none">
                    <MenuItem className="hover:focus-visible:outline-none" >
                      Research & Development
                    </MenuItem>
                  </Link>
                  <Link href="/who-we-are/mission" className="focus-visible:outline-none hover:focus-visible:outline-none">
                    <MenuItem className="hover:focus-visible:outline-none">
                      Mission
                    </MenuItem>
                  </Link>
                  <Link href="/who-we-are/vision" className="focus-visible:outline-none hover:focus-visible:outline-none">
                    <MenuItem className="hover:focus-visible:outline-none">
                      Vision
                    </MenuItem>
                  </Link>
                  <Link href="/who-we-are/policy" className="focus-visible:outline-none hover:focus-visible:outline-none">
                    <MenuItem className="hover:focus-visible:outline-none">
                      Policy
                    </MenuItem>
                  </Link>
                </MenuList>
              </Menu>

              <Menu
                animate={{
                  mount: { y: 0, opacity: 1, },
                  unmount: { y: 25, opacity: 0, },
                }}
                allowHover
              >
                <MenuHandler>
                  <Link
                    href="/"
                    className="text-white hover:bg-white hover:text-[#ed1d24] font-tahoma-regular transition-colors pt-9 px-4 focus-visible:outline-none hover:focus-visible:outline-none"
                  >
                    Our Brands
                  </Link>
                </MenuHandler>
                <MenuList>
                  <Link href="#" className="focus-visible:outline-none hover:focus-visible:outline-none">
                    <MenuItem className="hover:focus-visible:outline-none">
                      RR Kabel
                    </MenuItem>
                  </Link>
                  <Link href="#" className="focus-visible:outline-none hover:focus-visible:outline-none">
                    <MenuItem className="hover:focus-visible:outline-none">
                      RR Shramik
                    </MenuItem>
                  </Link>
                </MenuList>
              </Menu >

              <Menu
                animate={{
                  mount: { y: 0, opacity: 1, },
                  unmount: { y: 25, opacity: 0, },
                }}
                allowHover
              >
                <MenuHandler>
                  <Link
                    href=""
                    className="text-white hover:bg-white hover:text-[#ed1d24] font-tahoma-regular transition-colors pt-9 px-4 focus-visible:outline-none hover:focus-visible:outline-none"
                  >
                    Products
                  </Link>
                </MenuHandler>
                <MenuList>
                  <Link href="/products" className="focus-visible:outline-none hover:focus-visible:outline-none">
                    <MenuItem className="hover:focus-visible:outline-none">
                      RR Kabel Products List
                    </MenuItem>
                  </Link>
                  <Link href="#" className="focus-visible:outline-none hover:focus-visible:outline-none">
                    <MenuItem className="hover:focus-visible:outline-none">
                      RR Shramik Products List
                    </MenuItem>
                  </Link>
                </MenuList>
              </Menu >

              <Menu
                animate={{
                  mount: { y: 0, opacity: 1, },
                  unmount: { y: 25, opacity: 0, },
                }}
                allowHover
              >
                <MenuHandler>
                  <Link
                    href="/"
                    className="text-white hover:bg-white hover:text-[#ed1d24] font-tahoma-regular transition-colors pt-9 px-4 focus-visible:outline-none hover:focus-visible:outline-none"
                  >
                    Media
                  </Link>
                </MenuHandler>
                <MenuList>
                  <Link href="#" className="focus-visible:outline-none hover:focus-visible:outline-none">
                    <MenuItem className="hover:focus-visible:outline-none">
                      News
                    </MenuItem>
                  </Link>
                  <Link href="#" className="focus-visible:outline-none hover:focus-visible:outline-none">
                    <MenuItem className="hover:focus-visible:outline-none">
                      Download
                    </MenuItem>
                  </Link>
                  <Link href="#" className="focus-visible:outline-none hover:focus-visible:outline-none">
                    <MenuItem className="hover:focus-visible:outline-none">
                      Videos
                    </MenuItem>
                  </Link>
                </MenuList>
              </Menu >

              <Menu
                animate={{
                  mount: { y: 0, opacity: 1, },
                  unmount: { y: 25, opacity: 0, },
                }}
                allowHover
              >
                <MenuHandler>
                  <Link
                    href="/"
                    className="text-white hover:bg-white hover:text-[#ed1d24] font-tahoma-regular transition-colors pt-9 px-4 focus-visible:outline-none hover:focus-visible:outline-none"
                  >
                    Career
                  </Link>
                </MenuHandler>
                <MenuList>
                  <Link href="#" className="focus-visible:outline-none hover:focus-visible:outline-none">
                    <MenuItem className="hover:focus-visible:outline-none">
                      Current Openings
                    </MenuItem>
                  </Link>
                  <Link href="#" className="focus-visible:outline-none hover:focus-visible:outline-none">
                    <MenuItem className="hover:focus-visible:outline-none">
                      Submit Your CV
                    </MenuItem>
                  </Link>
                </MenuList>
              </Menu >

              <Menu
                animate={{
                  mount: { y: 0, opacity: 1, },
                  unmount: { y: 25, opacity: 0, },
                }}
                allowHover
              >
                <MenuHandler>
                  <Link
                    href="/"
                    className="text-white hover:bg-white hover:text-[#ed1d24] font-tahoma-regular transition-colors pt-9 px-4 focus-visible:outline-none hover:focus-visible:outline-none"
                  >
                    Wired
                  </Link>
                </MenuHandler>
                <MenuList>
                  <Link href="#" className="focus-visible:outline-none hover:focus-visible:outline-none">
                    <MenuItem className="hover:focus-visible:outline-none">
                      Price List
                    </MenuItem>
                  </Link>
                  <Link href="#" className="focus-visible:outline-none hover:focus-visible:outline-none">
                    <MenuItem className="hover:focus-visible:outline-none">
                      Kabel Assist Calculator
                    </MenuItem>
                  </Link>
                </MenuList>
              </Menu >

              <Menu
                animate={{
                  mount: { y: 0, opacity: 1, },
                  unmount: { y: 25, opacity: 0, },
                }}
                allowHover
              >
                <MenuHandler>
                  <Link
                    href="/"
                    className="text-white hover:bg-white hover:text-[#ed1d24] font-tahoma-regular transition-colors pt-9 px-4 focus-visible:outline-none hover:focus-visible:outline-none"
                  >
                    Contact Us
                  </Link>
                </MenuHandler>
                <MenuList>
                  <Link href="/contact-us/head-office" className="focus-visible:outline-none hover:focus-visible:outline-none">
                    <MenuItem className="hover:focus-visible:outline-none">
                      Head Office
                    </MenuItem>
                  </Link>
                  <Link href="#" className="focus-visible:outline-none hover:focus-visible:outline-none">
                    <MenuItem className="hover:focus-visible:outline-none">
                      Factory
                    </MenuItem>
                  </Link>
                  <Link href="/contact-us/regional-offices" className="focus-visible:outline-none hover:focus-visible:outline-none">
                    <MenuItem className="hover:focus-visible:outline-none">
                      Regional Offices
                    </MenuItem>
                  </Link>
                </MenuList>
              </Menu >
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
