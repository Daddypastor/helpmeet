import Campaigns from "@/components/Campaigns";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import OfferSection from "@/components/OfferSection";
import Volunteers from "@/components/Volunteers";

export default function Home() {
  return (
    <main className="">
      <Hero/>
      <OfferSection/>
      <Campaigns/>
      <Volunteers/>
    </main>
  );
}
