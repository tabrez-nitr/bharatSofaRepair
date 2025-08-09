import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className="bg-[#2C2C2C] rounded-t-2xl text-white-80 flex flex-wrap p-4"
    >
      <section>
        {/* About The Brand */}
        <div>
          <h1 className="text-2xl text-[#F5DEB3]">
            <i className="ri-sofa-fill"></i>Bharat Sofa Service
          </h1>
          <p className="text-[10px] font-normal text-white/80">Sector-50 , Noida</p>
          <p className="text-[14px] font-normal text-white/80 mt-3">
            We’re passionate about transforming sofas — whether it’s repairing your old favorite,
            crafting a brand-new design, or refreshing it with premium fabrics. Quality, comfort,
            and care in every stitch, trusted by homes since 2009.
          </p>
        </div>
        <div className="mt-5 flex gap-3 text-3xl ">
          {/* social handels  */}
          <i className="text-[#F5DEB3] ri-facebook-circle-fill"></i>
          <i className="text-[#F5DEB3] ri-instagram-fill"></i>
          <i className="text-[#F5DEB3] ri-whatsapp-fill"></i>
        </div>
      </section>

      <section className="w-screen mt-3">
        {/* Services  Section */}
        <div className="border-t border-[#F5DEB3]/60 w-full ">
          <div className="mt-3 ">
            <h1 className="text-2xl text-[#F5DEB3]">Our Services</h1>
            <ul className="text-[14px] text-white/80 mt-3">
              <li>Sofa Repair</li>
              <li>New Sofa Making</li>
              <li>Chair Repair</li>
              <li>Bed Design & Repair</li>
              <li>Same Day Delivery</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-screen text-white/80 mt-3">
        {/* Contact Info Section */}
        <div className="border-t  border-[#F5DEB3]/60  w-full ">
          <div className="mt-3 ">
            <h1 className="text-2xl text-[#F5DEB3]">Contact Us</h1>
            <div>
              <div className="text-[13px] mt-3">
                <p>
                  <i className="text-[#F5DEB3] text-[18px] ri-map-pin-fill"></i> Sector-50, Noida, New Delhi
                </p>
                <p>
                  <i className="text-[#F5DEB3] text-[18px] ri-phone-fill"></i> +91 7846940025
                </p>
                <p>
                  <i className="text-[#F5DEB3] text-[18px] ri-mail-fill"></i> tabreznitr@gmail.com
                </p>
                <p>
                  <i className="text-[#F5DEB3] text-[18px] ri-time-fill"></i> Mon-Sun, 9AM - 9PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-screen text-white/80 mt-3">
        {/* Quick Links Section */}
        <div className="border-t border-[#F5DEB3]/60  w-full ">
          <div className="text-center mt-5 mb-5 text-[#F5DEB3]/60 text-[13px]">
            <i className="ri-copyright-line"></i> 2025 Bharat Sofa Repair. All rights reserved.
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Footer;