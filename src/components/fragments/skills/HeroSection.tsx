"use client";

import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { skillItems } from "@/contains/contains";
import { useState } from "react";

const HeroSectionSkills = () => {
  const [skills, setSkills] = useState(skillItems);
  const [selected, setSelected] = useState<string>("all");

  const handleFilterSkills = (value: string): void => {
    setSelected(value);
    if (value !== 'all') {
      const filterSkills = skillItems?.filter(item => value == item?.category);    
      setSkills(filterSkills);
    } else {
      setSkills(skillItems);
    }
  }

  return (
    <div className="flex flex-col md:flex-row relative">
      <RadioGroup defaultValue="all" className="flex flex-row md:flex-col justify-between md:justify-normal w-1/5" onValueChange={handleFilterSkills}>
        <div className={`flex justify-center items-center space-x-2 rounded-l-md cursor-pointer py-5 md:py-10 ${selected == 'all' && 'bg-secondary'}`}>
          <RadioGroupItem className="hidden" value="all" id="r1" />
          <Label htmlFor="r1">All</Label>
        </div>
        <div className={`flex justify-center items-center space-x-2 rounded-l-md cursor-pointer py-5 md:py-10 ${selected == 'language' && 'bg-secondary'}`}>
          <RadioGroupItem className="hidden" value="language" id="r2" />
          <Label htmlFor="r2">Language</Label>
        </div>
        <div className={`flex justify-center items-center space-x-2 rounded-l-md cursor-pointer py-5 md:py-10 ${selected == 'framework' && 'bg-secondary'}`}>
          <RadioGroupItem className="hidden" value="framework" id="r3" />
          <Label htmlFor="r3">Framework</Label>
        </div>
        <div className={`flex justify-center items-center space-x-2 rounded-l-md cursor-pointer py-5 md:py-10 ${selected == 'library' && 'bg-secondary'}`}>
          <RadioGroupItem className="hidden" value="library" id="r4" />
          <Label htmlFor="r4">Library</Label>
        </div>
      </RadioGroup>
      <Card className="pb-12 pt-24 px-5 md:px-10 w-full md:w-[80%] min-h-[46rem]">
        <CardContent className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-10">
          {skills?.map((item, index) => (
            <div className="flex flex-col justify-center items-center gap-3 rounded-lg py-2 hover:-mt-5 hover:border border-solid border-primary cursor-pointer transition-tranform duration-150 transform`" key={index}>
              {item.icon}
              <p className="text-center">{item.name}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default HeroSectionSkills;
