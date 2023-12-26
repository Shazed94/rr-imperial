import Link from "next/link";
import React from "react";
import { GoArrowRight } from "react-icons/go";

const ProductsMaster = (props) => {

  return (
    <div className="container product_left_bar flex flex-col lg:flex-row gap-5 mb-10">
      <div className="w-full max-h-[62rem] overflow-auto lg:w-[30%] px-4 lg:px-0">
        {props.productData?.map((product) => (
          <Link
            scroll={false}
            href={`/products/${props.productCategory}/${product.slug}`}
            key={product.id}
            className="group flex justify-between items-center relative bg-[#E62020] px-8 py-5 mb-3"
          >
            <div className="">
              <span className="absolute inset-0 flex items-center px-8 py-5 bg-[#F2F5F6] transition-all border-t border-transparent hover:border-t hover:border-r hover:rounded-br-[60px] hover:border-[#E62020]">
                {product?.name}
              </span>
            </div>
            <GoArrowRight
              size={25}
              className="z-10 -rotate-45 group-hover:rotate-0 transition-all"
              color="#BCBEC0"
            />
          </Link>
        ))}
      </div>
      <div className="w-full lg:w-[70%]">{props.children}</div>
    </div>
  );
};

export default ProductsMaster;
