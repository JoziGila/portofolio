import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  label: string;
  children: ReactNode;
  bgColor?: "white" | "black";
  labelStyle?: "curly" | "corner";
}

export default function SectionWrapper({
  id,
  label,
  children,
  bgColor = "white",
  labelStyle = "curly",
}: SectionWrapperProps) {
  const bgClass = bgColor === "black" ? "bg-black text-white" : "bg-white text-black";

  return (
    <section
      id={id}
      className={`relative ${bgClass} h-screen w-full flex items-center`}
    >
      {/* Section Label - Top Right */}
      <div className="absolute top-8 right-8 md:top-12 md:right-12 lg:top-16 lg:right-16 z-10">
        {labelStyle === "curly" ? (
          // Curly braces style (for Services)
          <div className="flex items-center gap-1">
            <span className={`text-xs md:text-sm font-bold ${bgColor === "black" ? "text-accent" : "text-[#f9452d]"}`}>
              {`{`}
            </span>
            <span className={`text-xs md:text-sm font-bold tracking-wide uppercase ${bgColor === "black" ? "text-white/40" : "text-black/40"}`}>
              {label}
            </span>
            <span className={`text-xs md:text-sm font-bold ${bgColor === "black" ? "text-accent" : "text-[#f9452d]"}`}>
              {`}`}
            </span>
          </div>
        ) : (
          // Corner style (for About, Projects, Contact)
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 border-r-2 border-b-2 border-[#f9452d] rotate-45" />
            <span className={`font-semibold text-[13px] tracking-tight uppercase ${bgColor === "black" ? "text-white" : "text-[#2c2b2b]"}`}>
              {label}
            </span>
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {children}
      </div>
    </section>
  );
}
