"use client";
import QuickNavigation from "../QuickNavigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calculator, PriceList } from "../SvgComponents";

const WiredMaster = (props) => {
  const pathname = usePathname();
  const filteredPathname = pathname.split("/");
  return (
    <>
      <section className="container">
        <div className="relative">
          <img src="/img/wired/wired.png" alt="" />
        </div>
        <h2 className="text-f38 text-[#ED1D24] font-bold text-center py-8">
          Wired
        </h2>
      </section>
      <main className="bg-[#E6E7E8]">
        <section className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 text-white pt-5">
            <Link
              href="/wired/price-list"
              id="news"
              scroll={false}
              className={`flex flex-col items-center hover:bg-white transition lg:rounded-tl-lg lg:rounded-tr-lg px-2 ${
                filteredPathname[2] == "price-list"
                  ? "text-[#ED1D24] bg-white"
                  : "text-[#939598]"
              }  text-f16 font-normal group`}
            >
              {filteredPathname[2] == "price-list" ? (
                <>
                  <div className="mt-2 p-3 z-10">
                    <PriceList fill="#ED1D24" className={"w-10 h-10"} />
                  </div>
                  <span className="w-64 text-center px-1 pt-3 pb-1 border-[#A7A9AC]">
                    Price List
                  </span>
                </>
              ) : (
                <>
                  <div className="border-2 mt-2 p-3 border-[#A7A9AC] rounded-full bg-[#E6E7E8] group-hover:bg-white transition z-10">
                    <PriceList fill="#939598" className={"w-10 h-10"} />
                  </div>
                  <span className="w-64 text-center border-2 rounded-lg px-1 pt-[23px] pb-1 border-[#A7A9AC] relative -top-4 min-h-[68px]">
                    Price List
                  </span>
                </>
              )}
            </Link>
            <Link
              href="/wired/kabel-assist-calculator"
              id="blogs"
              scroll={false}
              className={`flex flex-col items-center hover:bg-white transition lg:rounded-tl-lg lg:rounded-tr-lg px-2 ${
                filteredPathname[2] == "kabel-assist-calculator"
                  ? "text-[#ED1D24] bg-white"
                  : "text-[#939598]"
              }  text-f16 font-normal group`}
            >
              {filteredPathname[2] == "kabel-assist-calculator" ? (
                <>
                  <div className="mt-2 p-3 z-10">
                    <Calculator fill="#ED1D24" className={"w-10 h-10"} />
                  </div>
                  <span className="w-64 text-center px-1 pt-3 pb-1 border-[#A7A9AC]">
                    Kabel Assist Calculator
                  </span>
                </>
              ) : (
                <>
                  <div className="border-2 mt-2 p-3 border-[#A7A9AC] rounded-full bg-[#E6E7E8] group-hover:bg-white transition z-10">
                    <Calculator fill="#939598" className={"w-10 h-10"} />
                  </div>
                  <span className="w-64 text-center border-2 rounded-lg px-1 pt-[23px] pb-1 border-[#A7A9AC] relative -top-4 min-h-[68px]">
                    Kabel Assist Calculator
                  </span>
                </>
              )}
            </Link>
          </div>
          <QuickNavigation />
          <div className={``}>{props.children}</div>
        </section>
      </main>
    </>
  );
};

export default WiredMaster;
