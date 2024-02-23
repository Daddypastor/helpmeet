import CampaignSection from '@/components/CampaignSection'
import PageCrumb from '@/components/PageCrumb'
import React from 'react'

const page = () => {
  return (
    <main>
      <PageCrumb name='Campaigns' />
      <CampaignSection/>
    </main>
  )
}

export default page