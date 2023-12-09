"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import MediaMaster from "@/components/Media/MediaMaster";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdArrowForward } from "react-icons/md";

const BlogDetails = ({ params }) => {
  return (
    <div>
      <Header />
      <MediaMaster>
        <div className="bg-white p-4 lg:p-8 mb-6 lg:mb-12" id="">
          <div className="relative h-[200px] lg:h-[450px] mb-8">
            <Image
              src="/img/media/blog_details.png"
              alt=""
              fill
              className="object-fill"
            />
          </div>

          <h2 className="bg-[#E62020] text-white text-f20 lg:text-f25 px-4 lg:px-8 py-1 mb-4 lg:mb-8">
            Energy-saving tips for hotels curated by one of the leading
            electrical equipment manufacturers
          </h2>
          <div className="mb-12">
            <p className="text-[#6D6E71] font-bold mb-5">
              From heating and cooling the guest rooms to powering the on-site
              restaurants and amenities, energy use is a major expense for
              hotels. As a result, there is a growing trend for hotels to focus
              on energy efficiency to reduce costs. By implementing
              energy-saving measures, hotels can significantly lower their
              energy bills. In addition, energy-efficient practices can also
              help the hotels reduce their environmental footprint. If you are
              looking for energy-saving tips for hotels, check this read. As one
              of the reputed electrical equipment manufacturers, we share with
              you a list of useful energy-saving tips for hotels.
            </p>
            <p className="text-[#6D6E71]">
              Install LED bulbs as they are more energy-efficient than
              fluorescent and incandescent bulbs. LED bulbs can last 25 times
              longer than ordinary incandescent bulbs. You can witness savings
              in your energy bills with LED upgrades.Here is a useful read on
              why LED lighting solutions are better than incandescent bulbs or
              CFLs.
            </p>
            <p className="text-[#6D6E71]">
              Timers can be used to automatically turn off lights, air
              conditioners, and other electrical equipment or appliances when
              they are not needed. This can significantly reduce a hotel’s
              energy consumption and help to lower its operating costs.
            </p>
            <p className="text-[#6D6E71]">
              Occupancy sensors can turn off the lights when the places are
              unoccupied and they turn on the lights when they detect any moving
              object or things. These are used ideally in hallways, large
              restrooms, and meeting rooms. They can also be used when there’s a
              need for dimming and scheduled lighting at night.
            </p>
            <p className="text-[#6D6E71]">
              Use natural light with artificial light - it will reduce your
              lighting costs. You can implement different ways to bring natural
              light into hotel rooms such as —-
            </p>
            <p className="text-[#6D6E71]">
              Installing bigger and larger windows
            </p>
            <p className="text-[#6D6E71]">Installing skylights</p>
            <p className="text-[#6D6E71]">Choosing lighter window treatments</p>
            <p className="text-[#6D6E71]">
              Using mirrors to naturally reflect light across the room
            </p>
            <p className="text-[#6D6E71]">
              Placing light-colored furniture in the rooms
            </p>
            <p className="text-[#6D6E71]">
              Do not heat or cool low traffic areas and unoccupied rooms.
            </p>
            <p className="text-[#6D6E71]">
              Thermostats should be set at a reasonable temperature for the
              season. In summers, do not set them too low when the air
              conditioning system is on.
            </p>
            <p className="text-[#6D6E71]">
              Kitchen appliances should be turned off when they are not being
              used. Run dishwashers only when fully loaded. Refrigerators should
              not be placed in high temperature areas.
            </p>
            <p className="text-[#6D6E71]">
              Hotel’s entrance door should be always closed to avoid air
              infiltration or loss of cooled air or hot air from indoors.
            </p>
            <p className="text-[#6D6E71]">
              Encourage staff to incorporate energy-saving practices into daily
              routines. For instance, housekeepers can use natural light while
              cleaning rooms in the morning and turn off all the lights, fans
              and other appliances in case the room is unoccupied ( this is
              important for hotels that have not installed occupancy sensors).
              Apart from guiding the staff in energy-saving practices, take
              their suggestions on how energy-efficient practices can be
              implemented into daily operational activities affecting guest
              rooms, kitchens, front office and laundry.
            </p>
            <p className="text-[#6D6E71]">
              Hotels can also engage with their guests and raise awareness about
              their energy saving policies. They can encourage the guests to
              adopt simple and sustainable actions such as window opening and
              switching lights. To do so, hotels can employ different
              communication methods such as placing leaflets and stickers in the
              rooms.
            </p>
          </div>
        </div>
      </MediaMaster>
      <Footer />
    </div>
  );
};

export default BlogDetails;
