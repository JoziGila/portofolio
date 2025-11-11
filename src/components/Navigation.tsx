"use client";

import { useState, useEffect } from "react";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("");
  const [showTriangle, setShowTriangle] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const sections = ['hero', 'services', 'about', 'projects', 'contact'];

    const handleKeyDown = (e: KeyboardEvent) => {
      const mainElement = document.querySelector('main');
      if (!mainElement) return;

      const currentScroll = mainElement.scrollTop;
      const viewportHeight = mainElement.clientHeight;

      // Find current section index
      let currentIndex = 0;
      for (let i = 0; i < sections.length; i++) {
        const sectionElement = i === 0 ? mainElement.firstElementChild : document.getElementById(sections[i]);
        if (sectionElement) {
          const offsetTop = i === 0 ? 0 : (sectionElement as HTMLElement).offsetTop;
          if (currentScroll >= offsetTop - viewportHeight / 2) {
            currentIndex = i;
          }
        }
      }

      if (e.key === 'ArrowDown' && currentIndex < sections.length - 1) {
        e.preventDefault();
        const nextSection = currentIndex === 0 ? document.getElementById(sections[1]) : document.getElementById(sections[currentIndex + 1]);
        nextSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (e.key === 'ArrowUp' && currentIndex > 0) {
        e.preventDefault();
        if (currentIndex === 1) {
          mainElement.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const prevSection = document.getElementById(sections[currentIndex - 1]);
          prevSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const mainElement = document.querySelector('main');
    if (!mainElement) return;

    const handleScroll = () => {
      const sections = ["services", "about", "projects", "contact"];
      const scrollPosition = mainElement.scrollTop + mainElement.clientHeight / 2;

      // Show triangle when scrolled past hero (first section)
      setShowTriangle(mainElement.scrollTop > mainElement.clientHeight * 0.5);

      // Calculate scroll progress
      const scrollHeight = mainElement.scrollHeight - mainElement.clientHeight;
      const progress = (mainElement.scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);

      let foundSection = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            foundSection = section;
            break;
          }
        }
      }
      setActiveSection(foundSection);
    };

    mainElement.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => mainElement.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const mainElement = document.querySelector('main');
    if (sectionId === 'hero') {
      mainElement?.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Progress bar - right side */}
      {mounted && (
        <div className="fixed right-0 top-0 h-screen w-1 z-50 pointer-events-none">
          <div
            className="w-full bg-accent transition-all duration-300 ease-out"
            style={{ height: `${scrollProgress}%` }}
          />
        </div>
      )}

      {/* Red triangle - separate layer, always red */}
      {mounted && (
        <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-16">
            <div className="flex items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 h-20 lg:h-24">
              <button
                onClick={() => {
                  const mainElement = document.querySelector('main');
                  mainElement?.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`font-inter font-semibold text-base lg:text-lg tracking-tight hover:opacity-70 transition-all pointer-events-auto ${
                  showTriangle ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                aria-label="Home"
              >
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" className="w-4 h-3.5 lg:w-5 lg:h-4 text-accent">
                  <path d="M8 0L16 14H0L8 0Z" fill="currentColor" />
                </svg>
              </button>
              {/* Spacers to match nav layout */}
              <div className="font-inter font-semibold text-xs sm:text-sm md:text-base lg:text-lg tracking-tight invisible">SERVICES</div>
              <div className="font-inter font-semibold text-xs sm:text-sm md:text-base lg:text-lg tracking-tight invisible">ABOUT</div>
              <div className="font-inter font-semibold text-xs sm:text-sm md:text-base lg:text-lg tracking-tight invisible">PROJECT</div>
              <div className="font-inter font-semibold text-xs sm:text-sm md:text-base lg:text-lg tracking-tight invisible">CONTACT</div>
            </div>
          </div>
        </div>
      )}

      <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference pointer-events-none">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 h-20 lg:h-24">
            {/* Spacer for triangle alignment */}
            <div className="w-3.5 lg:w-4" aria-hidden="true"></div>

            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="font-inter font-semibold text-xs sm:text-sm md:text-base lg:text-lg text-white tracking-tight hover:opacity-70 transition-opacity pointer-events-auto"
            >
              SERVICES
            </button>
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="font-inter font-semibold text-xs sm:text-sm md:text-base lg:text-lg text-white tracking-tight hover:opacity-70 transition-opacity pointer-events-auto"
            >
              ABOUT
            </button>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="font-inter font-semibold text-xs sm:text-sm md:text-base lg:text-lg text-white tracking-tight hover:opacity-70 transition-opacity pointer-events-auto"
            >
              PROJECT
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="font-inter font-semibold text-xs sm:text-sm md:text-base lg:text-lg text-white tracking-tight hover:opacity-70 transition-opacity pointer-events-auto"
            >
              CONTACT
            </button>
          </div>
        </div>
      </nav>

      {/* Red brackets layer - always red, no blend mode */}
      <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 h-20 lg:h-24">
            {/* Spacer for triangle alignment */}
            <div className="w-3.5 lg:w-4" aria-hidden="true"></div>

            <div className="font-inter font-semibold text-xs sm:text-sm md:text-base lg:text-lg tracking-tight relative">
              <span className="absolute -left-3 sm:-left-3.5 text-[#FF0000] opacity-0 transition-opacity text-xs sm:text-sm md:text-base lg:text-lg" style={{ opacity: activeSection === "services" ? 1 : 0 }}>{`{`}</span>
              <span className="invisible">SERVICES</span>
              <span className="absolute -right-3 sm:-right-3.5 text-[#FF0000] opacity-0 transition-opacity text-xs sm:text-sm md:text-base lg:text-lg" style={{ opacity: activeSection === "services" ? 1 : 0 }}>{`}`}</span>
            </div>
            <div className="font-inter font-semibold text-xs sm:text-sm md:text-base lg:text-lg tracking-tight relative">
              <span className="absolute -left-3 sm:-left-3.5 text-[#FF0000] opacity-0 transition-opacity text-xs sm:text-sm md:text-base lg:text-lg" style={{ opacity: activeSection === "about" ? 1 : 0 }}>{`{`}</span>
              <span className="invisible">ABOUT</span>
              <span className="absolute -right-3 sm:-right-3.5 text-[#FF0000] opacity-0 transition-opacity text-xs sm:text-sm md:text-base lg:text-lg" style={{ opacity: activeSection === "about" ? 1 : 0 }}>{`}`}</span>
            </div>
            <div className="font-inter font-semibold text-xs sm:text-sm md:text-base lg:text-lg tracking-tight relative">
              <span className="absolute -left-3 sm:-left-3.5 text-[#FF0000] opacity-0 transition-opacity text-xs sm:text-sm md:text-base lg:text-lg" style={{ opacity: activeSection === "projects" ? 1 : 0 }}>{`{`}</span>
              <span className="invisible">PROJECT</span>
              <span className="absolute -right-3 sm:-right-3.5 text-[#FF0000] opacity-0 transition-opacity text-xs sm:text-sm md:text-base lg:text-lg" style={{ opacity: activeSection === "projects" ? 1 : 0 }}>{`}`}</span>
            </div>
            <div className="font-inter font-semibold text-xs sm:text-sm md:text-base lg:text-lg tracking-tight relative">
              <span className="absolute -left-3 sm:-left-3.5 text-[#FF0000] opacity-0 transition-opacity text-xs sm:text-sm md:text-base lg:text-lg" style={{ opacity: activeSection === "contact" ? 1 : 0 }}>{`{`}</span>
              <span className="invisible">CONTACT</span>
              <span className="absolute -right-3 sm:-right-3.5 text-[#FF0000] opacity-0 transition-opacity text-xs sm:text-sm md:text-base lg:text-lg" style={{ opacity: activeSection === "contact" ? 1 : 0 }}>{`}`}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
