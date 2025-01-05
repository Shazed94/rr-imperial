import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { OurProfile } from "@/components/LottieComponents";
import WhoWeAreMaster from "@/components/WhoWeAre/WhoWeAreMaster";
export const metadata = {
  title: "Who We Are",
  description: "RR-Imperial Electricals Limited is an ISO-certified sister concern of Imperial Group. Manufacturer of Electric Cables, Super Enamelled Wires, Bare Copper Strips etc. Explore the story behind RR Imperial, including our goals, leadership, and the strategies that fuel our success in the electrical manufacturing sector.",
  keywords:"RR Imperial, RR Imperial Company Profile, best electric wire company in bangladesh"
};

const page = (props) => {
  return (
    <div className="">
      <Header />
      <WhoWeAreMaster>
        <div className="bg-white p-4 lg:p-8 mb-6 lg:mb-12" id="who-we-are">
          <div className="mb-12">
            <OurProfile />
          </div>

          <div
            className="flex flex-col lg:flex-row bg-white p-4 lg:p-8 gap-9"
            id="who-we-are"
          >
            <div className="w-full lg:w-1/3 flex justify-center items-center mb-5 lg:mb-12">
              <div className="relative ms-3 mt-4 lg:m-0">
                <img
                  src="/img/who-we-are/hares-ahmed.png"
                  alt=""
                  className="relative z-10"
                />
                <div className="absolute -top-[14px] -left-[12px] w-full h-full bg-[#ED1C24] z-0"></div>
              </div>
            </div>
            <div className="w-full lg:w-2/3">
              <h1 className="text-[#ED1C24] text-f28 font-bold mb-4">
                MR. M. HARES AHMED
              </h1>
              <h2>MANAGING DIRECTOR</h2>
              <h2 className="mb-4">RR Imperial Electricals Ltd.</h2>
              <p className="text-[#58595B] font-normal mb-5 text-justify">
                M. Hares Ahmed, a visionary thinker with exceptional leadership skills, hard work, dedication and 
                empathy, has been the primary influence behind the success of RR Imperial Electricals Ltd. over the past 
                decades. Born into an aristocratic Muslim family in Chattogram in 1948, M. Hares Ahmed has 
                accomplished extraordinary achievements in his academic pursuits. After obtaining his B.Sc. (Honors) 
                and M.Sc. in Physics from Chattogram University, he started his career as a Manager at a prestigious 
                textile dyeing and printing company.<br/><br/>

                From the very beginning, Hares Ahmed had a very strong desire to start his own venture. Destined to be 
                an entrepreneur he started his own business as a Director of Phoenix Fabrics Limited, which was 
                established in Tejgaon Dhaka. Phoenix Fabrics Limited is considered as one of the pioneers in fabrics 
                dyeing, printing and finishing industry in Bangladesh. Additionally, he launched a textile dyestuffs and 
                chemicals business in 1990 under the names Imperial International Limited, Imperial Dye-Chem Co. Ltd  
                and Imperial Allied Chemicals Ltd, all operating simultaneously. As the Managing Director of these 
                ventures, his exceptional leadership led to rapid growth, quickly establishing the companies as industry 
                leaders in Bangladesh. He is also the Managing Director of Imperial Composite Fabrics Ltd.<br/><br/>

                For M. Hares Ahmed, family is his top priority and he is blessed with two sons and two daughters. All of 
                his children are highly successful and are making significant contributions in their respective fields. He 
                enjoys traveling, as he loves exploring new cultures, people and ways of life from around the world. As a 
                true patriot, Hares Ahmed and his business ventures are significantly contributing to Bangladesh&apos;s 
                economy and positioning Bangladeshi products as top contenders on the international stage. 
              </p>
            </div>
          </div>
          <div
            className="flex flex-col lg:flex-row bg-white p-4 gap-9 "
            id="who-we-are"
          >
            <div className="w-full lg:w-2/3 md:order-2 lg:order-1">
              <h1 className="text-[#ED1C24] text-f28 font-bold mb-4 lg:text-right md:text-left">
                MR. MAHBOOB HOSSIAN MIRDAH
              </h1>
              <h2 className="lg:text-right md:text-left">DIRECTOR AND CEO</h2>
              <h2 className="lg:text-right md:text-left mb-4">
                RR Imperial Electricals Ltd.
              </h2>
              <p className="text-[#58595B] font-normal mb-5 text-right text-justify">
                Mahboob Hossain Mirdha is a highly skilled individual with remarkable business acumen and a 
                philanthropic nature. He was born in a prestigious Muslim family in Dhaka in 1955 and his father is 
                Mohammad Hossain Mirdah. After graduating from Jagannath College, he traveled to Japan for training 
                in fabric dyeing, textiles, and chemicals. Having the required experience and proficiency, upon his return 
                he started working for Phoenix Fabrics Limited.  <br/><br/>
                Equipped with the knowledge he gained from his training in Japan and his strong desire to start his own 
                business, Mahboob Hossain Mirdha founded his textile dyestuffs and chemicals company in 1991, 
                naming it Imperial International Limited and Imperial Dye Chem Co. Ltd. He served as the director of 
                both companies. With his extensive experience and expertise in these fields, he is currently the Director 
                of Imperial Composite Fabrics Limited and Imperial Allied Chemicals Ltd.   Since the inception of RR 
                Imperial Electricals Limited in 2011, he has elevated the company to new heights as the Managing 
                Director and CEO.  <br/><br/>
                He is a proud father of a son and daughter, both of whom have achieved remarkable feats in various 
                fields. Mahboob Hossain Mirdha truly believes that we all have certain responsibilities towards the 
                society and should make positive contribution towards the improvement of the society within our 
                capacities. He is involved with several socio-cultural organizations, serving as the Vice President of the 
                UNESCO Club Association in Bangladesh and the Chairman of the Initiative for Total Reform (ITR). He has 
                traveled around the globe for business purposes and through the UNESCO Club Association, allowing 
                him to experience various cultures, people and business practices. As a prominent figure in Bangladesh&apos;s 
                business arena, he is actively engaged with multiple associations and chambers. He is an active member 
                of Bangladesh Chemical Importers &amp; Merchants Association, India-Bangladesh Chamber of Commerce 
                and Industry (IBCCI), Bangladesh Electrical Merchandise Manufacturers Association (BEMMA) and 
                Electronics Safety and Security Association of Bangladesh (ESSAB). Mahboob Hossain Mirdha&apos;s pursuit of 
                excellence inspires him to introduce innovative thinking into his business practices regularly.  
              </p>
            </div>
            <div className="w-full lg:w-1/3 md:order-1 lg:order-2 my-4 lg:mb-12">
              <div className="relative ms-3 mt-4 lg:m-0">
                <img
                  src="/img/who-we-are/mahboob-hossian.png"
                  alt=""
                  className="relative z-10"
                />
                <div
                  style={{ width: "95%" }}
                  className="absolute -top-[14px] -left-[-5px] h-full bg-[#ED1C24] z-0"
                ></div>
              </div>
            </div>
          </div>
          <p className="text-[#58595B] font-normal mb-5">
            We, RR Imperial Electricals Limited, a manufacturer of world-class
            cables, take great pride in our commitment to providing high-quality
            products while also ensuring the safety of the environment. We
            understand the importance of our responsibilities not only to our
            customers but also to the planet, starting in Bangladesh.
          </p>

          <p className="text-[#58595B] font-normal mb-5">
            Our motto is clear: &quot;Innovate for a Greener Tomorrow.&quot; We
            believe in creating innovative cable solutions that not only meet
            the needs of our clients but also minimize their environmental
            footprint. Our research and development efforts focus on developing
            energy-efficient cables, recycling processes, and other sustainable
            practices.
          </p>
          <p className="text-[#58595B] font-normal mb-1">
            Imperial Group is easily among the leaders in the chemicals and
            colorants business in Bangladesh, having contributed to the rise of
            the now compelling textile industry in Bangladesh. With over 20
            years of experience in sales and distribution, a country-wide
            establishment, and a network, Imperial Group is very well-versed in
            the needs and expectations of the Bangladesh market.
          </p>
          {/* <p className="text-[#58595B] font-normal mb-5">
            RR Group is one of the premier enameled wire and cable producers,
            processing over 50,000 MT of copper every year. With over 45 years
            of experience in the electrical field, RR Group is currently
            exporting its products to over 80 countries worldwide. Its wires and
            cables have been internationally certified to cover all continents.
          </p> */}
          <p className="text-[#58595B] font-normal mb-5">
            RR Imperial Electricals Ltd. is the amalgamation of two like-minded
            groups who share a mutual passion for bringing the best to
            Bangladesh as it proliferates to become a force in Asia. With
            expertise complementing each other’s strengths, RR Imperial
            Electricals Ltd. aims to be a leader on the horizon of Bangladesh’s
            highly potential electrical industry.
          </p>
        </div>
      </WhoWeAreMaster>
      <Footer />
    </div>
  );
};

export default page;
