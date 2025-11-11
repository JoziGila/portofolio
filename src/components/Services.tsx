"use client";

import { useState } from "react";
import ItemSelector from "./ItemSelector";

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
    <section id="services" className="relative bg-black text-white h-screen w-full snap-start snap-always pt-[10vh] lg:pt-0">
      <div className="h-[90vh] lg:h-full w-full flex flex-col lg:block">
        {/* Mobile/Tablet: Top-aligned container */}
        <div className="h-full flex items-start justify-center lg:block">
          {/* Desktop: Original layout with spacing */}
          <div className="lg:h-[15%] hidden lg:block"></div>
          <div className="w-full max-h-full overflow-y-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-4 lg:py-4 lg:h-[85%]">
            <div className="w-full max-w-[1920px] mx-auto">
            {/* Services Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20">
              {/* Left Side - Description */}
              <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
                <h3
                  key={`title-${activeService}`}
                  className="text-white/60 font-inter font-medium text-sm mb-4 animate-fadeIn"
                >
                  {services[activeService].title}
                </h3>
                <p
                  key={`desc-${activeService}`}
                  className="font-inter font-normal text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed animate-fadeIn"
                >
                  {services[activeService].description}
                </p>
              </div>

              {/* Right Side - Service List (Desktop) / Carousel (Mobile) */}
              <div className="lg:col-span-7 min-w-0 order-1 lg:order-2">
                <ItemSelector
                  items={services}
                  activeIndex={activeService}
                  onSelect={setActiveService}
                />
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
