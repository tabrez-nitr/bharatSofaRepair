'use client'
import React, { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";

export function InfiniteMovingCards({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}) {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;

    const lis = Array.from(scrollerRef.current.children);

    // Prevent duplicating items more than once
    if (scrollerRef.current.querySelectorAll("li").length === lis.length * 2) {
      setStart(true);
      return;
    }

    // Duplicate list items for seamless infinite scroll
    lis.forEach((li) => scrollerRef.current.appendChild(li.cloneNode(true)));

    // Set CSS variables for animation direction & speed
    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "normal" : "reverse"
    );
    containerRef.current.style.setProperty(
      "--animation-duration",
      speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s"
    );

    setStart(true);
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        // changed from overflow-hidden to overflow-x-auto to allow manual scrolling
        "scroller relative overflow-x-auto overflow-y-hidden no-scrollbar", 
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            key={item.name}
            className="relative w-[350px] h-[250px] shrink-0 rounded-2xl border shadow-2xl border-[black]/10 bg-white px-8 py-6 md:w-[450px]"
          >
            <blockquote>
              <div className="flex flex-col justify-between h-full">
                <div>
                {item.stars}
                </div>
                <span className="text-[15px] text-black/70">{item.review}</span>
                <div className="mt-4 flex flex-col text-sm text-neutral-600">
                  <span className="text-xl text-[black]/80">{item.name}</span>
                  <div className="flex justify-between text-black/40">
                    <span>{item.address}</span>
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
}