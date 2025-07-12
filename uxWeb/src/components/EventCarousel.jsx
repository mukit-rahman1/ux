import { useRef, useEffect } from "react";
import EventCard from "./EventCard";
import "../styles/events.css";

export default function EventCarousel() {
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const hasDragged = useRef(false);
  const initialCenterOffsetRef = useRef(0);

  // Center properly upon refresh or screen size change
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateCenterOffset = () => {
      const cardWidth = 825;
      const gap = 100;
      const cardPlusGap = cardWidth + gap;
      const index = 2;
      const containerWidth = container.offsetWidth;
      const centerOffset = cardPlusGap * index - (containerWidth - cardWidth) / 2;

      container.scrollLeft = centerOffset;
      initialCenterOffsetRef.current = centerOffset;
    };

    updateCenterOffset(); 

    const resizeObserver = new ResizeObserver(updateCenterOffset);
    resizeObserver.observe(container);

    return () => resizeObserver.disconnect();
  }, []);



  const handleMouseDown = (e) => {
    isDragging.current = true;
    hasDragged.current = false;
    startX.current = e.pageX;
    scrollLeft.current = containerRef.current.scrollLeft;
    containerRef.current.style.scrollBehavior = "auto";
    document.body.style.userSelect = "none";
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    hasDragged.current = true;

    const x = e.pageX;
    const delta = startX.current - x;
    const walk = delta

    containerRef.current.scrollLeft = scrollLeft.current + walk;
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;

    isDragging.current = false;
    document.body.style.userSelect = "auto";

    if (!hasDragged.current) return;

    const container = containerRef.current;
    container.style.scrollBehavior = "smooth";

    const cardWidth = 825;
    const gap = 100;
    const cardPlusGap = cardWidth + gap;

    const scrollLeft = container.scrollLeft;

    const deltaScroll = scrollLeft - initialCenterOffsetRef.current;

    let index = 2 + Math.round(deltaScroll / cardPlusGap);

    const totalCards = 7;
    const firstSnappableIndex = 1;
    const lastSnappableIndex = totalCards;

    index = Math.max(firstSnappableIndex, Math.min(lastSnappableIndex, index));

    const containerWidth = container.offsetWidth;
    const centerOffset = cardPlusGap * index - (containerWidth - cardWidth) / 2;

    container.scrollTo({
      left: centerOffset,
      behavior: "smooth",
    });
  };

  return (

    <div id="outer-carousel-container" className="relative w-full overflow-hidden">
      <div className="absolute right-0 top-0 h-full w-24 pointer-events-none z-10"></div>

      <div id="inner-carousel-container"
        ref={containerRef}
        className="flex gap-[100px] overflow-x-scroll py-6 no-scrollbar cursor-grab"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <div className="shrink-0 w-[825px] h-[486px]"></div>
        {[...Array(5)].map((_, index) => (
          <div id="carousel-card-container"key={index} className="shrink-0 w-[825px] h-[486px]">
            <EventCard />
          </div>
        ))}
        <div className="shrink-0 w-[825px] h-[486px]"></div>
      </div>
    </div>
  );
}