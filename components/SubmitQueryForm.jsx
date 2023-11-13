"use client";
import { Input, Textarea } from "@material-tailwind/react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const SubmitQueryForm = () => {
  return (
    <div>
      <div className="mb-10">
        <h2 className="text-f34 font-tahoma-regular capitalize mb-3">
          Submit Your Queries!
        </h2>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          similique illum aut dignissimos, voluptas explicabo tempore dolores
          sapiente laborum natus!
        </p>
      </div>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-6 ">
          <Input
            type="email"
            placeholder="Email Address"
            className="bg-white text-gray-900 h-[60px] shadow-sm border-none placeholder:text-gray-500 focus:border-none focus:shadow-sm"
            labelProps={{
              className: "hidden",
            }}
          />
        </div>
        <div className="col-span-6 ">
          <Input
            type="email"
            placeholder="Email Address"
            className="bg-white text-gray-900 h-[60px] shadow-sm border-none placeholder:text-gray-500 focus:border-none focus:shadow-sm"
            labelProps={{
              className: "hidden",
            }}
          />
        </div>
        <div className="col-span-6 ">
          <Input
            type="email"
            placeholder="Email Address"
            className="bg-white text-gray-900 h-[60px] shadow-sm border-none placeholder:text-gray-500 focus:border-none focus:shadow-sm"
            labelProps={{
              className: "hidden",
            }}
          />
        </div>
        <div className="col-span-6 ">
          <Input
            type="email"
            placeholder="Email Address"
            className="bg-white text-gray-900 h-[60px] shadow-sm border-none placeholder:text-gray-500 focus:border-none focus:shadow-sm"
            labelProps={{
              className: "hidden",
            }}
          />
        </div>
        <div className="col-span-12 ">
          <Textarea
            placeholder="Email Address"
            rows={1}
            resize={true}
            className="bg-white text-gray-900 shadow-sm border-none placeholder:text-gray-500 focus:border-none focus:shadow-sm"
            labelProps={{
              className: "hidden",
            }}
          />
        </div>
      </div>
      <button className="bg-[#e61616] text-white rounded-lg flex  items-center px-7 py-3 mt-5">
        Send Message <MdOutlineKeyboardDoubleArrowRight size={25} className="ms-2"/>
      </button>
    </div>
  );
  z;
};

export default SubmitQueryForm;
