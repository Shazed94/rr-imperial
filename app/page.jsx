import AboutRRImperial from "@/components/AboutRRImperial";
import FeaturedCategory from "@/components/FeaturedCategory";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import KeyStrength from "@/components/KeyStrength";
import { LottieSlider } from "@/components/LottieComponents";
import QuickNavigation from "@/components/QuickNavigation";
import Link from "next/link";

export default async function Home() {
  // const result = await all_featured_categories().then((res) => {
  //   return res.data;
  // });
  return (
    <>
      <div className="homepage">
        <Header />
        <section className="mb-10 lotte_video lg:mb-20">
          <LottieSlider />
        </section>

        <FeaturedCategory />

        <AboutRRImperial />

        <KeyStrength />

        <section className="bg-[#e91111] px-4 lg:px-0 py-10 lg:py-20">
          <div className="container relative flex flex-col items-center justify-center overflow-hidden text-center text-white h-60">
            <h2 className="mb-1 font-bold text-f28 lg:text-f34">Want To Know More About RR Imperial</h2>
            <p className="mb-3 text-f18">We always value our customers and their thoughts, Please feel free to knock us anytime.</p>
            <div className="flex justify-center gap-7">
              <Link href="/contact-us/head-office" className="text-f15 text-[#e91111] font-bold bg-white border-2 border-transparent hover:bg-[#333] hover:text-white transition-colors px-[50px] py-[12px] rounded-md">
                Contact Us
              </Link>
            </div>
            <img src={"img/graph_1.png"} alt="" className="hidden lg:block absolute -top-2 -left-5 -rotate-[20deg] scale-[65%]" />
            <img src={"img/graph_2.png"} alt="" className="hidden lg:block absolute -bottom-10 -right-0 rotate-[20deg] scale-[65%]" />
          </div>
        </section>
        <QuickNavigation />
        <Footer />
      </div>
    </>
  );
}
