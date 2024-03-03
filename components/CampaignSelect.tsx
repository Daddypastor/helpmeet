import { fetchCampaigns } from '@/lib/data';
import { campaignList } from '@/data';
import { ChangeEventHandler } from 'react';

const CampaignSelect = async (Fn: ChangeEventHandler<HTMLSelectElement> | undefined) => {
  return (
    <select name="campaign" id="campaignInput" className='w-full border border-orange-400 rounded-lg p-3  text-gray-700' onChange={Fn}>
      <option value="">-------</option>
      {campaignList.map((campaign, index) =>
        <option value={campaign.title} key={index} className='capitalize'>{campaign.title}</option>
      )}
    </select>
  )
}

export default CampaignSelect