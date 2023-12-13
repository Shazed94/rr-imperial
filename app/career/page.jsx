"use client";

import Footer from "@/components/Footer/Footer";
import { BACKEND_BASE_URL } from "@/components/GlobalVariables";
import Header from "@/components/Header/Header";
import { Input } from "@material-tailwind/react";
import axios from "axios";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const CurrentOpenings = () => {
  const [error, setError] = useState();
  const areaOfOperation = useRef();
  const userName = useRef();
  const currentEmployer = useRef();
  const useEmail = useRef();
  const userContactNo = useRef();
  const country = useRef();
  const subject = useRef();
  const message = useRef();
  const userResume = useRef();

  // ============================= form submit to backend ======================

  const storeData = (e) => {
    const formdata = new FormData();
    formdata.append("area_of_operation", areaOfOperation.current.value);
    formdata.append("name", userName.current.value);
    formdata.append("current_employer", currentEmployer.current.value);
    formdata.append("email", useEmail.current.value);
    formdata.append("contact_no", userContactNo.current.value);
    formdata.append("country", country.current.value);
    formdata.append("subject", subject.current.value);
    formdata.append("message", message.current.value);

    formdata.append("resume", userResume.current.files[0]);

    axios
      .post(`${BACKEND_BASE_URL}/api/career/form-submit`, formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      })

      .then((response) => {
        if (response.data.status === 200) {
          setError("");
          e.target.reset();
          toast.success("CV submitted successfully");
        } else {
          setError(response.data?.errors);
        }
      });
    e.preventDefault();
  };

  const allowedFileTypes = [".doc", ".docx", "application/pdf"];

  const uploadHandler = (event) => {
    // const file = event.target.files[0];
    let file_size = event.target.files[0].size;
    let file_type = event.target.files[0].type;

    if (!allowedFileTypes.includes(file_type)) {
      // setErr("File must be .doc,.docx,pdf");
      toast.error("File must be .doc,.docx,pdf");
      event.target.value = null;
      return false;
    }

    if (file_size > 5000001) {
      // setErr("Size can not be more than 5 MB");
      toast.error("Size can not be more than 5 MB");
      event.target.value = null;
      return false;
    }
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
      <Header />
      <section className="container">
        <div className="">
          <img src="/img/career/career.png" alt="" className="" />
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="absolute right-14 bottom-20 text-right max-w-[550px] text-white text-f38 font-bold"
          >
            Wiring <br /> Your Future with <br />
            Innovative and <br />
            SUSTAINABLE SOLUTIONS
          </h2>
        </div>
        <h2 className="text-f38 text-[#ED1D24] font-bold text-center px-4 lg:px-0 py-8">
          Current Openings
        </h2>
        <div className="max-w-[1120px] mx-auto text-center px-4 lg:px-0">
          <p className="text-[#6D6E71] mb-3">
            We urge you to go forward and establish a longer-term relationship
            with us. RR Imperial Electricals Ltd. is always open to considering
            candidates for challenging new roles within the organization.
            It&apos;s time to get outside of your comfort zone and improve your
            encounters.
          </p>
          <p className="text-[#6D6E71]">
            Send your resumes to hr@it@rr-imperial.com as soon as possible.
          </p>

          <h3 className="text-[#E6E7E8] text-f28 lg:text-f38 font-bold py-10 lg:py-24">
            Sorry No Current Openings
          </h3>
        </div>
      </section>

      <div className="bg-[#E6E7E8] py-6 lg:py-12">
        <div className="container">
          <div className="text-center">
            <h2 className="text-f38 text-[#ED1D24] font-bold mb-10">
              Submit Your CV
            </h2>
            <p className="text-[#6D6E71] mb-10">
              We are constantly seeking exceptional people to become part of our
              team. If you would like to apply, kindly upload your resume using
              the form below.
            </p>
          </div>
          <form onSubmit={storeData}>
            <div className="lg:max-w-4xl lg:mx-auto grid grid-cols-12 gap-4 px-4 lg:px-0 lg:gap-6 mb-6 lg:mb-12">
              <div className="col-span-12 lg:col-span-6 ">
                <Input
                  type="text"
                  placeholder="Area of operations"
                  className="bg-white text-gray-900 py-6 shadow-sm border-none placeholder:text-[#D1D3D4] focus:border-none focus:shadow-sm"
                  labelProps={{
                    className: "hidden",
                  }}
                  inputRef={areaOfOperation}
                />
              </div>
              <div className="col-span-12 lg:col-span-6 ">
                <Input
                  type="text"
                  placeholder="Your Name*"
                  className="bg-white text-gray-900 py-6 shadow-sm border-none placeholder:text-[#D1D3D4] focus:border-none focus:shadow-sm"
                  labelProps={{
                    className: "hidden",
                  }}
                  inputRef={userName}
                  required
                />
              </div>
              <div className="col-span-12 lg:col-span-6 ">
                <Input
                  type="text"
                  placeholder="Current Employer*"
                  className="bg-white text-gray-900 py-6 shadow-sm border-none placeholder:text-[#D1D3D4] focus:border-none focus:shadow-sm"
                  labelProps={{
                    className: "hidden",
                  }}
                  inputRef={currentEmployer}
                  required
                />
              </div>
              <div className="col-span-12 lg:col-span-6 relative">
                <Input
                  type="email"
                  placeholder="Email Address*"
                  className="bg-white text-gray-900 py-6 shadow-sm border-none placeholder:text-[#D1D3D4] focus:border-none focus:shadow-sm"
                  labelProps={{
                    className: "hidden",
                  }}
                  inputRef={useEmail}
                  required
                />
                {error?.email && (
                  <div className="text-f12 pt-5 text-red-700">
                    {error?.email}
                  </div>
                )}
              </div>
              <div className="col-span-12 lg:col-span-6 ">
                <Input
                  type="text"
                  placeholder="Contact Number*"
                  className="bg-white text-gray-900 py-6 shadow-sm border-none placeholder:text-[#D1D3D4] focus:border-none focus:shadow-sm"
                  labelProps={{
                    className: "hidden",
                  }}
                  inputRef={userContactNo}
                  required
                />
              </div>
              <div className="col-span-12 lg:col-span-6 ">
                <Input
                  type="text"
                  placeholder="Country*"
                  className="bg-white text-gray-900 py-6 shadow-sm border-none placeholder:text-[#D1D3D4] focus:border-none focus:shadow-sm"
                  labelProps={{
                    className: "hidden",
                  }}
                  inputRef={country}
                  required
                />
              </div>
              <div className="col-span-12">
                <Input
                  type="text"
                  placeholder="Subject*"
                  className="bg-white text-gray-900 py-6 shadow-sm border-none placeholder:text-[#D1D3D4] focus:border-none focus:shadow-sm"
                  labelProps={{
                    className: "hidden",
                  }}
                  inputRef={subject}
                  required
                />
              </div>
              <div className="col-span-12 mb-6 lg:mb-14">
                <textarea
                  placeholder="Cover Letter*"
                  className="bg-white text-gray-900 shadow-sm border-none placeholder:text-[#D1D3D4] focus:border-none focus:shadow-sm w-full rounded-lg"
                  rows={5}
                  ref={message}
                  // required
                />
              </div>
              <div className="col-span-12 flex flex-col lg:flex-row lg:justify-between items-center">
                <div className="w-full">
                  <h4 className="text-[#606060] mb-2">Upload Your CV :</h4>
                  <div className="relative flex flex-col w-full">
                    <input
                      className="block w-full text-sm text-slate-500 file:mr-4 file:py-3 file:px-4 file:border-0 file:text-sm file:font-semibold bg-white
                   file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 border border-gray-300 rounded-lg"
                      type="file"
                      accept=".doc,.docx,application/pdf"
                      onChange={uploadHandler}
                      ref={userResume}
                    />

                    {error?.resume ? (
                      <div className="text-f12 pt-3 text-red-700">
                        {error?.resume}
                      </div>
                    ) : (
                      <small className="text-[#A7A9AC]">
                        Please upload Resume in 3 document type: Doc, Docx and{" "}
                        <br /> PDF & size-limit - 5mb
                      </small>
                    )}
                  </div>
                </div>
                <div className="mt-1 ms-4 lg:mb-3">
                  <button
                    type="submit"
                    className="bg-[#ED1D24] text-f20 text-white font-bold px-10 py-1 rounded-lg"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CurrentOpenings;
