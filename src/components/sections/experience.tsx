import { Briefcase } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Section, SectionHeader } from "@/components/section-wrapper";
import { cn } from "@/lib/utils";

const experienceData = [
  {
    role: "AI/ML Intern",
    company: "FutureTech Solutions",
    period: "Summer 2025",
    details: "Worked on developing a predictive analytics model for customer churn, improving prediction accuracy by 15%. Collaborated with the data science team on data preprocessing and feature engineering tasks.",
  },
  {
    role: "Web Developer (Freelance)",
    company: "Various Clients",
    period: "2024 - Present",
    details: "Designed and developed responsive websites for small businesses using modern web technologies. Focused on creating intuitive user interfaces and ensuring cross-browser compatibility.",
  },
  {
    role: "Open Source Contributor",
    company: "Community Projects",
    period: "2023 - Present",
    details: "Actively contributed to several open-source projects on GitHub, focusing on bug fixes, documentation, and feature implementation in Python and JavaScript-based projects.",
  },
];

export function ExperienceSection() {
  return (
    <Section id="experience">
      <SectionHeader title="Experience" subtitle="My professional work experience." />
       <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" aria-hidden="true"></div>
        <div className="space-y-12">
          {experienceData.map((exp, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-8 items-center relative">
              <div className={cn("flex", index % 2 === 0 ? "md:order-1 md:justify-end" : "md:order-2 md:justify-start")}>
                <Card className="w-full max-w-md shadow-lg hover:shadow-primary/20 transition-shadow">
                  <CardHeader>
                    <CardTitle className="font-headline text-xl">{exp.role}</CardTitle>
                    <CardDescription>{exp.company} | {exp.period}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{exp.details}</p>
                  </CardContent>
                </Card>
              </div>
              <div className={cn("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex", index % 2 === 0 ? "md:order-2" : "md:order-1")}>
                <div className="bg-primary text-primary-foreground rounded-full p-3 shadow-lg border-4 border-background">
                  <Briefcase className="h-6 w-6" />
                </div>
              </div>
               <div className={cn("hidden md:block", index % 2 === 0 ? "md:order-2" : "md:order-1")}></div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
