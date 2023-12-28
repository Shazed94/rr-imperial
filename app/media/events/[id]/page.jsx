"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import MediaMaster from "@/components/Media/MediaMaster";
import { single_Event_Front } from "@/utility/api";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import Parse from "html-react-parser";
import { useEffect, useState } from "react";
import moment from "moment";
import { BACKEND_BASE_URL } from "@/components/GlobalVariables";

const EventDetails = ({ params }) => {
  const [singleEvent, setSingleEvent] = useState([]);
  const fetchAllMedia = () => {
    single_Event_Front(params.id).then((res) => {
      setSingleEvent(res.data?.singleEvent);
      console.log(res.data);
    });
  };
  useEffect(() => {
    fetchAllMedia();
  }, []);
  return (
    <div>
      <Header />
      <MediaMaster>
        <div className="bg-white p-8 mb-12" id="">
          <div className="relative h-[450px] mb-8">
            <Image
              src={`${BACKEND_BASE_URL}/${singleEvent?.image}`}
              alt=""
              fill
              className="object-fill"
            />
          </div>
          <div className="flex justify-between items-center bg-[#E62020] text-white px-4 py-1 mb-8">
            <h2 className="text-f25 ">{singleEvent?.title}</h2>
            <div className="flex flex-col justify-center text-right">
              {/* <p>Venue: Head Office</p> */}
              <p>
                {/* Date: {moment(singleEvent.created_at).format("MMM DD, Y")} */}
              </p>
            </div>
          </div>

          <div className="text-[#6D6E71] font-bold mb-12">
            {Parse(`${singleEvent?.description}`)}
          </div>
          {singleEvent?.gallery && (
            <div>
              <h3 className="text-center text-f20 mb-8">Image Gallery</h3>
              <div className="grid grid-cols-3 gap-7">
                {singleEvent?.gallery.map((image) => (
                  <div key={image.id}>
                    <img
                      src={`${BACKEND_BASE_URL}/${image?.gallery_image}`}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </MediaMaster>
      <Footer />
    </div>
  );
};

export default EventDetails;
