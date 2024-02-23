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
          <OfferSectionSingle heading='Pay Tuition Fees' details='Our mission is to ensure that every child has access to healthy, nutritious meals regardless of their socio-economic status.'/>
          <OfferSectionSingle heading='Sponsor Projects' details='Our mission is to ensure that every child has access to healthy, nutritious meals regardless of their socio-economic status.'/>
          <OfferSectionSingle heading='Provide Materials' details='Our mission is to ensure that every child has access to healthy, nutritious meals regardless of their socio-economic status.'/>
        </div>
      </div>                
    </section>
  )
}

export default OfferSection