import React from 'react'
import OfferSectionSingle from './OfferSectionSingle'
import Image from 'next/image'

const OfferSection = () => {
  return (
    <section className='bg-[#273A34]/10 relative'>
      <Image src='/rec1.png' width={100} height={100} alt='' className='absolute top-0'/>
      <Image src='/rec1.png' width={100} height={100} alt='' className='absolute bottom-0 right-0 '/>
      <div className='w-full xl:max-w-[1196px] md:px-12 pt-12 pb-16 m-auto'>
      <h3 className='text-xl font-bold text-gray-600 uppercase text-center pb-5'>What we offer</h3>
        <div className='flex flex-col gap-10 md:flex-row md:flex-wrap lg:flex-nowrap text-[#676968] py-8 px-3'>
          <OfferSectionSingle heading='Pay Tuition Fees' details='Education is a gateway to opportunity, but for many students, financial barriers stand in the way. Your contribution to our tuition fee campaign opens doors, ensuring that deserving students can pursue their dreams without the burden of financial strain.'/>
          <OfferSectionSingle heading='Sponsor Projects' details='Creativity knows no bounds, but sometimes, resources do. Your sponsorship of student projects fuels innovation, enabling aspiring minds to bring their ideas to life. With your support, these projects can spark change, inspire others, and shape a better tomorrow.'/>
          <OfferSectionSingle heading='Provide Materials' details='Every student deserves the tools to thrive in their education journey. Your support in providing materials ensures that students have the textbooks, supplies, and resources they need to excel. By giving the gift of learning materials, we make students succeed academically.'/>
        </div>
      </div>                
    </section>
  )
}

export default OfferSection