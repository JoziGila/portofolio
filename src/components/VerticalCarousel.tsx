import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";

interface VerticalCarouselProps<T extends { id: string; title: string }> {
  items: T[];
  activeIndex: number;
  onSelect: (index: number) => void;
  height?: string;
  itemHeight?: string;
}

export default function VerticalCarousel<T extends { id: string; title: string }>({
  items,
  activeIndex,
  onSelect,
  height = '180px',
  itemHeight = '60px',
}: VerticalCarouselProps<T>) {
  return (
    <div className="lg:hidden overflow-hidden">
      <Swiper
        direction="vertical"
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={0}
        grabCursor={true}
        mousewheel={true}
        modules={[Mousewheel]}
        className="w-full !overflow-visible"
        style={{ height }}
        onSlideChange={(swiper) => onSelect(swiper.activeIndex)}
        slideToClickedSlide={true}
        touchRatio={1}
        resistance={true}
        resistanceRatio={0}
      >
        {items.map((item, index) => (
          <SwiperSlide key={item.id} style={{ height: itemHeight }}>
            {({ isActive }) => (
              <button
                onClick={() => onSelect(index)}
                className={`w-full text-left border-b border-white/10 h-full flex items-center transition-all duration-300 ${
                  isActive ? 'scale-100 z-10' : 'scale-95 opacity-40'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0 w-full">
                  {/* Number Badge */}
                  <div className="flex items-center gap-1 font-inter font-bold text-base flex-shrink-0">
                    <span className={isActive ? "text-accent" : "text-white/20"}>{`{`}</span>
                    <span className={isActive ? "text-white" : "text-white/40"}>{item.id}</span>
                    <span className={isActive ? "text-accent" : "text-white/20"}>{`}`}</span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-inter font-medium text-lg sm:text-xl tracking-tight min-w-0 ${
                      isActive ? "text-white" : "text-white/40"
                    }`}
                    style={{
                      wordBreak: "break-word",
                      overflowWrap: "break-word",
                      hyphens: "auto"
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
              </button>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
