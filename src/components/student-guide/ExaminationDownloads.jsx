import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoChevronDown } from "react-icons/io5";
import { FaFilePdf, FaFileWord, FaFileImage } from "react-icons/fa6";

// Updated data matching actual files in /public/pdf/examination-schedule/
const examinationData = [
  {
    id: 1,
    department: "COMPUTER ENGINEERING",
    items: [
      { name: "ASS", file: "abb.jpg" },
    ],
  },
  {
    id: 2,
    department: "INFORMATION TECHNOLOGY",
    items: [
      { name: "AA", file: "acx.jpg" },
    ],
  },
  {
    id: 3,
    department: "ELECTRICAL & COMPUTER",
    items: [
      { name: "mb", file: "trh.doc" },
    ],
  },
  {
    id: 4,
    department: "MECHANICAL DEPARTMENT",
    items: [
      { name: "v hb", file: "vhguh.doc" },
    ],
  },
  {
    id: 5,
    department: "CIVIL ENGINEERING",
    items: [
      { name: "AA", file: "as.pdf" },
      { name: "hjnk", file: "7yuh.doc" },
    ],
  },
  {
    id: 6,
    department: "SCIENCE & HUMANITIES",
    items: [
      { name: "hjnk", file: "9ikjl.doc" },
    ],
  },
];

// Helper: determine icon and color based on file extension
const getFileIcon = (filename) => {
  const ext = filename.split(".").pop().toLowerCase();
  if (ext === "pdf") return { Icon: FaFilePdf, color: "text-red-600" };
  if (ext === "doc" || ext === "docx") return { Icon: FaFileWord, color: "text-blue-600" };
  if (["jpg", "jpeg", "png", "gif", "webp"].includes(ext))
    return { Icon: FaFileImage, color: "text-green-600" };
  return { Icon: FaFilePdf, color: "text-red-600" };
};

const ExaminationDownloads = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 6 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.25, ease: "easeOut" },
    }),
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Main Card */}
        <div className="bg-white rounded-sm shadow-md overflow-hidden border border-gray-200">
          {/* Section Title */}
          <div className="px-6 py-5 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-center">
              <a href="#" className="text-red-700 hover:text-red-800 transition-colors underline">
                Examination Downloads
              </a>
            </h2>
          </div>

          {/* Accordions */}
          <div className="divide-y divide-gray-200">
            {examinationData.map((dept, index) => (
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

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {openAccordion === dept.id && (
                    <motion.div
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={accordionVariants}
                      className="overflow-hidden"
                    >
                      <div className="bg-white px-6 py-4">
                        <div className="space-y-4">
                          {dept.items.map((item, i) => {
                            const { Icon, color } = getFileIcon(item.file);
                            // Get just the filename without extension for display link
                            const displayName = item.file.replace(/\.[^/.]+$/, "");
                            return (
                              <motion.div
                                key={i}
                                custom={i}
                                initial="hidden"
                                animate="visible"
                                variants={itemVariants}
                              >
                                {/* Item name */}
                                <p className="text-sm font-medium text-gray-800 mb-1">
                                  {item.name}
                                </p>
                                {/* File link row */}
                                <a
                                  href={`/pdf/examination-schedule/${item.file}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 text-sm text-red-700 hover:text-red-900 hover:underline transition-colors"
                                >
                                  <Icon className={`w-4 h-4 ${color} flex-shrink-0`} />
                                  <span className="font-medium">{displayName.toUpperCase()}</span>
                                </a>
                              </motion.div>
                            );
                          })}
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

export default ExaminationDownloads;