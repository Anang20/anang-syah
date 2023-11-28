import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
import { HeroSectionHome } from "./HeroSection";

const Home = () => {
  const { theme } = useTheme();
  return (
    <section className="flex justify-center items-center h-screen w-full">
      <HeroSectionHome/>
    </section>
  );
};

export default Home;