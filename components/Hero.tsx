'use client'
import React from 'react'
import Image from 'next/image'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Link from 'next/link'


const Hero = () => {
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
    <section className='bg-[#16231F]/85 md:px-12 shadow-md w-full bg-cover hero-bg-img'>
      <div className='w-full xl:max-w-[1196px] m-auto'>
        <div className='md:flex pt-12 px-3 gap-5'>
          <div className='text-[#E8FAF3] md:w-1/2'>
            <div className='flex'>
              <h5 className='p-2 rounded-md bg-[#273A34] text-xs md:text-sm'>We&apos;re here to support you excel!</h5>
            </div>
            <h1 className='capitalize text-2xl sm:text-3xl md:text-2xl lg:text-4xl xl:text-5xl font-semibold !leading-[1.2] pt-3'>Empowering lives through compasionate support</h1>
            <h2 className='text-sm lg:text-base text-[#EDEDED] leading-7 my-3 lg:w-[85%]'>Transform a student&apos;s life with your donation today! Every contribution helps cover fees, fund projects, and provide materials. Be the difference.</h2>
            <Link href='/donate'>
              <button className='bg-[#1ECA8C] font-bold rounded-md p-3 px-7 text-lg my-4 text-white hover:shadow-lg hover:shadow-orange-400'>Donate Now</button>
            </Link>
          </div>
          <div className='flex gap-2 my-3 md:w-1/2'>
            <div className='w-1/2 space-y-2'>
              <div className='w-full h-24 md:h-1/2'>
                <Image src='/heroImgs/1.jpg' width={200} height={40} alt='' className='h-full w-full rounded-lg object-cover' />
              </div>
              <div className='w-full h-24 md:h-1/2'>
                <Image src='/heroImgs/2.jpg' width={200} height={40} alt='' className='h-full w-full rounded-lg object-cover' />
              </div>
            </div>
            <div className='w-1/2'>
              <div className='w-full h-full bg-gray-300 rounded-lg'>
              <Image src='/heroImgs/4.jpg' width={600} height={40} alt='' className='h-full rounded-lg object-cover' />
              </div>
            </div>
          </div>
        </div>
        <div ref={sliderRef} className='keen-slider py-10'>
          <div className='keen-slider__slide'>
            <div className='bg-[#272E2C] flex items-center py-5 gap-3 pl-5 rounded-md'>   
              <Image src='/heroImgs/globe-hand.svg' width={40} height={40} alt='globe hand' /> 
              <h2 className='text-[#919392] font-semibold text-md'>Brighter<br/>Tomorrow</h2>    
            </div>  
          </div> 
          <div className='keen-slider__slide'>
            <div className='bg-[#272E2C] flex items-center py-5 gap-3 pl-5 rounded-md'>   
              <Image src='/heroImgs/share-love.svg' width={40} height={40} alt='globe hand' /> 
              <h2 className='text-[#919392] font-semibold text-md'>Giving<br/>Hearts</h2>    
            </div>
          </div> 
          <div className='keen-slider__slide'>
            <div className='bg-[#272E2C] flex items-center py-5 gap-3 pl-5 rounded-md'>   
              <Image src='/heroImgs/join-love.svg' width={40} height={40} alt='globe hand' /> 
              <h2 className='text-[#919392] font-semibold text-md'>Impactful<br/>Giving</h2>    
            </div> 
          </div>
          <div className='keen-slider__slide'>
            <div className='bg-[#272E2C] flex items-center py-5 gap-3 pl-5 rounded-md'>   
              <Image src='/heroImgs/love-action.svg' width={40} height={40} alt='globe hand' /> 
              <h2 className='text-[#919392] font-semibold text-md'>Love in<br/>Action</h2>    
            </div>

          </div>
          <div className='keen-slider__slide'>
            <div className='bg-[#272E2C] flex items-center py-5 gap-3 pl-5 rounded-md'>   
              <Image src='/heroImgs/collect-money.svg' width={40} height={40} alt='globe hand' /> 
              <h2 className='text-[#919392] font-semibold text-md'>Compassion<br/>Collective</h2>    
            </div> 
          </div>   
        </div>
      </div>        
    </section>
  )
}

export default Hero