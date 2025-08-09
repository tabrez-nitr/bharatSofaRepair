import React, { useEffect, useRef, useState } from "react";
// Step 1: Import motion from framer-motion
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

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
  // State to hold the animation properties, which depend on the scroller's width
  const [animationProps, setAnimationProps] = useState({});

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;

    // This logic for duplicating items remains the same to create a seamless loop
    const lis = Array.from(scrollerRef.current.children);
    if (scrollerRef.current.querySelectorAll("li").length !== lis.length) {
         lis.forEach((li) => scrollerRef.current.appendChild(li.cloneNode(true)));
    }
    
    // Step 2: Calculate animation properties based on props and scroller width
    const getAnimationProps = () => {
        // We only need half the width because we duplicated the items
        const scrollerWidth = scrollerRef.current.offsetWidth / 2;
        const duration = speed === "fast" ? 20 : speed === "normal" ? 40 : 80;
        
        // Set the animation properties for Framer Motion
        setAnimationProps({
            x: direction === "left" ? -scrollerWidth : 0,
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: duration,
                    ease: "linear",
                    // The starting point of the animation is the opposite of the end point
                    from: direction === "left" ? 0 : -scrollerWidth,
                }
            }
        });
    };
    
    getAnimationProps();
    setStart(true);

  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        // The 'scroller' class is no longer needed for the animation itself
        "relative overflow-hidden",
        className
      )}
    >
      {/* Step 3: Convert the ul to a motion.ul and apply the animation */}
      <motion.ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full flex-nowrap gap-4 py-4",
          // The CSS class for pausing on hover is kept as it works well
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        // The animate prop is now controlled by our state
        animate={animationProps}
      >
        {items.map((item, idx) => (
          // The key is updated to be unique even with duplicated items
          <li
            key={`${item.name}-${idx}`}
            className="relative h-[250px] w-[350px] shrink-0 rounded-2xl border border-[#F5DEB3]/30 bg-white px-8 py-6 shadow-2xl md:w-[450px]"
          >
            <blockquote>
              <div className="flex h-full flex-col justify-between">
                <span className="text-balance text-[15px] text-black/70">
                  {item.review}
                </span>
                <div className="mt-4 flex flex-col text-sm text-neutral-600">
                  <span className="text-2xl text-[black]/80">{item.name}</span>
                  <div className="flex justify-between text-black/60">
                    <span>{item.address}</span>
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </motion.ul>
    </div>
  );
}