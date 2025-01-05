import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import QuickNavigation from "@/components/QuickNavigation";
import SubmitQueryForm from "@/components/SubmitQueryForm";
export const metadata = {
  title: "Head Office",
  description: "Welcome to RR Imperial Electrical Ltd. Please feel free to contact us at any time. We are always here to help you. For any kind of query, please submit the forms below. For sales-related information, call the Corporate Sales Hotline(s): +880 17 55552582, 017 55552589."
};



const page = () => {
  return (
    <div>
      <Header />
      <div className="container flex justify-center items-center bg-[url('/svg/head_office.svg')] bg-cover py-20 lg:py-28">
        <h2 className="font-bold text-white text-f38">Head Office</h2>
      </div>

      <div className="container max-w-2xl px-4 py-6 text-center lg:px-0 lg:py-14">
        <h3 className="text-[#E62020] text-f25 font-bold">Contact Details</h3>
        <p className="text-[#58595B]">Welcome to RR Imperial Electrical Ltd. Please feel free to contact us at any time. We are always here to help you. For any kind of query, please submit the forms below. For sales-related information, call the Corporate Sales Hotline(s): +880 17 55552582, 017 55552589.</p>
      </div>

      <div className="container flex flex-col px-4 mb-6 space-y-4 lg:flex-row lg:justify-between lg:px-0 lg:space-y-0 lg:mb-10">
        <div className="flex gap-5 ">
          <img src={"/svg/map.svg"} alt="" className="w-10 " />
          <div>
            <h5 className="text-[#E62020] font-bold">Location</h5>
            <p>
              House # 9, Road # 25/A, Block # A, <br />
              Banani Dhaka-1213, Bangladesh
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <img src={"/svg/phone.svg"} alt="" className="w-10 " />
          <div>
            <h5 className="text-[#E62020] font-bold">Hotline</h5>
            <p>
              +88 02 55034813
              <br />
              +88 02 55034814
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <img src={"/svg/phone.svg"} alt="" className="w-10 " />
          <div>
            <h5 className="text-[#E62020] font-bold">Corporate Sales</h5>
            <p>
              +880 17555-52582
              <br />
              +880 17555-52589
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <img src={"/svg/mail.svg"} alt="" className="w-10 " />
          <div>
            <h5 className="text-[#E62020] font-bold">Email</h5>
            <p>info@rr-imperial.com</p>
          </div>
        </div>
      </div>

      <div className="container py-6 lg:py-12">
        <iframe title="Office Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29202.2894880896!2d90.39487138189729!3d23.80842031187588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c727497c47e7%3A0x5e18063b966d3e18!2sR.R%20Imperial%20Ltd!5e0!3m2!1sen!2sbd!4v1656416424661!5m2!1sen!2sbd" width="100%" className="h-60 lg:h-[500px]" style={{ borderRadius: "5px" }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div className="bg-[#F2F5F6] py-5">
        <div className="container max-w-xl px-4 lg:px-0">
          <SubmitQueryForm />
        </div>
      </div>

      <Footer />
      <QuickNavigation />
    </div>
  );
};

export default page;
