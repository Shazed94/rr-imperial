"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { ProductHome } from "@/components/LottieComponents";
import ProductsMaster from "@/components/Products/ProductsMaster";
import QuickNavigation from "@/components/QuickNavigation";
import { Button, Dialog, DialogBody, Input } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const ProductDetails = ({ params }) => {
  let paramName = params.productCategory.replace(/-/g, " ");
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <ProductHome className="" />
      </div>
      <div className="container max-w-5xl text-center py-6 lg:py-14">
        <h3 className="text-[#E62020] text-f28 lg:text-f38 font-bold uppercase ">
          {paramName}
        </h3>
      </div>
      <div className="container px-4 lg:px-0">
        <div className="relative flex w-full ">
          <Input
            type="email"
            className="ps-56 py-6 rounded-2xl !bg-[#F2F5F6] placeholder:text-gray-500 focus:!border focus:!border-[#cdcdcd] focus:!border-t focus-within:outline-none"
            labelProps={{
              className: "hidden",
            }}
            placeholder="Inpur Search Keywords Here"
          />
          <Button
            size="md"
            color="gray"
            className="!absolute left-1 top-1 h-[42px] shadow-none bg-white text-[#6D6E71] rounded-s-lg"
            // containerProps={{
            //   className: "w-20",
            // }}
          >
            Select Category{" "}
            <MdOutlineArrowDropDown className="inline ms-3" size={20} />
          </Button>
        </div>
      </div>
      <div className="container grid grid-cols-2 lg:grid-cols-8 place-items-center gap-2 py-12">
        <Link href="#">
          <button
            className={`w-40 px-2 py-3 font-normal rounded-xl text-white ${
              params.productCategory === "house-wire-cables"
                ? "bg-[#E62020]"
                : "bg-[#D1D3D4]"
            }  hover:bg-[#E62020] transition-colors `}
          >
            HOUSE WIRE CABLES
          </button>
        </Link>

        <Link href="#">
          <button
            className={`w-40 px-2 py-3 font-normal rounded-xl text-white ${
              params.productCategory === "low-voltage-cables"
                ? "bg-[#E62020]"
                : "bg-[#D1D3D4]"
            } hover:bg-[#E62020] transition-colors `}
          >
            LOW VOLTAGE CABLES
          </button>
        </Link>

        <Link href="#">
          <button
            className={`w-40 px-2 py-3 font-normal rounded-xl text-white ${
              params.productCategory === "medium-voltage-cables"
                ? "bg-[#E62020]"
                : "bg-[#D1D3D4]"
            } hover:bg-[#E62020] transition-colors `}
          >
            MEDIUM VOLTAGE CABLES
          </button>
        </Link>
        <Link href="#">
          <button
            className={`w-40 px-2 py-3 font-normal rounded-xl text-white ${
              params.productCategory === "high-voltage-cables"
                ? "bg-[#E62020]"
                : "bg-[#D1D3D4]"
            } hover:bg-[#E62020] transition-colors `}
          >
            HIGH VOLTAGE CABLES
          </button>
        </Link>
        <Link href="#">
          <button
            className={`w-40 px-2 py-3 font-normal rounded-xl text-white ${
              params.productCategory === "fire-survival-cables"
                ? "bg-[#E62020]"
                : "bg-[#D1D3D4]"
            } hover:bg-[#E62020] transition-colors `}
          >
            FIRE SURVIVAL CABLES
          </button>
        </Link>
        <Link href="#">
          <button
            className={`w-40 px-2 py-3 font-normal rounded-xl text-white ${
              params.productCategory === "communication-cables"
                ? "bg-[#E62020]"
                : "bg-[#D1D3D4]"
            } hover:bg-[#E62020] transition-colors `}
          >
            COMMUNICATION CABLES
          </button>
        </Link>
        <Link href="#">
          <button
            className={`w-40 px-2 py-3 font-normal rounded-xl text-white ${
              params.productCategory === "instrumation-cables"
                ? "bg-[#E62020]"
                : "bg-[#D1D3D4]"
            } hover:bg-[#E62020] transition-colors `}
          >
            INSTRUMENTATION CABLES
          </button>
        </Link>
        <Link href="#">
          <button
            className={`w-40 px-4 py-3 font-normal text- rounded-xl text-white ${
              params.productCategory === "overhead-cables"
                ? "bg-[#E62020]"
                : "bg-[#D1D3D4]"
            } hover:bg-[#E62020] transition-colors`}
          >
            OVERHEAD CABLES
          </button>
        </Link>
      </div>
      <ProductsMaster>
        <div className="bg-[#F2F5F6] p-4 lg:p-5 mb-6 lg:mb-14">
          <h2 className="text-[#E62020] text-f18 lg:text-f22 font-bold mb-5">
            BYA-FR/BAYA-FR | Single Core (Cu or AI/PVC-FR)
          </h2>

          <div className="flex flex-col lg:flex-row bg-white rounded-[17px] p-4 lg:p-10 mb-12">
            <div className="w-full lg:w-1/2 flex flex-wrap flex-col items-center justify-center lg:border-r lg:border-r-[#D1D3D4]">
              <Image
                src="/img/product/product-cable.png"
                alt=""
                width={300}
                height={60}
                quality={100}
                className="mx-auto mb-8"
              />
              <h5 className="text-[#E62020] text-f16 font-normal mb-3">
                *REACH | RoHS | CE
              </h5>
              <Image
                src="/img/product/wire-cut.png"
                alt=""
                width={200}
                height={80}
                quality={100}
                className="mx-auto mb-8"
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-wrap flex-col gap-8 items-center lg:ps-6">
              <div>
                <h4 className="text-[#E62020] text-f20 font-normal text-center mb-4">
                  CHARACTERISTICS
                </h4>
                <div className="grid grid-cols-4 lg:grid-cols-6 gap-3">
                  <div className="flex flex-col items-center text-center">
                    <Image
                      src="/img/product/char1.png"
                      alt=""
                      width={45}
                      height={40}
                      className="mb-2"
                    />
                    <span className="text-[10px] leading-tight">FR Cables</span>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <Image
                      src="/img/product/char2.png"
                      alt=""
                      width={45}
                      height={40}
                      className="mb-2"
                    />
                    <span className="text-[10px] leading-tight">Lead free</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Image
                      src="/img/product/char3.png"
                      alt=""
                      width={45}
                      height={40}
                      className="mb-2"
                    />
                    <span className="text-[10px] leading-tight">
                      Flame Retardant
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Image
                      src="/img/product/char4.png"
                      alt=""
                      width={45}
                      height={40}
                      className="mb-2"
                    />
                    <span className="text-[10px] leading-tight">
                      Flame don’t spread IEC 60332-3-24
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Image
                      src="/img/product/char5.png"
                      alt=""
                      width={45}
                      height={40}
                      className="mb-2"
                    />
                    <span className="text-[10px] leading-tight">
                      Fire Resistant IEC 60331 BS 6387
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Image
                      src="/img/product/char6.png"
                      alt=""
                      width={45}
                      height={40}
                      className="mb-2"
                    />
                    <span className="text-[10px] leading-tight">
                      Meter Marking
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Image
                      src="/img/product/char7.png"
                      alt=""
                      width={45}
                      height={40}
                      className="mb-2"
                    />
                    <span className="text-[10px] leading-tight">
                      RoHS Compliant
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Image
                      src="/img/product/char8.png"
                      alt=""
                      width={45}
                      height={40}
                      className="mb-2"
                    />
                    <span className="text-[10px] leading-tight">
                      REACH Compliant
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Image
                      src="/img/product/char9.png"
                      alt=""
                      width={45}
                      height={40}
                      className="mb-2"
                    />
                    <span className="text-[10px] leading-tight">Rigid</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-[#E62020] text-f20 font-normal text-center mb-4">
                  INSTALLATION CONDITION
                </h4>
                <div className="grid grid-cols-7 gap-3">
                  <div className="flex flex-col items-center text-center">
                    <Image
                      src="/img/product/char10.png"
                      alt=""
                      width={60}
                      height={40}
                      className="mb-2"
                    />
                    <span className="text-[10px] leading-tight">Home Use</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Image
                      src="/img/product/char11.png"
                      alt=""
                      width={60}
                      height={40}
                      className="mb-2"
                    />
                    <span className="text-[10px] leading-tight">Open air</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Image
                      src="/img/product/char12.png"
                      alt=""
                      width={60}
                      height={40}
                      className="mb-2"
                    />
                    <span className="text-[10px] leading-tight">
                      Outdoor Installation
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Image
                      src="/img/product/char13.png"
                      alt=""
                      width={60}
                      height={40}
                      className="mb-2"
                    />
                    <span className="text-[10px] leading-tight">
                      Fire Fighting Use
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Image
                      src="/img/product/char14.png"
                      alt=""
                      width={60}
                      height={40}
                      className="mb-2"
                    />
                    <span className="text-[10px] leading-tight">
                      In Conduit
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Image
                      src="/img/product/char15.png"
                      alt=""
                      width={60}
                      height={40}
                      className="mb-2"
                    />
                    <span className="text-[10px] leading-tight">
                      Underground
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Image
                      src="/img/product/char16.png"
                      alt=""
                      width={60}
                      height={40}
                      className="mb-2"
                    />
                    <span className="text-[10px] leading-tight">
                      Industrial Use
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h4 className="text-[#E62020] text-f20 font-normal mb-3">
              APPLICATION
            </h4>
            <p>
              Suitable for use in fixed installations, in applications where
              maintenance of power supply during a fire is required for a
              defined period of time such as for essential safety circuits, fire
              alarm systems and sprinkler systems etc.
            </p>
          </div>

          <div className="mb-10">
            <h4 className="text-[#E62020] text-f20 font-normal mb-3">
              CONSTRUCTION
            </h4>
            <div className="">
              <p className=" text-black">
                <b>Conductor:</b> Solid/Stranded Circular/ Compacted/ Sector
                Shaped, Plain annealed Copper, Class 1 or Class 2 to BDS IEC
                60228
              </p>
              <p className=" text-black">
                <b>Fire barrier:</b> Mica tape (Synthetic or Glass)
              </p>
              <p className=" text-black">
                <b>Insulation :</b> Cross linked Polyethylene, XLPE to BDS IEC
                60502-1
              </p>
              <p className=" text-black">
                <b>Inner Covering:</b> Flame retardant (FR) PVC, ST2 to BDS IEC
                60502-1
              </p>
              <p className=" text-black">
                <b>Sheath :</b> Flame Retardant (FR) PVC, ST2 to BDS IEC 60502-1
              </p>
            </div>
          </div>

          <div className="mb-10">
            <h4 className="text-[#E62020] text-f20 font-normal mb-3">
              PROPERTIES
            </h4>
            <div className="">
              <p className="text-black">
                Fire resistance test - IEC 60331-21, BS 6387
              </p>
              <p className="text-black">
                Fire resistance test - IEC 60331-21, BS 6387
              </p>
              <p className="text-black">Flame retardant test - IEC 60332-1-2</p>
            </div>
          </div>

          <div className="mb-10">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="">
                <h4 className="text-[#E62020] text-f20 font-normal mb-3">
                  <span className="span"> VOLTAGE GRADE</span>
                </h4>
                <p className=" text-black pe-5">
                  <b>Uo/U (Um) :</b> 0.6/1.0 (1.2) kV
                </p>
                <p className=" text-black">
                  <b>Test Voltage:</b> 3.5 kV
                </p>
              </div>
              <div className="">
                <h4 className="text-[#E62020] text-f20 font-normal mb-3">
                  <span className="span"> OPERATING TEMP.</span>
                </h4>
                <p className=" text-black">- 20°C to +90°C</p>
                <p className=" text-black">Max Short Circuit 750°C</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-6 lg:col-span-4">
                <h4 className="text-[#E62020] text-f20 font-normal mb-3">
                  <span className="span"> MIN. BENDING RADIUS</span>
                </h4>
                <p className="text-[12px] text-black pe-5">
                  Approx. 12x Cable Diameter
                </p>
              </div>
              <div className="col-span-6 lg:col-span-3">
                <h4 className="text-[#E62020] text-f20 font-normal mb-3">
                  <span className="span">STANDARD</span>
                </h4>
                <p className="text-[12px] text-black pe-4">BDS IEC 60502-1</p>
              </div>
              <div className="col-span-12 lg:col-span-5">
                <h4 className="text-[#E62020] text-f20 font-normal mb-3">
                  <span className="span">COLOR</span>
                </h4>
                <div className="text-black flex gap-2">
                  <div className="min-w-max">Insulated Core:</div>
                  <div>
                    <p className="flex items-center gap-2">
                      <span className="block w-3 h-3 min-w-[12px] rounded-full bg-[#EB2227]"></span>
                      Red
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="block w-3 h-3 min-w-[12px] rounded-full bg-[#FBEA07]"></span>
                      Yellow
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="block w-3 h-3 min-w-[12px] rounded-full bg-[#1080C3]"></span>
                      Blue
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="block w-3 h-3 min-w-[12px] rounded-full bg-[#231F20]"></span>
                      Black
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="block w-3 h-3 min-w-[12px] rounded-full bg-[#EB2227]"></span>
                      <span>(Red or other colors available on request)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cursor-pointer mt-5" onClick={handleOpen}>
            <img src="/img/product/table.png" alt="" className="mx-auto" />
          </div>
        </div>

        {/* <div className="product_details bg-[#F2F5F6] p-5 mb-14">
          <div className="bg-[#148C8C] py-3 px-5 rounded-md mb-8">
            <h4 className="text-white">
              2xY-FiR I 4 Core (Cu/Mica Tape/XLPE/PVC-FR/PVC-FR)
            </h4>
          </div>
          <div className="flex gap-6 ">
            <div className="w-[70%] pe-5 border-r border-r-[#148C8C]">
              <div className="mb-6">
                <h4 className="text-[14px] font-bold text-[#148C8C] mb-1 relative overflow-hidden">
                  <span className="span"> APPLICATION</span>
                </h4>
                <p className="text-[12px] text-black">
                  Suitable for use in fixed installations, in applications where
                  maintenance of power supply during a fire is required for a
                  defined period of time such as for essential safety circuits,
                  fire alarm systems and sprinkler systems etc.
                </p>
              </div>
              <div className="mb-6">
                <h4 className="h4 text-[14px] font-bold text-[#148C8C] mb-1 relative overflow-hidden">
                  <span className="span">CONSTRUCTION</span>
                </h4>
                <p className="text-[12px] text-black">
                  <b>Conductor:</b> Solid/Stranded Circular/ Compacted/ Sector
                  Shaped, Plain annealed Copper, Class 1 or Class 2 to BDS IEC
                  60228
                </p>
                <p className="text-[12px] text-black">
                  <b>Fire barrier:</b> Mica tape (Synthetic or Glass)
                </p>
                <p className="text-[12px] text-black">
                  <b>Insulation :</b> Cross linked Polyethylene, XLPE to BDS IEC
                  60502-1
                </p>
                <p className="text-[12px] text-black">
                  <b>Inner Covering:</b> Flame retardant (FR) PVC, ST2 to BDS
                  IEC 60502-1
                </p>
                <p className="text-[12px] text-black">
                  <b>Sheath :</b> Flame Retardant (FR) PVC, ST2 to BDS IEC
                  60502-1
                </p>
              </div>
              <div className="mb-6">
                <h4 className="text-[14px] font-bold text-[#148C8C] mb-1 relative overflow-hidden">
                  <span className="span"> PROPERTIES</span>
                </h4>
                <p className="text-[12px] text-black">
                  Fire resistance test - IEC 60331-21, BS 6387
                </p>
                <p className="text-[12px] text-black">
                  Fire resistance test - IEC 60331-21, BS 6387
                </p>
                <p className="text-[12px] text-black">
                  Flame retardant test - IEC 60332-1-2
                </p>
              </div>
              <div className="mb-6">
                <div className="flex">
                  <div className="">
                    <h4 className="text-[14px] font-bold text-[#148C8C] mb-1 relative overflow-hidden">
                      <span className="span"> VOLTAGE GRADE</span>
                    </h4>
                    <p className="text-[12px] text-black pe-5">
                      <b>Uo/U (Um) :</b> 0.6/1.0 (1.2) kV
                    </p>
                    <p className="text-[12px] text-black">
                      <b>Test Voltage:</b> 3.5 kV
                    </p>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[14px] font-bold text-[#148C8C] mb-1 relative overflow-hidden">
                      <span className="span"> OPERATING TEMP.</span>
                    </h4>
                    <p className="text-[12px] text-black">- 20°C to +90°C</p>
                    <p className="text-[12px] text-black">
                      Max Short Circuit 750°C
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <div className="flex">
                  <div className="">
                    <h4 className="text-[14px] font-bold text-[#148C8C] mb-1 relative overflow-hidden">
                      <span className="span"> MIN. BENDING RADIUS</span>
                    </h4>
                    <p className="text-[12px] text-black pe-5">
                      Approx. 12x Cable Diameter
                    </p>
                  </div>
                  <div className="">
                    <h4 className="text-[14px] font-bold text-[#148C8C] mb-1 relative overflow-hidden">
                      <span className="span">STANDARD</span>
                    </h4>
                    <p className="text-[12px] text-black pe-4">
                      BDS IEC 60502-1
                    </p>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[14px] font-bold text-[#148C8C] mb-1 relative overflow-hidden">
                      <span className="span">COLOR</span>
                    </h4>
                    <p className="text-[12px] text-black flex gap-2">
                      <div className="min-w-max">
                        <b>Insulated Core:</b>
                      </div>{" "}
                      <div>
                        <p className="flex items-center gap-2">
                          <span className="block w-3 h-3 rounded-full bg-[#EB2227]"></span>
                          Red
                        </p>
                        <p className="flex items-center gap-2">
                          <span className="block w-3 h-3 rounded-full bg-[#FBEA07]"></span>
                          Yellow
                        </p>
                        <p className="flex items-center gap-2">
                          <span className="block w-3 h-3 rounded-full bg-[#1080C3]"></span>
                          Blue
                        </p>
                        <p className="flex items-center gap-2">
                          <span className="block w-3 h-3 rounded-full bg-[#231F20]"></span>
                          Black
                        </p>
                        <p className="flex items-center gap-4">
                          <span className="block w-3 h-3 rounded-full bg-[#EB2227]"></span>
                          <span>
                            (Red or other colors available on request)
                          </span>
                        </p>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[30%]">
              <Image
                src="/img/product/product-cable.png"
                width={180}
                height={40}
                alt=""
                className="mb-8"
              />
              <Image
                src="/img/product/wire-cut.png"
                width={120}
                height={40}
                alt=""
                className="mb-8"
              />

              <div className="mb-7">
                <h4 className="text-[14px] font-bold text-[#148C8C] relative overflow-hidden mb-2">
                  <span className="span">CHARACTERISTICS</span>
                </h4>

                <div className="grid grid-cols-6 gap-3">
                  <img src="/img/product/char1.png" alt="" />
                  <img src="/img/product/char2.png" alt="" />
                  <img src="/img/product/char3.png" alt="" />
                  <img src="/img/product/char4.png" alt="" />
                  <img src="/img/product/char5.png" alt="" />
                  <img src="/img/product/char6.png" alt="" />
                  <img src="/img/product/char7.png" alt="" />
                  <img src="/img/product/char8.png" alt="" />
                  <img src="/img/product/char9.png" alt="" />
                </div>
              </div>
              <div className="mb-7">
                <h4 className="text-[14px] font-bold text-[#148C8C] relative overflow-hidden mb-2">
                  <span className="span">INSTALLATION CONDITION</span>
                </h4>

                <div className="grid grid-cols-6 gap-3">
                  <img src="/img/product/char1.png" alt="" />
                  <img src="/img/product/char2.png" alt="" />
                  <img src="/img/product/char3.png" alt="" />
                  <img src="/img/product/char4.png" alt="" />
                  <img src="/img/product/char5.png" alt="" />
                  <img src="/img/product/char6.png" alt="" />
                  <img src="/img/product/char7.png" alt="" />
                  <img src="/img/product/char8.png" alt="" />
                  <img src="/img/product/char9.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="cursor-pointer mt-5" onClick={handleOpen}>
            <img src="/img/product/table.png" alt="" className="mx-auto" />
          </div>
        </div> */}
      </ProductsMaster>

      <div className="text-center px-4 lg:px-0 mb-12">
        <h2 className="text-f28 lg:text-f38 text-[#E62020] font-bold mb-6 lg:mb-14">
          RELATED PRODUCTS
        </h2>
        <div className="flex flex-col lg:flex-row justify-center gap-5">
          <Link href={`/products/${params.productCategory}/details`}>
            <div className="group bg-[#F2F5F6] rounded-3xl overflow-hidden">
              <div className="p-6">
                <img
                  src={"/img/product/cable.png"}
                  alt=""
                  className="w-full mt-16"
                />
              </div>
              <hr className="bg-white h-[3px]" />
              <div className="px-6 py-3 group-hover:bg-[#E62020] group-hover:text-white transition-colors text-center">
                NYY Flexible or YY Flexible
              </div>
            </div>
          </Link>
          <Link href={`/products/${params.productCategory}/details`}>
            <div className="group bg-[#F2F5F6] rounded-3xl overflow-hidden">
              <div className="p-6">
                <img
                  src={"/img/product/cable.png"}
                  alt=""
                  className="w-full mt-16"
                />
              </div>
              <hr className="bg-white h-[3px]" />
              <div className="px-6 py-3 group-hover:bg-[#E62020] group-hover:text-white transition-colors text-center">
                NYY Flexible or YY Flexible
              </div>
            </div>
          </Link>
          <Link href={`/products/${params.productCategory}/details`}>
            <div className="group bg-[#F2F5F6] rounded-3xl overflow-hidden">
              <div className="p-6">
                <img
                  src={"/img/product/cable.png"}
                  alt=""
                  className="w-full mt-16"
                />
              </div>
              <hr className="bg-white h-[3px]" />
              <div className="px-6 py-3 group-hover:bg-[#E62020] group-hover:text-white transition-colors text-center">
                NYY Flexible or YY Flexible
              </div>
            </div>
          </Link>
          <Link href={`/products/${params.productCategory}/details`}>
            <div className="group bg-[#F2F5F6] rounded-3xl overflow-hidden">
              <div className="p-6">
                <img
                  src={"/img/product/cable.png"}
                  alt=""
                  className="w-full mt-16"
                />
              </div>
              <hr className="bg-white h-[3px]" />
              <div className="px-6 py-3 group-hover:bg-[#E62020] group-hover:text-white transition-colors text-center">
                NYY Flexible or YY Flexible
              </div>
            </div>
          </Link>
        </div>
      </div>

      <Footer />
      <QuickNavigation />
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: 150 },
        }}
        size="lg"
      >
        <DialogBody className="relative">
          <TransformWrapper>
            <TransformComponent className="relative ">
              <Image
                src="/img/product/table.png"
                alt=""
                className="object-fill"
                width={1200}
                height={800}
              />
            </TransformComponent>
          </TransformWrapper>
        </DialogBody>
      </Dialog>
    </div>
  );
};

export default ProductDetails;
