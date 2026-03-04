import React from "react";
import { motion } from "framer-motion";

const intakeData = [
  {
    title: "MECHANICAL ENGINEERING",
    intake: 120,
    code: "524361210",
    color: "border-green-600",
  },
  {
    title: "CIVIL ENGINEERING",
    intake: 60,
    code: "524319110",
    color: "border-amber-800",
  },
  {
    title: "COMPUTER TECHNOLOGY",
    intake: 60,
    code: "524325110",
    color: "border-blue-600",
  },
  {
    title: "ELECTRICAL ENGINEERING",
    intake: 60,
    code: "524329310",
    color: "border-yellow-500",
  },
  {
    title: "ELECTRONICS & COMPUTER ENGINEERING",
    intake: 60,
    code: "524374210",
    color: "border-red-600",
  },
];

// Container animation (stagger effect)
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Individual card animation
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function CheckIntake() {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Title Animation */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-14"
        >
          Check Intake
        </motion.h2>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {intakeData.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -8,
                boxShadow: "0px 15px 35px rgba(0,0,0,0.08)",
              }}
              className={`bg-white rounded-xl border-l-4 ${item.color} p-8 text-center shadow-sm transition`}
            >
              <h3 className="font-bold text-lg mb-4 tracking-wide">
                {item.title}
              </h3>

              <p className="mb-3 text-lg">
                <span className="font-semibold">Intake:</span> {item.intake}
              </p>

              <p className="text-lg">
                <span className="font-semibold">Choice Code:</span> {item.code}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default CheckIntake;