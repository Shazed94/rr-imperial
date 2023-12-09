import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import MediaMaster from "@/components/Media/MediaMaster";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";

const page = () => {
  return (
    <div>
      <Header />
      <MediaMaster>
        <div className="bg-white p-4 lg:p-8 mb-6 lg:mb-12" id="">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10">
            <div className="bg-[#E6E7E8] rounded-2xl p-3 min-h-[510px] hover:scale-105 transition relative">
              <img src="/img/media/blog1.png" alt="" className="z-10" />
              <div className="bg-white rounded-2xl p-4 flex flex-col justify-between z-20 h-64 absolute bottom-3 left-3 right-3">
                <h4 className="text-[#414042] text-f20 font-bold mb-3">
                  Useful insights on cables used in industrial and residential
                  buildings
                </h4>
                <p className="text-[#6D6E71] ">
                  Wires and cables are an indispensable part of the electrical
                  system. They ensure transfer of power, energy and data signal
                  from one place to...
                </p>
                <Link
                  href="blogs/details"
                  className="flex items-center text-f20 text-[#E62020] gap-2"
                >
                  Read More <MdArrowForward />
                </Link>
              </div>
            </div>
            <div className="bg-[#E6E7E8] rounded-2xl p-3 min-h-[510px] hover:scale-105 transition relative">
              <img src="/img/media/blog2.png" alt="" className="z-10" />
              <div className="bg-white rounded-2xl p-4 flex flex-col justify-between  z-20 h-64 absolute bottom-3 left-3 right-3">
                <h4 className="text-[#414042] text-f20 font-bold mb-3">
                  How to protect your electrical appliances from a power surge?
                </h4>
                <p className="text-[#6D6E71] ">
                  Electrical appliances are designed to handle a certain amount
                  of voltages. However, in cases, when they are subjected to
                  higher voltages than they...
                </p>
                <Link
                  href="blogs/details"
                  className="flex items-center text-f20 text-[#E62020] gap-2"
                >
                  Read More <MdArrowForward />
                </Link>
              </div>
            </div>
            <div className="bg-[#E6E7E8] rounded-2xl p-3 min-h-[510px] hover:scale-105 transition relative">
              <img src="/img/media/blog3.png" alt="" className="z-10" />
              <div className="bg-white rounded-2xl p-4 flex flex-col justify-between z-20 h-64 absolute bottom-3 left-3 right-3">
                <h4 className="text-[#414042] text-f20 font-bold mb-3">
                  Energy-saving tips for hotels curated by one of the leading
                  electrical equipment ...
                </h4>
                <p className="text-[#6D6E71] ">
                  From heating and cooling the guest rooms to powering the
                  on-site restaurants and amenities, energy use is a major
                  expense for hotels...
                </p>
                <Link
                  href="blogs/details"
                  className="flex items-center text-f20 text-[#E62020] gap-2"
                >
                  Read More <MdArrowForward />
                </Link>
              </div>
            </div>
            <div className="bg-[#E6E7E8] rounded-2xl p-3 min-h-[510px] hover:scale-105 transition relative">
              <img src="/img/media/blog1.png" alt="" className="z-10" />
              <div className="bg-white rounded-2xl p-4 flex flex-col justify-between z-20 h-64 absolute bottom-3 left-3 right-3">
                <h4 className="text-[#414042] text-f20 font-bold mb-3">
                  Useful insights on cables used in industrial and residential
                  buildings
                </h4>
                <p className="text-[#6D6E71] ">
                  Wires and cables are an indispensable part of the electrical
                  system. They ensure transfer of power, energy and data signal
                  from one place to...
                </p>
                <Link
                  href="blogs/details"
                  className="flex items-center text-f20 text-[#E62020] gap-2"
                >
                  Read More <MdArrowForward />
                </Link>
              </div>
            </div>
            <div className="bg-[#E6E7E8] rounded-2xl p-3 min-h-[510px] hover:scale-105 transition relative">
              <img src="/img/media/blog2.png" alt="" className="z-10" />
              <div className="bg-white rounded-2xl p-4 flex flex-col justify-between  z-20 h-64 absolute bottom-3 left-3 right-3">
                <h4 className="text-[#414042] text-f20 font-bold mb-3">
                  How to protect your electrical appliances from a power surge?
                </h4>
                <p className="text-[#6D6E71] ">
                  Electrical appliances are designed to handle a certain amount
                  of voltages. However, in cases, when they are subjected to
                  higher voltages than they...
                </p>
                <Link
                  href="blogs/details"
                  className="flex items-center text-f20 text-[#E62020] gap-2"
                >
                  Read More <MdArrowForward />
                </Link>
              </div>
            </div>
            <div className="bg-[#E6E7E8] rounded-2xl p-3 min-h-[510px] hover:scale-105 transition relative">
              <img src="/img/media/blog3.png" alt="" className="z-10" />
              <div className="bg-white rounded-2xl p-4 flex flex-col justify-between z-20 h-64 absolute bottom-3 left-3 right-3">
                <h4 className="text-[#414042] text-f20 font-bold mb-3">
                  Energy-saving tips for hotels curated by one of the leading
                  electrical equipment ...
                </h4>
                <p className="text-[#6D6E71] ">
                  From heating and cooling the guest rooms to powering the
                  on-site restaurants and amenities, energy use is a major
                  expense for hotels...
                </p>
                <Link
                  href="blogs/details"
                  className="flex items-center text-f20 text-[#E62020] gap-2"
                >
                  Read More <MdArrowForward />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </MediaMaster>
      <Footer />
    </div>
  );
};

export default page;
