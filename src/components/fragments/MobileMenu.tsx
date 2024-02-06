"use client";

import { menuItem } from "@/contains/contains";
import { useRouter } from "next/navigation";
import React from "react";

const MobileMenu = () => {
  const router = useRouter();

  const handleRoute = (url: string) => () => {
    router.push(url);
  };

  return (
    <div className="absolute top-0 right-0 h-full bg-purple-500 w-full shadow-lg transition-transform transform translate-x-0 sm:translate-x-full ease-in duration-200">
      <ul className="text-center text-xl">
        {menuItem?.map((item, idx) => (
          <li className="my-10" onClick={handleRoute(item.href)} key={idx}>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
