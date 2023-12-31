import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import QuickNavigation from "@/components/QuickNavigation";
import { LottieSlider } from "@/components/LottieComponents";
import FeaturedCategory from "@/components/FeaturedCategory";
import AboutRRImperial from "@/components/AboutRRImperial";
import KeyStrength from "@/components/KeyStrength";
import { all_featured_categories } from "@/utility/api";
import Link from "next/link";

export default async function Home() {
  // const result = await all_featured_categories().then((res) => {
  //   return res.data;
  // });
  return (
    <>
      <div className="homepage overflow-hidden">
        <Header />
        <section className="lotte_video mb-10 lg:mb-20">
          <LottieSlider />
        </section>

        <FeaturedCategory />

        <AboutRRImperial />

        <KeyStrength />

        <section className="bg-[#e91111] px-4 lg:px-0 py-10 lg:py-20">
          <div className="container text-center text-white relative h-60 flex flex-col justify-center items-center overflow-hidden">
            <h2 className="text-f28 lg:text-f34 font-bold mb-1">
              Want To Know More About RR Imperial
            </h2>
            <p className="text-f18 mb-3">
              We always value our customers and their thoughts, Please feel free
              to knock us anytime.
            </p>
            <div className="flex justify-center gap-7">
              <Link
                href="/contact-us/head-office"
                className="text-f15 text-[#e91111] font-bold bg-white border-2 border-transparent hover:bg-[#333] hover:text-white transition-colors px-[50px] py-[12px] rounded-md"
              >
                Contact Us
              </Link>
            </div>
            <img
              src={"svg/graph_1.svg"}
              alt=""
              className="hidden lg:block absolute -top-2 -left-14 -rotate-[20deg] scale-[65%]"
            />
            <img
              src={"svg/graph_2.svg"}
              alt=""
              className="hidden lg:block absolute -bottom-10 -right-12 rotate-[20deg] scale-[65%]"
            />
          </div>
        </section>
        <QuickNavigation />
        <Footer />
      </div>
    </>
  );
}
