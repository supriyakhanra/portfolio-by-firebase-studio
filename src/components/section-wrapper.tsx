"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className }: SectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      ref={ref} 
      id={id} 
      className={cn(
        "container py-16 md:py-24 opacity-0",
        inView ? "animate-scroll-in" : "opacity-0",
        className
      )}
    >
      {children}
    </section>
  )
}

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ title, subtitle, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 text-center", className)}>
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">{title}</h2>
      {subtitle && <p className="mt-3 text-muted-foreground md:text-xl/relaxed">{subtitle}</p>}
    </div>
  )
}
