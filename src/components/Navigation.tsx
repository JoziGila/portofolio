"use client";

import { useState, useEffect } from "react";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("");
  const [showTriangle, setShowTriangle] = useState(false);
  const [mounted, setMounted] = useState(false);

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
      {/* Navigation dots - right side with mix-blend-difference */}
      {mounted && (
        <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 mix-blend-difference">
          {['hero', 'services', 'about', 'projects', 'contact'].map((section) => {
            const isActive = mounted && ((section === 'hero' && !activeSection && !showTriangle) || activeSection === section);

            return (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="group relative"
                aria-label={`Go to ${section}`}
              >
                <div
                  className={`w-2 h-2 rounded-full transition-all ${
                    isActive
                      ? 'bg-white scale-125'
                      : 'bg-white group-hover:bg-white'
                  }`}
                />
              </button>
            );
          })}
        </div>
      )}

      {/* Red dots overlay - always red, no blend mode */}
      {mounted && (
        <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 pointer-events-none">
          {['hero', 'services', 'about', 'projects', 'contact'].map((section) => {
            const isActive = mounted && ((section === 'hero' && !activeSection && !showTriangle) || activeSection === section);

            return (
              <div key={section} className="relative w-2 h-2">
                <div
                  className={`w-2 h-2 rounded-full transition-all ${
                    isActive ? 'bg-[#FF0000] scale-125' : 'opacity-0'
                  }`}
                />
              </div>
            );
          })}
        </div>
      )}

      {/* Red triangle - separate layer, always red */}
      {mounted && (
        <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
          <div className="max-w-[1920px] mx-auto px-8 lg:px-16">
            <div className="flex items-center justify-center gap-12 lg:gap-16 xl:gap-20 h-20 lg:h-24">
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
              <div className="font-inter font-semibold text-base lg:text-lg tracking-tight invisible">SERVICES</div>
              <div className="font-inter font-semibold text-base lg:text-lg tracking-tight invisible">ABOUT</div>
              <div className="font-inter font-semibold text-base lg:text-lg tracking-tight invisible">PROJECT</div>
              <div className="font-inter font-semibold text-base lg:text-lg tracking-tight invisible">CONTACT</div>
            </div>
          </div>
        </div>
      )}

      <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference pointer-events-none">
        <div className="max-w-[1920px] mx-auto px-8 lg:px-16">
          <div className="flex items-center justify-center gap-12 lg:gap-16 xl:gap-20 h-20 lg:h-24">
            {/* Spacer for triangle alignment */}
            <div className="w-4 lg:w-5" aria-hidden="true"></div>

            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="font-inter font-semibold text-base lg:text-lg text-white tracking-tight hover:opacity-70 transition-opacity pointer-events-auto"
            >
              SERVICES
            </button>
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="font-inter font-semibold text-base lg:text-lg text-white tracking-tight hover:opacity-70 transition-opacity pointer-events-auto"
            >
              ABOUT
            </button>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="font-inter font-semibold text-base lg:text-lg text-white tracking-tight hover:opacity-70 transition-opacity pointer-events-auto"
            >
              PROJECT
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="font-inter font-semibold text-base lg:text-lg text-white tracking-tight hover:opacity-70 transition-opacity pointer-events-auto"
            >
              CONTACT
            </button>
          </div>
        </div>
      </nav>

      {/* Red brackets layer - always red, no blend mode */}
      <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <div className="max-w-[1920px] mx-auto px-8 lg:px-16">
          <div className="flex items-center justify-center gap-12 lg:gap-16 xl:gap-20 h-20 lg:h-24">
            {/* Spacer for triangle alignment */}
            <div className="w-4 lg:w-5" aria-hidden="true"></div>

            <div className="font-inter font-semibold text-base lg:text-lg tracking-tight relative">
              <span className="absolute -left-4 text-[#FF0000] opacity-0 transition-opacity" style={{ opacity: activeSection === "services" ? 1 : 0 }}>{`{`}</span>
              <span className="invisible">SERVICES</span>
              <span className="absolute -right-4 text-[#FF0000] opacity-0 transition-opacity" style={{ opacity: activeSection === "services" ? 1 : 0 }}>{`}`}</span>
            </div>
            <div className="font-inter font-semibold text-base lg:text-lg tracking-tight relative">
              <span className="absolute -left-4 text-[#FF0000] opacity-0 transition-opacity" style={{ opacity: activeSection === "about" ? 1 : 0 }}>{`{`}</span>
              <span className="invisible">ABOUT</span>
              <span className="absolute -right-4 text-[#FF0000] opacity-0 transition-opacity" style={{ opacity: activeSection === "about" ? 1 : 0 }}>{`}`}</span>
            </div>
            <div className="font-inter font-semibold text-base lg:text-lg tracking-tight relative">
              <span className="absolute -left-4 text-[#FF0000] opacity-0 transition-opacity" style={{ opacity: activeSection === "projects" ? 1 : 0 }}>{`{`}</span>
              <span className="invisible">PROJECT</span>
              <span className="absolute -right-4 text-[#FF0000] opacity-0 transition-opacity" style={{ opacity: activeSection === "projects" ? 1 : 0 }}>{`}`}</span>
            </div>
            <div className="font-inter font-semibold text-base lg:text-lg tracking-tight relative">
              <span className="absolute -left-4 text-[#FF0000] opacity-0 transition-opacity" style={{ opacity: activeSection === "contact" ? 1 : 0 }}>{`{`}</span>
              <span className="invisible">CONTACT</span>
              <span className="absolute -right-4 text-[#FF0000] opacity-0 transition-opacity" style={{ opacity: activeSection === "contact" ? 1 : 0 }}>{`}`}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
