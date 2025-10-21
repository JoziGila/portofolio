"use client";

import { useState } from "react";

const services = [
  {
    id: "01",
    title: "Art Direction",
    description:
      "Every visual decision matters—from the color palette to the final frame. I shape your brand's visual language to be distinctive, intentional, and memorable. Whether it's a campaign refresh or building something from the ground up.",
  },
  {
    id: "02",
    title: "Video Editing & Motion Design",
    description:
      "Sharp pacing, intentional transitions, and emotional beats that land right. I edit videos that hold attention—from quick social cuts to full cinematic pieces. Every frame serves the story.",
  },
  {
    id: "03",
    title: "AI-Powered Video Production",
    description:
      "I use AI tools to work faster and explore more creative directions without compromising quality. Half the production time means more room to experiment, iterate, and push ideas further.",
  },
  {
    id: "04",
    title: "Brand Visual Identity & Design",
    description:
      "Cohesive visual systems built to work across every touchpoint. Logo, typography, color palette, templates—designed to scale with your brand and create consistency wherever you show up.",
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section id="services" className="relative bg-black text-white h-screen w-full flex items-center snap-start snap-always">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Side - Description */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h3
              key={`title-${activeService}`}
              className="text-white/60 font-inter font-medium text-sm mb-4 animate-fadeIn"
            >
              {services[activeService].title}
            </h3>
            <p
              key={`desc-${activeService}`}
              className="font-inter font-normal text-base md:text-lg lg:text-xl leading-relaxed animate-fadeIn"
            >
              {services[activeService].description}
            </p>
          </div>

          {/* Right Side - Service List */}
          <div className="lg:col-span-7 space-y-0 min-w-0">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveService(index)}
                className="w-full text-left border-b border-white/10 py-4 md:py-5 lg:py-6 xl:py-8 transition-all group"
              >
                <div className="flex items-center gap-3 lg:gap-4 min-w-0">
                  {/* Number Badge */}
                  <div className="flex items-center gap-1 font-inter font-bold text-base lg:text-lg flex-shrink-0">
                    <span
                      className={`transition-colors ${
                        activeService === index
                          ? "text-accent"
                          : "text-white/20 group-hover:text-accent"
                      }`}
                    >{`{`}</span>
                    <span
                      className={`transition-colors ${
                        activeService === index
                          ? "text-white"
                          : "text-white/40 group-hover:text-white"
                      }`}
                    >
                      {service.id}
                    </span>
                    <span
                      className={`transition-colors ${
                        activeService === index
                          ? "text-accent"
                          : "text-white/20 group-hover:text-accent"
                      }`}
                    >{`}`}</span>
                  </div>

                  {/* Title - with proper overflow handling */}
                  <h3
                    className={`font-inter font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-tight transition-colors min-w-0 ${
                      activeService === index
                        ? "text-white"
                        : "text-white/40 group-hover:text-white/60"
                    }`}
                    style={{
                      wordBreak: "break-word",
                      overflowWrap: "break-word",
                      hyphens: "auto"
                    }}
                  >
                    {service.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
