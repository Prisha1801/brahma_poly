import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoChevronDown } from "react-icons/io5";

// Real file data matching actual folder structure
const curriculumData = [
  {
    id: 1,
    department: "CIVIL ENGINEERING",
    folder: "civil-engineering",
    semesters: [
      { sem: 1, year: "First Year" },
      { sem: 2, year: "Second Year" },
      { sem: 3, year: "Third Year" },
      { sem: 4, year: "Fourth Year" },
      { sem: 5, year: "Fifth Year" },
    ],
  },
  {
    id: 2,
    department: "COMPUTER TECHNOLOGY",
    folder: "computer-technology",
    semesters: [
      { sem: 1, year: "First Year" },
      { sem: 2, year: "Second Year" },
      { sem: 3, year: "Third Year" },
      { sem: 4, year: "Fourth Year" },
      { sem: 5, year: "Fifth Year" },
    ],
  },
  {
    id: 3,
    department: "ELECTRICAL & COMPUTER",
    folder: "electrical-computer",
    semesters: [
      { sem: 1, year: "First Year" },
      { sem: 2, year: "Second Year" },
      { sem: 3, year: "Third Year" },
      { sem: 4, year: "Fourth Year" },
      { sem: 5, year: "Fifth Year" },
      { sem: 6, year: "Sixth Year" },
    ],
  },
  {
    id: 4,
    department: "MECHANICAL DEPARTMENT",
    folder: "mechanical-department",
    semesters: [
      { sem: 1, year: "First Year" },
      { sem: 2, year: "Second Year" },
      { sem: 3, year: "Third Year" },
      { sem: 4, year: "Fourth Year" },
    ],
  },
];

// PDF Download Icon matching the image style
const PdfDownloadIcon = () => (
  <svg
    viewBox="0 0 56 64"
    className="w-14 h-14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Document body */}
    <rect x="2" y="2" width="44" height="56" rx="5" fill="#C0392B" />
    {/* Folded corner */}
    <path d="M34 2 L46 14 L34 14 Z" fill="#96281B" />
    <path d="M34 2 L34 14 L46 14" stroke="#fff" strokeWidth="0.5" fill="none" />
    {/* Down arrow */}
    <path
      d="M23 28 L23 40 M23 40 L18 35 M23 40 L28 35"
      stroke="white"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Bottom line */}
    <path
      d="M16 46 L30 46"
      stroke="white"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
  </svg>
);

const Curriculum = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const accordionVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        height: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
        opacity: { duration: 0.2 },
      },
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        height: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
        opacity: { duration: 0.25, delay: 0.05 },
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.93, y: 12 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { delay: i * 0.07, duration: 0.3, ease: [0.4, 0, 0.2, 1] },
    }),
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Main Card */}
        <div className="bg-white rounded-sm shadow-md overflow-hidden border border-gray-200">
          {/* Section Title */}
          <div className="px-6 py-5 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-center">
              <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors underline">
                Curriculums
              </a>
            </h2>
          </div>

          {/* Accordions */}
          <div className="divide-y divide-gray-200">
            {curriculumData.map((dept) => (
              <div key={dept.id}>
                {/* Accordion Header */}
                <button
                  onClick={() => toggleAccordion(dept.id)}
                  className={`
                    w-full px-6 py-4 flex items-center justify-between
                    transition-colors duration-200
                    ${openAccordion === dept.id
                      ? "bg-red-700 text-white"
                      : "bg-white text-gray-800 hover:bg-gray-50"
                    }
                  `}
                >
                  <span className="font-bold text-sm tracking-wider uppercase">
                    {dept.department}
                  </span>
                  <motion.div
                    animate={{ rotate: openAccordion === dept.id ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <IoChevronDown
                      className={`w-5 h-5 ${openAccordion === dept.id ? "text-white" : "text-gray-500"}`}
                    />
                  </motion.div>
                </button>

                {/* Accordion Content - Grid of semester cards */}
                <AnimatePresence initial={false}>
                  {openAccordion === dept.id && (
                    <motion.div
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={accordionVariants}
                      className="overflow-hidden"
                    >
                      <div className="bg-gray-50 px-6 py-6">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                          {dept.semesters.map((semester, i) => (
                            <motion.a
                              key={i}
                              custom={i}
                              initial="hidden"
                              animate="visible"
                              variants={cardVariants}
                              href={`/pdf/curriculums/${dept.folder}/sem-${semester.sem}.pdf`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group block"
                            >
                              <div className="bg-white rounded-md border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200 overflow-hidden text-center py-6 px-3">
                                {/* PDF Icon */}
                                <div className="flex justify-center mb-4">
                                  <PdfDownloadIcon />
                                </div>
                                {/* Sem label */}
                                <h3 className="text-sm font-bold text-blue-600 group-hover:text-blue-800 transition-colors">
                                  Sem {semester.sem}
                                </h3>
                                {/* Year label */}
                                <p className="text-xs text-gray-500 mt-0.5">
                                  [{semester.year}]
                                </p>
                              </div>
                            </motion.a>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;