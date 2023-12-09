import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import WhoWeAreMaster from "@/components/WhoWeAre/WhoWeAreMaster";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <WhoWeAreMaster>
        <div className="bg-white p-4 lg:p-8 mb-5 lg:mb-12">
          <div className="relative w-full h-24 md:h-32 lg:h-60 mb-10">
            <Image
              src="/img/who-we-are/policy.png"
              fill
              alt=""
              className="object-contain"
            />
          </div>

          <div className="">
            <h4 className="text-[#ED1C24] text-f20 font-bold mb-4">
              Quality Policy
            </h4>
            <p className="text-[#58595B] text-f16 font-normal mb-8">
              RR-Imperial Electricals Ltd. aims to achieve Customer Satisfaction
              by consistently meeting the needs and expectations related to its
              products and services. In its pursuits of excellence, RR-Imperial
              Electricals Ltd. will set and achieve Quality Objectives at all
              levels, meet the applicable requirements - legal and others
              (including requirements of the standard ISO 9001:2015), and make
              continual improvements to have a robust Quality Management System.
            </p>
            <h4 className="text-[#ED1C24] text-f20 font-bold mb-4">
              Environment Policy
            </h4>
            <p className="text-[#58595B] text-f16 font-normal mb-2">
              The Environment Policy focuses on the following areas:
            </p>
            <ul className="ps-10 mb-7 marker:text-[#ED1C24]">
              <li className="text-[#58595B] text-f16 font-normal list-disc">
                Avoid and/or reduce any form of pollution from its activities.
              </li>
              <li className="text-[#58595B] text-f16 font-normal list-disc">
                Optimize energy, water, and other natural resources consumption.
              </li>
              <li className="text-[#58595B] text-f16 font-normal list-disc">
                Institutionalize environmental sustainability within the
                organization.
              </li>
            </ul>

            <p className="text-[#58595B] text-f16 font-normal mb-2">
              To achieve its policy objectives, RR Imperial Electricals Limited
              will:
            </p>
            <ul className="ps-10 mb-7 marker:text-[#ED1C24]">
              <li className="text-[#58595B] text-f16 font-normal list-disc">
                Comply with applicable environmental laws, regulations, and
                other obligations.
              </li>
              <li className="text-[#58595B] text-f16 font-normal list-disc">
                Eliminate the use of globally restricted hazardous chemicals in
                its products.
              </li>
              <li className="text-[#58595B] text-f16 font-normal list-disc">
                Endeavor to integrate principles of cleaner production for
                conserving energy and water.
              </li>

              <li className="text-[#58595B] text-f16 font-normal list-disc">
                Priorities waste avoidance over waste segregation and disposal.
              </li>
              <li className="text-[#58595B] text-f16 font-normal list-disc">
                Optimize the use of natural resources through material
                substitution, recycling, and reuse.
              </li>
              <li className="text-[#58595B] text-f16 font-normal list-disc">
                Adopt and maintain global best practices on carbon and energy
                management by minimizing greenhouse gas emissions in its
                operations.
              </li>
              <li className="text-[#58595B] text-f16 font-normal list-disc">
                Minimize as feasible and manage pollution generated in the form
                of air emissions, wastewater, and waste in an environmentally
                sound manner through treatment, destruction, or disposal.
              </li>
              <li className="text-[#58595B] text-f16 font-normal list-disc">
                Endeavor to build a green supply chain by encouraging and
                supporting suppliers/vendors to adopt environmentally sound
                practices.
              </li>

              <li className="text-[#58595B] text-f16 font-normal list-disc">
                Raise awareness among employees for fulfilling their ecological
                responsibilities.
              </li>
              <li className="text-[#58595B] text-f16 font-normal list-disc">
                Establish, implement, and maintain necessary systems as per ISO
                14001:2015 standards and build organizational capacity.
              </li>
              <li className="text-[#58595B] text-f16 font-normal list-disc">
                Set environmental targets for emissions, energy, water, and
                waste.
              </li>
              <li className="text-[#58595B] text-f16 font-normal list-disc">
                Continually improve the environmental performance & strengthen
                the Environmental Management System.
              </li>
            </ul>

            <p className="text-[#58595B] text-f16 font-normal mb-5">
              At RR Kabel we dedicate ourselves to the Safety and Health Policy
              to improve our performance and strive for achieving zero accidents
              continuously.
            </p>

            <h4 className="text-[#ED1C24] text-f20 font-bold mb-4">
              Safety & Health Policy
            </h4>
            <p className="text-[#58595B] text-f16 font-normal mb-2">
              The OH&S Policy focuses on the following areas:
            </p>
            <ul className="ps-10 mb-7 marker:text-[#ED1C24]">
              <li className="text-[#58595B] text-f16 font-normal list-disc">
                Comply with applicable OH&S laws, regulations, and other
                obligations.
              </li>

              <li className="text-[#58595B] text-f16 font-normal list-disc">
                Provide a safe and healthy workplace to all persons working for
                and on behalf of RR Imperial Electricals Limited by employing
                safe and sound technologies and operating procedures.
              </li>
              <li className="text-[#58595B] text-f16 font-normal list-disc">
                Promote a positive safety culture within the organization
                through effective training, communication, participation, and
                consultation with its team.
              </li>
              <li className="text-[#58595B] text-f16 font-normal list-disc">
                Prevent accidents, injury, ill health, and disease in the
                workplace by eliminating hazards and reducing OH&S risks.
              </li>
              <li className="text-[#58595B] text-f16 font-normal list-disc">
                Encourage reporting of unsafe acts, unsafe conditions, and
                incidents to strengthen workplace safety.
              </li>
              <li className="text-[#58595B] text-f16 font-normal list-disc">
                Maintain necessary systems for crisis and emergency management.
              </li>
              <li className="text-[#58595B] text-f16 font-normal list-disc">
                Ensure a safe supply chain by selecting contractors and
                suppliers that perform to RRIEL’s health and safety
                requirements.
              </li>
              <li className="text-[#58595B] text-f16 font-normal list-disc">
                Set OH&S targets to maintain an injury-free work environment.
              </li>
              <li className="text-[#58595B] text-f16 font-normal list-disc">
                Continually improve workplace safety and strengthen the OH&S
                Management System.
              </li>
            </ul>
            <p className="text-[#58595B] text-f16 font-normal ">
              At RR Imperial Electricals Limited -we dedicate ourselves to the
              Safety and Health Policy to improve our performance and strive to
              achieve zero accidents continuously.
            </p>
          </div>
        </div>
      </WhoWeAreMaster>
      <Footer />
    </div>
  );
};

export default page;
