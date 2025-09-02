import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Section, SectionHeader } from "@/components/section-wrapper";

const experienceData = [
  {
    role: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    period: "Jan 2022 - Present",
    description: "Led the development of a new design system and component library in React, improving development efficiency by 30%. Mentored junior developers and conducted code reviews.",
  },
  {
    role: "Full-Stack Developer",
    company: "Innovate Co.",
    period: "Jun 2020 - Dec 2021",
    description: "Developed and maintained a large-scale e-commerce platform using Next.js and Node.js. Implemented a new payment gateway, increasing conversion rates by 15%.",
  },
  {
    role: "Software Engineer Intern",
    company: "Data Corp.",
    period: "May 2019 - Aug 2019",
    description: "Worked on a data visualization dashboard using D3.js and React. Wrote scripts to automate data processing tasks, saving 10+ hours of manual work per week.",
  },
];

export function ExperienceSection() {
  return (
    <Section id="experience">
      <SectionHeader title="Experience" subtitle="My professional work journey." />
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {experienceData.map((exp, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1 h-full">
                <Card className="h-full flex flex-col hover:border-primary transition-colors">
                  <CardHeader>
                    <CardTitle className="font-headline">{exp.role}</CardTitle>
                    <CardDescription>{exp.company} | {exp.period}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </Section>
  )
}
