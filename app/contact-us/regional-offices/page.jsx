"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import QuickNavigation from "@/components/QuickNavigation";
import SubmitQueryForm from "@/components/SubmitQueryForm";
import {
  Button,
  Dialog,
  DialogFooter,
  DialogHeader,
  DialogBody,
  Tabs,
  TabsHeader,
  Tab,
  TabsBody,
  TabPanel,
} from "@material-tailwind/react";

import Link from "next/link";
import React, { useState } from "react";

const ContactUs = () => {
  const [open, setOpen] = useState(false);
  const [office, setOffice] = useState("");
  const [activeOffice, setActiveOffice] = useState("barishal");
  const handleOpen = (val) => {
    setOpen(!open);
    setOffice(val);
  };

  function toggleTab(state) {
    setActiveOffice(state);
  }

  return (
    <div>
      <Header />
      <div className="container flex justify-center items-center bg-[url('/img/contact/contact-us-cover.png')] bg-cover py-20 lg:py-28">
        <h2 className="text-f38 font-bold text-white">Regional Offices</h2>
      </div>
      <div className="container flex flex-wrap justify-between py-12">
        <Tabs
          id="custom-animation"
          value="barishal"
          className="w-full p-0 bg-transparent"
        >
          <TabsHeader
            className="bg-transparent"
            indicatorProps={{
              className: "bg-transparent !shadow-none !text-gray-900",
            }}
          >
            <Tab value="barishal" className="bg-transparent shadow-none">
              <Link href="#" scroll={false} className="">
                <button
                  className={`w-36 px-4 py-4 rounded-xl text-white bg-[#D1D3D4] ${
                    activeOffice == "barishal" ? "bg-[#E62020]" : "bg-[#D1D3D4]"
                  } hover:bg-[#E62020] transition-colors `}
                  onClick={() => toggleTab("barishal")}
                >
                  Barishal
                </button>
              </Link>
            </Tab>
            <Tab value="chattogram">
              <Link href="#" scroll={false} className="">
                <button
                  className={`w-36 px-4 py-4 rounded-xl text-white bg-[#D1D3D4] ${
                    activeOffice == "chattogram"
                      ? "bg-[#E62020]"
                      : "bg-[#D1D3D4]"
                  } hover:bg-[#E62020] transition-colors `}
                  onClick={() => toggleTab("chattogram")}
                >
                  Chattogram
                </button>
              </Link>
            </Tab>
            <Tab value="dhaka">
              <Link href="#" scroll={false} className="">
                <button
                  className={`w-36 px-4 py-4 rounded-xl text-white bg-[#D1D3D4] ${
                    activeOffice == "dhaka" ? "bg-[#E62020]" : "bg-[#D1D3D4]"
                  } hover:bg-[#E62020] transition-colors `}
                  onClick={() => toggleTab("dhaka")}
                >
                  Dhaka
                </button>
              </Link>
            </Tab>
            <Tab value="khulna">
              <Link href="#" scroll={false} className="">
                <button
                  className={`w-36 px-4 py-4 rounded-xl text-white bg-[#D1D3D4] ${
                    activeOffice == "khulna" ? "bg-[#E62020]" : "bg-[#D1D3D4]"
                  } hover:bg-[#E62020] transition-colors `}
                  onClick={() => toggleTab("khulna")}
                >
                  Khulna
                </button>
              </Link>
            </Tab>
            <Tab value="rajshahi">
              <Link href="#" scroll={false} className="">
                <button
                  className={`w-36 px-4 py-4 rounded-xl text-white bg-[#D1D3D4] ${
                    activeOffice == "rajshahi" ? "bg-[#E62020]" : "bg-[#D1D3D4]"
                  } hover:bg-[#E62020] transition-colors `}
                  onClick={() => toggleTab("rajshahi")}
                >
                  Rajshahi
                </button>
              </Link>
            </Tab>
            <Tab value="rangpur">
              <Link href="#" scroll={false} className="">
                <button
                  className={`w-36 px-4 py-4 rounded-xl text-white bg-[#D1D3D4] ${
                    activeOffice == "rangpur" ? "bg-[#E62020]" : "bg-[#D1D3D4]"
                  } hover:bg-[#E62020] transition-colors `}
                  onClick={() => toggleTab("rangpur")}
                >
                  Rangpur
                </button>
              </Link>
            </Tab>
            <Tab value="mymensingh">
              <Link href="#" scroll={false} className="">
                <button
                  className={`w-36 px-4 py-4 rounded-xl text-white bg-[#D1D3D4] ${
                    activeOffice == "mymensingh"
                      ? "bg-[#E62020]"
                      : "bg-[#D1D3D4]"
                  } hover:bg-[#E62020] transition-colors `}
                  onClick={() => toggleTab("mymensingh")}
                >
                  Mymensingh
                </button>
              </Link>
            </Tab>
            <Tab value="shylet">
              <Link href="#" scroll={false} className="">
                <button
                  className={`w-36 px-4 py-4 rounded-xl text-white bg-[#D1D3D4] ${
                    activeOffice == "shylet" ? "bg-[#E62020]" : "bg-[#D1D3D4]"
                  } hover:bg-[#E62020] transition-colors `}
                  onClick={() => toggleTab("shylet")}
                >
                  Shylet
                </button>
              </Link>
            </Tab>
          </TabsHeader>
          <TabsBody
            animate={{
              initial: { y: 250 },
              mount: { y: 0 },
              unmount: { y: 250 },
            }}
          >
            <TabPanel value="barishal">
              <div className="bg-[#F2F5F6] py-10 px-12 mb-12">
                <div className="max-w-[80rem] mx-auto">
                  <h3 className="shop border-t border-b border-[#E62020] text-[#E62020] text-f25 font-bold py-2 text-center uppercase">
                    Barishal Display Center
                  </h3>
                  <div className="flex justify-between gap-3">
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/map.svg"} alt="" className="w-10" />
                      <p className="text-black font-normal ">
                        MM Plaza, (1st Floor) <br />
                        675 Kobi Jibonanonda Das Road <br />
                        (East Bogura Road) Thana - Kotwali, Barishal.
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/phone.svg"} alt="" className="w-10" />
                      <div>
                        <p>+88017-09666651</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/mail.svg"} alt="" className="w-10" />
                      <p>sales.barisal@rrimperial.com</p>
                    </div>
                    <div className="pt-5 flex items-center">
                      <Link
                        href="#"
                        scroll={false}
                        className="block relative bg-[#E62020] w-40 py-7 px-14 ms-auto "
                      >
                        <button
                          className="absolute inset-0 text-f20 bg-[#939598] rounded-br-[40px] border-[#E62020] text-white"
                          onClick={() => handleOpen("Barishal")}
                        >
                          Map Link
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value="chattogram">
              <div className="bg-[#F2F5F6] py-10 px-12 mb-12">
                <div className="max-w-[80rem] mx-auto">
                  <h3 className="shop border-t border-b border-[#E62020] text-[#E62020] text-f25 font-bold py-2 text-center uppercase">
                    Cox’s Bazar Display Center
                  </h3>
                  <div className="flex justify-between gap-3">
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/map.svg"} alt="" className="w-10" />
                      <p className="text-black font-normal "></p>
                    </div>
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/phone.svg"} alt="" className="w-10" />
                      <div>
                        {/* <p>+880 17-55552593</p>
                        <p>+880 17-55552583</p>
                        <p>+02-9586528</p> */}
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/mail.svg"} alt="" className="w-10" />
                      {/* <p>sales.nawabpur@rr-imperial.com</p> */}
                    </div>
                    <div className="pt-5 flex items-center">
                      <Link
                        href="#"
                        scroll={false}
                        className="block relative bg-[#E62020] w-40 py-7 px-14 ms-auto "
                      >
                        <button
                          className="absolute inset-0 text-f20 bg-[#939598] rounded-br-[40px] border-[#E62020] text-white"
                          onClick={() => handleOpen("Cox’s Bazar")}
                        >
                          Map Link
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#F2F5F6] py-10 px-12 mb-12">
                <div className="max-w-[80rem] mx-auto">
                  <h3 className="shop border-t border-b border-[#E62020] text-[#E62020] text-f25 font-bold py-2 text-center uppercase">
                    Chattogram Display Center
                  </h3>
                  <div className="flex justify-between gap-3">
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/map.svg"} alt="" className="w-10" />
                      <p className="text-black font-normal ">
                        United Electric Market, 128/31 <br />
                        Golap Shing Lane, Nandankanan, Chattogram.
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/phone.svg"} alt="" className="w-10" />
                      <div>
                        <p>+880 17-55552584</p>
                        <p>+880 17-55552588</p>
                        <p> +88-031-2850188</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/mail.svg"} alt="" className="w-10" />
                      <p>sales.mofiz@rr-imperial.com</p>
                    </div>
                    <div className="pt-5 flex items-center">
                      <Link
                        href="#"
                        scroll={false}
                        className="block relative bg-[#E62020] w-40 py-7 px-14 ms-auto "
                      >
                        <button
                          className="absolute inset-0 text-f20 bg-[#939598] rounded-br-[40px] border-[#E62020] text-white"
                          onClick={() => handleOpen("Chattogram")}
                        >
                          Map Link
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#F2F5F6] py-10 px-12 mb-12">
                <div className="max-w-[80rem] mx-auto">
                  <h3 className="shop border-t border-b border-[#E62020] text-[#E62020] text-f25 font-bold py-2 text-center uppercase">
                    Cumilla Display Center
                  </h3>
                  <div className="flex justify-between gap-3">
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/map.svg"} alt="" className="w-10" />
                      <p className="text-black font-normal ">
                        897, Bazrapur Circular Road
                        <br />
                        Muradpur, Chowmohoni, Cumilla
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/phone.svg"} alt="" className="w-10" />
                      <div>
                        <p>+88017-09666655</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/mail.svg"} alt="" className="w-10" />
                      <p> sales.comilla@rrimperial.com</p>
                    </div>
                    <div className="pt-5 flex items-center">
                      <Link
                        href="#"
                        scroll={false}
                        className="block relative bg-[#E62020] w-40 py-7 px-14 ms-auto "
                      >
                        <button
                          className="absolute inset-0 text-f20 bg-[#939598] rounded-br-[40px] border-[#E62020] text-white"
                          onClick={() => handleOpen("Cumilla")}
                        >
                          Map Link
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#F2F5F6] py-10 px-12 mb-12">
                <div className="max-w-[80rem] mx-auto">
                  <h3 className="shop border-t border-b border-[#E62020] text-[#E62020] text-f25 font-bold py-2 text-center uppercase">
                    Noakhali
                  </h3>
                  <div className="flex justify-between gap-3">
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      {/* <img src={"/svg/map.svg"} alt="" className="w-10" />
                      <p className="text-black font-normal "></p> */}
                    </div>
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/phone.svg"} alt="" className="w-10" />
                      <div>
                        <p>+880 17-09666653</p>
                        <p> +880 17-55552584</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/mail.svg"} alt="" className="w-10" />
                      <p> sales.noakhali@rrimperial.com</p>
                    </div>
                    <div className="pt-5 flex items-center">
                      <Link
                        href="#"
                        scroll={false}
                        className="block relative bg-[#E62020] w-40 py-7 px-14 ms-auto "
                      >
                        <button
                          className="absolute inset-0 text-f20 bg-[#939598] rounded-br-[40px] border-[#E62020] text-white"
                          onClick={() => handleOpen("Noakhali")}
                        >
                          Map Link
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#F2F5F6] py-10 px-12 mb-12">
                <div className="max-w-[80rem] mx-auto">
                  <h3 className="shop border-t border-b border-[#E62020] text-[#E62020] text-f25 font-bold py-2 text-center uppercase">
                    Feni Display Center
                  </h3>
                  <div className="flex justify-between gap-3">
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/map.svg"} alt="" className="w-10" />
                      <p className="text-black font-normal ">
                        Yousuf Tower, (1st Floor) <br /> Fozol Master Lane
                        <br />
                        Mizan Road, Feni Sadar District - Feni
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/phone.svg"} alt="" className="w-10" />
                      <div>
                        <p>+880 17-55552597</p>
                        <p> +880 17-55552584</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/mail.svg"} alt="" className="w-10" />
                      <p> sales.feni@rr-imperial.com</p>
                    </div>
                    <div className="pt-5 flex items-center">
                      <Link
                        href="#"
                        scroll={false}
                        className="block relative bg-[#E62020] w-40 py-7 px-14 ms-auto "
                      >
                        <button
                          className="absolute inset-0 text-f20 bg-[#939598] rounded-br-[40px] border-[#E62020] text-white"
                          onClick={() => handleOpen("Feni")}
                        >
                          Map Link
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value="dhaka">
              <div className="bg-[#F2F5F6] py-10 px-12 mb-12">
                <div className="max-w-[80rem] mx-auto">
                  <h3 className="shop border-t border-b border-[#E62020] text-[#E62020] text-f25 font-bold py-2 text-center uppercase">
                    NAWABPUR DISPLAY CENTER
                  </h3>
                  <div className="flex justify-between gap-3">
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/map.svg"} alt="" className="w-10" />
                      <p className="text-black font-normal ">
                        Lalmia Electric Market (1st floor), <br /> 144/1,
                        Nawabpur Road, Nawabpur, <br /> Dhaka-1100, Bangladesh
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
                        href="#"
                        scroll={false}
                        className="block relative bg-[#E62020] w-40 py-7 px-14 ms-auto "
                      >
                        <button
                          className="absolute inset-0 text-f20 bg-[#939598] rounded-br-[40px] border-[#E62020] text-white"
                          onClick={() => handleOpen("Nawabpur")}
                        >
                          Map Link
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#F2F5F6] py-10 px-12 mb-12">
                <div className="max-w-[80rem] mx-auto">
                  <h3 className="shop border-t border-b border-[#E62020] text-[#E62020] text-f25 font-bold py-2 text-center uppercase">
                    Kaptan bazar Display Center
                  </h3>
                  <div className="flex justify-between gap-3">
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/map.svg"} alt="" className="w-10" />
                      <p className="text-black font-normal ">
                        Shop no. 271, Building No. 1 (2nd Floor). <br /> Kaptan
                        Bazar Complex <br /> Nawabpur, Dhaka
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/phone.svg"} alt="" className="w-10" />
                      <div>
                        <p> +880 1709-666657</p>
                        <p> 017-55552593</p>
                        <p>017-55552583</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/mail.svg"} alt="" className="w-10" />
                      <p>sales.kaptanbazar@rrimperial.com</p>
                    </div>
                    <div className="pt-5 flex items-center">
                      <Link
                        href="#"
                        scroll={false}
                        className="block relative bg-[#E62020] w-40 py-7 px-14 ms-auto "
                      >
                        <button
                          className="absolute inset-0 text-f20 bg-[#939598] rounded-br-[40px] border-[#E62020] text-white"
                          onClick={() => handleOpen("Kaptan bazar")}
                        >
                          Map Link
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#F2F5F6] py-10 px-12 mb-12">
                <div className="max-w-[80rem] mx-auto">
                  <h3 className="shop border-t border-b border-[#E62020] text-[#E62020] text-f25 font-bold py-2 text-center uppercase">
                    Mirpur Display Center
                  </h3>
                  <div className="flex justify-between gap-3">
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/map.svg"} alt="" className="w-10" />
                      <p className="text-black font-normal ">
                        House No-05, Road No-01, Block-A <br /> Rayinkhola
                        Mosque Road Section-02 <br /> Mirpur, Dhaka-1216
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/phone.svg"} alt="" className="w-10" />
                      <div>
                        <p> +880 17-77741943</p>
                        <p> 017-55552583</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/mail.svg"} alt="" className="w-10" />
                      <p>sales.dhaka3@rrimperial.com</p>
                    </div>
                    <div className="pt-5 flex items-center">
                      <Link
                        href="#"
                        scroll={false}
                        className="block relative bg-[#E62020] w-40 py-7 px-14 ms-auto "
                      >
                        <button
                          className="absolute inset-0 text-f20 bg-[#939598] rounded-br-[40px] border-[#E62020] text-white"
                          onClick={() => handleOpen("Mirpur")}
                        >
                          Map Link
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#F2F5F6] py-10 px-12 mb-12">
                <div className="max-w-[80rem] mx-auto">
                  <h3 className="shop border-t border-b border-[#E62020] text-[#E62020] text-f25 font-bold py-2 text-center uppercase">
                    Uttara Display Center
                  </h3>
                  <div className="flex justify-between gap-3">
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/map.svg"} alt="" className="w-10" />
                      <p className="text-black font-normal ">
                        Showroom No. 35,36 (2nd Floor), <br /> AB Super Market
                        Azampur, <br /> Uttara, Dhaka-1230
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/phone.svg"} alt="" className="w-10" />
                      <div>
                        <p> +880 17-77741921</p>
                        <p>017-55552583</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/mail.svg"} alt="" className="w-10" />
                      <p>sales.uttara@rrimperial.com</p>
                    </div>
                    <div className="pt-5 flex items-center">
                      <Link
                        href="#"
                        scroll={false}
                        className="block relative bg-[#E62020] w-40 py-7 px-14 ms-auto "
                      >
                        <button
                          className="absolute inset-0 text-f20 bg-[#939598] rounded-br-[40px] border-[#E62020] text-white"
                          onClick={() => handleOpen("Uttara")}
                        >
                          Map Link
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#F2F5F6] py-10 px-12 mb-12">
                <div className="max-w-[80rem] mx-auto">
                  <h3 className="shop border-t border-b border-[#E62020] text-[#E62020] text-f25 font-bold py-2 text-center uppercase">
                    Savar Display Center
                  </h3>
                  <div className="flex justify-between gap-3">
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/map.svg"} alt="" className="w-10" />
                      <p className="text-black font-normal ">
                        Showroom No. 204, B-116/1, <br /> 1st Floor Sikder
                        Tower, <br /> Sobhanbag, Savar
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/phone.svg"} alt="" className="w-10" />
                      <div>
                        <p>+880 17-55552591</p>
                        <p>017-55552583</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/mail.svg"} alt="" className="w-10" />
                      <p>sales.savar@rr-imperial.com</p>
                    </div>
                    <div className="pt-5 flex items-center">
                      <Link
                        href="#"
                        scroll={false}
                        className="block relative bg-[#E62020] w-40 py-7 px-14 ms-auto "
                      >
                        <button
                          className="absolute inset-0 text-f20 bg-[#939598] rounded-br-[40px] border-[#E62020] text-white"
                          onClick={() => handleOpen("Savar")}
                        >
                          Map Link
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#F2F5F6] py-10 px-12 mb-12">
                <div className="max-w-[80rem] mx-auto">
                  <h3 className="shop border-t border-b border-[#E62020] text-[#E62020] text-f25 font-bold py-2 text-center uppercase">
                    Narshingdi Display Center
                  </h3>
                  <div className="flex justify-between gap-3">
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/map.svg"} alt="" className="w-10" />
                      <p className="text-black font-normal ">
                        S.R Bobon , 179/1 Kawriya para <br /> Narshingdi Sadar
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/phone.svg"} alt="" className="w-10" />
                      <div>
                        <p>+880 17-77741954</p>
                        <p>017-55552583</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/mail.svg"} alt="" className="w-10" />
                      <p>sales.narsingdi@rrimperial.com</p>
                    </div>
                    <div className="pt-5 flex items-center">
                      <Link
                        href="#"
                        scroll={false}
                        className="block relative bg-[#E62020] w-40 py-7 px-14 ms-auto "
                      >
                        <button
                          className="absolute inset-0 text-f20 bg-[#939598] rounded-br-[40px] border-[#E62020] text-white"
                          onClick={() => handleOpen("Narshingdi")}
                        >
                          Map Link
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#F2F5F6] py-10 px-12 mb-12">
                <div className="max-w-[80rem] mx-auto">
                  <h3 className="shop border-t border-b border-[#E62020] text-[#E62020] text-f25 font-bold py-2 text-center uppercase">
                    Narayanganj Display Center
                  </h3>
                  <div className="flex justify-between gap-3">
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/map.svg"} alt="" className="w-10" />
                      <p className="text-black font-normal ">
                        Shamsul Haque Building (2nd Floor) 64/2,
                        <br />
                        Sirajuddaula Road, Kalir Bazar, Narayanganj.
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/phone.svg"} alt="" className="w-10" />
                      <div>
                        <p>+880 17-55552583</p>
                        <p>017-77741957</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/mail.svg"} alt="" className="w-10" />
                      <p>sales.narayanganj@rrimperial.com</p>
                    </div>
                    <div className="pt-5 flex items-center">
                      <Link
                        href="#"
                        scroll={false}
                        className="block relative bg-[#E62020] w-40 py-7 px-14 ms-auto "
                      >
                        <button
                          className="absolute inset-0 text-f20 bg-[#939598] rounded-br-[40px] border-[#E62020] text-white"
                          onClick={() => handleOpen("Narayanganj")}
                        >
                          Map Link
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#F2F5F6] py-10 px-12 mb-12">
                <div className="max-w-[80rem] mx-auto">
                  <h3 className="shop border-t border-b border-[#E62020] text-[#E62020] text-f25 font-bold py-2 text-center uppercase">
                    Gazipur Display Center
                  </h3>
                  <div className="flex justify-between gap-3">
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/map.svg"} alt="" className="w-10" />
                      <p className="text-black font-normal ">
                        Reaz Tower, Tangail Road,
                        <br />
                        Chandona Chowrasta, Gazipur-1702
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/phone.svg"} alt="" className="w-10" />
                      <div>
                        <p>+88017-55552575</p>
                        <p>017-55552590</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/mail.svg"} alt="" className="w-10" />
                      <p>sales.tongi@rr-imperial.com</p>
                    </div>
                    <div className="pt-5 flex items-center">
                      <Link
                        href="#"
                        scroll={false}
                        className="block relative bg-[#E62020] w-40 py-7 px-14 ms-auto "
                      >
                        <button
                          className="absolute inset-0 text-f20 bg-[#939598] rounded-br-[40px] border-[#E62020] text-white"
                          onClick={() => handleOpen("Gazipur")}
                        >
                          Map Link
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#F2F5F6] py-10 px-12 mb-12">
                <div className="max-w-[80rem] mx-auto">
                  <h3 className="shop border-t border-b border-[#E62020] text-[#E62020] text-f25 font-bold py-2 text-center uppercase">
                    Tongi Display Center
                  </h3>
                  <div className="flex justify-between gap-3">
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/map.svg"} alt="" className="w-10" />
                      <p className="text-black font-normal ">
                        Ashraf Shetu Shopping Complex Shop No. 146,
                        <br />
                        Block: B Charagali, Tongi, Gazipur 1702
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/phone.svg"} alt="" className="w-10" />
                      <div>
                        <p>+880 17-55552575</p>
                        <p>017-77741928</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/mail.svg"} alt="" className="w-10" />
                      <p>sales.tongi@rr-imperial.com</p>
                    </div>
                    <div className="pt-5 flex items-center">
                      <Link
                        href="#"
                        scroll={false}
                        className="block relative bg-[#E62020] w-40 py-7 px-14 ms-auto "
                      >
                        <button
                          className="absolute inset-0 text-f20 bg-[#939598] rounded-br-[40px] border-[#E62020] text-white"
                          onClick={() => handleOpen("Tongi")}
                        >
                          Map Link
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#F2F5F6] py-10 px-12 mb-12">
                <div className="max-w-[80rem] mx-auto">
                  <h3 className="shop border-t border-b border-[#E62020] text-[#E62020] text-f25 font-bold py-2 text-center uppercase">
                    Katabon Display Center
                  </h3>
                  <div className="flex justify-between gap-3">
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/map.svg"} alt="" className="w-10" />
                      <p className="text-black font-normal ">
                        Bangladesh Mashjid Mission Complex,
                        <br />
                        Central Mosque, Katabon, New Elephant Road, Dhaka
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/phone.svg"} alt="" className="w-10" />
                      <div>
                        <p>+880 17-77741947</p>
                        <p>017-55552583</p>
                        <p>017-77741943</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/mail.svg"} alt="" className="w-10" />
                      <p> sales.dhaka6@rrimperial.com</p>
                    </div>
                    <div className="pt-5 flex items-center">
                      <Link
                        href="#"
                        scroll={false}
                        className="block relative bg-[#E62020] w-40 py-7 px-14 ms-auto "
                      >
                        <button
                          className="absolute inset-0 text-f20 bg-[#939598] rounded-br-[40px] border-[#E62020] text-white"
                          onClick={() => handleOpen("Katabon")}
                        >
                          Map Link
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#F2F5F6] py-10 px-12 mb-12">
                <div className="max-w-[80rem] mx-auto">
                  <h3 className="shop border-t border-b border-[#E62020] text-[#E62020] text-f25 font-bold py-2 text-center uppercase">
                    Mohammadpur Display Center
                  </h3>
                  <div className="flex justify-between gap-3">
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/map.svg"} alt="" className="w-10" />
                      <p className="text-black font-normal ">
                        House Name: Klantir Sheshe, House -742/20
                        <br />
                        Beside Basila Bridge, Dhaka-1207
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/phone.svg"} alt="" className="w-10" />
                      <div>
                        <p>+88017-09666643</p>
                        <p>+880 17-77741943 </p>
                        <p>+880 17-55552583</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/mail.svg"} alt="" className="w-10" />
                      <p> sales.mohammadpur@rrimperial.com</p>
                    </div>
                    <div className="pt-5 flex items-center">
                      <Link
                        href="#"
                        scroll={false}
                        className="block relative bg-[#E62020] w-40 py-7 px-14 ms-auto"
                      >
                        <button
                          className="absolute inset-0 text-f20 bg-[#939598] rounded-br-[40px] border-[#E62020] text-white"
                          onClick={() => handleOpen("Mohammadpur")}
                        >
                          Map Link
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value="khulna">
              <div className="bg-[#F2F5F6] py-10 px-12 mb-12">
                <div className="max-w-[80rem] mx-auto">
                  <h3 className="shop border-t border-b border-[#E62020] text-[#E62020] text-f25 font-bold py-2 text-center uppercase">
                    Jashore Display Center
                  </h3>
                  <div className="flex justify-between gap-3">
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/map.svg"} alt="" className="w-10" />
                      <p className="text-black font-normal ">
                        12/14, R F Tower (1 st Floor), <br />
                        Keshablal Road Shahid Sarak (Opposite side of T&T
                        Office)
                        <br /> Sadar, Jashore.
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/phone.svg"} alt="" className="w-10" />
                      <div>
                        <p>+880 17-77741952</p>
                        <p>017-77741950</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/mail.svg"} alt="" className="w-10" />
                      <div>
                        <p>sales.jessore2@rrimperial.com</p>
                        <p>sales.jessore@rrimperial.com</p>
                      </div>
                    </div>
                    <div className="pt-5 flex items-center">
                      <Link
                        href="#"
                        scroll={false}
                        className="block relative bg-[#E62020] w-40 py-7 px-14 ms-auto "
                      >
                        <button
                          className="absolute inset-0 text-f20 bg-[#939598] rounded-br-[40px] border-[#E62020] text-white"
                          onClick={() => handleOpen("Jashore")}
                        >
                          Map Link
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#F2F5F6] py-10 px-12 mb-12">
                <div className="max-w-[80rem] mx-auto">
                  <h3 className="shop border-t border-b border-[#E62020] text-[#E62020] text-f25 font-bold py-2 text-center uppercase">
                    Khulna Display Center
                  </h3>
                  <div className="flex justify-between gap-3">
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/map.svg"} alt="" className="w-10" />
                      <p className="text-black font-normal ">
                        Kinder Clinic, (Ground Floor) 10 <br />
                        Darmosova Cross Road, Khulna
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/phone.svg"} alt="" className="w-10" />
                      <div>
                        <p>+880 17-77741952</p>
                        <p>017-09666641</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/mail.svg"} alt="" className="w-10" />
                      <p>sales.khulna@rrimperial.com</p>
                    </div>
                    <div className="pt-5 flex items-center">
                      <Link
                        href="#"
                        scroll={false}
                        className="block relative bg-[#E62020] w-40 py-7 px-14 ms-auto "
                      >
                        <button
                          className="absolute inset-0 text-f20 bg-[#939598] rounded-br-[40px] border-[#E62020] text-white"
                          onClick={() => handleOpen("Khulna")}
                        >
                          Map Link
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value="rajshahi">
              <div className="bg-[#F2F5F6] py-10 px-12 mb-12">
                <div className="max-w-[80rem] mx-auto">
                  <h3 className="shop border-t border-b border-[#E62020] text-[#E62020] text-f25 font-bold py-2 text-center uppercase">
                    Bogura Display Center
                  </h3>
                  <div className="flex justify-between gap-3">
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/map.svg"} alt="" className="w-10" />
                      <p className="text-black font-normal ">
                        Yunus Plaza, (1st Floor), M A Khan Lane, <br />
                        Satmatha, Bogura, Bangladesh.
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/phone.svg"} alt="" className="w-10" />
                      <div>
                        <p>+880 17-55552587</p>
                        <p>017-77741962</p>
                        <p>+88-051-62848</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/mail.svg"} alt="" className="w-10" />
                      <p>sales.bogra@rr-imperial.com</p>
                    </div>
                    <div className="pt-5 flex items-center">
                      <Link
                        href="#"
                        scroll={false}
                        className="block relative bg-[#E62020] w-40 py-7 px-14 ms-auto "
                      >
                        <button
                          className="absolute inset-0 text-f20 bg-[#939598] rounded-br-[40px] border-[#E62020] text-white"
                          onClick={() => handleOpen("Bogura")}
                        >
                          Map Link
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#F2F5F6] py-10 px-12 mb-12">
                <div className="max-w-[80rem] mx-auto">
                  <h3 className="shop border-t border-b border-[#E62020] text-[#E62020] text-f25 font-bold py-2 text-center uppercase">
                    Pabna Display Center
                  </h3>
                  <div className="flex justify-between gap-3">
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/map.svg"} alt="" className="w-10" />
                      <p className="text-black font-normal ">
                        Address: House- 472 (Ground floor) <br />
                        Jawtola road, Gopalpur, sadar, Pabna
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/phone.svg"} alt="" className="w-10" />
                      <div>
                        <p>+880 17-77741940</p>
                        <p>+880 17-55552587</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/mail.svg"} alt="" className="w-10" />
                      <p>sales.pabna1@rrimperial.com</p>
                    </div>
                    <div className="pt-5 flex items-center">
                      <Link
                        href="#"
                        scroll={false}
                        className="block relative bg-[#E62020] w-40 py-7 px-14 ms-auto "
                      >
                        <button
                          className="absolute inset-0 text-f20 bg-[#939598] rounded-br-[40px] border-[#E62020] text-white"
                          onClick={() => handleOpen("Pabna")}
                        >
                          Map Link
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#F2F5F6] py-10 px-12 mb-12">
                <div className="max-w-[80rem] mx-auto">
                  <h3 className="shop border-t border-b border-[#E62020] text-[#E62020] text-f25 font-bold py-2 text-center uppercase">
                    Rajshahi Display Center
                  </h3>
                  <div className="flex justify-between gap-3">
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/map.svg"} alt="" className="w-10" />
                      <p className="text-black font-normal ">
                        21, Rani Bazar, Rajshahi
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/phone.svg"} alt="" className="w-10" />
                      <div>
                        <p>+880 17-77741964</p>
                        <p>017-55552587</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/mail.svg"} alt="" className="w-10" />
                      <p>sales.rajshahi@rrimperial.com</p>
                    </div>
                    <div className="pt-5 flex items-center">
                      <Link
                        href="#"
                        scroll={false}
                        className="block relative bg-[#E62020] w-40 py-7 px-14 ms-auto "
                      >
                        <button
                          className="absolute inset-0 text-f20 bg-[#939598] rounded-br-[40px] border-[#E62020] text-white"
                          onClick={() => handleOpen("Rajshahi")}
                        >
                          Map Link
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value="rangpur">
              <div className="bg-[#F2F5F6] py-10 px-12 mb-12">
                <div className="max-w-[80rem] mx-auto">
                  <h3 className="shop border-t border-b border-[#E62020] text-[#E62020] text-f25 font-bold py-2 text-center uppercase">
                    Rangpur Display Center
                  </h3>
                  <div className="flex justify-between gap-3">
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/map.svg"} alt="" className="w-10" />
                      <p className="text-black font-normal ">
                        House no: 04, Road no:01, opposite Of Bodi Babur Math
                        <br /> Gupta Para, Rangpur
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/phone.svg"} alt="" className="w-10" />
                      <div>
                        <p>+880 17-55552592</p>
                        <p>017-55552587</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/mail.svg"} alt="" className="w-10" />
                      <p> sales.rangpur@rr-imperial.com</p>
                    </div>
                    <div className="pt-5 flex items-center">
                      <Link
                        href="#"
                        scroll={false}
                        className="block relative bg-[#E62020] w-40 py-7 px-14 ms-auto "
                      >
                        <button
                          className="absolute inset-0 text-f20 bg-[#939598] rounded-br-[40px] border-[#E62020] text-white"
                          onClick={() => handleOpen("Rangpur")}
                        >
                          Map Link
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value="mymensingh">
              {" "}
              <div className="bg-[#F2F5F6] py-10 px-12 mb-12">
                <div className="max-w-[80rem] mx-auto">
                  <h3 className="shop border-t border-b border-[#E62020] text-[#E62020] text-f25 font-bold py-2 text-center uppercase">
                    Mymenshing Display Center
                  </h3>
                  <div className="flex justify-between gap-3">
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/map.svg"} alt="" className="w-10" />
                      <p className="text-black font-normal ">
                        17 Sherpur Pukur Road Amlapara, Mymensingh
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/phone.svg"} alt="" className="w-10" />
                      <div>
                        <p>+880 17-01223597</p>
                        <p>+880 17-77741954</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      {/* <img src={"/svg/mail.svg"} alt="" className="w-10" />
                      <p>sales.nawabpur@rr-imperial.com</p> */}
                    </div>
                    <div className="pt-5 flex items-center">
                      <Link
                        href="#"
                        scroll={false}
                        className="block relative bg-[#E62020] w-40 py-7 px-14 ms-auto "
                      >
                        <button
                          className="absolute inset-0 text-f20 bg-[#939598] rounded-br-[40px] border-[#E62020] text-white"
                          onClick={() => handleOpen("Mymenshing")}
                        >
                          Map Link
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value="shylet">
              <div className="bg-[#F2F5F6] py-10 px-12 mb-12">
                <div className="max-w-[80rem] mx-auto">
                  <h3 className="shop border-t border-b border-[#E62020] text-[#E62020] text-f25 font-bold py-2 text-center uppercase">
                    Sylhet Display Center
                  </h3>
                  <div className="flex justify-between gap-3">
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/map.svg"} alt="" className="w-10" />
                      <p className="text-black font-normal ">
                        Manru Shopping City, 2nd Floor, <br /> Shop No-231,232
                        233 234,235, <br /> Mirbox Tula, Chauhatta. Sylhet
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/phone.svg"} alt="" className="w-10" />
                      <div>
                        <p> +88017-77741955</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/mail.svg"} alt="" className="w-10" />
                      <p>sales.sylhet@rrimperial.com</p>
                    </div>
                    <div className="pt-5 flex items-center">
                      <Link
                        href="#"
                        className="block relative bg-[#E62020] w-40 py-7 px-14 ms-auto "
                      >
                        <button
                          className="absolute inset-0 text-f20 bg-[#939598] rounded-br-[40px] border-[#E62020] text-white"
                          onClick={() => handleOpen("Sylhet")}
                        >
                          Map Link
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
          </TabsBody>
        </Tabs>
      </div>

      <div className="container"></div>

      <div className="bg-[#F2F5F6] py-5">
        <div className="container max-w-xl">
          <SubmitQueryForm />
        </div>
      </div>
      <Footer />
      <QuickNavigation />

      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader className="justify-center">
          Regional Office {office}
        </DialogHeader>
        <DialogBody className="">
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29202.2894880896!2d90.39487138189729!3d23.80842031187588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c727497c47e7%3A0x5e18063b966d3e18!2sR.R%20Imperial%20Ltd!5e0!3m2!1sen!2sbd!4v1656416424661!5m2!1sen!2sbd"
            width="100%"
            height="500px"
            style={{ borderRadius: "5px" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </DialogBody>
      </Dialog>
    </div>
  );
};

export default ContactUs;
