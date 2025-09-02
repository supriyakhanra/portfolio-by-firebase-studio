import { GraduationCap } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Section, SectionHeader } from "@/components/section-wrapper";
import { cn } from "@/lib/utils";

const educationData = [
  {
    degree: "B.Tech in Computer Science & Engineering (AI & ML)",
    institution: "Brainware University",
    period: "2022 - 2026",
    details: "Currently pursuing my bachelor's degree with a focus on Artificial Intelligence and Machine Learning. Latest SGPA: 9.44",
  },
  {
    degree: "Higher Secondary (12th)",
    institution: "Byabattarhat Adarsha High School",
    period: "2020 - 2022",
    details: "Completed my 12th grade under WBCHSE board, securing 82.2%.",
  },
  {
    degree: "Secondary (10th)",
    institution: "Byabattarhat Jnanadamayee Balika Vidyalaya (H.S.)",
    period: "2020",
    details: "Completed my 10th grade under WBBSE board, securing 85.85%.",
  }
];

export function EducationSection() {
  return (
    <Section id="education">
      <SectionHeader title="Education" subtitle="My academic journey and qualifications." />
      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" aria-hidden="true"></div>
        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-8 items-center relative">
              <div className={cn("flex", index % 2 === 0 ? "md:order-1 md:justify-end" : "md:order-2 md:justify-start")}>
                <Card className="w-full max-w-md shadow-lg hover:shadow-primary/20 transition-shadow">
                  <CardHeader>
                    <CardTitle className="font-headline text-xl">{edu.degree}</CardTitle>
                    <CardDescription>{edu.institution} | {edu.period}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{edu.details}</p>
                  </CardContent>
                </Card>
              </div>
              <div className={cn("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex", index % 2 === 0 ? "md:order-2" : "md:order-1")}>
                <div className="bg-primary text-primary-foreground rounded-full p-3 shadow-lg border-4 border-background">
                  <GraduationCap className="h-6 w-6" />
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
