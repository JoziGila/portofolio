interface ItemListProps<T extends { id: string; title: string }> {
  items: T[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

export default function ItemList<T extends { id: string; title: string }>({
  items,
  activeIndex,
  onSelect,
}: ItemListProps<T>) {
  return (
    <div className="hidden lg:block space-y-0">
      {items.map((item, index) => (
        <button
          key={item.id}
          onClick={() => onSelect(index)}
          className="w-full text-left border-b border-white/10 py-6 md:py-5 lg:py-6 xl:py-8 transition-all group"
        >
          <div className="flex items-center gap-3 lg:gap-4 min-w-0">
            {/* Number Badge */}
            <div className="flex items-center gap-1 font-inter font-bold text-base lg:text-lg flex-shrink-0">
              <span
                className={`transition-colors ${
                  activeIndex === index
                    ? "text-accent"
                    : "text-white/20 group-hover:text-accent"
                }`}
              >{`{`}</span>
              <span
                className={`transition-colors ${
                  activeIndex === index
                    ? "text-white"
                    : "text-white/40 group-hover:text-white"
                }`}
              >
                {item.id}
              </span>
              <span
                className={`transition-colors ${
                  activeIndex === index
                    ? "text-accent"
                    : "text-white/20 group-hover:text-accent"
                }`}
              >{`}`}</span>
            </div>

            {/* Title - with proper overflow handling */}
            <h3
              className={`font-inter font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-tight transition-colors min-w-0 ${
                activeIndex === index
                  ? "text-white"
                  : "text-white/40 group-hover:text-white/60"
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
      ))}
    </div>
  );
}
