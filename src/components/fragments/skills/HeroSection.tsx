"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { skillItems } from "@/contains/contains";
import Image from "next/image";
import { useState } from "react";

const HeroSectionSkills = () => {
  const [skills, setSkills] = useState(skillItems);

  const handleFilterSkills = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const filterSkills = skillItems?.filter(value => event.target.value == value?.category);
    console.log({event});
    
    setSkills(filterSkills)
  }

  return (
    <div className="flex relative">
      <RadioGroup defaultValue="language" className="w-1/5" onChange={handleFilterSkills}>
        <div className="flex justify-center items-center space-x-2">
          <RadioGroupItem value="language" id="r1" />
          <Label htmlFor="r1">Language</Label>
        </div>
        <div className="flex justify-center items-center space-x-2">
          <RadioGroupItem value="framework" id="r2" />
          <Label htmlFor="r2">Framework</Label>
        </div>
        <div className="flex justify-center items-center space-x-2">
          <RadioGroupItem value="library" id="r3" />
          <Label htmlFor="r3">Library</Label>
        </div>
      </RadioGroup>
      <Card className="py-12 px-5 md:px-10">
        <CardContent className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-20">
          {skills?.map((item, index) => (
            <div className="flex flex-col justify-center items-center gap-3" key={index}>
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
