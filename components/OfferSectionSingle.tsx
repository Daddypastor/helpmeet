import { MoveRight } from 'lucide-react'
import React from 'react'

const OfferSectionSingle = ({...props}) => {
  return (
    <div className='bg-white shadow-md border border-orange-400 w-full rounded-xl p-5'>
      <h2 className='font-semibold text-xl'>{props.heading}</h2>
      <p className='h-0.5 w-24 bg-[#1ECA8C]'></p>
      <p className='my-5 text-md font-light leading-8 md:text-lg'>{props.details}</p>
      <div className='flex gap-2 items-center'>
        <span className='text-sm font-semibold text-[#1ECA8C]'>Learn more</span>
        <MoveRight className='text-orange-400 rounded-full shadow-lg p-1'/>
      </div>
    </div>
  )
}

export default OfferSectionSingle