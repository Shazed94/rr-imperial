"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Certifications,
  Mission,
  OurProfile,
  Policy,
  QualityAssurance,
  ResearchDevelopment,
  ResearchInnovation,
  Vision,
} from "../SvgComponents";
import QuickNavigation from "../QuickNavigation";
import { WhoWeAreHome } from "../LottieComponents";

const WhoWeAreMaster = (props) => {
  const pathname = usePathname();
  const parts = pathname.split("/");
  const extractedPathname = parts[parts.length - 1];

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <section className="container">
        <div className="relative">
          <WhoWeAreHome />
        </div>
        <h2 className="text-f28 lg:text-f38 text-[#ED1D24] font-bold text-center py-8">
          Who We Are
        </h2>
      </section>
      <main className="bg-[#E6E7E8]">
        <section className="container">
          <div className="flex flex-col md:flex-row lg:justify-between flex-wrap text-white pt-5">
            <Link
              href="our-profile"
              scroll={false}
              onClick={() => scrollToSection("who-we-are")}
              className={`flex flex-col items-center hover:bg-white transition lg:rounded-tl-lg lg:rounded-tr-lg px-2 ${
                extractedPathname == "our-profile"
                  ? "text-[#ED1D24] bg-white"
                  : "text-[#939598]"
              }  text-f16 font-normal group`}
            >
              {extractedPathname == "our-profile" ? (
                <>
                  <div className="mt-2 p-3 z-10">
                    <OurProfile fill="#ED1D24" className={"w-10 h-10"} />
                  </div>
                  <span className="w-32 text-center px-1 pt-3 pb-1 border-[#A7A9AC] ">
                    Our Profile
                  </span>
                </>
              ) : (
                <>
                  <div className="border-2 mt-2 p-3 border-[#A7A9AC] rounded-full bg-[#E6E7E8] group-hover:bg-white transition z-10">
                    <OurProfile fill="#939598" className={"w-10 h-10"} />
                  </div>
                  <span className="w-32 text-center border-2 rounded-lg px-1 pt-[23px] pb-1 border-[#A7A9AC] relative -top-4 min-h-[68px]">
                    Our Profile
                  </span>
                </>
              )}
            </Link>
            <Link
              href="awards-certifications"
              scroll={false}
              onClick={() => scrollToSection("who-we-are")}
              className={`flex flex-col items-center hover:bg-white transition lg:rounded-tl-lg lg:rounded-tr-lg px-2 ${
                extractedPathname == "awards-certifications"
                  ? "text-[#ED1D24] bg-white"
                  : "text-[#939598]"
              }  text-f16 font-normal group`}
            >
              {extractedPathname == "awards-certifications" ? (
                <>
                  <div className="mt-2 p-3 z-10">
                    <Certifications fill="#ED1D24" className={"w-10 h-10"} />
                  </div>
                  <span className="w-32 text-center px-1 pt-0 pb-1 border-[#A7A9AC] ">
                    Awards & Certifications
                  </span>
                </>
              ) : (
                <>
                  <div className="border-2 mt-2 p-3 border-[#A7A9AC] rounded-full bg-[#E6E7E8] group-hover:bg-white transition z-10">
                    <Certifications fill="#939598" className={"w-10 h-10"} />
                  </div>
                  <span className="w-32 text-center border-2 rounded-lg px-1 pt-3 pb-1 border-[#A7A9AC] relative -top-4">
                    Awards & Certifications
                  </span>
                </>
              )}
            </Link>
            <Link
              href="research-innovation"
              
              scroll={false}
              onClick={() => scrollToSection("who-we-are")}
              className={`flex flex-col items-center hover:bg-white transition lg:rounded-tl-lg lg:rounded-tr-lg px-2 ${
                extractedPathname == "research-innovation"
                  ? "text-[#ED1D24] bg-white"
                  : "text-[#939598]"
              }  text-f16 font-normal group`}
            >
              {extractedPathname == "research-innovation" ? (
                <>
                  <div className="mt-2 p-3 z-10">
                    <ResearchInnovation
                      fill="#ED1D24"
                      className={"w-10 h-10"}
                    />
                  </div>
                  <span className="w-32 text-center px-1 pt-0 pb-1 border-[#A7A9AC] ">
                    Research & Innovation
                  </span>
                </>
              ) : (
                <>
                  <div className="border-2 mt-2 p-3 border-[#A7A9AC] rounded-full bg-[#E6E7E8] group-hover:bg-white transition z-10">
                    <ResearchInnovation
                      fill="#939598"
                      className={"w-10 h-10"}
                    />
                  </div>
                  <span className="w-32 text-center border-2 rounded-lg px-1 pt-3 pb-1 border-[#A7A9AC] relative -top-4">
                    Research & Innovation
                  </span>
                </>
              )}
            </Link>
            <Link
              href="quality-assurance"
           
              scroll={false}
              onClick={() => scrollToSection("who-we-are")}
              className={`flex flex-col items-center hover:bg-white transition lg:rounded-tl-lg lg:rounded-tr-lg px-2 ${
                extractedPathname == "quality-assurance"
                  ? "text-[#ED1D24] bg-white"
                  : "text-[#939598]"
              }  text-f16 font-normal group`}
            >
              {extractedPathname == "quality-assurance" ? (
                <>
                  <div className="mt-2 p-3 z-10">
                    <QualityAssurance fill="#ED1D24" className={"w-10 h-10"} />
                  </div>
                  <span className="w-32 text-center px-1 pt-0 pb-1 border-[#A7A9AC] ">
                    Quality Assurance
                  </span>
                </>
              ) : (
                <>
                  <div className="border-2 mt-2 p-3 border-[#A7A9AC] rounded-full bg-[#E6E7E8] group-hover:bg-white transition z-10">
                    <QualityAssurance fill="#939598" className={"w-10 h-10"} />
                  </div>
                  <span className="w-32 text-center border-2 rounded-lg px-1 pt-3 pb-1 border-[#A7A9AC] relative -top-4">
                    Quality Assurance
                  </span>
                </>
              )}
            </Link>
            {/* <Link
              href="research-development"
              scroll={false}
              onClick={() => scrollToSection("who-we-are")}
              className={`flex flex-col items-center hover:bg-white transition lg:rounded-tl-lg lg:rounded-tr-lg px-2 ${
                extractedPathname == "research-development"
                  ? "text-[#ED1D24] bg-white"
                  : "text-[#939598]"
              }  text-f16 font-normal group`}
            >
              {extractedPathname == "research-development" ? (
                <>
                  <div className="mt-2 p-3 z-10">
                    <ResearchDevelopment
                      fill="#ED1D24"
                      className={"w-10 h-10"}
                    />
                  </div>
                  <span className="w-32 text-center px-1 pt-0 pb-1 border-[#A7A9AC] ">
                    Research & Development
                  </span>
                </>
              ) : (
                <>
                  <div className="border-2 mt-2 p-3 border-[#A7A9AC] rounded-full bg-[#E6E7E8] group-hover:bg-white transition z-10">
                    <ResearchDevelopment
                      fill="#939598"
                      className={"w-10 h-10"}
                    />
                  </div>
                  <span className="w-32 text-center border-2 rounded-lg px-1 pt-3 pb-1 border-[#A7A9AC] relative -top-4">
                    Research & Development
                  </span>
                </>
              )}
            </Link> */}
            <Link
              href="mission"
              scroll={false}
             
              onClick={() => scrollToSection("who-we-are")}
              className={`flex flex-col items-center hover:bg-white transition lg:rounded-tl-lg lg:rounded-tr-lg px-2 ${
                extractedPathname == "mission"
                  ? "text-[#ED1D24] bg-white"
                  : "text-[#939598]"
              }  text-f16 font-normal group`}
            >
              {extractedPathname == "mission" ? (
                <>
                  <div className="mt-2 p-3 z-10">
                    <Mission fill="#ED1D24" className={"w-10 h-10"} />
                  </div>
                  <span className="w-32 text-center px-1 pt-3 pb-1 border-[#A7A9AC] ">
                    Mission
                  </span>
                </>
              ) : (
                <>
                  <div className="border-2 mt-2 p-3 border-[#A7A9AC] rounded-full bg-[#E6E7E8] group-hover:bg-white transition z-10">
                    <Mission fill="#939598" className={"w-10 h-10"} />
                  </div>
                  <span className="w-32 text-center border-2 rounded-lg px-1 pt-[23px] pb-1 border-[#A7A9AC] relative -top-4 min-h-[68px]">
                    Mission
                  </span>
                </>
              )}
            </Link>
            <Link
              href="vision"
             
              scroll={false}
              onClick={() => scrollToSection("who-we-are")}
              className={`flex flex-col items-center hover:bg-white transition lg:rounded-tl-lg lg:rounded-tr-lg px-2 ${
                extractedPathname == "vision"
                  ? "text-[#ED1D24] bg-white"
                  : "text-[#939598]"
              }  text-f16 font-normal group`}
            >
              {extractedPathname == "vision" ? (
                <>
                  <div className="mt-2 p-3 z-10">
                    <Vision fill="#ED1D24" className={"w-10 h-10"} />
                  </div>
                  <span className="w-32 text-center px-1 pt-3 pb-1 border-[#A7A9AC] ">
                    Vision
                  </span>
                </>
              ) : (
                <>
                  <div className="border-2 mt-2 p-3 border-[#A7A9AC] rounded-full bg-[#E6E7E8] group-hover:bg-white transition z-10">
                    <Vision fill="#939598" className={"w-10 h-10"} />
                  </div>
                  <span className="w-32 text-center border-2 rounded-lg px-1 pt-[23px] pb-1 border-[#A7A9AC] relative -top-4 min-h-[68px]">
                    Vision
                  </span>
                </>
              )}
            </Link>
            <Link
              href="policy"
             
              scroll={false}
              onClick={() => scrollToSection("who-we-are")}
              className={`flex flex-col items-center hover:bg-white transition lg:rounded-tl-lg lg:rounded-tr-lg px-2 ${
                extractedPathname == "policy"
                  ? "text-[#ED1D24] bg-white"
                  : "text-[#939598]"
              }  text-f16 font-normal group`}
            >
              {extractedPathname == "policy" ? (
                <>
                  <div className="mt-2 p-3 z-10">
                    <Policy fill="#ED1D24" className={"w-10 h-10"} />
                  </div>
                  <span className="w-32 text-center px-1 pt-3 pb-1 border-[#A7A9AC] ">
                    Policy
                  </span>
                </>
              ) : (
                <>
                  <div className="border-2 mt-2 p-3 border-[#A7A9AC] rounded-full bg-[#E6E7E8] group-hover:bg-white transition z-10">
                    <Policy fill="#939598" className={"w-10 h-10"} />
                  </div>
                  <span className="w-32 text-center border-2 rounded-lg px-1 pt-[23px] pb-1 border-[#A7A9AC] relative -top-4 min-h-[68px]">
                    Policy
                  </span>
                </>
              )}
            </Link>
          </div>
          <QuickNavigation />
          <div className="">{props.children}</div>
        </section>
      </main>
    </>
  );
};

export default WhoWeAreMaster;
