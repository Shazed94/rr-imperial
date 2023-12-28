
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
          <p className="text-[#58595B] font-normal mb-5">
            We, RR Imperial Electricals Limited, a manufacturer of world-class
            cables, take great pride in our commitment to providing high-quality
            products while also ensuring the safety of the environment. We
            understand the importance of our responsibilities not only to our
            customers but also to the planet, starting from Bangladesh.
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
            Imperial Group is easily amongst the leaders in the chemicals and
            colorants business in Bangladesh, having contributed to the rise of
            the now very powerful textile industry of Bangladesh. With an
            experience of over 20 years in sales and distribution, a
            country-wide establishment, and a network, Imperial Group is very
            well-versed with the needs and expectations of the Bangladesh
            market.
          </p>
          <p className="text-[#58595B] font-normal mb-5">
            RR Group is one of the premier enameled wires and cable producers,
            processing over 50,000 MT of Copper every year. With an experience
            of over 45 years in the electrical field, RR Group is currently
            exporting its products to over 80 countries worldwide. Its wires and
            cables have been internationally certified to cover all continents.
          </p>
          <p className="text-[#58595B] font-normal mb-5">
            RR Imperial Electricals Ltd is the amalgamation of two like-minded
            groups, who share a mutual passion for bringing the best to
            Bangladesh as it grows rapidly to become a force in Asia. With
            expertise complementing each other’s strengths, RR Imperial
            Electricals Ltd aims to be a leader in the horizon of Bangladesh’s
            highly potential electrical industry.
          </p>
        </div>
      </WhoWeAreMaster>
      <Footer />
    </div>
  );
};

export default page;
