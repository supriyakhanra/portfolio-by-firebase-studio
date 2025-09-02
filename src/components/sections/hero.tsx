"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Twitter, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

export function HeroSection() {
    const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
        ref={ref}
        id="about" 
        className={cn(
            "relative w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-background via-secondary/50 to-background opacity-0",
             inView ? "animate-scroll-in" : "opacity-0"
        )}
    >
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-headline">
            <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Hi, I'm Supriya Khanra
            </span>
            Aspiring AI & ML Engineer
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            I aim to apply my academic achievements and coursework knowledge to real-world projects, leveraging my skills in computer science, artificial intelligence, and machine learning to contribute to innovative solutions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Button asChild size="lg">
              <a href="/Supriya_Khanra_CV.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" asChild>
                <Link href="https://github.com" target="_blank" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          <div className="absolute w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <Image
            src="https://picsum.photos/400/400"
            alt="Supriya Khanra"
            width={400}
            height={400}
            className="rounded-full object-cover z-10 border-4 border-primary/50 shadow-2xl"
            data-ai-hint="developer portrait"
            priority
          />
        </div>
      </div>
    </section>
  )
}
