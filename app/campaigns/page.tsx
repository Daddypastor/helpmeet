import CampaignSection from '@/components/CampaignSection'
import PageCrumb from '@/components/PageCrumb'
import { getAllCampaigns } from '@/lib/actions';
import React from 'react'

const page = async () => {
  const campaigns = await getAllCampaigns();
  return (
    <main>
      <PageCrumb name='Campaigns' />
      <CampaignSection campaignList={campaigns} />
    </main>
  )
}

export default page