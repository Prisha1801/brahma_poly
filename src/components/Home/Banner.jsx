import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const images = [
  "/banners/b1.png",
  "/banners/b2.png",
  "/banners/b3.png",
];

function Banner() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  useEffect(() => {
    // Disable animation only for first render
    setFirstLoad(false);
  }, []);

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden">

      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={index}
          src={images[index]}
          alt="Banner"
          custom={direction}
          initial={
            firstLoad
              ? false
              : { x: direction > 0 ? "100%" : "-100%" }
          }
          animate={{ x: 0 }}
          exit={{ x: direction > 0 ? "-100%" : "100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute w-full top-0 left-0"
        />
      </AnimatePresence>

      {/* Height holder */}
      <img
        src={images[0]}
        alt=""
        className="w-full invisible"
      />

      {/* Left Button */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow z-10"
      >
        <FiChevronLeft size={24} />
      </button>

      {/* Right Button */}
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow z-10"
      >
        <FiChevronRight size={24} />
      </button>

    </div>
  );
}

export default Banner;