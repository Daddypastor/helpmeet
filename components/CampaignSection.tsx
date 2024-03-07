import React from 'react';
import Image from 'next/image';
import { Suspense } from 'react';
import Link from 'next/link';
import { Campaign } from '@/lib/definitions';

interface Props {
  campaignList: Campaign[];
}

const CampaignSection: React.FC<Props> = ({ campaignList }) => {
  return (
    <section className="bg-[#E8FAF3]" id='campaign'>
      <div className="w-full xl:max-w-[1196px] mx-auto md:px-12 py-7">
        <p className="text-gray-500 text-sm text-center py-5 px-3">Join us to help others. We try our best to help helpless people. See our Progress in numbers.</p>
        <div className="flex flex-col gap-5 text-gray-600 justify-center px-5">
          <Suspense fallback={'Loading ...'}>
            {campaignList.map((campaign) => (
              <div className="md:flex items-center gap-5 bg-white rounded-lg p-3 border border-orange-400" key={campaign._id}>
                <div className="md:w-1/2 h-full md:h-[21rem] lg:h-full rounded-lg overflow-hidden">
                  <Image src={campaign.img} width={640} height={560} alt={campaign.title} className="w-full h-full object-cover border" />
                </div>
                <div className="p-2 md:w-1/2">
                  <h2 className="font-bold py-2 text-xl capitalize">{campaign.title}</h2>
                  <p className="text-sm">{campaign.desc}</p>
                  <div className="flex justify-end pt-2">
                    <span className="text-sm text-orange-400 font-semibold">{(campaign.raisedprice / campaign.goalprice) * 100}%</span>
                  </div>
                  <div className="h-2 w-full bg-[#1eca8c29] rounded-md my-5">
                    <div style={{ width: `${(campaign.raisedprice / campaign.goalprice) * 100}%` }} className="h-2 bg-[#1ECA8C] rounded-md"></div>
                  </div>
                  <div className="flex justify-between py-3 font-semibold text-sm">
                    <span className="text-[#1ECA8C]">Goal: N {(campaign.goalprice).toLocaleString()}</span>
                    <span className="text-orange-400">Raised: N {(campaign.raisedprice).toLocaleString()}</span>
                  </div>
                  <Link href='/donate'>
                    <button className="bg-[#1ECA8C] font-bold rounded-md p-3 w-full shadow-sm shadow-orange-400 text-lg my-4 text-white hover:shadow-lg hover:shadow-orange-400">Donate Now</button>
                  </Link>
                </div>
              </div>
            ))}
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default CampaignSection;
