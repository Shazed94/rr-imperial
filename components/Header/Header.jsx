"use client";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import { MdClose } from "react-icons/md";

import { Collapse, IconButton, Menu, MenuHandler, MenuItem, MenuList, Navbar } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () => window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function NavListMobile() {
    return (
      <div className="container flex justify-between p-0">
        <div className="w-full bg-[#E71D1D] lg:w-[65%]">
          <div className="flex flex-col items-center lg:flex-row lg:flex-wrap lg:justify-end lg:items-stretch lg:h-24">
            <Link href="/" className="relative px-4 py-5 overflow-hidden font-normal group focus-visible:outline-none hover:focus-visible:outline-none">
              <span className="block absolute left-0 right-0 bottom-0 h-0 group-hover:bottom-2 group-hover:h-full bg-white transition-all duration-[400ms] delay-200 z-20"></span>
              <span className="absolute left-0 right-0 bottom-0 bg-gray-400 h-0 group-hover:h-full  transition-all duration-[400ms] flex justify-center items-center z-10"></span>
              <span className="relative z-50 text-white group-hover:text-[#ed1d24] transition-all duration-[400ms]">Home</span>
            </Link>
            <Menu
              animate={{
                mount: { y: 0, opacity: 1 },
                unmount: { y: 25, opacity: 0 },
              }}
              className=""
            >
              <MenuHandler>
                <Link href="/" className="relative px-4 py-5 overflow-hidden font-normal group focus-visible:outline-none hover:focus-visible:outline-none">
                  <span className="block absolute left-0 right-0 bottom-0 h-0 group-hover:bottom-2 group-hover:h-full bg-white transition-all duration-[400ms] delay-200 z-20"></span>
                  <span className="absolute left-0 right-0 bottom-0 bg-gray-400 h-0 group-hover:h-full  transition-all duration-[400ms] flex justify-center items-center z-10"></span>
                  <span className="relative z-50 text-white group-hover:text-[#ed1d24] transition-all duration-[400ms]">Who We Are</span>
                </Link>
              </MenuHandler>
              <MenuList>
                <Link href="/who-we-are/our-profile" className="focus-visible:outline-none hover:focus-visible:outline-none">
                  <MenuItem className="">Our Profile</MenuItem>
                </Link>
                <Link href="/who-we-are/awards-certifications" className="focus-visible:outline-none hover:focus-visible:outline-none">
                  <MenuItem className="hover:focus-visible:outline-none">Awards & Certifications</MenuItem>
                </Link>
                <Link href="/who-we-are/research-innovation" className="focus-visible:outline-none hover:focus-visible:outline-none">
                  <MenuItem className="hover:focus-visible:outline-none">Research & Innovation</MenuItem>
                </Link>
                <Link href="/who-we-are/quality-assurance" className="focus-visible:outline-none hover:focus-visible:outline-none">
                  <MenuItem className="hover:focus-visible:outline-none">Quality Assurance</MenuItem>
                </Link>

                <Link href="/who-we-are/mission" className="focus-visible:outline-none hover:focus-visible:outline-none">
                  <MenuItem className="hover:focus-visible:outline-none">Mission</MenuItem>
                </Link>
                <Link href="/who-we-are/vision" className="focus-visible:outline-none hover:focus-visible:outline-none">
                  <MenuItem className="hover:focus-visible:outline-none">Vision</MenuItem>
                </Link>
                <Link href="/who-we-are/policy" className="focus-visible:outline-none hover:focus-visible:outline-none">
                  <MenuItem className="hover:focus-visible:outline-none">Policy</MenuItem>
                </Link>
              </MenuList>
            </Menu>

            <Menu
              animate={{
                mount: { y: 0, opacity: 1 },
                unmount: { y: 25, opacity: 0 },
              }}
              allowHover
            >
              <MenuHandler>
                <Link href="/" className="relative px-4 py-5 overflow-hidden font-normal group focus-visible:outline-none hover:focus-visible:outline-none">
                  <span className="block absolute left-0 right-0 bottom-0 h-0 group-hover:bottom-2 group-hover:h-full bg-white transition-all duration-[400ms] delay-200 z-20"></span>
                  <span className="absolute left-0 right-0 bottom-0 bg-gray-400 h-0 group-hover:h-full  transition-all duration-[400ms] flex justify-center items-center z-10"></span>
                  <span className="relative z-50 text-white group-hover:text-[#ed1d24] transition-all duration-[400ms]">Our Brands</span>
                </Link>
              </MenuHandler>
              <MenuList>
                <Link href="/our-brands/rr-kabel" className="focus-visible:outline-none hover:focus-visible:outline-none">
                  <MenuItem className="hover:focus-visible:outline-none">RR Kabel</MenuItem>
                </Link>
                <Link href="/our-brands/rr-shramik" className="focus-visible:outline-none hover:focus-visible:outline-none">
                  <MenuItem className="hover:focus-visible:outline-none">RR Shramik</MenuItem>
                </Link>
              </MenuList>
            </Menu>

            <Menu
              animate={{
                mount: { y: 0, opacity: 1 },
                unmount: { y: 25, opacity: 0 },
              }}
              allowHover
            >
              <MenuHandler>
                <Link href="/" className="relative px-4 py-5 overflow-hidden font-normal group focus-visible:outline-none hover:focus-visible:outline-none">
                  <span className="block absolute left-0 right-0 bottom-0 h-0 group-hover:bottom-2 group-hover:h-full bg-white transition-all duration-[400ms] delay-200 z-20"></span>
                  <span className="absolute left-0 right-0 bottom-0 bg-gray-400 h-0 group-hover:h-full  transition-all duration-[400ms] flex justify-center items-center z-10"></span>
                  <span className="relative z-50 text-white group-hover:text-[#ed1d24] transition-all duration-[400ms]">Products</span>
                </Link>
              </MenuHandler>
              <MenuList>
                <Link href="/products" className="focus-visible:outline-none hover:focus-visible:outline-none">
                  <MenuItem className="hover:focus-visible:outline-none">RR Kabel Products List</MenuItem>
                </Link>
                <Link href="/rr-shramik-products" className="focus-visible:outline-none hover:focus-visible:outline-none">
                  <MenuItem className="hover:focus-visible:outline-none">RR Shramik Products List</MenuItem>
                </Link>
              </MenuList>
            </Menu>

            <Menu
              animate={{
                mount: { y: 0, opacity: 1 },
                unmount: { y: 25, opacity: 0 },
              }}
              allowHover
            >
              <MenuHandler>
                <Link href="/" className="relative px-4 py-5 overflow-hidden font-normal group focus-visible:outline-none hover:focus-visible:outline-none">
                  <span className="block absolute left-0 right-0 bottom-0 h-0 group-hover:bottom-2 group-hover:h-full bg-white transition-all duration-[400ms] delay-200 z-20"></span>
                  <span className="absolute left-0 right-0 bottom-0 bg-gray-400 h-0 group-hover:h-full  transition-all duration-[400ms] flex justify-center items-center z-10"></span>
                  <span className="relative z-50 text-white group-hover:text-[#ed1d24] transition-all duration-[400ms]">Media</span>
                </Link>
              </MenuHandler>
              <MenuList>
                <Link href="/media/news" className="focus-visible:outline-none hover:focus-visible:outline-none">
                  <MenuItem className="hover:focus-visible:outline-none">News</MenuItem>
                </Link>
                <Link href="/media/events" className="focus-visible:outline-none hover:focus-visible:outline-none">
                  <MenuItem className="hover:focus-visible:outline-none">Events</MenuItem>
                </Link>
                <Link href="/media/blogs" className="focus-visible:outline-none hover:focus-visible:outline-none">
                  <MenuItem className="hover:focus-visible:outline-none">Blogs</MenuItem>
                </Link>
                <Link href="/media/tv-commercials" className="focus-visible:outline-none hover:focus-visible:outline-none">
                  <MenuItem className="hover:focus-visible:outline-none">Tv Commercials</MenuItem>
                </Link>
                <Link href="/media/tv-media" className="focus-visible:outline-none hover:focus-visible:outline-none">
                  <MenuItem className="hover:focus-visible:outline-none">Tv Media</MenuItem>
                </Link>
                {/* <Link href="/media/download" className="focus-visible:outline-none hover:focus-visible:outline-none">
                  <MenuItem className="hover:focus-visible:outline-none">
                    Download
                  </MenuItem>
                </Link> */}
                <Link href="/media/videos" className="focus-visible:outline-none hover:focus-visible:outline-none">
                  <MenuItem className="hover:focus-visible:outline-none">Videos</MenuItem>
                </Link>
              </MenuList>
            </Menu>

            <Link href="/career" className="relative px-4 py-5 overflow-hidden font-normal group focus-visible:outline-none hover:focus-visible:outline-none">
              <span className="block absolute left-0 right-0 bottom-0 h-0 group-hover:bottom-2 group-hover:h-full bg-white transition-all duration-[400ms] delay-200 z-20"></span>
              <span className="absolute left-0 right-0 bottom-0 bg-gray-400 h-0 group-hover:h-full  transition-all duration-[400ms] flex justify-center items-center z-10"></span>
              <span className="relative z-50 text-white group-hover:text-[#ed1d24] transition-all duration-[400ms]">Career</span>
            </Link>
            <Menu
              animate={{
                mount: { y: 0, opacity: 1 },
                unmount: { y: 25, opacity: 0 },
              }}
              allowHover
            >
              <MenuHandler>
                <Link href="/" className="relative px-4 py-5 overflow-hidden font-normal group focus-visible:outline-none hover:focus-visible:outline-none">
                  <span className="block absolute left-0 right-0 bottom-0 h-0 group-hover:bottom-2 group-hover:h-full bg-white transition-all duration-[400ms] delay-200 z-20"></span>
                  <span className="absolute left-0 right-0 bottom-0 bg-gray-400 h-0 group-hover:h-full  transition-all duration-[400ms] flex justify-center items-center z-10"></span>
                  <span className="relative z-50 text-white group-hover:text-[#ed1d24] transition-all duration-[400ms]">Wired</span>
                </Link>
              </MenuHandler>
              <MenuList>
                <Link href="/wired/price-list" className="focus-visible:outline-none hover:focus-visible:outline-none">
                  <MenuItem className="hover:focus-visible:outline-none">Price List</MenuItem>
                </Link>
                <Link href="/wired/kabel-assist-calculator" className="focus-visible:outline-none hover:focus-visible:outline-none">
                  <MenuItem className="hover:focus-visible:outline-none">Kabel Assist Calculator</MenuItem>
                </Link>
              </MenuList>
            </Menu>

            <Menu
              animate={{
                mount: { y: 0, opacity: 1 },
                unmount: { y: 25, opacity: 0 },
              }}
              allowHover
            >
              <MenuHandler>
                <Link href="/contact-us/head-office" className="relative px-4 py-5 overflow-hidden font-normal group focus-visible:outline-none hover:focus-visible:outline-none">
                  <span className="block absolute left-0 right-0 bottom-0 h-0 group-hover:bottom-2 group-hover:h-full bg-white transition-all duration-[400ms] delay-200 z-20"></span>
                  <span className="absolute left-0 right-0 bottom-0 bg-gray-400 h-0 group-hover:h-full  transition-all duration-[400ms] flex justify-center items-center z-10"></span>
                  <span className="relative z-50 text-white group-hover:text-[#ed1d24] transition-all duration-[400ms]">Contact Us</span>
                </Link>
              </MenuHandler>
              <MenuList>
                <Link href="/contact-us/head-office" className="focus-visible:outline-none hover:focus-visible:outline-none">
                  <MenuItem className="hover:focus-visible:outline-none">Head Office</MenuItem>
                </Link>
                <Link href="/contact-us/regional-offices" className="focus-visible:outline-none hover:focus-visible:outline-none">
                  <MenuItem className="hover:focus-visible:outline-none">Regional Offices</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </div>
        </div>
      </div>
    );
  }

  function NavList() {
    return (
      <div className="container flex justify-between p-0">
        {/* <div className="hidden lg:block w-[45%] bg-white h-24">
          <Link href="/" className="relative grid h-full w-72 ps-10">
            <Image src="/img/logo.png" alt="logo" width={350} height={60} className="self-center " />
          </Link>
        </div> */}

        <div className="hidden lg:flex items-center justify-center bg-white h-24">
          <Link href="/" className="flex items-center">
            <Image src="/img/logo.png" alt="logo" width={220} height={40} className="ml-5" />
            <Image src="/img/maid-in-bangladesh.png" alt="logo" width={120} height={30} className="ml-10 mr-5" />
          </Link>
        </div>

        <div className="w-full bg-[#E71D1D] lg:w-[65%]">
          <div className="flex flex-col items-center lg:flex-row lg:flex-wrap lg:justify-end lg:items-stretch lg:h-24">
            <Link href="/" className="relative px-4 overflow-hidden font-normal group pt-9 focus-visible:outline-none hover:focus-visible:outline-none">
              <span className="block absolute left-0 right-0 bottom-0 h-0 group-hover:bottom-2 group-hover:h-full bg-white transition-all duration-[400ms] delay-200 z-20"></span>
              <span className="absolute left-0 right-0 bottom-0 bg-gray-400 h-0 group-hover:h-full  transition-all duration-[400ms] flex justify-center items-center z-10"></span>
              <span className="relative z-50 text-white group-hover:text-[#ed1d24] transition-all duration-[400ms]">Home</span>
            </Link>
            <Menu
              animate={{
                mount: { y: 0, opacity: 1 },
                unmount: { y: 25, opacity: 0 },
              }}
              allowHover
              className=""
            >
              <MenuHandler>
                <Link href="/who-we-are/our-profile" className="relative px-4 overflow-hidden font-normal group pt-9 focus-visible:outline-none hover:focus-visible:outline-none">
                  <span className="block absolute left-0 right-0 bottom-0 h-0 group-hover:bottom-2 group-hover:h-full bg-white transition-all duration-[400ms] delay-200 z-20"></span>
                  <span className="absolute left-0 right-0 bottom-0 bg-gray-400 h-0 group-hover:h-full  transition-all duration-[400ms] flex justify-center items-center z-10"></span>
                  <span className="relative z-50 text-white group-hover:text-[#ed1d24] transition-all duration-[400ms]">Who We Are</span>
                </Link>
              </MenuHandler>
              <MenuList>
                <Link href="/who-we-are/our-profile" className="focus-visible:outline-none hover:focus-visible:outline-none">
                  <MenuItem className="">Our Profile</MenuItem>
                </Link>
                <Link href="/who-we-are/awards-certifications" className="focus-visible:outline-none hover:focus-visible:outline-none">
                  <MenuItem className="hover:focus-visible:outline-none">Awards & Certifications</MenuItem>
                </Link>
                <Link href="/who-we-are/research-innovation" className="focus-visible:outline-none hover:focus-visible:outline-none">
                  <MenuItem className="hover:focus-visible:outline-none">Research & Innovation</MenuItem>
                </Link>
                <Link href="/who-we-are/quality-assurance" className="focus-visible:outline-none hover:focus-visible:outline-none">
                  <MenuItem className="hover:focus-visible:outline-none">Quality Assurance</MenuItem>
                </Link>
                {/* <Link href="/who-we-are/research-development" className="focus-visible:outline-none hover:focus-visible:outline-none">
                  <MenuItem className="hover:focus-visible:outline-none" >
                    Research & Development
                  </MenuItem>
                </Link> */}
                <Link href="/who-we-are/mission" className="focus-visible:outline-none hover:focus-visible:outline-none">
                  <MenuItem className="hover:focus-visible:outline-none">Mission</MenuItem>
                </Link>
                <Link href="/who-we-are/vision" className="focus-visible:outline-none hover:focus-visible:outline-none">
                  <MenuItem className="hover:focus-visible:outline-none">Vision</MenuItem>
                </Link>
                <Link href="/who-we-are/policy" className="focus-visible:outline-none hover:focus-visible:outline-none">
                  <MenuItem className="hover:focus-visible:outline-none">Policy</MenuItem>
                </Link>
              </MenuList>
            </Menu>

            <Menu
              animate={{
                mount: { y: 0, opacity: 1 },
                unmount: { y: 25, opacity: 0 },
              }}
              allowHover
            >
              <MenuHandler>
                <Link href="/our-brands/rr-kabel" className="relative px-4 overflow-hidden font-normal group pt-9 focus-visible:outline-none hover:focus-visible:outline-none">
                  <span className="block absolute left-0 right-0 bottom-0 h-0 group-hover:bottom-2 group-hover:h-full bg-white transition-all duration-[400ms] delay-200 z-20"></span>
                  <span className="absolute left-0 right-0 bottom-0 bg-gray-400 h-0 group-hover:h-full  transition-all duration-[400ms] flex justify-center items-center z-10"></span>
                  <span className="relative z-50 text-white group-hover:text-[#ed1d24] transition-all duration-[400ms]">Our Brands</span>
                </Link>
              </MenuHandler>
              <MenuList>
                <Link href="/our-brands/rr-kabel" className="focus-visible:outline-none hover:focus-visible:outline-none">
                  <MenuItem className="hover:focus-visible:outline-none">RR Kabel</MenuItem>
                </Link>
                <Link href="/our-brands/rr-shramik" className="focus-visible:outline-none hover:focus-visible:outline-none">
                  <MenuItem className="hover:focus-visible:outline-none">RR Shramik</MenuItem>
                </Link>
              </MenuList>
            </Menu>

            <Menu
              animate={{
                mount: { y: 0, opacity: 1 },
                unmount: { y: 25, opacity: 0 },
              }}
              allowHover
            >
              <MenuHandler>
                <Link href="/products" className="relative px-4 overflow-hidden font-normal group pt-9 focus-visible:outline-none hover:focus-visible:outline-none">
                  <span className="block absolute left-0 right-0 bottom-0 h-0 group-hover:bottom-2 group-hover:h-full bg-white transition-all duration-[400ms] delay-200 z-20"></span>
                  <span className="absolute left-0 right-0 bottom-0 bg-gray-400 h-0 group-hover:h-full  transition-all duration-[400ms] flex justify-center items-center z-10"></span>
                  <span className="relative z-50 text-white group-hover:text-[#ed1d24] transition-all duration-[400ms]">Products</span>
                </Link>
              </MenuHandler>
              <MenuList>
                <Link href="/products" className="focus-visible:outline-none hover:focus-visible:outline-none">
                  <MenuItem className="hover:focus-visible:outline-none">RR Kabel Products List</MenuItem>
                </Link>
                <Link href="/rr-shramik-products" className="focus-visible:outline-none hover:focus-visible:outline-none">
                  <MenuItem className="hover:focus-visible:outline-none">RR Shramik Products List</MenuItem>
                </Link>
              </MenuList>
            </Menu>

            <Menu
              animate={{
                mount: { y: 0, opacity: 1 },
                unmount: { y: 25, opacity: 0 },
              }}
              allowHover
            >
              <MenuHandler>
                <Link href="/media/news" className="relative px-4 overflow-hidden font-normal group pt-9 focus-visible:outline-none hover:focus-visible:outline-none">
                  <span className="block absolute left-0 right-0 bottom-0 h-0 group-hover:bottom-2 group-hover:h-full bg-white transition-all duration-[400ms] delay-200 z-20"></span>
                  <span className="absolute left-0 right-0 bottom-0 bg-gray-400 h-0 group-hover:h-full  transition-all duration-[400ms] flex justify-center items-center z-10"></span>
                  <span className="relative z-50 text-white group-hover:text-[#ed1d24] transition-all duration-[400ms]">Media</span>
                </Link>
              </MenuHandler>
              <MenuList>
                <Link href="/media/news" className="focus-visible:outline-none hover:focus-visible:outline-none">
                  <MenuItem className="hover:focus-visible:outline-none">News</MenuItem>
                </Link>
                <Link href="/media/events" className="focus-visible:outline-none hover:focus-visible:outline-none">
                  <MenuItem className="hover:focus-visible:outline-none">Events</MenuItem>
                </Link>
                <Link href="/media/blogs" className="focus-visible:outline-none hover:focus-visible:outline-none">
                  <MenuItem className="hover:focus-visible:outline-none">Blogs</MenuItem>
                </Link>
                <Link href="/media/tv-commercials" className="focus-visible:outline-none hover:focus-visible:outline-none">
                  <MenuItem className="hover:focus-visible:outline-none">Tv Commercials</MenuItem>
                </Link>
                <Link href="/media/tv-media" className="focus-visible:outline-none hover:focus-visible:outline-none">
                  <MenuItem className="hover:focus-visible:outline-none">Tv Media</MenuItem>
                </Link>
                {/* <Link href="/media/download" className="focus-visible:outline-none hover:focus-visible:outline-none">
                  <MenuItem className="hover:focus-visible:outline-none">
                    Download
                  </MenuItem>
                </Link> */}
                <Link href="/media/videos" className="focus-visible:outline-none hover:focus-visible:outline-none">
                  <MenuItem className="hover:focus-visible:outline-none">Videos</MenuItem>
                </Link>
              </MenuList>
            </Menu>

            <Link href="/career" className="relative px-4 overflow-hidden font-normal group pt-9 focus-visible:outline-none hover:focus-visible:outline-none">
              <span className="block absolute left-0 right-0 bottom-0 h-0 group-hover:bottom-2 group-hover:h-full bg-white transition-all duration-[400ms] delay-200 z-20"></span>
              <span className="absolute left-0 right-0 bottom-0 bg-gray-400 h-0 group-hover:h-full  transition-all duration-[400ms] flex justify-center items-center z-10"></span>
              <span className="relative z-50 text-white group-hover:text-[#ed1d24] transition-all duration-[400ms]">Career</span>
            </Link>
            <Menu
              animate={{
                mount: { y: 0, opacity: 1 },
                unmount: { y: 25, opacity: 0 },
              }}
              allowHover
            >
              <MenuHandler>
                <Link href="/wired/price-list" className="relative px-4 overflow-hidden font-normal group pt-9 focus-visible:outline-none hover:focus-visible:outline-none">
                  <span className="block absolute left-0 right-0 bottom-0 h-0 group-hover:bottom-2 group-hover:h-full bg-white transition-all duration-[400ms] delay-200 z-20"></span>
                  <span className="absolute left-0 right-0 bottom-0 bg-gray-400 h-0 group-hover:h-full  transition-all duration-[400ms] flex justify-center items-center z-10"></span>
                  <span className="relative z-50 text-white group-hover:text-[#ed1d24] transition-all duration-[400ms]">Wired</span>
                </Link>
              </MenuHandler>
              <MenuList>
                <Link href="/wired/price-list" className="focus-visible:outline-none hover:focus-visible:outline-none">
                  <MenuItem className="hover:focus-visible:outline-none">Price List</MenuItem>
                </Link>
                <Link href="/wired/kabel-assist-calculator" className="focus-visible:outline-none hover:focus-visible:outline-none">
                  <MenuItem className="hover:focus-visible:outline-none">Kabel Assist Calculator</MenuItem>
                </Link>
              </MenuList>
            </Menu>

            <Menu
              animate={{
                mount: { y: 0, opacity: 1 },
                unmount: { y: 25, opacity: 0 },
              }}
              allowHover
            >
              <MenuHandler>
                <Link href="/contact-us/head-office" className="relative px-4 overflow-hidden font-normal group pt-9 focus-visible:outline-none hover:focus-visible:outline-none">
                  <span className="block absolute left-0 right-0 bottom-0 h-0 group-hover:bottom-2 group-hover:h-full bg-white transition-all duration-[400ms] delay-200 z-20"></span>
                  <span className="absolute left-0 right-0 bottom-0 bg-gray-400 h-0 group-hover:h-full  transition-all duration-[400ms] flex justify-center items-center z-10"></span>
                  <span className="relative z-50 text-white group-hover:text-[#ed1d24] transition-all duration-[400ms]">Contact Us</span>
                </Link>
              </MenuHandler>
              <MenuList>
                <Link href="/contact-us/head-office" className="focus-visible:outline-none hover:focus-visible:outline-none">
                  <MenuItem className="hover:focus-visible:outline-none">Head Office</MenuItem>
                </Link>
                <Link href="/contact-us/regional-offices" className="focus-visible:outline-none hover:focus-visible:outline-none">
                  <MenuItem className="hover:focus-visible:outline-none">Regional Offices</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* top_Header */}
      <div className="hidden lg:block topHeader bg-[#e9e9e9]">
        <div className="container">
          <div className="flex flex-col flex-wrap items-center py-2 lg:flex-row lg:justify-between">
            <div className="mb-1 left_content lg:mb-0">
              <span className="font-normal">Welcome to RR-Imperial Electricals Limited</span>
            </div>
            <div className="right_content">
              <ul className="flex flex-wrap p-0 m-0">
                <a href="https://www.facebook.com/RRImperialElectricalLimited/" target="_blank" rel="noreferrer" className="group">
                  <li className="ms-3 border border-[#e91111] group-hover:bg-[#e91111] transition rounded-[4px] p-[2px]">
                    <FaFacebookF size={18} className="text-[#e91111] group-hover:text-[#fff]" />
                  </li>
                </a>
                <a href="https://twitter.com/imperial_rr?lang=en" target="_blank" rel="noreferrer" className="group">
                  <li className="ms-3 border border-[#e91111] group-hover:bg-[#e91111] transition rounded-[4px] p-[2px]">
                    <FaTwitter size={18} className="text-[#e91111] group-hover:text-[#fff]" />
                  </li>
                </a>
                <a href="" target="_blank" rel="noreferrer" className="group">
                  <li className="ms-3 border border-[#e91111] group-hover:bg-[#e91111] transition rounded-[4px] p-[2px]">
                    <FaInstagram size={18} className="text-[#e91111] group-hover:text-[#fff]" />
                  </li>
                </a>
                <a href="https://www.linkedin.com/company/rr-imperial-electricals-ltd/" target="_blank" rel="noreferrer" className="group">
                  <li className="ms-3 border border-[#e91111] group-hover:bg-[#e91111] transition rounded-[4px] p-[2px]">
                    <FaLinkedinIn size={18} className="text-[#e91111] group-hover:text-[#fff]" />
                  </li>
                </a>

                <a href="https://www.youtube.com/channel/UC2Y_uRNmMz6KO3rW-FJHggQ" target="_blank" rel="noreferrer" className="group">
                  <li className="ms-3 border border-[#e91111] group-hover:bg-[#e91111] transition rounded-[4px] p-[2px]">
                    <FaYoutube size={18} className="text-[#e91111] group-hover:text-[#fff]" />
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="navbar bg-white lg:bg-[#e71d1d] p-0 sticky top-0 z-50">
        <Navbar className="container mx-auto p-0 border-0 bg-[#e71d1d] backdrop-saturate-0 bg-opacity-100 rounded-none shadow-none">
          <div className="hidden lg:block">
            <NavList />
          </div>
          <div className="flex items-center justify-between w-full px-4 py-3 bg-white lg:hidden">
            <Link href="/" className="relative">
              <Image src="/img/logo.png" alt="logo" width={200} height={40} className="self-center " />
            </Link>
            <IconButton variant="text" className="w-6 h-6 ms-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden" ripple={false} onClick={() => setOpenNav(!openNav)}>
              {openNav ? <MdClose className="h-6 w-6 text-[#e71d1d]" /> : <LuMenu className="h-6 w-6 text-[#e71d1d]" />}
            </IconButton>
          </div>
          <Collapse
            animate={{
              initial: { x: "100%" },
              mount: { x: 0 },
              unmount: { x: "100%" },
            }}
            open={openNav}
          >
            <NavListMobile />
          </Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
