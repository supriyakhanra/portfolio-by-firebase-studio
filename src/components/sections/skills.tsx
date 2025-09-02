import { Code, Server, Database, BrainCircuit, Palette, Bot } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section, SectionHeader } from "@/components/section-wrapper";

const skillsData = [
  {
    category: "Programming Languages",
    icon: <Code className="h-8 w-8" />,
    skills: ["C", "Python", "JavaScript"],
  },
  {
    category: "Web Technologies",
    icon: <Palette className="h-8 w-8" />,
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    category: "Databases",
    icon: <Database className="h-8 w-8" />,
    skills: ["SQL"],
  },
  {
    category: "AI/ML",
    icon: <BrainCircuit className="h-8 w-8" />,
    skills: ["Machine Learning", "Deep Learning"],
  }
];

export function SkillsSection() {
  return (
    <Section id="skills" className="bg-muted/50">
      <SectionHeader title="Skills" subtitle="Technologies and tools I work with." />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {skillsData.map((category, index) => (
          <Card key={index} className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-lg">{category.icon}</div>
              <CardTitle className="font-headline">{category.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
