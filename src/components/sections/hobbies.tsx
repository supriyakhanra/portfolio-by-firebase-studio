import { Clapperboard, Camera } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Section, SectionHeader } from "@/components/section-wrapper";

const hobbiesData = [
  { name: "Watching Movies", icon: <Clapperboard className="h-10 w-10" /> },
  { name: "Photography", icon: <Camera className="h-10 w-10" /> },
  { name: "Videography", icon: <Camera className="h-10 w-10" /> },
];

export function HobbiesSection() {
  return (
    <Section id="hobbies">
      <SectionHeader title="Hobbies" subtitle="What I do in my free time." />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-8 justify-center">
        {hobbiesData.map((hobby, index) => (
          <Card key={index} className="group relative overflow-hidden rounded-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-primary/20">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CardContent className="relative flex flex-col items-center justify-center gap-4 p-6 aspect-square">
              <div className="text-primary group-hover:scale-110 transition-transform duration-300">{hobby.icon}</div>
              <p className="font-semibold text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">{hobby.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
