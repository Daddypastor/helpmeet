import DonationSection from '@/components/donation/DonationSection'
import PageCrumb from '@/components/PageCrumb'
import React from 'react'

const page = () => {
  return (
    <main className='relative'>
      <PageCrumb name='Donate Now'/>
      <DonationSection/>   
    </main>
  )
}

export default page