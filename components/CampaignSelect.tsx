import { fetchCampaigns } from '@/app/lib/data';

const CampaignSelect = async (Fn: any) => {
  const campaignList = await fetchCampaigns();
  return (
    <select name="campaign" id="campaignInput" className='w-full border border-orange-400 rounded-lg p-3  text-gray-700' onChange={Fn}>
      <option value="">-------</option>
      {campaignList.map((campaign, index) =>
        <option value={campaign.id} key={index} className='capitalize'>{campaign.title}</option>
      )}
    </select>
  )
}

export default CampaignSelect