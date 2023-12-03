import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import WhoWeAreMaster from "@/components/WhoWeAre/WhoWeAreMaster";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <WhoWeAreMaster>
        <div className="flex flex-col lg:flex-row bg-white p-4 lg:p-8 gap-9 mb-12" id="who-we-are">
          <div className="w-full lg:w-1/3 flex justify-center items-center mb-5 lg:mb-12">
            <div className="relative ms-3 mt-4 lg:m-0">
              <img src="/img/who-we-are/research-development.webp" alt="" className="relative z-10" />
              <div className="absolute -top-[14px] -left-[12px] w-full h-full bg-[#ED1C24] z-0"></div>
            </div>
          </div>
          <div className="w-full lg:w-2/3">
            <p className="text-[#58595B] font-normal mb-5">
              At RR Imperial Electricals Limited, innovation is a constant
              process, and our research & development facility is a key factor
              in our success. Collaborating with a team of highly skilled
              professionals, we are breaking down barriers that have
              traditionally made innovation a challenge.
            </p>
            <p className="text-[#58595B] font-normal mb-5">
              Thanks to our close-knit team with exceptional skills and
              expertise, who conduct research and deploy cutting-edge
              technologies, we can develop unparalleled and patented products
              like Unilay. These products are not only safer but also more
              reliable for our customers.
            </p>
          </div>
        </div>
      </WhoWeAreMaster>
      <Footer />
    </div>
  );
};

export default page;
