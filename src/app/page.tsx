import Hero from "@/components/homepage/Hero";
import Banner from "@/components/homepage/Banner";
import Feature from "@/components/homepage/Feature";
import Stats from "@/components/homepage/Stats";
import LatestInsights from "@/components/homepage/LatestInsights";

export default function Home() {
  return (
    <>
      <Banner />
      <Hero />
      <Feature />
      <Stats />
      <LatestInsights/>
    </>
  );
}
