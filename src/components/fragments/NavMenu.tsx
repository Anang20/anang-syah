"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { menuItem } from "@/contains/contains";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ThemeModeButton } from "@/components/ui/theme-mode-button";
import { useEffect, useState } from "react";

const NavMenu = () => {
  const [isVisible, setIsVisible] = useState(true);
  let prevScrollPos = 0;

  const handleScroll = () => {
    const currentScrollPos = window.scrollY || document.documentElement.scrollTop;
    setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos == 0);
    prevScrollPos = currentScrollPos;
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <NavigationMenu className={`flex sticky top-0 min-w-full h-16 px-5 md:px-20 border-b-2 items-center justify-between transition-transform duration-500 transform ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <h1 className="font-bold text-2xl">Anang</h1>
      <NavigationMenuList className="hidden md:flex">
        {menuItem?.map((item, index) => (
          <NavigationMenuItem key={index}>
            <Link href={item.href} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {item.title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
      <ThemeModeButton />
    </NavigationMenu>
  );
};

export default NavMenu;
