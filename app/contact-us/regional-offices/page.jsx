"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import QuickNavigation from "@/components/QuickNavigation";
import SubmitQueryForm from "@/components/SubmitQueryForm";
import { all_Regional_Office_Front } from "@/utility/api";
import {
  Button,
  Dialog,
  DialogFooter,
  DialogHeader,
  DialogBody,
  Tabs,
  TabsHeader,
  Tab,
  TabsBody,
  TabPanel,
} from "@material-tailwind/react";
import Parse from "html-react-parser";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ContactUs = () => {
  const [open, setOpen] = useState(false);
  const [office, setOffice] = useState("");
  const [activeOffice, setActiveOffice] = useState("Dhaka");
  const [officeMap, setOfficeMap] = useState("");
  const [regionalOffices, setAllRegionalOffices] = useState([]);
  const handleOpen = (name, map) => {
    setOpen(!open);
    setOfficeMap(map)
    setOffice(name);
  };
  function toggleTab(state) {
    setActiveOffice(state);
  }

  useEffect(() => {
    all_Regional_Office_Front().then((res) => {
      setAllRegionalOffices(res.data?.all_offices);
    });
  }, []);

  return (
    <div>
      <Header />
      <div className="container flex justify-center items-center bg-[url('/img/contact/contact-us-cover.png')] bg-cover py-20 lg:py-28">
        <h2 className="text-f38 font-bold text-white">Regional Offices</h2>
      </div>
      <div className="container flex flex-wrap justify-between py-12">
        {regionalOffices.slice(0, 1)?.map((regional_office) => (
          <Tabs key={regional_office?.id} value={regional_office?.id} className="w-full p-0 bg-transparent">
            <>
              <TabsHeader
                className="bg-transparent"
                indicatorProps={{
                  className: "bg-transparent shadow-none rounded-none",
                }}
              >
                {regionalOffices?.map((regional_office) => (
                  <Tab
                    key={regional_office.id}
                    value={regional_office?.id}
                    className="shadow-none text-white py-3 flex-wrap"
                  >
                    <button
                      className={`w-36 px-4 py-4 rounded-xl text-white bg-[#D1D3D4] ${activeOffice == regional_office.name ? "bg-[#E62020]" : "bg-[#D1D3D4]"
                        } hover:bg-[#E62020] transition-colors `}
                      onClick={() => toggleTab(regional_office.name)}
                    >
                      {regional_office?.name}
                    </button>

                  </Tab>
                ))}
              </TabsHeader>
              <TabsBody
                animate={{
                  initial: { y: 250 },
                  mount: { y: 0 },
                  unmount: { y: 250 },
                }}
              >
                {regionalOffices?.map((regionalOffices) => (
                  <TabPanel
                    key={regionalOffices.id}
                    value={regionalOffices?.id}
                  >
                    {regionalOffices?.regional_office_info?.map((office_info) => (
                      <div key={office_info.id} className="bg-[#F2F5F6] py-10 px-12 mb-12">
                        <div className="max-w-[80rem] mx-auto">
                          <h3 className="shop border-t border-b border-[#E62020] text-[#E62020] text-f25 font-bold py-2 text-center uppercase">
                            {office_info?.shop_name}
                          </h3>
                          <div className="flex justify-between flex-wrap gap-3">
                            <div className="flex items-center justify-center gap-5 pt-5 ">
                              <img src={"/svg/map.svg"} alt="" className="w-10" />

                              <div className="text-black font-normal max-w-[15rem]">
                                {Parse(`${office_info?.shop_address}`)}
                              </div>

                            </div>
                            <div className="flex items-center justify-center gap-5 pt-5 ">
                              <img src={"/svg/phone.svg"} alt="" className="w-10" />
                              <div className="text-black font-normal">
                                {Parse(`${office_info?.phone}`)}
                              </div>
                            </div>
                            <div className="flex items-center justify-center gap-5 pt-5 ">
                              <img src={"/svg/mail.svg"} alt="" className="w-10" />
                              <div className="text-black font-normal">
                                {Parse(`${office_info?.email}`)}
                              </div>
                            </div>
                            <div className="pt-5 flex items-center">
                              <div
                                className="block relative bg-[#E62020] w-40 py-7 px-14 ms-auto "
                              >
                                <button
                                  className="absolute inset-0 text-f20 bg-[#939598] rounded-br-[40px] border-[#E62020] text-white"
                                  onClick={() => handleOpen(regionalOffices.name, office_info?.map_link)}
                                >
                                  Map Link
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </TabPanel>
                ))}
              </TabsBody>
            </>
          </Tabs>
        ))}
      </div>

      <div className="container"></div>

      <div className="bg-[#F2F5F6] py-5">
        <div className="container max-w-xl">
          <SubmitQueryForm />
        </div>
      </div>
      <Footer />
      <QuickNavigation />

      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader className="justify-center">
          Regional Office {office}
        </DialogHeader>
        <DialogBody className="">
          <iframe
            title="Office Location"
            src={officeMap}
            width="100%"
            height="500px"
            style={{ borderRadius: "5px" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </DialogBody>
      </Dialog>
    </div>
  );
};

export default ContactUs;
