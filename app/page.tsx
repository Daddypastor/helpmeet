import Campaigns from "@/components/Campaigns";
import Hero from "@/components/Hero";
import OfferSection from "@/components/OfferSection";
import Volunteers from "@/components/Volunteers";
import { getAllCampaigns } from "@/lib/actions";

export default async function Home() {
  const campaigns = await getAllCampaigns();
  return (
    <main className="">
      <Hero/>
      <OfferSection/>
      <Campaigns campaignList={campaigns}/>
      <Volunteers/>
    </main>
  );
}
