import VerticalCarousel from "./VerticalCarousel";
import ItemList from "./ItemList";

interface ItemSelectorProps<T extends { id: string; title: string }> {
  items: T[];
  activeIndex: number;
  onSelect: (index: number) => void;
  className?: string;
}

export default function ItemSelector<T extends { id: string; title: string }>({
  items,
  activeIndex,
  onSelect,
  className = "",
}: ItemSelectorProps<T>) {
  return (
    <div className={className}>
      {/* Mobile Carousel */}
      <VerticalCarousel
        items={items}
        activeIndex={activeIndex}
        onSelect={onSelect}
      />

      {/* Desktop List */}
      <ItemList
        items={items}
        activeIndex={activeIndex}
        onSelect={onSelect}
      />
    </div>
  );
}
