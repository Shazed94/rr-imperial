import Link from "next/link";
import React from "react";
import { BiNews } from "react-icons/bi";
import {
  FaBookReader,
  FaProductHunt,
  FaVideo,
  FaWindowRestore,
} from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { BsLightbulb } from "react-icons/bs";
import { CgEventbrite } from "react-icons/cg";
import AdminMaster from "@/components/AdminMaster/AdminMaster";

const page = () => {
  return (
    <AdminMaster>
      <div class="content grid grid-cols-12 gap-8 pt-36 pb-12 bg-[#222338] text-[#b1b2b9]">
        <div class="col-span-3 ps-8">
          <div class="flex items-center mb-5">
            <a href="#" class="glowing_icon me-3">
              <i class="fa-solid fa-bolt-lightning fa-lg"></i>
            </a>
            <h4 class="text-xl">News</h4>
          </div>
          <div class="bg-[#2b2a48] rounded-xl px-6 py-8 mb-8">
            <div class="flex flex-col justify-between gap-5">
              <div class="flex gap-5">
                <div class="img_wrapper w-[20%] ">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                    class="w-full h-auto rounded-full object-cover "
                  />
                </div>
                <h4 class="text-[#8f89bf] text-lg font-medium w-[80%]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur expedita.
                </h4>
              </div>
              <div class="flex justify-between">
                <div class="text-[#57537c]">10:32 AM</div>
                <button class="text-[#576cb5] flex items-center gap-4 hover:brightness-125 transition-all duration-200">
                  <span class="font-bold">READ</span>
                  <i class="fa-solid fa-caret-right mt-[1px]"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="bg-[#2b2a48] rounded-xl px-6 py-8 mb-8">
            <div class="flex flex-col justify-between gap-5">
              <div class="flex gap-5 ">
                <div class="img_wrapper w-[20%] ">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                    class="w-full h-auto rounded-full object-cover "
                  />
                </div>
                <h4 class="text-[#8f89bf] text-lg font-medium w-[80%]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur expedita.
                </h4>
              </div>
              <div class="flex justify-between">
                <div class="text-[#57537c]">10:32 AM</div>
                <button class="text-[#576cb5] flex items-center gap-4 hover:brightness-125 transition-all duration-200">
                  <span class="font-bold">READ</span>
                  <i class="fa-solid fa-caret-right mt-[1px]"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="bg-[#2b2a48] rounded-xl px-6 py-8 mb-8">
            <div class="flex flex-col justify-between gap-5">
              <div class="flex gap-5 ">
                <div class="img_wrapper w-[20%] ">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                    class="w-full h-auto rounded-full object-cover "
                  />
                </div>
                <h4 class="text-[#8f89bf] text-lg font-medium w-[80%]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur expedita.
                </h4>
              </div>
              <div class="flex justify-between">
                <div class="text-[#57537c]">10:32 AM</div>
                <button class="text-[#576cb5] flex items-center gap-4 hover:brightness-125 transition-all duration-200">
                  <span class="font-bold">READ</span>
                  <i class="fa-solid fa-caret-right mt-[1px]"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-7 pe-[104px]">
          <div class="flex items-center justify-between mb-5">
            <div class="flex items-center">
              <a href="#" class="glowing_icon_flag me-3">
                <i class="fa-solid fa-flag"></i>
              </a>
              <h4 class="text-xl">Timeline</h4>
            </div>
            <div class="flex items-center gap-1">
              <span>Sort: </span>
              <div class="relative">
                <select class="rounded-[7px] px-2 font-normal text-[#8f89bf] bg-transparent outline-0 transition-all cursor-pointer appearance-none relative z-10">
                  <option value="brazil">All</option>
                  <option value="bucharest">option 1</option>
                  <option value="london">option 2</option>
                  <option value="washington">option 3</option>
                </select>
                <span class="absolute right-5 top-[-2px] z-10">
                  <i class="fa-solid fa-sort-down "></i>
                </span>
              </div>
            </div>
          </div>
          <div class="bg-[#2b2a48] rounded-xl overflow-hidden mb-8">
            <div class="flex flex-col justify-between ">
              <div class="px-8 py-5 h-32  flex items-center gap-5">
                <div class="img_wrapper w-20 ">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                    class="w-full h-auto rounded-full object-cover "
                  />
                </div>
                <div class="relative flex h-10 w-full min-w-[200px] ">
                  <input
                    type="email"
                    class="w-full bg-transparent border-none placeholder:text-[#434064] focus:outline-none"
                    placeholder="Write something..."
                  />
                  <div class="flex gap-5">
                    <button
                      class="w-12 h-12 rounded-full bg-[#33324d] flex justify-center items-center"
                      type="button"
                    >
                      <i class="fa-solid fa-magnifying-glass fa-xl"></i>
                    </button>
                    <button
                      class="w-12 h-12 rounded-full bg-[#33324d] flex justify-center items-center"
                      type="button"
                    >
                      <i class="fa-solid fa-paperclip fa-xl"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="flex justify-between bg-[#322d52] px-8 py-5">
                <div class="flex items-center space-x-5">
                  <div class="inline-flex items-center ">
                    <label
                      class="relative flex items-center p-3 rounded-full cursor-pointer"
                      htmlFor="ripple-off"
                    >
                      <input
                        id="ripple-off"
                        type="checkbox"
                        class=" peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all  before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 hover:before:opacity-10"
                      />
                      <div class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="1"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </label>
                    <label
                      class="text-[#5c5977] cursor-pointer select-none"
                      htmlFor="ripple-off"
                    >
                      Annonymously{" "}
                    </label>
                  </div>
                  <div class="relative">
                    <select class="pl-5 pr-12 py-4 font-normal text-[#8f89bf] border-2 border-[#5c5977] rounded-full cursor-pointer bg-transparent outline-0 transition-all appearance-none">
                      <option value="brazil">Who can see</option>
                      <option value="bucharest">option 1</option>
                      <option value="london">option 2</option>
                      <option value="washington">option 3</option>
                    </select>
                    <span class="absolute right-6 top-[15px]">
                      <i class="fa-solid fa-sort-down fa-sm"></i>
                    </span>
                  </div>
                  <div class="relative ">
                    <select class="pl-5 pr-12 py-4 font-normal text-[#8f89bf] border-2 border-[#5c5977] rounded-full cursor-pointer bg-transparent outline-0 transition-all appearance-none">
                      <option value="brazil">Channel</option>
                      <option value="bucharest">option 1</option>
                      <option value="london">option 2</option>
                      <option value="washington">option 3</option>
                    </select>
                    <span class="absolute right-6 top-[15px]">
                      <i class="fa-solid fa-sort-down fa-sm"></i>
                    </span>
                  </div>
                  <i class="fa-solid fa-location-dot cursor-pointer fa-lg"></i>
                </div>
                <div class="text-[#576cb5] flex items-center gap-4 cursor-pointer group">
                  <span class="w-12 h-12 rounded-full bg-[#7fa5fb] flex justify-center items-center group-hover:bg-[#4e82f9] transition-all duration-300">
                    <i class="fa-solid fa-paper-plane text-white group-hover:text-xl  transition-all duration-300"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-[#2b2a48] rounded-xl overflow-hidden mb-8">
            <div class="flex flex-col justify-between ">
              <div class="px-8 py-5 h-32 bg-[#332e54] flex items-center gap-5">
                <div class="p-8 w-12 h-12 bg-[#423d67] shadow-2xl rounded-full flex justify-center items-center">
                  <i class="fa-solid fa-chart-simple fa-xl"></i>
                </div>
                <div class="flex-1 items-center">
                  <h4 class="text-[#b6afef] text-lg pe-5">
                    Prefered format for domain name: first name hyphen last name
                    or last name first name (without hyphen)?
                  </h4>
                </div>
                <span class="ps-5 py-2 border-l-2 border-[#5b5775]">
                  4:33AM
                </span>
              </div>
              <div class="flex flex-col items-center py-8">
                <div class="flex items-center justify-between w-full px-8 py-2">
                  <div class="w-[25%] flex items-center gap-3 ">
                    <input
                      id="draft"
                      class="peer/draft w-6 h-6 "
                      type="radio"
                      name="status"
                    />
                    <label htmlFor="draft" class="fs-lg text-[#68648f]">
                      i.e. john-smith.com
                    </label>
                  </div>
                  <div class="flex-start flex h-3 w-[45%] overflow-hidden rounded-full bg-[#5d588d] font-sans text-xs font-medium">
                    <div class="flex h-full items-baseline justify-center overflow-hidden break-all  w-[70%] rounded-r-full bg-gradient-to-r from-[#ea7588] to-[#e8b888]"></div>
                  </div>
                  <span class="text-[#b6afef]">75%</span>
                </div>
                <div class="flex items-center justify-between w-full px-8 py-2 mb-5">
                  <div class="w-[25%] flex items-center gap-3 ">
                    <input
                      id="draft2"
                      class="peer/draft2 w-6 h-6"
                      type="radio"
                      name="status"
                    />
                    <label htmlFor="draft2" class="fs-lg text-[#68648f]">
                      i.e. john-smith.com
                    </label>
                  </div>
                  <div class="flex-start flex h-3 w-[45%] overflow-hidden rounded-full bg-[#5d588d] font-sans text-xs font-medium">
                    <div class="flex h-full items-baseline justify-center overflow-hidden break-all w-[25%] rounded-r-full bg-gradient-to-r from-[#661fce] to-[#cf2dde]"></div>
                  </div>
                  <span class="text-[#b6afef]">25%</span>
                </div>
                <div class="flex justify-between items-center w-full px-8 py-2">
                  <div class="flex items-center">
                    <span class="pe-5 text-[#b6afef] border-r border-[#b6afef]">
                      9832 votes
                    </span>
                    <span class="ps-5 text-[#b6afef]">Final results</span>
                  </div>
                  <div>
                    <button class="flex items-center gap-3 text-[#e3e3e3] text-lg border-[3px] border-[#7499ff] rounded-full px-8 py-4">
                      Vote
                    </button>
                  </div>
                </div>
              </div>
              <div class="px-8 py-8 bg-[#332e54] flex items-center gap-5">
                <div class="flex items-center space-x-14">
                  <div class="flex items-center gap-4 cursor-pointer hover:brightness-125 transition-all duration-200">
                    <i class="fa-solid fa-heart"></i>
                    <span>Like (3.5k)</span>
                  </div>
                  <div class="flex items-center gap-4 cursor-pointer hover:brightness-125 transition-all duration-200">
                    <i class="fa-solid fa-comment"></i>
                    <span>Comment (0)</span>
                  </div>
                  <div class="flex items-center gap-4 cursor-pointer hover:brightness-125 transition-all duration-200">
                    <i class="fa-solid fa-share"></i>
                    <span>Share (632)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-[#2b2a48] rounded-xl overflow-hidden mb-8">
            <div class="flex flex-col">
              <div class="px-8 py-5 h-32 bg-[#332e54] flex items-center gap-5">
                <div class="p-8 w-12 h-12 bg-[#423d67] shadow-2xl rounded-full flex justify-center items-center">
                  <i class="fa-solid fa-chart-simple fa-xl"></i>
                </div>
                <div class="flex-1 items-center">
                  <h4 class="text-[#b6afef] text-lg pe-5">
                    <span class="text-[#576cb5]">Dennis Sevryukov</span> shared
                    a <span class="text-[#576cb5]">link</span> .
                    <br /> Mobile payments product design case study.{" "}
                  </h4>
                </div>
                <span class="ps-5 py-2 border-l-2 border-[#5b5775]">
                  12:12PM
                </span>
              </div>
              <div class="flex flex-col items-center py-8 px-12">
                <div class="flex bg-[#353058] rounded-2xl shadow-xl overflow-hidden">
                  <img
                    class="w-48 h-auto mx-auto"
                    src="https://unsplash.it/240/225?image=70"
                    alt=""
                  />
                  <div class="p-6 flex flex-col justify-between space-y-2">
                    <div>
                      <h4 class="text-[#9797a5] text-lg font-medium">
                        {" "}
                        Mobile payments case study{" "}
                      </h4>
                      <p class="text-[#625c8c]">
                        Build better mobile payment experiences as a
                        product designer.
                      </p>
                    </div>
                    <div class="flex justify-between items-center font-medium">
                      <div class="text-[#625c8c]">Nov 27, 2023 </div>
                      <div class="text-[#576cb5] flex items-center">
                        <span class="pe-2">nenadmilosevic.co</span>
                        <i class="fa-solid fa-caret-right mt-[6px]"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-8 py-8 bg-[#332e54] flex items-center gap-5">
                <div class="flex items-center space-x-14">
                  <div class="flex items-center gap-4 cursor-pointer hover:brightness-125 transition-all duration-200">
                    <i class="fa-solid fa-heart text-[#c6697f]"></i>
                    <span>Like (2k)</span>
                  </div>
                  <div class="flex items-center gap-4 cursor-pointer hover:brightness-125 transition-all duration-200">
                    <i class="fa-solid fa-comment"></i>
                    <span>Comment (0)</span>
                  </div>
                  <div class="flex items-center gap-4 cursor-pointer hover:brightness-125 transition-all duration-200">
                    <i class="fa-solid fa-share"></i>
                    <span>Share (665)</span>
                  </div>
                </div>
              </div>
              <div class="py-6 px-12">
                <div class="relative w-[95%]">
                  <input
                    type="text"
                    class="w-full bg-[#37335b] px-6 py-4 rounded-full border-none placeholder:text-[#4b4572] focus:outline-none relative"
                    placeholder="Write something..."
                  />
                  <i class="absolute right-5 top-7 fa-solid fa-paperclip cursor-pointer fa-xl"></i>
                  <span class="absolute -right-16 top-1 w-12 h-12 rounded-full bg-[#7fa5fb] flex justify-center items-center cursor-pointer group hover:bg-[#4e82f9] transition-all duration-300">
                    <i class="fa-solid fa-paper-plane text-white group-hover:text-xl transition-all duration-300"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-[#2b2a48] px-8 py-8 rounded-xl flex justify-between gap-3 items-center mb-8">
            <div class=" p-8 w-12 h-12 bg-[#423d67] shadow-2xl rounded-full flex justify-center items-center">
              <i class="fa-solid fa-chart-simple fa-xl"></i>
            </div>
            <span class="text-5xl text-[#b6afef] font-light">8374</span>
            <p class="max-w-sm">
              You rank in the top 8% for profile views among your connections.
              #136 out of 1,689. Increased 18% in the last 30 days.
            </p>
            <div class=" ">
              <div id="chart-container" class="w-48 h-14"></div>
            </div>
          </div>
        </div>
      </div>
    </AdminMaster>
  );
};

export default page;
