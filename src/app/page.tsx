import Hero from "@/components/homepage/Hero";
import Banner from "@/components/homepage/Banner";
import Feature from "@/components/homepage/Feature";
import Stats from "@/components/homepage/Stats";
import LatestInsights from "@/components/homepage/LatestInsights";
import TestimonialCard from "@/components/homepage/TestimonialCard";
import Gallary from "@/components/homepage/Gallary";
import SectionWithImageCard from "@/components/homepage/SectionWIthImage";
import Carrer from "@/components/homepage/Carrer";

export default function Home() {
  return (
    <>
      <Banner />
      <Hero />
      <Feature />
      <Gallary/>
      <Stats />
      <TestimonialCard/>
      <SectionWithImageCard/>
      <LatestInsights/>
      <Carrer/>
    </>
  );
}
