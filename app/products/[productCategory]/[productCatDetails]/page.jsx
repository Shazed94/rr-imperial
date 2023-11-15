"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ProductsMaster from "@/components/Products/ProductsMaster";
import { Button, Input } from "@material-tailwind/react";
import Link from "next/link";

import React from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";

const page = ({ params }) => {
  console.log(params);
  return (
    <div>
      <Header />
      <div className="container relative flex items-center bg-[url('/svg/product_category.svg')] bg-cover py-28">
        <h2 className="max-w-[400px] ms-14 text-f34 font-tahoma-bold text-white leading-tight">
          Reliable <br /> Electrical Cables <br /> for Your Home <br /> and
          Business Needs
        </h2>
        <span className="absolute block h-0.5 right-10 left-16 bottom-20 bg-white"></span>
        <span className="absolute block h-0.5 right-10 left-16 bottom-16 bg-white"></span>
      </div>
      <div className="container max-w-5xl text-center py-14">
        <h3 className="text-[#E62020] text-f38 font-tahoma-bold uppercase ">
          {/* {paramName} */}
        </h3>
      </div>
      <div className="container ">
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
      <div className="container flex flex-wrap justify-between py-12">
        <Link href="#">
          <button
            className={`w-40 px-2 py-3 font-tahoma-regular rounded-xl text-white ${
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
            className={`w-40 px-2 py-3 font-tahoma-regular rounded-xl text-white ${
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
            className={`w-40 px-2 py-3 font-tahoma-regular rounded-xl text-white ${
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
            className={`w-40 px-2 py-3 font-tahoma-regular rounded-xl text-white ${
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
            className={`w-40 px-2 py-3 font-tahoma-regular rounded-xl text-white ${
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
            className={`w-40 px-2 py-3 font-tahoma-regular rounded-xl text-white ${
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
            className={`w-40 px-2 py-3 font-tahoma-regular rounded-xl text-white ${
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
            className={`w-40 px-4 py-3 font-tahoma-regular text- rounded-xl text-white ${
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
        <div className="bg-[#F2F5F6] p-5 mb-14">
          <h2 className="text-[#E62020] text-f22 font-tahoma-bold mb-5">
            BYA-FR/BAYA-FR | Single Core (Cu or AI/PVC-FR)
          </h2>

          <div className="flex bg-white rounded-[17px] p-14 mb-12">
            <div className="w-1/2 flex flex-wrap flex-col items-center border-r border-r-[#D1D3D4]">
              <img
                src="/img/product/cable.png"
                alt=""
                width={200}
                className="mx-auto mb-14"
              />
              <h5 className="text-[#E62020] text-f16 font-tahoma-regular mb-3">
                *REACH | RoHS | CE
              </h5>
              <img src="/img/product/wire-cut.png" alt="" />
            </div>
            <div className="w-1/2 flex flex-wrap flex-col gap-8 items-center">
              <div>
                <h4 className="text-[#E62020] text-f20 font-tahoma-regular text-center mb-4">
                  CHARACTERISTICS
                </h4>
                <div className="flex space-x-5">
                  <img src="/img/product/wire-cut-small.png" alt="" />
                  <img src="/img/product/wire-cut-small.png" alt="" />
                  <img src="/img/product/wire-cut-small.png" alt="" />
                  <img src="/img/product/wire-cut-small.png" alt="" />
                  <img src="/img/product/wire-cut-small.png" alt="" />
                  <img src="/img/product/wire-cut-small.png" alt="" />
                </div>
              </div>
              <div>
                <h4 className="text-[#E62020] text-f20 font-tahoma-regular text-center mb-4">
                  INSTALLATION CONDITION
                </h4>
                <div className="flex space-x-5">
                  <img src="/img/product/wire-cut-small.png" alt="" />
                  <img src="/img/product/wire-cut-small.png" alt="" />
                  <img src="/img/product/wire-cut-small.png" alt="" />
                  <img src="/img/product/wire-cut-small.png" alt="" />
                  <img src="/img/product/wire-cut-small.png" alt="" />
                  <img src="/img/product/wire-cut-small.png" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h4 className="text-[#E62020] text-f20 font-tahoma-regular mb-3">
              APPLICATION
            </h4>
            <div className="flex gap-10">
              <div className="flex">
                <img
                  src="/img/product/wire-small.png"
                  alt=""
                  className="me-3"
                />
                <h4 className="text=[#231F20] text-f16 font-tahoma-regular">
                  Residential infrustructure
                </h4>
              </div>
              <div className="flex">
                <img
                  src="/img/product/wire-small.png"
                  alt=""
                  className="me-3"
                />
                <h4 className="text=[#231F20] text-f16 font-tahoma-regular">
                  Residential infrustructure
                </h4>
              </div>
              <div className="flex">
                <img
                  src="/img/product/wire-small.png"
                  alt=""
                  className="me-3"
                />
                <h4 className="text=[#231F20] text-f16 font-tahoma-regular">
                  Residential infrustructure
                </h4>
              </div>
            </div>
          </div>
          <div className="mb-10">
            <h4 className="text-[#E62020] text-f20 font-tahoma-regular mb-3">
              CONSTRUCTION
            </h4>
            <div className="">
              <p className="text-f16 font-tahoma-regular mb-3">
                <b>Conductor:</b> Solid/Circular, Plain annealed copper or
                Aluminium Class-1 & 2 to BDS IEC 60228, IS 8130
              </p>

              <p className="text-f16 font-tahoma-regular mb-3">
                <b>Insulation:</b> Specially formulated Flame Retardant (FR) PVC
                insulation is used. The FR property retards the propagation of
                flame without compormising safety.
              </p>
              <p className="text-f16 font-tahoma-regular mb-3">
                <b>Insulation Conformity:</b> PVC-FR (Skin Coated), TI1-70°C
                (with FR property) to BS 7655, BSEN 50363-3 & BDS 1251
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 mb-10">
            <div className="col-span-4">
              <h4 className="text-[#E62020] text-f20 font-tahoma-regular mb-4">
                CONSTRUCTION
              </h4>
              <p>
                <b>Uo/U:</b> 450/750V
              </p>
              <p>
                <b>Test Voltage:</b> 3.0kV
              </p>
            </div>
            <div className="col-span-4">
              <h4 className="text-[#E62020] text-f20 font-tahoma-regular mb-4">
                OPERATING TEMP
              </h4>
              <p>-20°C to +70°C</p>
              <p>Max Short Circuit: 160°C</p>
            </div>
          </div>
          <div className="grid grid-cols-12 mb-10">
            <div className="col-span-4">
              <h4 className="text-[#E62020] text-f20 font-tahoma-regular mb-4">
                MIN.BENDING RADIUS
              </h4>
              <p>
                <b>Upto 10mm²:</b>
                <br />
                3x overall Diameter
              </p>
              <p>
                <b>14.5 & 25mm²:</b>
                <br /> 4x overall Diameter
              </p>
              <p>
                <b>Above 25omm²:</b>
                <br /> 5x overall Diameter
              </p>
            </div>
            <div className="col-span-4">
              <h4 className="text-[#E62020] text-f20 font-tahoma-regular mb-4">
                STANDARD
              </h4>
              <p>BDS 900</p>
              <p>IEC 60227-3</p>
              <p>BS 6004</p>
              <p>BSEN 50525-2-31</p>
            </div>
            <div className="col-span-4">
              <h4 className="text-[#E62020] text-f20 font-tahoma-regular mb-4">
                MIN.BENDING RADIUS
              </h4>
              <b>Insulation :</b>
            </div>
          </div>
          <div className="">
            <img src="/img/product/table.png" alt="" className="mx-auto" />
          </div>
        </div>
      </ProductsMaster>
      <div className="text-center mb-12">
        <h2 className="text-f38 text-[#E62020] font-tahoma-bold mb-14">
          RELATED PRODUCTS
        </h2>
        <div className="flex justify-center gap-5">
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
    </div>
  );
};

export default page;
