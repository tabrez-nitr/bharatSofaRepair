import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

function AboutUs() {
  // Helper component for animated cards
  function AnimatedCard({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const controls = useAnimation();

    React.useEffect(() => {
      if (isInView) {
        controls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        });
      }
    }, [isInView, controls]);

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={controls}
        className="border-1 border-[black]/20 p-3 rounded-2xl shadow-2xl"
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div id="about">
      <div className="flex justify-center mt-10">
        <h1 className="text-4xl font-medium opacity-80 border-b-4 border-[#F5DEB3]">
          About Us
        </h1>
      </div>

      <div className="flex flex-wrap gap-9 justify-center mt-8 p-4">
        {/* Cards wrapped with AnimatedCard */}
        <AnimatedCard>
          <div className="flex justify-center text-5xl">
            <h1 className="px-8 py-12 opacity-75 font-semibold text-[#DEB887] rounded-[50%] bg-[grey]/10">
              15+
            </h1>
          </div>
          <div className="mt-4">
            <h1 className="text-2xl opacity-70 font-semibold text-center">
              15+ Years Of Experience
            </h1>
            <p className="p-3 font-thin">
            We’ve helped countless homes upgrade their comfort and style. Every sofa is crafted or repaired with precision using premium materials. Our designs combine durability and elegance, keeping your sofa beautiful for years.
            </p>
          </div>
        </AnimatedCard>

        <AnimatedCard>
          <div className="flex justify-center text-4xl">
            <h1 className="px-11 py-10 text-5xl opacity-75 font-semibold text-[#DEB887] rounded-[50%] bg-[grey]/10">
              <i className="ri-team-fill"></i>
            </h1>
          </div>
          <div className="mt-4">
            <h1 className="text-2xl opacity-80 font-semibold text-center">
              Customer-First Approach
            </h1>
            <p className="p-3 font-thin">
              We put our customers at the heart of everything we do. From design to
              delivery, every step is tailored to meet your needs, ensuring comfort,
              quality, and lasting satisfaction.
            </p>
          </div>
        </AnimatedCard>

        <AnimatedCard>
          <div className="flex justify-center text-4xl">
            <h1 className="px-11 py-10 text-5xl opacity-75 font-semibold text-[#DEB887] rounded-[50%] bg-[grey]/10">
              <i className="ri-user-settings-fill"></i>
            </h1>
          </div>
          <div className="mt-4">
            <h1 className="text-2xl opacity-80 font-semibold text-center">
              Sofa Makers, Repair Experts
            </h1>
            <p className="p-3 font-thin">
              Crafting and restoring sofas with precision, we blend skilled craftsmanship and premium materials for comfort, style, and durability. Whether creating a new piece or reviving an old one, every detail reflects our commitment to quality.
            </p>
          </div>
        </AnimatedCard>
      </div>
    </div>
  );
}

export default AboutUs;