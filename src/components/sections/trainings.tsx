import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Section, SectionHeader } from "@/components/section-wrapper";

const trainingsData = [
  {
    role: "Technology Virtual Internship",
    company: "Deloitte",
    period: "July 2025",
    description: "Completed a virtual internship focused on technology, gaining insights into industry practices.",
  },
  {
    role: "Python Technology Stack Course",
    company: "Infosys Springboard",
    period: "June 2025",
    description: "Completed a comprehensive course on the Python technology stack, including Python Foundation Certification.",
  },
  {
    role: "Industrial training on AIML",
    company: "INTEL (Edgate Technology)",
    period: "Jan - Feb 2025",
    description: "Underwent industrial training focused on Artificial Intelligence and Machine Learning.",
  },
  {
    role: "Workshop on Emerging-Trends",
    company: "Self-paced",
    period: "Aug 2024",
    description: "Attended a 5-day workshop to learn about emerging trends in technology.",
  },
];

export function TrainingsSection() {
  return (
    <Section id="trainings">
      <SectionHeader title="Trainings & Workshops" subtitle="My professional learning journey." />
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {trainingsData.map((exp, index) => (
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
