import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Container animation (stagger effect)
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Child animation
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function BVCTE() {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Title Animation */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            About BVCTE
          </h2>
          <div className="w-20 h-1 bg-blue-900 mx-auto mt-4 rounded"></div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >

          {/* Video */}
          <motion.div variants={itemVariants}>
            <div className="relative w-full overflow-hidden rounded-xl shadow-lg">
              <iframe
                className="w-full h-[250px] md:h-[350px] lg:h-[400px]"
                src="https://www.youtube.com/embed/IGlUUQ56wrw"
                title="Brahma Valley Polytechnic Nashik"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Welcome to Brahma Valley College of Technical Education (BVCTE),
            </h3>

            <p className="text-gray-700 mb-5 leading-relaxed">
              A premier institute built with a vision to produce technical
              personnel of international caliber who will lead India’s
              technological advancements.
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed">
              BVCTE has quickly established itself as a leader in technical
              education. Located in the serene surroundings of Anjaneri near
              Nashik City, our 35-acre campus at the foot of the Sahyadri
              Range fosters a perfect learning environment with lush greenery
              and thoughtfully designed infrastructure.
            </p>

            <Link
              to="/about#details"
              className="inline-block bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md font-medium transition"
            >
              Learn More
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

export default BVCTE;