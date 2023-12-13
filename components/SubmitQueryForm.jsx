"use client";
import { Input } from "@material-tailwind/react";
import axios from "axios";
import { useRef } from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { BACKEND_BASE_URL } from "./GlobalVariables";
import toast, { Toaster } from "react-hot-toast";

const SubmitQueryForm = () => {
  const userName = useRef();
  const userEmail = useRef();
  const userPhone = useRef();
  const subject = useRef();
  const userMessage = useRef();

  // ============================= form submit to backend ======================

  const storeData = (e) => {
    const formdata = new FormData();
    formdata.append("name", userName.current.value);
    formdata.append("email", userEmail.current.value);
    formdata.append("phone", userPhone.current.value);
    formdata.append("subject", subject.current.value);
    formdata.append("message", userMessage.current.value);

    axios
      .post(`${BACKEND_BASE_URL}/api/contact/form-submit`, formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      })

      .then((response) => {
        if (response.data.status === 200) {
           toast.success(response.data.message);
          e.target.reset();
        }
      });
    e.preventDefault();
  };

  return (
    <div>
      <Toaster
        position="top-center"
        gutter={8}
        toastOptions={{
          duration: 3000,
          success: {
            style: {
              background: "#fff",
              color: "#000",
            },
          },
          error: {
            style: {
              background: "#fff",
              color: "#000",
            },
          },
        }}
      />
      <div className="mb-10">
        <h2 className="text-f34 font-normal capitalize mb-3">
          Submit Your Queries!
        </h2>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          similique illum aut dignissimos, voluptas explicabo tempore dolores
          sapiente laborum natus!
        </p>
      </div>
      <form onSubmit={storeData}>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 lg:col-span-6">
            <Input
              type="text"
              placeholder="Your Name*"
              className="bg-white text-gray-900 h-[60px] shadow-sm border-none placeholder:text-gray-500 focus:border-none focus:shadow-sm"
              labelProps={{
                className: "hidden",
              }}
              required
              inputRef={userName}
            />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <Input
              type="text"
              placeholder="Phone Number*"
              className="bg-white text-gray-900 h-[60px] shadow-sm border-none placeholder:text-gray-500 focus:border-none focus:shadow-sm"
              labelProps={{
                className: "hidden",
              }}
              inputRef={userPhone}
            />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <Input
              type="email"
              placeholder="Email Address*"
              className="bg-white text-gray-900 h-[60px] shadow-sm border-none placeholder:text-gray-500 focus:border-none focus:shadow-sm"
              labelProps={{
                className: "hidden",
              }}
              required
              inputRef={userEmail}
            />
          </div>

          <div className="col-span-12 lg:col-span-6">
            <Input
              type="text"
              placeholder="Subject*"
              className="bg-white text-gray-900 h-[60px] shadow-sm border-none placeholder:text-gray-500 focus:border-none focus:shadow-sm"
              labelProps={{
                className: "hidden",
              }}
              inputRef={subject}
            />
          </div>
          <div className="col-span-12 ">
            <textarea
              placeholder="Messages*"
              rows={5}
              resize={true}
              className="bg-white text-gray-900 shadow-sm rounded-lg border-none placeholder:text-gray-500 focus:border-none focus:shadow-sm w-full"
              labelProps={{
                className: "hidden",
              }}
              required
              ref={userMessage}
            />
          </div>
        </div>
        <button
          type="submit"
          className="group bg-[#e61616] text-white border border-[#e61616] hover:bg-white hover:text-[#e61616] hover:border hover:border-[#e61616] rounded-lg flex items-center px-7 py-3 mt-5 transition-all duration-300"
        >
          Send Message{" "}
          <MdOutlineKeyboardDoubleArrowRight
            size={25}
            className="ms-2 group-hover:text-[#e61616] group-hover:ms-4 transition-all duration-300"
          />
        </button>
      </form>
    </div>
  );
  z;
};

export default SubmitQueryForm;
