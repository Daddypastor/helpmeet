'use client'
import { volunteerList } from '@/data'
import React from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const Volunteers = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(    
    {
      loop: true,
      breakpoints: {
        "(min-width: 700px)": {
          slides: { perView: 3, spacing: 10 },
        },
        "(min-width: 1140px)": {
          slides: { perView: 4, spacing: 10 },
        },
      },
      slides: { perView: 2, spacing:10 },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )
  return (
    <section className='bg-[#273A34]/10 ' id='volunteer'>
      <div className='w-full xl:max-w-[1196px] m-auto px-5 md:px-12 py-10'>
        <h5 className='text-orange-400 font-semibold text-xs md:text-md pt-10 pb-3 uppercase'>Our Team</h5>
        <h3 className='text-xl font-bold text-gray-600 md:text-2xl'>Meet Our Volunteers</h3>
        <p className='text-gray-500 text-sm py-5 md:text-lg'>Join us to help others. We try our best to help helpless people, See
        our Progress in numbers</p>
        <button className='bg-[#1ECA8C] font-bold rounded-md p-3 px-5 text-lg my-4 text-white hover:shadow-lg hover:shadow-orange-400'>Become Volunteer</button>
        <div ref={sliderRef} className='keen-slider keen-slider--gap-2 py-3 text-gray-700'>
          {volunteerList && volunteerList.map((vol, index) =>
            <div className='keen-slider__slide' key={index}>
              <div className='w-full h-44 md:w-52 md:h-52 rounded-full bg-gray-300 overflow-hidden'></div>
              <p className='font-bold text-xs py-2 uppercase text-center lg:text-left lg:px-8'>{vol.name}</p>
            </div>
          
          )}
        </div>
      </div>
    </section>


  )
}

export default Volunteers