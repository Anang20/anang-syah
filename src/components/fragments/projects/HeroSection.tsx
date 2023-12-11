"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ProjectItems } from "@/contains/contains";
import { ArrowUpRight, ChevronLeft, ChevronRight, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import React, { useState } from "react";
import { TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Tooltip } from "@radix-ui/react-tooltip";

const HeroSectionProjects = () => {
  const swiper = useSwiper();
  return (
    <div className="flex relative">

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={150}
        slidesPerView={1.5}
        breakpoints={{ 
          640: {
            slidesPerView: 3.5,
            spaceBetween: 10
          }
         }}
        className="cursor-grab active:cursor-grabbing"
        onSlideChange={() => console.log("slide")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {ProjectItems?.map((item, index) => (
          <SwiperSlide key={index}>
            <Card className="relative group hover:duration-700 w-80 flex-none min-h-[24rem]">
              <CardHeader className="px-0 pt-0">
                <div className="w-full h-12">
                  <Image
                    alt="project"
                    src={item.image}
                    width={1000}
                    height={1000}
                  />
                </div>
              </CardHeader>
              <div className="absolute -bottom-80 group-hover:bg-secondary group-hover:-bottom-0 group-hover:duration-600 duration-500 h-full w-full">
                <CardContent className="absolute top-0 group-hover:top-4 transition-all">
                  <h2 className="font-semibold mb-3">{item.title}</h2>
                  <p className="hidden group-hover:block">{item.description}</p>
                </CardContent>
                <CardFooter className="flex flex-col items-start absolute bottom-0 w-full">
                  <TooltipProvider>
                    <div className="flex gap-3 my-5">
                      {item.techStack?.map((stack, key) => (
                        <Tooltip key={key}>
                          <TooltipTrigger>{stack.icon}</TooltipTrigger>
                          <TooltipContent>
                            <p>{stack.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </div>
                  </TooltipProvider>
                  <div className="flex gap-3">
                    <Link href={item.url} target="_blank">
                      <Button>
                        Demo
                        <ArrowUpRight className="ml-1" />
                      </Button>
                    </Link>
                    {item.showRepo && item.repoUrl && (
                      <Link href={item.repoUrl} target="_blank">
                        <Button>
                          Repository
                          <Github className="ml-1" />
                        </Button>
                      </Link>
                    )}
                  </div>
                </CardFooter>
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSectionProjects;
