import DonationSection from '@/components/donation/DonationSection'
import PageCrumb from '@/components/PageCrumb'
import { getAllCampaigns } from '@/lib/actions'
import React from 'react'

const page = async () => {
  const campaigns = await getAllCampaigns();
  return (
    <main className='relative'>
      <PageCrumb name='Donate Now'/>
      <DonationSection campaignList={campaigns}/>   
    </main>
  )
}

export default page