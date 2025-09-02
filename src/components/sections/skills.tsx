import { Code, Server, Database, GitMerge, Palette, BrainCircuit } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section, SectionHeader } from "@/components/section-wrapper";

const skillsData = [
  {
    category: "Frontend",
    icon: <Palette className="h-8 w-8" />,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    category: "Backend",
    icon: <Server className="h-8 w-8" />,
    skills: ["Node.js", "Express", "Python", "Django", "REST APIs", "GraphQL"],
  },
  {
    category: "Databases",
    icon: <Database className="h-8 w-8" />,
    skills: ["PostgreSQL", "MongoDB", "Firebase", "Redis"],
  },
  {
    category: "DevOps & Tools",
    icon: <GitMerge className="h-8 w-8" />,
    skills: ["Git", "GitHub", "Docker", "Vercel", "Webpack"],
  },
  {
    category: "AI/ML",
    icon: <BrainCircuit className="h-8 w-8" />,
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI API"],
  },
  {
    category: "Languages",
    icon: <Code className="h-8 w-8" />,
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++"],
  },
];

export function SkillsSection() {
  return (
    <Section id="skills" className="bg-muted/50">
      <SectionHeader title="Skills" subtitle="Technologies and tools I work with." />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
