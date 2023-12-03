"use client";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Button, Input, Textarea } from "@material-tailwind/react";

const CurrentOpenings = () => {
  return (
    <div>
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

          <div className="lg:max-w-4xl lg:mx-auto grid grid-cols-12 gap-4 px-4 lg:px-0 lg:gap-6 mb-6 lg:mb-12">
            <div className="col-span-12 lg:col-span-6 ">
              <Input
                type="text"
                placeholder="Area of operations"
                className="bg-white text-gray-900 py-6 shadow-sm border-none placeholder:text-[#D1D3D4] focus:border-none focus:shadow-sm"
                labelProps={{
                  className: "hidden",
                }}
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
              />
            </div>
            <div className="col-span-12 lg:col-span-6 ">
              <Input
                type="email"
                placeholder="Email Address*"
                className="bg-white text-gray-900 py-6 shadow-sm border-none placeholder:text-[#D1D3D4] focus:border-none focus:shadow-sm"
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <div className="col-span-12 lg:col-span-6 ">
              <Input
                type="text"
                placeholder="Contact Number*"
                className="bg-white text-gray-900 py-6 shadow-sm border-none placeholder:text-[#D1D3D4] focus:border-none focus:shadow-sm"
                labelProps={{
                  className: "hidden",
                }}
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
              />
            </div>
            <div className="col-span-12 mb-6 lg:mb-14">
              <Textarea
                placeholder="Cover Letter*"
                className="bg-white text-gray-900 shadow-sm border-none placeholder:text-[#D1D3D4] focus:border-none focus:shadow-sm"
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <div className="col-span-12 flex flex-col lg:flex-row lg:justify-between items-center">
              <div className="w-full">
                <h4 className="text-[#606060] mb-2">Upload Your CV :</h4>
                <div className="relative flex flex-col w-full">
                  {/* <Input
                    type="file"
                    className="rounded-2xl !bg-[#F2F5F6] placeholder:text-gray-500 focus:!border focus:!border-[#cdcdcd] focus:!border-t focus-within:outline-none"
                    labelProps={{
                      className: "hidden",
                    }}
                  /> */}

                  <input
                    className="border py-1 px-3 bg-white rounded-lg text-grey-800 mb-3"
                    type="file"
                  />
                  <small className="text-[#A7A9AC]">
                    Please upload Resume in 3 document type: Doc, Docx and{" "}
                    <br /> PDF & size-limit - 5mb
                  </small>
                </div>
              </div>
              <div className="mt-5 lg:mb-3">
                <button className="bg-[#ED1D24] text-f20 text-white font-bold px-10 py-1 rounded-lg">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CurrentOpenings;
