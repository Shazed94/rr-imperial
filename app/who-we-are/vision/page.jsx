import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import WhoWeAreMaster from '@/components/WhoWeAre/WhoWeAreMaster'
import React from 'react'

const page = () => {
  return (
    <div>
    <Header />
    <WhoWeAreMaster>
    <div className="bg-white p-8 rounded-tr-3xl mb-12">
          <div className="w-full h-40 flex justify-center items-center text-6xl bg-gray-600 mb-12">
            Lottie
          </div>
          <p className="text-[#58595B] font-tahoma-regular mb-5">
            At RR-Imperial, we value the safety and the satisfaction of our
            customers above everything else. Our mission is to consistently
            provide our customers with the international standard quality cables
            & Wires that are produced using state-of-the-art manufacturing
            facilities as well as the best quality imported raw materials. We
            are focused on driving innovation to meet the changing needs of our
            clients and are consistently focused on improving the technology
            behind our cables, Wires & Copper Strips to serve Bangladesh and
            help aid our ever-developing nation to achieve even higher growth
            potential.
          </p>
        </div>
    </WhoWeAreMaster>
    <Footer />
  </div>
  )
}

export default page