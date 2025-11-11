'use client';

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full bg-white overflow-hidden flex items-center justify-center snap-start snap-always">
      {/* Background Image Container with padding */}
      <div className="relative w-full h-full p-4 md:p-8 lg:p-12 xl:p-16">
        <Image
          src="/hero.png"
          alt="Hero background"
          fill
          className="object-cover md:object-contain"
          priority
          sizes="100vw"
        />
      </div>

      {/* Services List - Top Right */}
      <div className="absolute top-32 right-4 sm:right-6 md:top-36 md:right-12 lg:top-40 lg:right-16 pointer-events-none z-10">
        <div className="flex flex-col gap-0 font-medium text-xs sm:text-sm md:text-base lg:text-lg tracking-tight leading-snug text-black">
          <p className="m-0">Art Direction</p>
          <p className="m-0">Video Editing & Motion Design</p>
          <p className="m-0">AI-Powered Video Production</p>
          <p className="m-0">Brand Visual Identity</p>
        </div>
      </div>

      {/* Description - Bottom Left */}
      <div className="absolute bottom-8 left-4 sm:left-6 md:bottom-12 md:left-12 lg:bottom-16 lg:left-16 max-w-[300px] md:max-w-md lg:max-w-lg pointer-events-none z-10">
        <p className="m-0 font-medium text-sm sm:text-base md:text-base lg:text-lg tracking-tight leading-snug text-white/90 lg:text-black">
          Art Director & Video Editor specializing in emotionally-driven storytelling, AI-driven production, and visual identity design.
        </p>
      </div>

      {/* Text Overlay - SVG Name */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none mt-20 z-10">
        <Image
          src="/name.svg"
          alt="Theodora Ropi"
          width={1400}
          height={300}
          className="w-[85vw] sm:w-[80vw] md:w-[min(90vw,1400px)] h-auto"
          priority
        />
      </div>
    </section>
  );
}
