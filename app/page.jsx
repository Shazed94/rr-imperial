import Lottie from "lottie-react";
import heroVideo from "../public/lottie/Slider.json";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import QuickNavigation from "@/components/QuickNavigation";
import { LottieAboutLeft, LottieSlider } from "@/components/LottieComponents";
import FeaturedCategory from "@/components/FeaturedCategory";

export default function Home() {
  return (
    <>
      <div className="homepage overflow-hidden">
        <Header />
        <section className="lotte_video mb-20">
          <LottieSlider />
        </section>

        <FeaturedCategory title={true} />

        <section className="about_us bg-[#ececec] py-20">
          <div className="container">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-5 h-56">
                <LottieAboutLeft />
              </div>
              <div className="col-span-7 ">
                <div className="mb-8">
                  <h2 className="text-333 text-f38 font-tahoma-bold mb-5">
                    ABOUT RR IMPERIAL
                  </h2>
                  <p className="text-333 text-f14 font-tahoma-normal">
                    One of the leading electrical wires and cables manufacturers
                    in the world, RR Kabel is a joint venture company. RR Kabel
                    is a pioneer in wire design, technology, and applicability.
                    The focus on cutting-edge technology and research has
                    continually enhanced the products&apos; efficiency,
                    reliability, and safety aspects.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-4 bg-white rounded-lg flex flex-col justify-between gap-2">
                    <img src={"/svg/1.png"} alt="" className="w-14" />
                    <h3 className="text-333 text-f28 font-tahoma-bold hover:text-[#e61616] transition-colors">
                      {" "}
                      Company Profile
                    </h3>
                    <p className="text-f14 text-333 font-tahoma-normal">
                      RR Imperials is one of the most awarded electricals
                      company with multiple international certifications
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-lg flex flex-col justify-between gap-2">
                    <img src={"/svg/2.png"} alt="" className="w-16" />
                    <h3 className="text-333 text-f28 font-tahoma-bold hover:text-[#e61616] transition-colors">
                      {" "}
                      Mission & Vision
                    </h3>
                    <p className="text-f14 text-333 font-tahoma-normal">
                      RR Imperials is one of the most awarded electricals
                      company with multiple international certifications
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-lg flex flex-col justify-between gap-2">
                    <img
                      src={"/img/homepage/5.png"}
                      alt=""
                      className="w-16 h-14"
                    />
                    <h3 className="text-333 text-f28 font-tahoma-bold hover:text-[#e61616] transition-colors">
                      {" "}
                      Company Profile
                    </h3>
                    <p className="text-f14 text-333 font-tahoma-normal">
                      RR Imperials is one of the most awarded electricals
                      company with multiple international certifications
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-lg flex flex-col justify-between gap-2">
                    <img src={"/svg/3.svg"} alt="" className="w-14" />
                    <h3 className="text-333 text-f28 font-tahoma-bold hover:text-[#e61616] transition-colors">
                      {" "}
                      Company Profile
                    </h3>
                    <p className="text-f14 text-333 font-tahoma-normal">
                      RR Imperials is one of the most awarded electricals
                      company with multiple international certifications
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container grid grid-cols-12 gap-14 py-20">
          <div className="col-span-6 me-[137px]">
            <div className="flex flex-col justify-center items-start py-6">
              <h4 className="text-333 text-f16 font-tahoma-bold uppercase mb-5">
                KEY STRENGTHS
              </h4>
              <h2 className="text-f48 text-[#131316] font-tahoma-bold mb-6 ">
                Your Partner in{" "}
                <span className="text-[#e61616] border-b-2 border-b-[#e61616] mb-7">
                  ‍Electrical Reliability
                </span>
              </h2>
              <p className="text-333 text-f16 font-tahoma-regular mb-6">
                We are committed to providing you with the highest quality
                products and services, so you can be confident that your
                electrical needs are met.
              </p>
              <button className="bg-[#f00e0e] text-white text-center font-bold px-8 py-3 rounded-full">
                Learn More About Us
              </button>
            </div>
          </div>
          <div className="col-span-6 px-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6  rounded-[24px] flex flex-col justify-between border gap-3">
                <img src={"img/homepage/8.png"} alt="" className="w-16" />
                <h4 className="text-333 text-f18 font-tahoma-bold">
                  49 Districts
                </h4>
                <p className="text-333 text-f14 font-tahoma-regular uppercase">
                  COVERED WITH ANEVER GROWING NETWORK
                </p>
              </div>
              <div className="p-6 rounded-[24px] flex flex-col justify-between border gap-3">
                <img src={"img/homepage/8.png"} alt="" className="w-16" />
                <h4 className="text-333 text-f18 font-tahoma-bold">
                  27 Full Size
                </h4>
                <p className="text-333 text-f14 font-tahoma-regular uppercase">
                  OPERATION HUB
                </p>
              </div>
              <div className="p-6 rounded-[24px] flex flex-col justify-between border gap-3">
                <img src={"img/homepage/4.png"} alt="" className="w-16" />
                <h4 className="text-333 text-f18 font-tahoma-bold">1000+</h4>
                <p className="text-333 text-f14 font-tahoma-regular uppercase">
                  EMPLOYEES
                </p>
              </div>
              <div className="p-6 rounded-[24px] flex flex-col justify-between border gap-3">
                <img src={"img/homepage/7.png"} alt="" className="w-16" />
                <h4 className="text-333 text-f18 font-tahoma-bold">4500+</h4>
                <p className="text-333 text-f14 font-tahoma-regular uppercase">
                  PROUD DEALERS
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#e91111] py-20">
          <div className="container text-center text-white relative h-60 flex flex-col justify-center items-center overflow-hidden">
            <h2 className="text-f34 font-tahoma-bold mb-1">
              Want To Know More About RR Imperial
            </h2>
            <p className="text-f18 mb-3">
              We always value our customers and their thoughts, Please feel free
              to knock us anytime.
            </p>
            <div className="flex justify-center gap-7">
              <button className="text-f15 text-[#e91111] font-tahoma-bold bg-white border-2 border-transparent hover:bg-[#333] hover:text-white transition-colors px-[30px] py-[12px] rounded-md">
                Contact Us
              </button>
              <button className="text-f15 bg-transparent text-white border-2 border-white hover:bg-[#333] hover:text-white transition-colors px-[30px] py-[12px] rounded-md font-tahoma-bold">
                Learm more
              </button>
            </div>
            <img
              src={"svg/graph_1.svg"}
              alt=""
              className="absolute -top-2 -left-14 -rotate-[20deg] scale-[65%]"
            />
            <img
              src={"svg/graph_2.svg"}
              alt=""
              className="absolute -bottom-10 -right-12 rotate-[20deg] scale-[65%]"
            />
          </div>
        </section>
        <QuickNavigation />
        <Footer />
      </div>
    </>
  );
}
