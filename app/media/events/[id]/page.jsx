"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import MediaMaster from "@/components/Media/MediaMaster";
import { single_Event_Front } from "@/utility/api";
import { Button, Dialog, DialogBody } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import Parse from "html-react-parser";
import { useEffect, useRef, useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { BACKEND_BASE_URL } from "@/components/GlobalVariables";

const EventDetails = ({ params }) => {
  const sinistraRef = useRef(null);
  const [singleEvent, setSingleEvent] = useState([]);
  const [singleGalleryImagePreview, setSinglesGalleryImagePreview] = useState();
  const fetchAllMedia = () => {
    single_Event_Front(params.id).then((res) => {
      setSingleEvent(res.data?.singleEvent);
    });
  };

  const [open, setOpen] = useState(false);
  const handleOpen = (event) => {
    setOpen(!open);
    const clickedImage = event.target?.closest("img");
    if (clickedImage) {
      setSinglesGalleryImagePreview(clickedImage.src);
    }
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
                  <div
                    key={image.id}
                    onClick={(e) => handleOpen(e)}
                    className="cursor-pointer"
                  >
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
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: 150 },
        }}
        size="lg"
      >
        <DialogBody className="relative">
          <TransformWrapper>
            <TransformComponent className="relative ">
              <div className="">
                <img src={singleGalleryImagePreview} alt="" />
              </div>
            </TransformComponent>
          </TransformWrapper>
        </DialogBody>
      </Dialog>
      <Footer />
    </div>
  );
};

export default EventDetails;
