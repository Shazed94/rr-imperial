import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { RRShramikLottie } from "@/components/LottieComponents";
import QuickNavigation from "@/components/QuickNavigation";
import RRShramikProductsComponent from "@/components/RRShramikProducts";


const page = () => {
  return (
    <div>
      <div className="overflow-x-hidden">
        <Header />

        <div className="container">
          <div className=" mb-12">
            <RRShramikLottie />
          </div>

          <div className="px-4 lg:px-0 mb-20">
            <h3 className="text-[#D46A29] text-f28 lg:text-f38 font-bold text-center mb-5">
              RR SHRAMIK PRODUCTS
            </h3>
            <div className="px-4 lg:px-12 mb-10 text-center">
              <p className="text-f16 text-[#000] font-normal">
                This category includes all the Copper wires and other Copper
                wire related products that are necessary for industrial products
                manufacturing.
              </p>
            </div>
            {/* <div className="container mb-10">
              <SearchBoxButton />
            </div> */}
          </div>
          <RRShramikProductsComponent />
        </div>
        <Footer />
      </div>
      <QuickNavigation />
    </div>
  );
};

export default page;
