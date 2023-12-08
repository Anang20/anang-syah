import { Button } from "@/components/ui/button";
import React from "react";
import { TypeAnimation } from "react-type-animation";

export const HeroSectionHome = () => {
  return (
    <>
      <div className="flex justify-center flex-col font-semibold text-2xl lg:text-4xl w-full lg:w-3/6 gap-3">
        <h1>Hi, I&lsquo; Anang Syah Amirul Haqim👋</h1>
        <div>
          <TypeAnimation
            preRenderFirstString={true}
            sequence={[1000, "Front-End Developer", 1000, ""]}
            wrapper="h1"
            speed={50}
            repeat={Infinity}
            className={`py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-600 text-transparent bg-clip-text`}
          />
        </div>
        <p className="text-base lg:text-lg font-medium max-w-2xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, a laborum accusamus minus eos suscipit temporibus fugiat, inventore perferendis non tempore atque. Eum voluptates amet repellat totam necessitatibus fuga exercitationem?</p>
        <Button className="w-2/5 lg:w-1/4 rounded-xl">Contact Me</Button>
      </div>
      <div className="flex justify-center items-center w-full lg:w-3/6 my-10 lg:my-0">
        <div className="rounded-full h-52 w-52 lg:h-72 lg:w-72 bg-purple-500">

        </div>
      </div>
    </>
  );
};
