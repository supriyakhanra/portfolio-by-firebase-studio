import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("container py-16 md:py-24", className)}>
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
