import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/section-wrapper";
import { Badge } from "@/components/ui/badge";

const projectsData = [
  {
    title: "AI-Based Animal Classifier",
    description: "Developed a deep learning-based classifier to distinguish between cats and dogs. The application allows users to upload an image and receive an instant classification result.",
    image: "https://picsum.photos/600/400?random=1",
    imageHint: "cat dog",
    tags: ["Deep Learning", "AI", "Image Classification", "Python"],
    github: "https://github.com",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with Next.js and Tailwind CSS to showcase my skills, projects, and experience. Fully responsive and features a clean, modern design.",
    image: "https://picsum.photos/600/400?random=2",
    imageHint: "website portfolio",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    github: "https://github.com",
  },
  {
    title: "Task Management App",
    description: "A simple and intuitive task management application to help users organize their daily tasks. Features include adding, editing, deleting, and marking tasks as complete.",
    image: "https://picsum.photos/600/400?random=3",
    imageHint: "task list",
    tags: ["JavaScript", "HTML", "CSS", "SQL"],
    github: "https://github.com",
  },
];

export function ProjectsSection() {
  return (
    <Section id="projects" className="bg-muted/50">
      <SectionHeader title="Projects" subtitle="Some of the things I've built." />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {projectsData.map((project, index) => (
          <Card key={index} className="overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:scale-105">
            <CardHeader className="p-0">
              <div className="relative w-full h-48">
                 <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    data-ai-hint={project.imageHint}
                />
              </div>
            </CardHeader>
            <div className="p-6 flex flex-col flex-grow">
              <CardTitle className="font-headline mb-2">{project.title}</CardTitle>
               <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
              </div>
              <CardDescription className="flex-grow">{project.description}</CardDescription>
            </div>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href={project.github} target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}
