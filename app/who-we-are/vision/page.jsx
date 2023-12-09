import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import WhoWeAreMaster from "@/components/WhoWeAre/WhoWeAreMaster";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <WhoWeAreMaster>
        <div className="bg-white p-4 lg:p-8 flex flex-col lg:flex-row gap-4 lg:gap-9 mb-12" id="who-we-are">
          <div className="w-full lg:w-1/3 flex justify-center items-center mb-5 lg:mb-12">
            <img src="/img/who-we-are/vision.png" alt="" />
          </div>
          <div className="w-full lg:w-2/3">
            <p className="text-[#58595B] font-normal mb-5">
              Our vision is to be known, locally as well as internationally, as
              a producer of cables & Wires that are the safest and of the
              international standard quality.
            </p>
          </div>
        </div>
      </WhoWeAreMaster>
      <Footer />
    </div>
  );
};

export default page;
