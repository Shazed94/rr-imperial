import Link from "next/link";
import AdminMaster from "@/components/AdminMaster/AdminMaster";

const page = () => {
  return (
    // <AdminMaster>
      <div className="content grid grid-cols-12 gap-8 pt-36 pb-12 bg-[#222338] text-[#b1b2b9]">
        <div className="col-span-3 ps-8">
          <div className="flex items-center mb-5">
            <a href="#" className="glowing_icon me-3">
              <i className="fa-solid fa-bolt-lightning fa-lg"></i>
            </a>
            <h4 className="text-xl">News</h4>
          </div>
          <div className="bg-[#2b2a48] rounded-xl px-6 py-8 mb-8">
            <div className="flex flex-col justify-between gap-5">
              <div className="flex gap-5">
                <div className="img_wrapper w-[20%] ">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                    className="w-full h-auto rounded-full object-cover "
                  />
                </div>
                <h4 className="text-[#8f89bf] text-lg font-medium w-[80%]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur expedita.
                </h4>
              </div>
              <div className="flex justify-between">
                <div className="text-[#57537c]">10:32 AM</div>
                <button className="text-[#576cb5] flex items-center gap-4 hover:brightness-125 transition-all duration-200">
                  <span className="font-bold">READ</span>
                  <i className="fa-solid fa-caret-right mt-[1px]"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-[#2b2a48] rounded-xl px-6 py-8 mb-8">
            <div className="flex flex-col justify-between gap-5">
              <div className="flex gap-5 ">
                <div className="img_wrapper w-[20%] ">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                    className="w-full h-auto rounded-full object-cover "
                  />
                </div>
                <h4 className="text-[#8f89bf] text-lg font-medium w-[80%]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur expedita.
                </h4>
              </div>
              <div className="flex justify-between">
                <div className="text-[#57537c]">10:32 AM</div>
                <button className="text-[#576cb5] flex items-center gap-4 hover:brightness-125 transition-all duration-200">
                  <span className="font-bold">READ</span>
                  <i className="fa-solid fa-caret-right mt-[1px]"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-[#2b2a48] rounded-xl px-6 py-8 mb-8">
            <div className="flex flex-col justify-between gap-5">
              <div className="flex gap-5 ">
                <div className="img_wrapper w-[20%] ">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                    className="w-full h-auto rounded-full object-cover "
                  />
                </div>
                <h4 className="text-[#8f89bf] text-lg font-medium w-[80%]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur expedita.
                </h4>
              </div>
              <div className="flex justify-between">
                <div className="text-[#57537c]">10:32 AM</div>
                <button className="text-[#576cb5] flex items-center gap-4 hover:brightness-125 transition-all duration-200">
                  <span className="font-bold">READ</span>
                  <i className="fa-solid fa-caret-right mt-[1px]"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-7 pe-[104px]">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center">
              <a href="#" className="glowing_icon_flag me-3">
                <i className="fa-solid fa-flag"></i>
              </a>
              <h4 className="text-xl">Timeline</h4>
            </div>
            <div className="flex items-center gap-1">
              <span>Sort: </span>
              <div className="relative">
                <select className="rounded-[7px] px-2 font-normal text-[#8f89bf] bg-transparent outline-0 transition-all cursor-pointer appearance-none relative z-10">
                  <option value="brazil">All</option>
                  <option value="bucharest">option 1</option>
                  <option value="london">option 2</option>
                  <option value="washington">option 3</option>
                </select>
                <span className="absolute right-5 top-[-2px] z-10">
                  <i className="fa-solid fa-sort-down "></i>
                </span>
              </div>
            </div>
          </div>
          <div className="bg-[#2b2a48] rounded-xl overflow-hidden mb-8">
            <div className="flex flex-col justify-between ">
              <div className="px-8 py-5 h-32  flex items-center gap-5">
                <div className="img_wrapper w-20 ">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                    className="w-full h-auto rounded-full object-cover "
                  />
                </div>
                <div className="relative flex h-10 w-full min-w-[200px] ">
                  <input
                    type="email"
                    className="w-full bg-transparent border-none placeholder:text-[#434064] focus:outline-none"
                    placeholder="Write something..."
                  />
                  <div className="flex gap-5">
                    <button
                      className="w-12 h-12 rounded-full bg-[#33324d] flex justify-center items-center"
                      type="button"
                    >
                      <i className="fa-solid fa-magnifying-glass fa-xl"></i>
                    </button>
                    <button
                      className="w-12 h-12 rounded-full bg-[#33324d] flex justify-center items-center"
                      type="button"
                    >
                      <i className="fa-solid fa-paperclip fa-xl"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex justify-between bg-[#322d52] px-8 py-5">
                <div className="flex items-center space-x-5">
                  <div className="inline-flex items-center ">
                    <label
                      className="relative flex items-center p-3 rounded-full cursor-pointer"
                      htmlFor="ripple-off"
                    >
                      <input
                        id="ripple-off"
                        type="checkbox"
                        className=" peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all  before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 hover:before:opacity-10"
                      />
                      <div className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
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
                      className="text-[#5c5977] cursor-pointer select-none"
                      htmlFor="ripple-off"
                    >
                      Annonymously{" "}
                    </label>
                  </div>
                  <div className="relative">
                    <select className="pl-5 pr-12 py-4 font-normal text-[#8f89bf] border-2 border-[#5c5977] rounded-full cursor-pointer bg-transparent outline-0 transition-all appearance-none">
                      <option value="brazil">Who can see</option>
                      <option value="bucharest">option 1</option>
                      <option value="london">option 2</option>
                      <option value="washington">option 3</option>
                    </select>
                    <span className="absolute right-6 top-[15px]">
                      <i className="fa-solid fa-sort-down fa-sm"></i>
                    </span>
                  </div>
                  <div className="relative ">
                    <select className="pl-5 pr-12 py-4 font-normal text-[#8f89bf] border-2 border-[#5c5977] rounded-full cursor-pointer bg-transparent outline-0 transition-all appearance-none">
                      <option value="brazil">Channel</option>
                      <option value="bucharest">option 1</option>
                      <option value="london">option 2</option>
                      <option value="washington">option 3</option>
                    </select>
                    <span className="absolute right-6 top-[15px]">
                      <i className="fa-solid fa-sort-down fa-sm"></i>
                    </span>
                  </div>
                  <i className="fa-solid fa-location-dot cursor-pointer fa-lg"></i>
                </div>
                <div className="text-[#576cb5] flex items-center gap-4 cursor-pointer group">
                  <span className="w-12 h-12 rounded-full bg-[#7fa5fb] flex justify-center items-center group-hover:bg-[#4e82f9] transition-all duration-300">
                    <i className="fa-solid fa-paper-plane text-white group-hover:text-xl  transition-all duration-300"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#2b2a48] rounded-xl overflow-hidden mb-8">
            <div className="flex flex-col justify-between ">
              <div className="px-8 py-5 h-32 bg-[#332e54] flex items-center gap-5">
                <div className="p-8 w-12 h-12 bg-[#423d67] shadow-2xl rounded-full flex justify-center items-center">
                  <i className="fa-solid fa-chart-simple fa-xl"></i>
                </div>
                <div className="flex-1 items-center">
                  <h4 className="text-[#b6afef] text-lg pe-5">
                    Prefered format for domain name: first name hyphen last name
                    or last name first name (without hyphen)?
                  </h4>
                </div>
                <span className="ps-5 py-2 border-l-2 border-[#5b5775]">
                  4:33AM
                </span>
              </div>
              <div className="flex flex-col items-center py-8">
                <div className="flex items-center justify-between w-full px-8 py-2">
                  <div className="w-[25%] flex items-center gap-3 ">
                    <input
                      id="draft"
                      className="peer/draft w-6 h-6 "
                      type="radio"
                      name="status"
                    />
                    <label htmlFor="draft" className="fs-lg text-[#68648f]">
                      i.e. john-smith.com
                    </label>
                  </div>
                  <div className="flex-start flex h-3 w-[45%] overflow-hidden rounded-full bg-[#5d588d] font-sans text-xs font-medium">
                    <div className="flex h-full items-baseline justify-center overflow-hidden break-all  w-[70%] rounded-r-full bg-gradient-to-r from-[#ea7588] to-[#e8b888]"></div>
                  </div>
                  <span className="text-[#b6afef]">75%</span>
                </div>
                <div className="flex items-center justify-between w-full px-8 py-2 mb-5">
                  <div className="w-[25%] flex items-center gap-3 ">
                    <input
                      id="draft2"
                      className="peer/draft2 w-6 h-6"
                      type="radio"
                      name="status"
                    />
                    <label htmlFor="draft2" className="fs-lg text-[#68648f]">
                      i.e. john-smith.com
                    </label>
                  </div>
                  <div className="flex-start flex h-3 w-[45%] overflow-hidden rounded-full bg-[#5d588d] font-sans text-xs font-medium">
                    <div className="flex h-full items-baseline justify-center overflow-hidden break-all w-[25%] rounded-r-full bg-gradient-to-r from-[#661fce] to-[#cf2dde]"></div>
                  </div>
                  <span className="text-[#b6afef]">25%</span>
                </div>
                <div className="flex justify-between items-center w-full px-8 py-2">
                  <div className="flex items-center">
                    <span className="pe-5 text-[#b6afef] border-r border-[#b6afef]">
                      9832 votes
                    </span>
                    <span className="ps-5 text-[#b6afef]">Final results</span>
                  </div>
                  <div>
                    <button className="flex items-center gap-3 text-[#e3e3e3] text-lg border-[3px] border-[#7499ff] rounded-full px-8 py-4">
                      Vote
                    </button>
                  </div>
                </div>
              </div>
              <div className="px-8 py-8 bg-[#332e54] flex items-center gap-5">
                <div className="flex items-center space-x-14">
                  <div className="flex items-center gap-4 cursor-pointer hover:brightness-125 transition-all duration-200">
                    <i className="fa-solid fa-heart"></i>
                    <span>Like (3.5k)</span>
                  </div>
                  <div className="flex items-center gap-4 cursor-pointer hover:brightness-125 transition-all duration-200">
                    <i className="fa-solid fa-comment"></i>
                    <span>Comment (0)</span>
                  </div>
                  <div className="flex items-center gap-4 cursor-pointer hover:brightness-125 transition-all duration-200">
                    <i className="fa-solid fa-share"></i>
                    <span>Share (632)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#2b2a48] rounded-xl overflow-hidden mb-8">
            <div className="flex flex-col">
              <div className="px-8 py-5 h-32 bg-[#332e54] flex items-center gap-5">
                <div className="p-8 w-12 h-12 bg-[#423d67] shadow-2xl rounded-full flex justify-center items-center">
                  <i className="fa-solid fa-chart-simple fa-xl"></i>
                </div>
                <div className="flex-1 items-center">
                  <h4 className="text-[#b6afef] text-lg pe-5">
                    <span className="text-[#576cb5]">Dennis Sevryukov</span> shared
                    a <span className="text-[#576cb5]">link</span> .
                    <br /> Mobile payments product design case study.{" "}
                  </h4>
                </div>
                <span className="ps-5 py-2 border-l-2 border-[#5b5775]">
                  12:12PM
                </span>
              </div>
              <div className="flex flex-col items-center py-8 px-12">
                <div className="flex bg-[#353058] rounded-2xl shadow-xl overflow-hidden">
                  <img
                    className="w-48 h-auto mx-auto"
                    src="https://unsplash.it/240/225?image=70"
                    alt=""
                  />
                  <div className="p-6 flex flex-col justify-between space-y-2">
                    <div>
                      <h4 className="text-[#9797a5] text-lg font-medium">
                        {" "}
                        Mobile payments case study{" "}
                      </h4>
                      <p className="text-[#625c8c]">
                        Build better mobile payment experiences as a
                        product designer.
                      </p>
                    </div>
                    <div className="flex justify-between items-center font-medium">
                      <div className="text-[#625c8c]">Nov 27, 2023 </div>
                      <div className="text-[#576cb5] flex items-center">
                        <span className="pe-2">nenadmilosevic.co</span>
                        <i className="fa-solid fa-caret-right mt-[6px]"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-8 py-8 bg-[#332e54] flex items-center gap-5">
                <div className="flex items-center space-x-14">
                  <div className="flex items-center gap-4 cursor-pointer hover:brightness-125 transition-all duration-200">
                    <i className="fa-solid fa-heart text-[#c6697f]"></i>
                    <span>Like (2k)</span>
                  </div>
                  <div className="flex items-center gap-4 cursor-pointer hover:brightness-125 transition-all duration-200">
                    <i className="fa-solid fa-comment"></i>
                    <span>Comment (0)</span>
                  </div>
                  <div className="flex items-center gap-4 cursor-pointer hover:brightness-125 transition-all duration-200">
                    <i className="fa-solid fa-share"></i>
                    <span>Share (665)</span>
                  </div>
                </div>
              </div>
              <div className="py-6 px-12">
                <div className="relative w-[95%]">
                  <input
                    type="text"
                    className="w-full bg-[#37335b] px-6 py-4 rounded-full border-none placeholder:text-[#4b4572] focus:outline-none relative"
                    placeholder="Write something..."
                  />
                  <i className="absolute right-5 top-7 fa-solid fa-paperclip cursor-pointer fa-xl"></i>
                  <span className="absolute -right-16 top-1 w-12 h-12 rounded-full bg-[#7fa5fb] flex justify-center items-center cursor-pointer group hover:bg-[#4e82f9] transition-all duration-300">
                    <i className="fa-solid fa-paper-plane text-white group-hover:text-xl transition-all duration-300"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#2b2a48] px-8 py-8 rounded-xl flex justify-between gap-3 items-center mb-8">
            <div className=" p-8 w-12 h-12 bg-[#423d67] shadow-2xl rounded-full flex justify-center items-center">
              <i className="fa-solid fa-chart-simple fa-xl"></i>
            </div>
            <span className="text-5xl text-[#b6afef] font-light">8374</span>
            <p className="max-w-sm">
              You rank in the top 8% for profile views among your connections.
              #136 out of 1,689. Increased 18% in the last 30 days.
            </p>
            <div className=" ">
              <div id="chart-container" className="w-48 h-14"></div>
            </div>
          </div>
        </div>
      </div>
    // </AdminMaster>
  );
};

export default page;
