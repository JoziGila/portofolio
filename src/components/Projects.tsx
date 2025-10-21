"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tools: string;
  focus: string;
  size: "small" | "medium" | "large";
  width: number;
  height: number;
};

const projects: Project[] = [
  {
    id: "01",
    title: "Frontera & VaanMED",
    category: "Brand Production",
    description: "Luxury brand films for beauty and aesthetics.",
    image: "/project4.jpg",
    tools: "After Effects · Photoshop",
    focus: "Luxury brand storytelling",
    size: "medium",
    width: 1920,
    height: 1280,
  },
  {
    id: "02",
    title: "Viral AI Study",
    category: "AI Production",
    description: "Experimental AI-driven short demonstrating rapid iteration for audience engagement and viewer retention.",
    image: "/project1.jpg",
    tools: "Veo 3 · ChatGPT · CapCut Pro",
    focus: "Audience engagement, AI workflows",
    size: "large",
    width: 1344,
    height: 768,
  },
  {
    id: "03",
    title: "Porsche",
    category: "Motion Design",
    description: "Motion study exploring precision, performance, and kinetic design.",
    image: "/project2.jpg",
    tools: "After Effects",
    focus: "Premium automotive branding",
    size: "small",
    width: 1536,
    height: 1024,
  },
  {
    id: "04",
    title: "Eco Drive",
    category: "AI Production",
    description: "AI-generated visual concept exploring sustainable mobility. Organic forms transform into automotive design language.",
    image: "/project3.jpg",
    tools: "Veo 3 · WAN 2.2 · CapCut Pro",
    focus: "AI cinematics, transformation",
    size: "medium",
    width: 1248,
    height: 832,
  },
  {
    id: "05",
    title: "Teoren Identity",
    category: "Art Direction",
    description: "End-to-end visual identity development. From concept strategy to final deliverables across all brand touchpoints.",
    image: "/project5.jpg",
    tools: "Veo 3 · Photoshop · Illustrator",
    focus: "Brand systems, visual identity",
    size: "medium",
    width: 1248,
    height: 832,
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);
  const [mounted, setMounted] = useState(false);
  const project = projects[activeProject];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <section id="projects" className="relative bg-black text-white h-screen w-full flex items-center overflow-hidden snap-start snap-always"></section>;
  }

  return (
    <section id="projects" className="relative bg-black text-white h-screen w-full flex items-center overflow-hidden snap-start snap-always">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Two-panel layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Side - Project List */}
          <div className="lg:col-span-7 space-y-0 min-w-0">
            {projects.map((proj, index) => (
              <button
                key={proj.id}
                onClick={() => setActiveProject(index)}
                className="w-full text-left border-b border-white/10 py-4 md:py-5 lg:py-6 xl:py-8 transition-all group"
              >
                <div className="flex items-center gap-3 lg:gap-4 min-w-0">
                  {/* Number Badge */}
                  <div className="flex items-center gap-1 font-inter font-bold text-base lg:text-lg flex-shrink-0">
                    <span
                      className={`transition-colors ${
                        activeProject === index
                          ? "text-accent"
                          : "text-white/20 group-hover:text-accent"
                      }`}
                    >{`{`}</span>
                    <span
                      className={`transition-colors ${
                        activeProject === index
                          ? "text-white"
                          : "text-white/40 group-hover:text-white"
                      }`}
                    >
                      {proj.id}
                    </span>
                    <span
                      className={`transition-colors ${
                        activeProject === index
                          ? "text-accent"
                          : "text-white/20 group-hover:text-accent"
                      }`}
                    >{`}`}</span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-inter font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-tight transition-colors min-w-0 ${
                      activeProject === index
                        ? "text-white"
                        : "text-white/40 group-hover:text-white/60"
                    }`}
                    style={{ wordBreak: "break-word" }}
                  >
                    {proj.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>

          {/* Right Side - Project Preview Card */}
          <div className="lg:col-span-5 flex items-start justify-center">
            <div className="w-full h-[70vh] overflow-y-auto scrollbar-hide">
              <motion.div
                key={activeProject}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                {/* Project Image */}
                <div className="relative w-full rounded-[24px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={project.width}
                    height={project.height}
                    className="w-full h-auto object-contain"
                    sizes="(max-width: 1200px) 100vw, 50vw"
                  />
                </div>

                {/* Project Info Below Image */}
                <div className="space-y-3 pb-8">
                  <p className="text-white/70 text-sm">{project.category}</p>
                  <h3 className="font-inter font-semibold text-2xl lg:text-3xl text-white">
                    {project.title}
                  </h3>
                  <p className="text-white/80 text-sm lg:text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metadata */}
                  <div className="space-y-1 text-xs lg:text-sm pt-2">
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
    </section>
  );
}
