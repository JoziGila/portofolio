"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ItemSelector from "./ItemSelector";

type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  video: string;
  tools: string;
  focus: string;
  size: "small" | "medium" | "large";
};

const projects: Project[] = [
  {
    id: "01",
    title: "Frontera & VaanMED",
    category: "Brand Production",
    description: "Luxury brand films for beauty and aesthetics.",
    video: "/videos/project4.mp4",
    tools: "After Effects · Photoshop",
    focus: "Luxury brand storytelling",
    size: "medium",
  },
  {
    id: "02",
    title: "Viral AI Study",
    category: "AI Production",
    description: "Experimental AI-driven short demonstrating rapid iteration for audience engagement and viewer retention.",
    video: "/videos/project1.mp4",
    tools: "Veo 3 · ChatGPT · CapCut Pro",
    focus: "Audience engagement, AI workflows",
    size: "large",
  },
  {
    id: "03",
    title: "Porsche",
    category: "Motion Design",
    description: "Motion study exploring precision, performance, and kinetic design.",
    video: "/videos/project2.mp4",
    tools: "After Effects",
    focus: "Premium automotive branding",
    size: "small",
  },
  {
    id: "04",
    title: "Eco Drive",
    category: "AI Production",
    description: "AI-generated visual concept exploring sustainable mobility. Organic forms transform into automotive design language.",
    video: "/videos/project3.mp4",
    tools: "Veo 3 · WAN 2.2 · CapCut Pro",
    focus: "AI cinematics, transformation",
    size: "medium",
  },
  {
    id: "05",
    title: "Teoren Identity",
    category: "Art Direction",
    description: "End-to-end visual identity development. From concept strategy to final deliverables across all brand touchpoints.",
    video: "/videos/project5.mp4",
    tools: "Veo 3 · Photoshop · Illustrator",
    focus: "Brand systems, visual identity",
    size: "medium",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const project = projects[activeProject];

  useEffect(() => {
    setMounted(true);
  }, []);

  // Reset video loading state when project changes
  useEffect(() => {
    setVideoLoaded(false);
  }, [activeProject]);

  if (!mounted) {
    return <section id="projects" className="relative bg-black text-white h-screen w-full flex items-center overflow-hidden snap-start snap-always pt-[10vh] lg:pt-0"></section>;
  }

  return (
    <section id="projects" className="relative bg-black text-white h-screen w-full snap-start snap-always pt-[10vh] lg:pt-0">
      <div className="h-[90vh] lg:h-full w-full flex flex-col lg:block">
        {/* Mobile/Tablet: Top-aligned container */}
        <div className="h-full flex items-start justify-center lg:block">
          {/* Desktop: Original layout with spacing */}
          <div className="lg:h-[15%] hidden lg:block"></div>
          <div className="w-full max-h-full overflow-y-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-4 lg:py-4 lg:h-[85%]">
            <div className="w-full max-w-[1920px] mx-auto">
              {/* Two-panel layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20">
          {/* Left Side - Project List (Desktop) / Carousel (Mobile) */}
          <div className="lg:col-span-7 min-w-0 order-1 lg:order-1">
            <ItemSelector
              items={projects}
              activeIndex={activeProject}
              onSelect={setActiveProject}
            />
          </div>

          {/* Right Side - Project Preview Card */}
          <div className="lg:col-span-5 flex items-start justify-start order-2 lg:order-2">
            <div className="w-full max-h-full overflow-y-auto scrollbar-hide">
              <motion.div
                key={activeProject}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-3"
              >
                {/* Project Video */}
                <div className="relative w-full aspect-video rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] overflow-hidden bg-black">
                  <video
                    ref={videoRef}
                    src={project.video}
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    onLoadedData={() => setVideoLoaded(true)}
                  />

                  {/* Loading indicator */}
                  {!videoLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black">
                      <div className="w-8 h-8 border-2 border-white/20 border-t-white/60 rounded-full animate-spin" />
                    </div>
                  )}
                </div>

                {/* Project Info Below Image */}
                <div className="space-y-2 pb-4">
                  <p className="text-white/70 text-xs sm:text-sm">{project.category}</p>
                  <h3 className="font-inter font-semibold text-lg sm:text-xl lg:text-2xl text-white">
                    {project.title}
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metadata */}
                  <div className="space-y-1 text-xs sm:text-sm pt-1">
                    <div className="flex gap-2">
                      <span className="text-white/60">Tools:</span>
                      <span className="text-white/90">{project.tools}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-white/60">Focus:</span>
                      <span className="text-white/90">{project.focus}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
