import { useRef, useEffect, useState } from "react";
import EventCard from "./EventCard";
import "../styles/events.css";

export default function DualCenterCarousel({ cardNum }) {
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const hasDragged = useRef(false);
  const [scrollX, setScrollX] = useState(0);

  const cardWidth = 433;
  const gap = 100;
  const cardPlusGap = cardWidth + gap;

const getSnapPoints = (containerWidth) => {
  const centerGapOffset = containerWidth / 2 - cardWidth - gap / 2;
  const points = [0];
  for (let i = 1; i < cardNum + 2; i++) {
    points.push(i * cardPlusGap + centerGapOffset);
  }
  return points;
};


  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

  const updateScroll = () => {
    const containerWidth = container.offsetWidth;
    const centerGapOffset = containerWidth / 2 - cardWidth - gap / 2;
    container.scrollLeft = cardPlusGap * 1 + centerGapOffset;
    setScrollX(container.scrollLeft);
  };


    updateScroll();
    const resizeObserver = new ResizeObserver(updateScroll);
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
    const delta = startX.current - e.pageX;
    const newScroll = scrollLeft.current + delta;
    containerRef.current.scrollLeft = newScroll;
    setScrollX(newScroll);
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    document.body.style.userSelect = "auto";
    if (!hasDragged.current) return;

    const container = containerRef.current;
    container.style.scrollBehavior = "smooth";
    const containerWidth = container.offsetWidth;
    const scrollNow = container.scrollLeft;

    const snapPoints = getSnapPoints(containerWidth);
    const closest = snapPoints.reduce((prev, curr) =>
      Math.abs(curr - scrollNow) < Math.abs(prev - scrollNow) ? curr : prev
    );

    container.scrollTo({ left: closest, behavior: "smooth" });
    setScrollX(closest);
  };

  const handleScroll = () => {
    setScrollX(containerRef.current.scrollLeft);
  };

const getBlurForCard = (index) => {
  if (!containerRef.current) return "blur(0px)";
  const containerWidth = containerRef.current.offsetWidth;
  const centerX = scrollX + containerWidth / 2;

  const leftCenter =
    centerX - cardWidth / 2 - gap / 2;
  const rightCenter =
    centerX + cardWidth / 2 + gap / 2;

  const cardCenter =
    (index + 1) * cardPlusGap + cardWidth / 2 - gap / 2;

  const distanceToLeft = Math.abs(cardCenter - leftCenter);
  const distanceToRight = Math.abs(cardCenter - rightCenter);
  const minDistance = Math.min(distanceToLeft, distanceToRight);

  const maxDistance = containerWidth / 2 + cardPlusGap;
  const blur = Math.min((minDistance / maxDistance) * 4, 4);
  return `blur(${blur.toFixed(2)}px)`;
};


  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute right-0 top-0 h-full w-24 pointer-events-none z-10"></div>

      <div
        ref={containerRef}
        className="flex gap-[100px] overflow-x-scroll py-6 no-scrollbar cursor-grab"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onScroll={handleScroll}
      >
        {/* Leading spacer for layout */}
        <div className="shrink-0 w-[433px] h-[529px]" />
        {[...Array(cardNum)].map((_, index) => (
          <div
            key={index}
            className="shrink-0 w-[433px] h-[529px] transition-all duration-200"
            style={{ filter: getBlurForCard(index) }}
          >
            <EventCard type="previous" />
          </div>
        ))}
        {/* Trailing spacer for layout */}
        <div className="shrink-0 w-[433px] h-[529px]" />
      </div>
    </div>
  );
}