"use client"

import Link from "next/link"
import { Menu, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Trainings", href: "#trainings" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Hobbies", href: "#hobbies" },
  { name: "Interests", href: "#interests" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -70% 0px" }
    );

    navLinks.forEach((link) => {
      const element = document.querySelector(link.href);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      navLinks.forEach((link) => {
        const element = document.querySelector(link.href);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    // For mobile sheet
    if (isSheetOpen) {
      setIsSheetOpen(false);
    }
  };


  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Sparkles className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline">Devfolio Spark</span>
        </Link>
        <nav className="hidden flex-1 items-center space-x-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={cn(
                "transition-colors hover:text-foreground/80 text-foreground/60",
                activeSection === link.href.substring(1) && "text-foreground underline underline-offset-4"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <ThemeToggle />
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <SheetDescription className="sr-only">
                    A list of navigation links to sections of the page.
                </SheetDescription>
              <div className="flex flex-col space-y-4">
                <Link href="/" className="mr-6 flex items-center space-x-2" onClick={() => setIsSheetOpen(false)}>
                  <Sparkles className="h-6 w-6 text-primary" />
                  <span className="font-bold font-headline">Devfolio Spark</span>
                </Link>
                <nav className="flex flex-col space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={cn(
                        "px-2 py-1 rounded-md transition-colors hover:bg-muted",
                         activeSection === link.href.substring(1) && "bg-muted font-semibold"
                      )}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
