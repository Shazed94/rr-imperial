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
              These certifications are a testament to the efficiency and
              continual improvement in our purpose to deliver customer service
              and satisfaction to our valued clients. Our each product meets an
              intensive Quality Assurance Inspection, which is endorsed by
              certifications of a dozen national & international standards
              monitoring agencies. We are Inhouse NABL accredited company as per
              ISO 17025 and in wires and cables category, our products are the
              most certified which makes them trustworthy in more than 85+
              countries across the world making us the leading wires and cables
              manufacturers.
            </p>
            <p className="text-[#58595B] font-tahoma-regular mb-5">
              RoHS (Restriction of Hazardous Substances) is a directive on the
              restriction of the use of certain hazardous substances in
              electrical and electronic equipment. It is often referred to as
              the ‘lead-free directive’, but there are 10 such hazardous
              substances not available or controlled for the cables offered by
              us for more than a decade.
            </p>
            <p className="text-[#58595B] font-tahoma-regular mb-5">
              However to actually fulfill the purpose, we offer our products
              with REACH Compliance offering a high degree of human and
              environmental safety. REACH (Registration, Evaluation,
              Authorisation and Restriction of Chemicals) is a regulation
              adopted to improve the protection of human health and the
              environment from the risks that can be posed by chemicals most of
              which are carcinogenic is nature. When it comes to environment
              friendly initiative, we are 1st Indian cable manufacturing company
              to offer REACH Compliant cables. Currently under REACH, our cables
              are free from more than 200 hazardous substances.
            </p>
            <p className="text-[#58595B] font-tahoma-regular mb-5">
              REACH addresses the production and use of chemical substances and
              their potential impacts on both human health and environment. It
              also addresses the continued use of chemical substances of very
              high concern (SVHC) because of their negative impact on human
              health and environment. One of the major elements of REACH
              regulation is the requirement to communicate information on
              chemicals up and down the supply chain. This ensures that the
              manufacturers, customers and the end customers are aware of
              information regarding health and safety of the product supplied.
            </p>
          </div>
        </div>
      </WhoWeAreMaster>
      <Footer />
    </div>
  );
};

export default page;
