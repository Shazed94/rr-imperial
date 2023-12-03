import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { ResearchInnovation } from "@/components/LottieComponents";
import WhoWeAreMaster from "@/components/WhoWeAre/WhoWeAreMaster";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <WhoWeAreMaster>
        <div
          className="flex flex-col lg:flex-row bg-white p-8 gap-9 mb-12"
          id="who-we-are"
        >
          <div className="w-full lg:w-2/3 md:order-2 lg:order-1">
            <p className="text-[#58595B] font-normal mb-5">
              Innovation and technical excellence are the pillars for the
              success of RR Imperial Electricals Limited.
            </p>
            <p className="text-[#58595B] font-normal mb-5">
              RR Imperial Electricals Limited convenes, catalysis, and
              implements a thriving, inclusive research, and innovation
              ecosystem. A dream without a plan and a plan without
              action/implementation remains a utopian idea, just wishful
              thinking!! Our deep-rooted philosophy of our commitment to offer
              the best products for the varied applications translate into our
              objective to drive technical excellence in all our production
              facilities.
            </p>
            <p className="text-[#58595B] font-normal mb-5">
              With new research and inventions, we strive to provide a fresh
              route towards technical advancement, thoughts, strategies, and new
              marketing trends, which have become a primary factor for RR
              Imperial Electricals Limited companies to make way for a future
              where the world has no boundaries. Our entire product range
              exhibits and provides a hazard free environment to our customers.
            </p>
            <p className="text-[#58595B] font-normal mb-5">
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
          <div className="w-full lg:w-2/3 md:order-1 lg:order-2 my-4 lg:mb-12">
            <ResearchInnovation className="md:h-72 lg:h-[30rem]" />
          </div>
        </div>
      </WhoWeAreMaster>
      <Footer />
    </div>
  );
};

export default page;
