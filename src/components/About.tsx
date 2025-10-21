export default function About() {
  return (
    <section id="about" className="relative bg-white h-screen w-full flex items-center snap-start snap-always">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center justify-items-center">
          {/* Left Side - Image */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
            <div className="relative aspect-[4/5] w-full max-w-[380px] rounded-[50px] overflow-hidden">
              <img
                src="/dori.png"
                alt="Theodora Ropi"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 lg:space-y-12 lg:pl-0">
            {/* Quote Section */}
            <div className="space-y-6">
              {/* Quote Icon */}
              <div className="w-8 h-5">
                <svg viewBox="0 0 40 25" fill="none" className="w-full h-full">
                  <path
                    d="M0 25V12.5L8.33 0h6.25L8.33 12.5h6.25V25H0zm20.42 0V12.5L28.75 0H35l-6.25 12.5H35V25H20.42z"
                    fill="#F9452D"
                  />
                </svg>
              </div>

              {/* Quote Text */}
              <p className="font-medium text-xl md:text-2xl lg:text-3xl leading-tight tracking-tight text-[#0b0b0c] indent-8 lg:indent-12">
                The story is already there. I'm just figuring out how to get out of its way.
              </p>
            </div>

            {/* Bottom Section */}
            <div className="space-y-8">
              {/* Additional Description */}
              <p className="font-medium text-base md:text-lg lg:text-xl leading-snug tracking-tight text-[rgba(12,12,12,0.6)]">
                I've spent 4+ years learning that good creative isn't about having the fanciest tools—it's about understanding what makes people pause, feel, and remember. I use AI and modern workflows not because they're trendy, but because they free me up to focus on what actually matters: the story.
              </p>

              {/* Founder Info */}
              <div className="pt-8 border-t border-[rgba(0,0,0,0.12)]">
                <h3 className="font-medium text-lg lg:text-xl tracking-tight text-[#0c0c0c] mb-2">
                  Theodora Ropi
                </h3>
                <p className="font-medium text-sm tracking-tight text-[rgba(12,12,12,0.6)]">
                  Art Director
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
