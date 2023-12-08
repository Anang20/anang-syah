import { Github, Gitlab, Instagram, Linkedin } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full bg-secondary px-4 md:px-24 lg:px-[300px] py-10">
      <div className="flex justify-between w-full my-12">
        <h3 className="text-xl font-bold">Anang Syah</h3>
        <ul>
          <li className="mb-2">Home</li>
          <li className="mb-2">About Me</li>
          <li className="mb-2">Projects</li>
        </ul>
        <ul>
          <li className="mb-2">Qualification</li>
          <li className="mb-2">Contact</li>
        </ul>
      </div>
      <div className="flex gap-5">
        <Linkedin />
        <Github />
        <Gitlab />
        <Instagram />
      </div>
      <span className="mt-5">Anang Syah. All right reserved</span>
    </footer>
  );
};

export default Footer;
