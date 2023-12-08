import React from "react";
import { HeroSectionHome } from "./HeroSection";
import Section from "@/components/Section";

const Home = () => {
  return (
    <Section className="flex flex-col-reverse lg:flex-row h-4/5 lg:h-screen w-full gap-10 lg:gap-0">
      <HeroSectionHome/>
    </Section>
  );
};

export default Home;