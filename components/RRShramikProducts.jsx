"use client";
import Image from "next/image";
import { useEffect } from "react";

const RRShramikProductsComponent = () => {
  useEffect(() => {
    const box1 = document.querySelector(".category_card_1");
    const box2 = document.querySelector(".category_card_2");
    const box3 = document.querySelector(".category_card_3");
    const box4 = document.querySelector(".category_card_4");
    const box5 = document.querySelector(".category_card_5");
    const box6 = document.querySelector(".category_card_6");
    const box7 = document.querySelector(".category_card_7");

    box1.addEventListener("mouseenter", () => {
      box1.setAttribute("data-aos-delay", "0");
    });
    box2.addEventListener("mouseenter", () => {
      box2.setAttribute("data-aos-delay", "0");
    });
    box3.addEventListener("mouseenter", () => {
      box3.setAttribute("data-aos-delay", "0");
    });
    box4.addEventListener("mouseenter", () => {
      box4.setAttribute("data-aos-delay", "0");
    });
    box5.addEventListener("mouseenter", () => {
      box5.setAttribute("data-aos-delay", "0");
    });
    box6.addEventListener("mouseenter", () => {
      box6.setAttribute("data-aos-delay", "0");
    });
    box7.addEventListener("mouseenter", () => {
      box7.setAttribute("data-aos-delay", "0");
    });
  }, []);

  return (
    <div>
      <div className="container">
        <div className="mb-14">
          <h3 className="text-[#D46A29] text-f28 lg:text-f38 font-bold text-center mb-10">
            RR SHRAMIK PRODUCTS
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
            <a href="/pdf/rr_shramik_price_list.pdf" download>
              <div
                // href="#"
                data-aos="fade-right-150"
                data-aos-delay="600"
                className="group category_card_1 rounded-[20px] overflow-hidden border-2 border-[#D46A29] relative"
              >
                <Image
                  src={"/img/rr-shramik/1.webp"}
                  alt=""
                  className="w-full h-full object-cover"
                  width={250}
                  height={250}
                />
                <span className="absolute bottom-0 left-0 right-0 py-4 bg-[#D46A29] text-white group-hover:text-[#D46A29] z-10  text-center uppercase text-f16 font-bold">
                  SUPER ENAMELLED COPPER WIRE <br />{" "}
                  <small>H Class (180&#176;)</small>
                  <span className="w-0 group-hover:w-full group-hover:bg-white duration-300 absolute inset-0 transition-all -z-10"></span>
                </span>
              </div>
            </a>
            <a href="/pdf/rr_shramik_price_list.pdf" download>
              <div
                // href="/rr-shramik-products/category"
                data-aos="fade-right-150"
                data-aos-delay="400"
                className="group category_card_2 rounded-[20px] overflow-hidden border-2 border-[#D46A29] relative"
              >
                <Image
                  src={"/img/rr-shramik/2.webp"}
                  alt=""
                  className="w-full h-full object-cover"
                  width={250}
                  height={250}
                />
                <span className="absolute bottom-0 left-0 right-0 py-4 bg-[#D46A29] text-white group-hover:text-[#D46A29] z-10 text-center uppercase text-f16 font-bold">
                  SUPER ENAMELLED COPPER WIRE <br />{" "}
                  <small>H+ Class (200&#176;)</small>
                  <span className="w-0 group-hover:w-full group-hover:bg-white duration-300 absolute inset-0 transition-all -z-10"></span>
                </span>
              </div>
            </a>
            <a href="/pdf/rr_shramik_price_list.pdf" download>
              <div
                // href="/rr-shramik-products/category"
                data-aos="fade-right-150"
                data-aos-delay="200"
                className="group category_card_3 rounded-[20px] overflow-hidden border-2 border-[#D46A29] relative"
              >
                <Image
                  src={"/img/rr-shramik/3.webp"}
                  alt=""
                  className="w-full h-full object-cover"
                  width={250}
                  height={250}
                />
                <span className="absolute bottom-0 left-0 right-0 py-4 bg-[#D46A29] text-white group-hover:text-[#D46A29] z-10 text-center uppercase text-f16 font-bold">
                  Bare Copper Strips
                  <br /> / Bus Bars
                  <span className="w-0 group-hover:w-full group-hover:bg-white duration-300 absolute inset-0 transition-all -z-10"></span>
                </span>
              </div>
            </a>
            <a href="/pdf/rr_shramik_price_list.pdf" download>
              <div
                // href="/rr-shramik-products/category"
                data-aos="fade-right-150"
                className="group category_card_4 rounded-[20px] overflow-hidden border-2 border-[#D46A29] relative"
              >
                <Image
                  src={"/img/rr-shramik/4.webp"}
                  alt=""
                  className="w-full h-full object-cover"
                  width={250}
                  height={250}
                />
                <span className="absolute bottom-0 left-0 right-0 py-4 bg-[#D46A29] text-white group-hover:text-[#D46A29] z-10 text-center uppercase text-f16 font-bold">
                  Bunched Paper Covered
                  <br /> Copper Strips
                  <span className="w-0 group-hover:w-full group-hover:bg-white duration-300 absolute inset-0 transition-all -z-10"></span>
                </span>
              </div>
            </a>
          </div>
          <div className="grid grid-cols-[repeat(1,minmax(0,1fr))] lg:grid-cols-[repeat(3,minmax(0,320px))] place-content-center gap-8 mx-auto">
            <a href="/pdf/rr_shramik_price_list.pdf" download>
              <div
                // href="/rr-shramik-products/category"
                data-aos="fade-left-150"
                data-aos-delay="400"
                className=" group category_card_5 rounded-[20px] overflow-hidden border-2 border-[#D46A29] relative"
              >
                <Image
                  src={"/img/rr-shramik/5.webp"}
                  alt=""
                  className="w-full h-full object-cover"
                  width={250}
                  height={250}
                />
                <span className="absolute bottom-0 left-0 right-0 py-4 bg-[#D46A29] text-white group-hover:text-[#D46A29] z-10 text-center uppercase text-f16 font-bold">
                  Paper Covered Copper Strips
                  <span className="w-0 group-hover:w-full group-hover:bg-white duration-300 absolute inset-0 transition-all -z-10"></span>
                </span>
              </div>
            </a>
            <a href="/pdf/rr_shramik_price_list.pdf" download>
              <div
                // href="/rr-shramik-products/category"
                data-aos="fade-left-150"
                data-aos-delay="200"
                className="group category_card_6 rounded-[20px] overflow-hidden border-2 border-[#D46A29] relative"
              >
                <Image
                  src={"/img/rr-shramik/6.webp"}
                  alt=""
                  className="w-full h-full object-cover"
                  width={250}
                  height={250}
                />
                <span className="absolute bottom-0 left-0 right-0 py-4 bg-[#D46A29] text-white group-hover:text-[#D46A29] z-10 text-center uppercase text-f16 font-bold">
                  Cotton Braided Copper Strips
                  <span className="w-0 group-hover:w-full group-hover:bg-white duration-300 absolute inset-0 transition-all -z-10"></span>
                </span>
              </div>
            </a>
            <a href="/pdf/rr_shramik_price_list.pdf" download>
              <div
                // href="#"
                data-aos="fade-left-150"
                className="group category_card_7 rounded-[20px] overflow-hidden border-2 border-[#D46A29] relative"
              >
                <Image
                  src={"/img/rr-shramik/7.webp"}
                  alt=""
                  className="w-full h-full object-cover"
                  width={250}
                  height={250}
                />
                <span className="absolute bottom-0 left-0 right-0 py-4 bg-[#D46A29] text-white group-hover:text-[#D46A29] z-10 text-center uppercase text-f16 font-bold">
                  Copper Rod
                  <span className="w-0 group-hover:w-full group-hover:bg-white duration-300 absolute inset-0 transition-all -z-10"></span>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RRShramikProductsComponent;
