import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { OurProfile } from "@/components/LottieComponents";
import WhoWeAreMaster from "@/components/WhoWeAre/WhoWeAreMaster";

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
              <h2 className="mb-4">OF IMPERIAL ALLIED CHEMICALS LIMITED</h2>
              <p className="text-[#58595B] font-normal mb-5 text-justify">
                Mr. M. Hares Ahmed was born in a religious Muslim family in
                Chattogram. He has obtained a B.Sc. (Honors), and M.Sc. in
                Physics from Chattogram University. After completing his
                education, he joined a reputed textile dyeing & printing
                industry as a Manager. He started business as director in
                Phoenix Fabrics Limited, Tejgaon I/A, Dhaka, a pioneer industry
                in fabrics dyeing, printing & finishing. Alongside his industry
                business, he started the textile Dyestuffs and Chemicals
                business in 1990 in the name of Imperial International Limited,
                Imperial Dye-Chem Co. Ltd, and Imperial Allied Chemicals Ltd. He
                is the managing director of these companies. He is also the
                managing director of Imperial Composite Fabrics Ltd &
                RR-Imperial Electricals Ltd. He is the father of two sons and
                two daughters. Mr. Ahmed visited many countries for business
                purposes.
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
                OF RR-Imperial Electricals Ltd & IMPERIAL ALLIED CHEMICALS
                LIMITED
              </h2>
              <p className="text-[#58595B] font-normal mb-5 text-right text-justify">
                Mr. Mahboob Hossain Mirdah S/O, Late Mohammad Hossain Mirdah
                comes from a religious Muslim family in Dhaka. He completed a
                graduation degree from Jagannath College, Dhaka. After
                completing his education, he went to Japan for training. After
                returning home, he started service in Phoenix Fabrics Ltd.
                Tejgaon I/A, Dhaka, one of the leading fabric dyeing, printing &
                finishing Industries. He started a business of textile dyestuffs
                & Chemicals in 1991 under the name of Imperial International
                Limited and Imperial Dye Chem. Co. Ltd. as a director of these
                companies. He is also the director of Imperial Composite Fabrics
                Limited and Imperial Allied Chemicals Ltd. He has been the
                Director& CEO of RR-Imperial Electricals Ltd since 2011. He is
                the father of a son and a daughter. He is attached to several
                socio-cultural organizations. He is the Vice President of the
                UNESCO Club Association in Bangladesh and the Honorable Chairman
                of the Initiative for Total Reform (ITR). He visited many
                countries for business purposes and also as a representative of
                the UNESCO Club Association. He is also a member of the
                Bangladesh Chemical Importers & Merchants Association,
                India-Bangladesh Chamber of Commerce and Industry (IBCCI),
                Bangladesh Electrical Merchandise Manufacturers As Sociation
                (BEMMA) and Electronics Safety and Security Association of
                Bangladesh (ESSAB).
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
          <p className="text-[#58595B] font-normal mb-5">
            RR Group is one of the premier enameled wire and cable producers,
            processing over 50,000 MT of copper every year. With over 45 years
            of experience in the electrical field, RR Group is currently
            exporting its products to over 80 countries worldwide. Its wires and
            cables have been internationally certified to cover all continents.
          </p>
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
