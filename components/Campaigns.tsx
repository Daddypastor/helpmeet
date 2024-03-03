'use client'
import Image from 'next/image'
import React from 'react'
// import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Link from 'next/link'
import { Campaign } from '@/lib/definitions';

interface Props {
  campaignList: Campaign[];
}


const Campaigns: React.FC<Props> = ({ campaignList }) => {
  // const [sliderRef] = useKeenSlider<HTMLDivElement>(    
  //   {
  //     loop: true,
  //     breakpoints: {
  //       "(min-width: 700px)": {
  //         slides: { perView: 2, spacing: 10 },
  //       },
  //       "(min-width: 1140px)": {
  //         slides: { perView: 3, spacing: 10 },
  //       },
  //     },
  //     slides: { perView: 1, spacing:10 },
  //   },
  //   [
  //     (slider) => {
  //       let timeout: ReturnType<typeof setTimeout>
  //       let mouseOver = false
  //       function clearNextTimeout() {
  //         clearTimeout(timeout)
  //       }
  //       function nextTimeout() {
  //         clearTimeout(timeout)
  //         if (mouseOver) return
  //         timeout = setTimeout(() => {
  //           slider.next()
  //         }, 2000)
  //       }
  //       slider.on("created", () => {
  //         slider.container.addEventListener("mouseover", () => {
  //           mouseOver = true
  //           clearNextTimeout()
  //         })
  //         slider.container.addEventListener("mouseout", () => {
  //           mouseOver = false
  //           nextTimeout()
  //         })
  //         nextTimeout()
  //       })
  //       slider.on("dragStarted", clearNextTimeout)
  //       slider.on("animationEnded", nextTimeout)
  //       slider.on("updated", nextTimeout)
  //     },
  //   ]
  // )
  return (
    <section className="bg-[#E8FAF3]" id='campaign'>
      <div className="w-full xl:max-w-[1196px] mx-auto md:px-12 py-7">
        <h5 className="text-orange-400 text-center font-normal text-xs pt-10 pb-3 uppercase">Help Others</h5>
        <h3 className="text-xl font-bold text-center text-gray-600">Our Campaigns</h3>
        <p className="text-gray-500 text-sm text-center py-5 px-3">Join us to help others. We try our best to help helpless people. See our Progress in numbers.</p>
        <div className="keen-slider flex text-gray-600 justify-center px-3">
          {campaignList.map((campaign, index) => (
            <div key={index} className="lg:w-1/3 md:w-1/2">
              <div className="bg-white rounded-lg p-3 border border-orange-400">
                <div className="w-full h-56 rounded-lg overflow-hidden">
                  <Image src={campaign.img} width={640} height={560} alt={campaign.title} className="w-full h-full object-cover border" />
                </div>
                <div className="p-2">
                  <h2 className="font-bold py-2 text-xl capitalize">{campaign.title}</h2>
                  <p className="text-sm font-semibold">{campaign.desc}</p>
                  <div className="flex justify-end pt-2">
                    <span className="text-sm text-orange-400 font-semibold">{(campaign.raisedprice / campaign.goalprice) * 100}%</span>
                  </div>
                  <div className="h-2 w-full bg-[#1eca8c29] rounded-md my-3">
                    <div style={{ width: `${(campaign.raisedprice / campaign.goalprice) * 100}%` }} className="h-2 bg-[#1ECA8C] rounded-md"></div>
                  </div>
                  <div className="flex justify-between py-3 font-semibold text-sm">
                    <span className="text-[#1ECA8C]">Goal: N {(campaign.goalprice).toLocaleString()}</span>
                    <span className="text-orange-400">Raised: N {(campaign.raisedprice).toLocaleString()}</span>
                  </div>
                  <Link href='/donate'>
                    <button className="bg-[#1ECA8C] font-bold rounded-md p-3 w-full shadow-sm shadow-orange-400 text-lg my-4 text-white hover:shadow-lg hover:shadow-orange-400">Donate Now</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Campaigns