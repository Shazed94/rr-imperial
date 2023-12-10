"use client";
import Footer from "@/components/Footer/Footer";
import { BACKEND_BASE_URL } from "@/components/GlobalVariables";
import Header from "@/components/Header/Header";
import { Eraser } from "@/components/SvgComponents";
import WiredMaster from "@/components/Wired/WiredMaster";
import {
  Option,
  Select,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  ThemeProvider,
} from "@material-tailwind/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const KabelAssistCalculator = () => {
  const customTheme = {
    select: {
      styles: {
        base: {
          container: {
            minWidth: "min-w-[120px]",
          },
        },
      },
    },
  };
  const [areaOfConductor, setAreaOfConductor] = useState([]);
  const [recommendValue, setRecommendValue] = useState({});
  const [powerOptionValue, setPowerOptionValue] = useState([]);

  const [value, setValue] = useState(0.37);
  const [power, setPower] = useState("kw");
  const [nominalValue, setNominalValue] = useState(1);
  const [nominalValueJson, setNominalValueJson] = useState();

  const onClear2 = () => {
    document.getElementById("nominal_select").selectedIndex = 0;
    setNominalValue(1);
  };

  const onClear1 = () => {
    document.getElementById("powerOptionValue").selectedIndex = 0;
    setPower("kw");
    setValue(0.37);
  };

  useEffect(() => {
    axios
      .get(`${BACKEND_BASE_URL}/api/get-nominal-area-of-conductor`)
      .then((res) => {
        setAreaOfConductor(res.data.nominal_area_of_conductor);
      });
  }, []);

  useEffect(() => {
    axios.get(`${BACKEND_BASE_URL}/api/get-kw-hp/${power}`).then((res) => {
      setPowerOptionValue(res.data.options_values);
      for (const [value] of Object.entries(res.data.options_values[0])) {
        setValue(`${value}`);
      }
    });
  }, [power]);

  useEffect(() => {
    axios
      .get(`${BACKEND_BASE_URL}/api/get-calculator-value/${power}/${value}`)
      .then((res) => {
        setRecommendValue(res.data.calculator_values);
      });
  }, [value, power]);

  useEffect(() => {
    axios
      .get(
        `${BACKEND_BASE_URL}/api/get-current-ratting-of-wire-and-cables-value/${nominalValue}`
      )
      .then((res) => {
        setNominalValueJson(res.data.wire_and_cables_calculator_values);
      });
  }, [nominalValue]);
  return (
    <div>
      <Header />
      <WiredMaster>
        <div className="calculator_tab bg-white p-4 lg:p-8 mb-12">
          <ThemeProvider value={customTheme}>
            <Tabs value="recommended-cable-size" className="">
              <TabsHeader
                className="bg-[#D1D3D4] pb-2 rounded-none flex items-center"
                indicatorProps={{
                  className: "bg-[#ED1D24] shadow-none rounded-none",
                }}
              >
                <Tab
                  value="recommended-cable-size"
                  className="shadow-none text-white py-3 "
                >
                  <span className="text-f15 lg:text-f20">
                    RECOMMENDED CABLE SIZES FOR MOTORS
                  </span>
                </Tab>
                <Tab
                  value="current-rating-wire"
                  className="shadow-none text-white py-3"
                >
                  <span className="text-f15 lg:text-f20">
                    CURRENT RATING OF WIRES & CABLES
                  </span>
                </Tab>
              </TabsHeader>
              <TabsBody
                animate={{
                  initial: { y: 250 },
                  mount: { y: 0 },
                  unmount: { y: 250 },
                }}
              >
                <TabPanel
                  value={"recommended-cable-size"}
                  className="px-0 lg:px-4"
                >
                  <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center space-x-3 lg:space-x-5 my-5 lg:my-10">
                    <div className="w-full lg:w-2/3 flex flex-col lg:flex-row lg:justify-end items-center gap-4 lg:gap-10">
                      <span className="min-w-max">Motor Output</span>
                      <div className="flex justify-between gap-4 lg:gap-10">
                        <div className="w-40 lg:w-72">
                          <Select
                            label="Select motor output"
                            id="powerOptionValue"
                            animate={{
                              mount: { y: 0 },
                              unmount: { y: 25 },
                            }}
                            onChange={(val) => setValue(val)}
                            selected={"Select motor output"}
                          >
                            {powerOptionValue?.map((data) =>
                              power === "kw" ? (
                                <Option key={data.key} value={data.kw}>
                                  {data.kw}
                                </Option>
                              ) : (
                                <Option value={data.hp} key={data.hp}>
                                  {data.hp}
                                </Option>
                              )
                            )}
                          </Select>
                        </div>
                        <div className="w-40 lg:w-72">
                          <Select
                            label="Select Version"
                            animate={{
                              mount: { y: 0 },
                              unmount: { y: 25 },
                            }}
                            onChange={(val) => setPower(val)}
                            value={power}
                          >
                            <Option value="kw">kW</Option>
                            <Option value="hp">HP</Option>
                          </Select>
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-1/3 flex justify-center mt-5 lg:mt-0">
                      <button
                        className="w-24 flex items-center justify-center border-2 border-[#F1F2F2] py-2"
                        onClick={onClear1}
                      >
                        <Eraser fill="#ED1D24" className="w-5 h-5 me-2" />
                        <span className="text-[#ED1D24]">Clear</span>
                      </button>
                    </div>
                  </div>

                  <div className="bg-[#E6E7E8] p-4 lg:p-10 mb-10">
                    <h4 className="text-[#939598] text-center pb-3 border-b-2 border-white mb-5">
                      Full Load Current
                    </h4>
                    <div className="flex justify-center gap-4 lg:gap-8 mb-14">
                      <div className="flex flex-col items-center px-14 py-1 bg-white">
                        <span className="text-[#939598]">
                          {recommendValue?.full_load_current_1}
                        </span>
                        <span className="text-[#939598]">AMP</span>
                      </div>
                      <div className="flex flex-col items-center px-14 py-1 bg-[#D1D3D4]">
                        <span className="text-[#939598]">
                          {recommendValue?.full_load_current_2}
                        </span>
                        <span className="text-[#939598]">AMP</span>
                      </div>
                    </div>
                    <h4 className="text-[#939598] text-center pb-3 border-b-2 border-white mb-5">
                      Star Delta Starter
                    </h4>

                    <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-8 mb-14">
                      <div className=" flex flex-col items-center">
                        <span className="text-f14 mb-1">
                          Overload Relay Range
                        </span>
                        <div className="flex flex-col items-center w-40 py-1 bg-white">
                          <span className="text-[#939598]">
                            {" "}
                            {
                              recommendValue?.star_delta_starter_overload_relay_range
                            }
                          </span>
                          <span className="text-[#939598]">AMP</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-f14 mb-1">Max. Backup fuse</span>
                        <div className="flex flex-col items-center w-40 py-1 bg-[#D1D3D4]">
                          <span className="text-white">
                            {recommendValue?.star_delta_starter_max_backup_fuse}
                          </span>
                          <span className="text-white">AMP</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-f14 mb-1">Recommended Cable</span>
                        <div className="flex flex-col items-center w-40 py-1 bg-white">
                          <span className="text-[#939598]">
                            {
                              recommendValue?.star_delta_starter_recommended_cable
                            }
                          </span>
                          <span className="text-[#939598]">Sq. mm Al</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-f14 mb-1">Size Supply Side</span>
                        <div className="flex flex-col items-center w-40 py-1 bg-[#D1D3D4]">
                          <span className="text-white">
                            {" "}
                            {
                              recommendValue?.star_delta_starter_size_supply_side
                            }
                          </span>
                          <span className="text-white">Sq. mm Cu</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-f14 mb-1">Size Motor Side</span>
                        <div className="flex flex-col items-center w-40 py-1 bg-white">
                          <span className="text-[#939598]">
                            {recommendValue?.star_delta_starter_size_motor_side}
                          </span>
                          <span className="text-[#939598]">Sq.mm Al</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-f14 mb-1">Size Supply Side</span>
                        <div className="flex flex-col items-center w-40 py-1 bg-[#D1D3D4]">
                          <span className="text-white">
                            {recommendValue?.star_delta_starter_none}
                          </span>
                          <span className="text-white">Sq. mm Cu</span>
                        </div>
                      </div>
                    </div>
                    <h4 className="text-[#939598] text-center pb-3 border-b-2 border-white mb-5">
                      Star Delta Starter
                    </h4>
                    <div className="flex justify-center gap-8 mb-14">
                      <div className="flex flex-col items-center">
                        <span className="text-f14 mb-1">
                          Overload Relay Range
                        </span>
                        <div className="flex flex-col items-center w-40 py-1 bg-white">
                          <span className="text-[#939598]">
                            {" "}
                            {
                              recommendValue?.direct_online_starter_overload_relay_range
                            }
                          </span>
                          <span className="text-[#939598]">AMP</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-f14 mb-1">Max. Backup fuse</span>
                        <div className="flex flex-col items-center w-40 py-1 bg-[#D1D3D4]  mb-1">
                          <span className="text-white">
                            {" "}
                            {
                              recommendValue?.direct_online_starter_max_backup_fuse
                            }
                          </span>
                          <span className="text-white">AMP</span>
                        </div>
                        <span>(415V)</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-f14 mb-1">Recommended Cable</span>
                        <div className="flex flex-col items-center w-40 py-1 bg-white  mb-1">
                          <span className="text-[#939598]">
                            {
                              recommendValue?.direct_online_starter_recommended_cable
                            }
                          </span>
                          <span className="text-[#939598]">Sq. mm Al</span>
                        </div>
                        <span>(3Ph)</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-f14 mb-1">Size Supply Side</span>
                        <div className="flex flex-col items-center w-40 py-1 bg-[#D1D3D4] mb-1">
                          <span className="text-white">
                            {recommendValue?.direct_online_starter_size}
                          </span>
                          <span className="text-white">Sq. mm Cu</span>
                        </div>
                        <span>(50 Hz)</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[#ED1D24] text-f20 font-bold after:absolute after:bottom-0 after:right-[0px] after:w-full after:h-[2px] after:bg-[#E71D1D] relative mb-4">
                      NOTE
                    </h3>
                    <h5 className="text-[#6D6E71]">
                      We recommend 6 Core cable between Star Delta starter and
                      Motor. If 6 Core cable is not available, use 2 Nos. of 3
                      Core unarmoured cable.
                    </h5>
                  </div>
                </TabPanel>
                <TabPanel value="current-rating-wire" className="px-0 lg:px-4">
                  <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-5 my-10">
                    <div className="w-full lg:w-2/3 flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-10">
                      <span className="min-w-max">
                        Nominal area of conductor
                      </span>
                      <div className="flex items-center w-64">
                        <Select
                          label="Select Version"
                          onChange={(val) => setNominalValue(val)}
                          id="nominal_select"
                        >
                          {areaOfConductor?.map((data) => (
                            <Option
                              value={data.nominal_area_of_conductor}
                              key={data.nominal_area_of_conductor}
                            >
                              {data.nominal_area_of_conductor}
                            </Option>
                          ))}
                        </Select>
                        <span className="min-w-max ms-3">Sq. mm.</span>
                      </div>
                    </div>
                    <div className="w-full lg:w-2/3 flex justify-center mt-5 lg:mt-0">
                      <button
                        className="w-24 flex items-center justify-center border-2 border-[#F1F2F2] py-2"
                        onClick={onClear2}
                      >
                        <Eraser fill="#ED1D24" className="w-5 h-5 me-2" />
                        <span className="text-[#ED1D24]">Clear</span>
                      </button>
                    </div>
                  </div>
                  <div className="bg-[#E6E7E8] p-4 lg:p-10 mb-6 lg:mb-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 mb-16">
                      <div className="bg-white p-10">
                        <h4 className="text-[#939598] text-center pb-2 border-b border-[#939598] mb-5">
                          1.1kV-3, 3.5, 4Core RR kabel XLPE Cables
                        </h4>
                        <div className="flex justify-center gap-7">
                          <button className="border border-[#D1D3D4] flex justify-center items-center px-10 py-2">
                            {nominalValueJson?.four_core_RR_kabel_XLPE_cables_1}
                          </button>
                          <button className="border border-[#D1D3D4] bg-[#D1D3D4] flex justify-center items-center px-10 py-2">
                            {nominalValueJson?.four_core_RR_kabel_XLPE_cables_2}
                          </button>
                        </div>
                      </div>
                      <div className="bg-white p-10">
                        <h4 className="text-[#939598] text-center pb-2 border-b border-[#939598] mb-5">
                          1.1kV-3, 3.5, 4Core RR Kabel PVC Cables
                        </h4>
                        <div className="flex justify-center gap-7">
                          <button className="border border-[#D1D3D4] flex justify-center items-center px-10 py-2">
                            {nominalValueJson?.four_core_RR_kabel_PVC_cables_1}
                          </button>
                          <button className="border border-[#D1D3D4] bg-[#D1D3D4] flex justify-center items-center px-10 py-2">
                            {nominalValueJson?.four_core_RR_kabel_PVC_cables_2}
                          </button>
                        </div>
                      </div>
                      <div className="bg-white p-10">
                        <h4 className="text-[#939598] text-center pb-2 border-b border-[#939598] mb-5">
                          3.3kV, 6.6kV, 11kV-3 Core RR Kabel PVC Cables
                        </h4>
                        <div className="flex justify-center gap-7">
                          <button className="border border-[#D1D3D4] flex justify-center items-center px-10 py-2">
                            {nominalValueJson?.three_core_RR_kabel_PVC_cables_1}
                          </button>
                          <button className="border border-[#D1D3D4] bg-[#D1D3D4] flex justify-center items-center px-10 py-2">
                            {nominalValueJson?.three_core_RR_kabel_PVC_cables_2}
                          </button>
                        </div>
                      </div>
                      <div className="bg-white p-10">
                        <h4 className="text-[#939598] text-center pb-2 border-b border-[#939598] mb-5">
                          Single Core RR Kabel XLPE Cables 3.8/6.6kV(E), <br />
                          6.6/6.6kV(UE), 6.35/11kV(E)
                        </h4>
                        <div className="flex justify-center gap-7">
                          <button className="border border-[#D1D3D4] flex justify-center items-center px-10 py-2">
                            {
                              nominalValueJson?.single_core_RR_kabel_XLPE_cables_1
                            }
                          </button>
                          <button className="border border-[#D1D3D4] bg-[#D1D3D4] flex justify-center items-center px-10 py-2">
                            {
                              nominalValueJson?.single_core_RR_kabel_XLPE_cables_2
                            }
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="mb-14">
                      <div className="text-center pb-3 mb-5 border-b border-white">
                        <h4 className="text-[#939598]">
                          3 Core RR Kabel XLPE Cables1.9/3.3kV(E),
                          3.3/3.3kV(UE), 3.8/6.6kV(E),6.35/11kV((E)-35 to 400
                          sq.mm,
                        </h4>
                        <h4 className="text-[#939598]">
                          11/11kV(UE) -70 to 400 sq.mm, 12.7/22kV(E),
                          19/33kV(E)-95 to 400 sq. mmand 33/33kV(UE)-120 to 400
                          sq.mm
                        </h4>
                      </div>
                      <div className="flex justify-center gap-7">
                        <button className="bg-white flex justify-center items-center px-10 py-2">
                          {nominalValueJson?.three_core_RR_kabel_XLPE_cables_1}
                        </button>
                        <button className="border border-[#D1D3D4] bg-[#D1D3D4] flex justify-center items-center px-10 py-2">
                          {nominalValueJson?.three_core_RR_kabel_XLPE_cables_2}
                        </button>
                      </div>
                    </div>
                    <div className="mb-14">
                      <div className="text-center pb-3 mb-5 border-b border-white">
                        <h4 className="text-[#939598]">
                          Current ratings for Building wires & Flexibles, in
                          Amps. with Copper cond.
                        </h4>
                      </div>
                      <div className="flex justify-center gap-7">
                        <button className="bg-white flex justify-center items-center px-10 py-2">
                          {nominalValueJson?.current_ratings_for_building_wires}
                        </button>
                        {/* <button className="border border-[#D1D3D4] bg-[#D1D3D4] flex justify-center items-center px-10 py-2">
                          0.60
                        </button> */}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-[#ED1D24] text-f20 font-bold after:absolute after:bottom-0 after:right-[0px] after:w-full after:h-[2px] after:bg-[#E71D1D] relative mb-6">
                        NOTE
                      </h3>
                      <p className="text-[#ED1D24] mb-6">
                        Current Rating for Power Cables with Aluminium
                        conductors
                      </p>
                      <div className="flex gap-10 mb-6 marker:w-10 marker:h-10 marker:first-of-type:text-red-400 ">
                        <li>
                          Figures in Red are Current Rating for Cables laid in
                          Air
                        </li>
                        <li>
                          Figure in Black are Current Rating for Cables laid in
                          Ground
                        </li>
                      </div>
                      <p className="text-[#ED1D24] mb-6">
                        For Approx, current rating for Power cables with
                        copperconductor increase the above rating by 25%
                      </p>
                      <p>
                        The above rating are normal rating & will subject to de
                        rating factors for various conditions as per IS:3961
                      </p>
                    </div>
                  </div>
                </TabPanel>
              </TabsBody>
            </Tabs>
          </ThemeProvider>
        </div>
      </WiredMaster>

      <Footer />
    </div>
  );
};

export default KabelAssistCalculator;
