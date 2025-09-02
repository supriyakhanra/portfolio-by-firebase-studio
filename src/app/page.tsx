import { Header } from "@/components/header";
import { HeroSection } from "@/components/sections/hero";
import { SkillsSection } from "@/components/sections/skills";
import { EducationSection } from "@/components/sections/education";
import { TrainingsSection } from "@/components/sections/trainings";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";
import { HobbiesSection } from "@/components/sections/hobbies";
import { InterestsSection } from "@/components/sections/interests";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex flex-col">
        <HeroSection />
        <EducationSection />
        <SkillsSection />
        <TrainingsSection />
        <ExperienceSection />
        <ProjectsSection />
        <HobbiesSection />
        <InterestsSection />
        <ContactSection />
      </main>
    </div>
  );
}
