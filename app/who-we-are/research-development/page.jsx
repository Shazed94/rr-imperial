import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import WhoWeAreMaster from "@/components/WhoWeAre/WhoWeAreMaster";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <WhoWeAreMaster>
        <div className="flex  bg-white p-8 rounded-tr-3xl gap-9 mb-12">
          <div className="w-1/3 h-96 flex justify-center items-center text-6xl bg-gray-600 mb-12">
            Images
          </div>
          <div className="w-2/3">
            <p className="text-[#58595B] font-tahoma-regular mb-5">
              At RR Imperial Electricals Limited, innovation is a constant
              process and our research & development facility is one of the
              prime reasons for our success. In collaboration with a team of
              highly skilled professionals, we are breaking down barriers that
              have restrained innovations to be a challenge.
            </p>
            <p className="text-[#58595B] font-tahoma-regular mb-5">
              Thanks to a close-knit team with exceptional skills and expertise,
              who commission research and deploy the best technologies, we are
              able to develop unrivalled and patented products like Unilay, that
              are safer and more reliable for our customers.
            </p>
          </div>
        </div>
      </WhoWeAreMaster>
      <Footer />
    </div>
  );
};

export default page;
