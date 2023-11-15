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
          <div className="w-2/3">
            <p className="text-[#58595B] font-tahoma-regular mb-5">
              Innovation and technical excellence are the pillars for the
              success of RR Imperial Electricals Limited.
            </p>
            <p className="text-[#58595B] font-tahoma-regular mb-5">
              RR Imperial Electricals Limited convenes, catalysis, and
              implements a thriving, inclusive research, and innovation
              ecosystem. A dream without a plan and a plan without
              action/implementation remains a utopian idea, just wishful
              thinking!! Our deep-rooted philosophy of our commitment to offer
              the best products for the varied applications translate into our
              objective to drive technical excellence in all our production
              facilities.
            </p>
            <p className="text-[#58595B] font-tahoma-regular mb-5">
              With new research and inventions, we strive to provide a fresh
              route towards technical advancement, thoughts, strategies, and new
              marketing trends, which have become a primary factor for RR
              Imperial Electricals Limited companies to make way for a future
              where the world has no boundaries. Our entire product range
              exhibits and provides a hazard free environment to our customers.
            </p>
            <p className="text-[#58595B] font-tahoma-regular mb-5">
              At our DSIR (Department of Scientific and Industrial Research)
              recognized R&D centers for RR Imperial Electricals Limited, we
              design, develop, assess and prove the cable behavior and
              functionality for the harshest environment and application. To
              achieve maximum realistic conditions, we simulate physical,
              chemical, environmental and electrical hazards on the cables. With
              our advanced set up we help mitigate any threat in an unusual
              application of our customer. No matter whether the cable is
              installed at -50°C or immersed in oil, our experts provide a
              reliable and sustainable solution, meeting advanced technological
              requirements at optimum cost.
            </p>
          </div>
          <div className="w-1/3 h-96 flex justify-center items-center text-6xl bg-gray-600 mb-12">
            Lottie
          </div>
        </div>
      </WhoWeAreMaster>
      <Footer />
    </div>
  );
};

export default page;
