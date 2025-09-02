import { BrainCircuit, Rocket, Leaf, PenTool, Telescope } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Section, SectionHeader } from "@/components/section-wrapper";

const interestsData = [
  { name: "Artificial Intelligence", icon: <BrainCircuit className="h-10 w-10" /> },
  { name: "Deep Learning", icon: <Telescope className="h-10 w-10" /> },
  { name: "Developement", icon: <Leaf className="h-10 w-10" /> },
  { name: "Innovation", icon: <Rocket className="h-10 w-10" /> },
  { name: "Creative Thinking", icon: <PenTool className="h-10 w-10" /> },
];

export function InterestsSection() {
  return (
    <Section id="interests" className="bg-muted/50">
      <SectionHeader title="Interests" subtitle="Topics that fascinate me." />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8">
        {interestsData.map((interest, index) => (
          <Card key={index} className="group relative overflow-hidden rounded-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-primary/20">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CardContent className="relative flex flex-col items-center justify-center gap-4 p-6 aspect-square">
              <div className="text-primary group-hover:scale-110 transition-transform duration-300">{interest.icon}</div>
              <p className="font-semibold text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">{interest.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
