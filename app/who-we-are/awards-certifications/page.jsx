"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { AwardCertification } from "@/components/LottieComponents";
import WhoWeAreMaster from "@/components/WhoWeAre/WhoWeAreMaster";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import Image from "next/image";
import React, { useState } from "react";
import { FaDownload } from "react-icons/fa";
import { MdOutlineDoubleArrow } from "react-icons/md";

const AwardsCertificates = () => {
  const [open, setOpen] = useState(false);
  const [certificateName, setCertificateName] = useState();
  const [certificateSrc, setCertificateSrc] = useState();
  const handleOpen = (certificateSrc, certificateName) => {
    setOpen(!open);
    setCertificateName(certificateName);
    setCertificateSrc(certificateSrc);
  };
  return (
    <div>
      <Header />
      <WhoWeAreMaster>
        <div className="bg-white p-4 lg:p-8 mb-12" id="who-we-are">
          <div className="grid grid-cols-12 gap-5 ">
            <div className="col-span-12 md:col-span-5 space-y-4 md:space-y-8 lg:space-y-[72px] md:mt-14 lg:mt-0">
              <div
                className="group bg-[#E6E7E8] hover:bg-[#E62020] hover:text-white transition flex justify-between gap-5 p-3 lg:mt-[70px] rounded-tl-2xl rounded-bl-2xl cursor-pointer"
                onClick={() =>
                  handleOpen(
                    "/img/who-we-are/certificate/backup/certificate1.png",
                    "UL Certificate"
                  )
                }
              >
                <img
                  src="/img/who-we-are/certificate/certificate1.png"
                  alt=""
                  className="md:w-[45px] md:h-[60px] lg:w-[60px] lg:h-[80px] rounded-lg"
                />
                <div className="flex-1 text-[#939598] group-hover:text-white">
                  <h5 className="text-f16 lg:text-f20 font-normal text-right pb-2  border-b border-[#E62020] group-hover:border-white transition">
                    UL Certificate
                  </h5>
                  <div className="flex gap-2 justify-end items-center md:mt-2 lg:mt-[11px]">
                    <span className="text-f16 lg:text-f20 font-normal">
                      View or Download
                    </span>
                    <MdOutlineDoubleArrow className="rotate-180 text-[16px] lg:text-f25" />
                  </div>
                </div>
              </div>
              <div
                className="group bg-[#E6E7E8] hover:bg-[#E62020] hover:text-white transition flex justify-between gap-5 p-3 mt-[70px] rounded-tl-2xl rounded-bl-2xl cursor-pointer"
                onClick={() =>
                  handleOpen(
                    "/img/who-we-are/certificate/backup/certificate2.png",
                    "VDE Certificate"
                  )
                }
              >
                <img
                  src="/img/who-we-are/certificate/certificate2.png"
                  alt=""
                  className="md:w-[55px] md:h-[60px] lg:w-[80px] lg:h-[80px] rounded-lg order-2 lg:order-1"
                />
                <div className="flex-1 text-[#939598] group-hover:text-white order-1 md:order-2">
                  <h5 className="text-f16 lg:text-f20 font-normal text-left md:text-right pb-2  border-b border-[#E62020] group-hover:border-white transition">
                    VDE Certificate
                  </h5>
                  <div className="flex gap-2 justify-start md:justify-end items-center md:mt-2 lg:mt-[11px]">
                    <span className="text-f16 lg:text-f20 font-normal">
                      View or Download
                    </span>
                    <MdOutlineDoubleArrow className="rotate-180 text-[16px] lg:text-f25" />
                  </div>
                </div>
              </div>
              <div
                className="group bg-[#E6E7E8] hover:bg-[#E62020] hover:text-white transition flex justify-between gap-5 p-3 mt-[70px] rounded-tl-2xl rounded-bl-2xl cursor-pointer"
                onClick={() =>
                  handleOpen(
                    "/img/who-we-are/certificate/backup/certificate3.png",
                    "VDE Certificate"
                  )
                }
              >
                <img
                  src="/img/who-we-are/certificate/certificate2.png"
                  alt=""
                  className="md:w-[55px] md:h-[60px] lg:w-[80px] lg:h-[80px] rounded-lg"
                />
                <div className="flex-1 text-[#939598] group-hover:text-white">
                  <h5 className="text-f16 lg:text-f20 font-normal text-right pb-2  border-b border-[#E62020] group-hover:border-white transition">
                    VDE Certificate
                  </h5>
                  <div className="flex gap-2 justify-end items-center md:mt-2 lg:mt-[11px]">
                    <span className="text-f16 lg:text-f20 font-normal">
                      {" "}
                      View or Download
                    </span>
                    <MdOutlineDoubleArrow className="rotate-180 text-[16px] lg:text-f25" />
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block col-span-2">
              <AwardCertification className="h-[480px] lg:h-[650px]" />
            </div>
            <div className="col-span-12 md:col-span-5 space-y-4 md:space-y-8 lg:space-y-[72px] md:mt-14 lg:mt-0">
              <div
                className="group bg-[#E6E7E8] hover:bg-[#E62020] hover:text-white transition flex justify-between gap-8 p-3 lg:mt-[70px] rounded-tr-2xl rounded-br-2xl cursor-pointer"
                onClick={() =>
                  handleOpen(
                    "/img/who-we-are/certificate/backup/certificate4.png",
                    "UL Certificate"
                  )
                }
              >
                <img
                  src="/img/who-we-are/certificate/certificate1.png"
                  alt=""
                  className="md:w-[45px] md:h-[60px] lg:w-[60px] lg:h-[80px] rounded-lg order-2"
                />
                <div className="flex-1 text-[#939598] group-hover:text-white order-1">
                  <h5 className="text-f16 lg:text-f20 font-normal pb-2  border-b border-[#E62020] group-hover:border-white transition">
                    UL Certificate
                  </h5>

                  <div className="flex gap-2 justify-start items-center md:mt-2 lg:mt-[11px]">
                    <MdOutlineDoubleArrow className=" text-[16px] lg:text-f25" />
                    <span className="text-f16 lg:text-f20 font-normal">
                      {" "}
                      View or Download
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="group bg-[#E6E7E8] hover:bg-[#E62020] hover:text-white transition flex justify-between gap-8 p-3 mt-[70px] rounded-tr-2xl rounded-br-2xl cursor-pointer"
                onClick={() =>
                  handleOpen(
                    "/img/who-we-are/certificate/backup/certificate5.png",
                    "VDE Certificate"
                  )
                }
              >
                <img
                  src="/img/who-we-are/certificate/certificate2.png"
                  alt=""
                  className="md:w-[55px] md:h-[60px] lg:w-[60px] lg:h-[80px] rounded-lg order-1 md:order-2"
                />
                <div className="flex-1 text-[#939598] group-hover:text-white order-1">
                  <h5 className="text-f16 lg:text-f20 font-normal pb-2 text-right md:text-left border-b border-[#E62020] group-hover:border-white transition">
                    VDE Certificate
                  </h5>
                  <div className="flex gap-2 justify-end md:justify-start items-center md:mt-2 lg:mt-[11px]">
                    <MdOutlineDoubleArrow className="text-[16px] lg:text-f25" />
                    <span className="text-f16 lg:text-f20 font-normal">
                      {" "}
                      View or Download
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="group bg-[#E6E7E8] hover:bg-[#E62020] hover:text-white transition flex justify-between gap-8 p-3 mt-[70px] rounded-tr-2xl rounded-br-2xl cursor-pointer"
                onClick={() =>
                  handleOpen(
                    "/img/who-we-are/certificate/backup/certificate6.png",
                    "VDE Certificate"
                  )
                }
              >
                <img
                  src="/img/who-we-are/certificate/certificate2.png"
                  alt=""
                  className="md:w-[55px] md:h-[60px] lg:w-[80px] lg:h-[80px] rounded-lg order-2"
                />
                <div className="flex-1 text-[#939598] group-hover:text-white order-1">
                  <h5 className="text-f16 lg:text-f20 font-normal  pb-2  border-b border-[#E62020] group-hover:border-white transition">
                    VDE Certificate
                  </h5>
                  <div className="flex gap-2 justify-start items-center md:mt-2 lg:mt-[11px]">
                    <MdOutlineDoubleArrow className="text-[16px] lg:text-f25" />
                    <span className="text-f16 lg:text-f20 font-normal">
                      {" "}
                      View or Download
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="w-full h-96 flex justify-center items-center text-6xl bg-gray-600 mb-12">
            Lottie
          </div> */}
        </div>
      </WhoWeAreMaster>
      <Footer />
      <Dialog
        open={open}
        handler={handleOpen}
        size="xs"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader className="justify-center">
          {certificateName}
        </DialogHeader>
        <DialogBody className="">
          <Image
            src={certificateSrc}
            alt="certificate"
            height={600}
            width={500}
          />
        </DialogBody>
        <DialogFooter className="flex items-center">
          <a href={certificateSrc} download className="me-3">
            <Button variant="text" className="flex items-center gap-2">
              Download
              <FaDownload />
            </Button>
          </a>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default AwardsCertificates;
