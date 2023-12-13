import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { contactItems } from "@/contains/contains";
import { Send } from "lucide-react";
import React from "react";

const HeroSectionContact = () => {
  const { toast } = useToast();

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-2/5">
        {contactItems.map((item, key) => (
          <div key={key} className="flex items-center gap-5 mb-10">
            <div className="bg-secondary rounded-full p-3 flex items-center justify-center">
              {item.icon}
            </div>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
      <div className="w-full md:w-3/5">
        <div className="grid w-full items-center gap-8">
          <div className="flex flex-col space-y-3">
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" placeholder="Your Name" />
          </div>
          <div className="flex flex-col space-y-3">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Your Email" />
          </div>
          <div className="flex flex-col space-y-3">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Description..." />
          </div>
          <Button
            className="hover:duration-150"
            onClick={() => {
              toast({
                title: "Berhasil",
                description: "Pesan Anda berhasil terkirim",
              });
            }}
          >
            Submit
            <Send className="ml-2 group:hover:rotate-45 transition-all" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionContact;
