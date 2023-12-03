"use client";
import FeaturedCategory from "@/components/FeaturedCategory";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { RRKabel } from "@/components/LottieComponents";
import QuickNavigation from "@/components/QuickNavigation";
import { Button, Input } from "@material-tailwind/react";
import Image from "next/image";
import { MdOutlineArrowDropDown } from "react-icons/md";

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <div className="container">
        <div className="mb-6 lg:mb-12">
          <RRKabel />
        </div>
        <Image
          src="/img/brand/rr-kabel-logo.png"
          alt="brand-logo"
          width={200}
          height={50}
          className="mx-auto mb-6"
        />
        <div className="px-4 lg:px-12 mb-6 lg:mb-14">
          <p className="text-f16 text-[#58595B] font-normal">
            One of the leading electrical wires and cables manufacturers in the
            world, RR Kabel is a joint venture company.
          </p>
          <p className="text-f16 text-[#58595B] font-normal">
            RR Kabel is a pioneer in wire design, technology, and applicability.
            The focus on cutting-edge technology and research has continually
            enhanced the products&apos; efficiency, reliability, and safety
            aspects. This, in turn, supported the core of RR Kabel&apos;s
            engineering endeavor, which is to guarantee safe environments
            everywhere – offices, retail spaces, industrial plants, and
            residences. Ever since our inception, we have been inspired by the
            promise of a better life, which innovative engineering promises.
            This inspiration has transformed into a relentless pursuit, which
            has seen us engineer and manufactures a colossal range of products
            apposite for prodigious industries. Our products have been
            engineered to survive the harshest of environments like the
            crushing, high pressure of the ocean, or sweltering heat or cold of
            arid lands.
          </p>
          <p className="text-f16 text-[#58595B] font-normal">
            Wires and cables permeate every aspect of our modern lifestyle,
            which commands an uninterrupted and efficient electricity supply.
            From planes to trains, telecommunication to entertainment,
            satellites to Wi-Fi – wires are the omnipresent, unsung heroes
            pulsating with electricity, bringing surroundings to life, and
            bridging distances. Our diverse product offerings are nimble and
            energy efficient, minimizing losses, tending security, and earning
            your savings through every millimeter it pervades. In our 25-year
            journey so far, we have been lauded with several products and system
            certifications, and awards that speak for our quality and dependable
            wires, making us one of the best quality wire and cable companies.
            Yet, we at RR Kabel, will not cease to excel in the wire and cable
            industry, through our diligent efforts and commitment to the
            creation of the best.
          </p>
        </div>
        <div className="bg-[#E6E7E8] py-8 px-4 lg:px-20 mb-14">
          <h3 className="text-[#E82429] text-f28 lg:text-f38 font-bold text-center mb-10">
            PRODUCT OVERVIEW
          </h3>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 mb-5">
            <div className="relative w-full h-[400px] lg:h-[278px]">
              <Image
                src="/img/brand/product.png"
                alt=""
                fill
                className="object-fill md:object-contain"
              />
            </div>

            <div>
              <p className="text-f16 text-[#58595B] font-normal mb-10">
                RR Kabel is manufactured in Bangladesh by RR Imperial
                Electricals Ltd, an ambitious ISO-certified joint venture
                between Imperial Group, Bangladesh, and RR Group. Incorporated
                with the objective of manufacturing, processing, selling, and
                distributing heavy-duty cables and wires for industrial usage,
                Low voltage, HT cables, and other electrical products. RR
                Imperial Electricals also has an extended product line under the
                brand name of RR Shamika, manufacturing Super Enameled wires,
                copper strips (bare and paper insulated), and bus bars. RR
                Imperial aims to enhance customer satisfaction by consistently
                meeting the needs and expectations related to products and
                services. RR Kabel achieved 2 valuable certifications: one is UL
                and another is VDE .
              </p>
              <p className="text-f16 text-[#58595B] font-normal">
                Imperial Group is easily among the leaders in the chemicals and
                colorants business in Bangladesh, having contributed to the rise
                of the now very powerful textile industry of Bangladesh. With an
                experience of over 20 years in sales and distribution, and a
                country-wide establishment and network, Imperial Group is very
                well versed in the needs and expectations of the Bangladesh
                market.
              </p>
            </div>
          </div>
          <p className="text-f16 text-[#58595B] font-normal">
            RR Group is one of the premier enameled wires and cable producers,
            processing over 50,000 MT of Copper every year. With an experience
            of over 45 years in the electrical field, RR Group is currently
            exporting its products to over 80 countries worldwide. Its wires and
            cables have been internationally certified to cover all continents,
            RR Imperial Electricals Ltd is the amalgamation of two like-minded
            groups, who share a mutual passion for bringing the best to
            Bangladesh as it grows rapidly to become a force in Asia. With
            expertise complementing each other&apos;s strengths, RR Imperial
            Electricals Ltd aims to be a leader in the horizon of Bangladesh’s
            highly potential electrical industry.
          </p>
        </div>
        <div className="text-center">
          <h2 className="text-[#E82429] text-f38 font-bold mb-12">
            RR KABEL PRODUCTS
          </h2>
          <div className="relative flex w-full mb-8 px-4">
            <Input
              type="email"
              className="ps-44 lg:ps-56 py-6 rounded-2xl !bg-[#F2F5F6] placeholder:text-gray-500 focus:!border focus:!border-[#cdcdcd] focus:!border-t focus-within:outline-none"
              labelProps={{
                className: "hidden",
              }}
              placeholder="Inpur Search Keywords Here"
            />
            <Button
              size="md"
              color="gray"
              className="!absolute left-5 lg:left-1 top-1 h-[42px] px-3 shadow-none bg-white text-[#6D6E71] rounded-s-lg"
              // containerProps={{
              //   className: "w-20",
              // }}
            >
              Select Category{" "}
              <MdOutlineArrowDropDown className="inline ms-3" size={20} />
            </Button>
          </div>

          <FeaturedCategory />
        </div>
      </div>
      <Footer />
      <QuickNavigation />
    </div>
  );
};

export default page;
