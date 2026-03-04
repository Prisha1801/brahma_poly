import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoChevronDown } from "react-icons/io5";

const syllabusData = [
    {
        id: 1,
        department: "CIVIL ENGINEERING",
        items: [
            { name: "hjnk Syllabus", file: "hjnk Syllabus.doc" },
        ],
    },
    {
        id: 2,
        department: "COMPUTER ENGINEERING",
        items: [
            { name: "G & E Syllabus", file: "GE Syllabus.png" },
        ],
    },
    {
        id: 3,
        department: "ELECTRICAL ENGINEERING",
        items: [
            { name: "NB B Syllabus", file: "NB B Syllabus.doc" },
        ],
    },
    {
        id: 4,
        department: "ELECTRONICS & TELECOMMUNICATION ENGINEERING",
        items: [
            { name: "BGDFV Syllabus", file: "BGDFV Syllabus.doc" },
        ],
    },
    {
        id: 5,
        department: "MECHANICAL DEPARTMENT",
        items: [
            { name: "gb Syllabus", file: "gb Syllabus.doc" },
        ],
    },
    {
        id: 6,
        department: "SCIENCE & HUMANITIES",
        items: [
            { name: "HBNK Syllabus", file: "HBNK Syllabus.doc" },
        ],
    },
];

const BASE_PATH = "/pdf/syllabus-download/";

const isImage = (filename) =>
    /\.(png|jpg|jpeg|gif|webp)$/i.test(filename);

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

const SyllabusDownload = () => {
    // All closed by default, only one open at a time
    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (id) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    const isOpen = (id) => openAccordion === id;

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Main Card */}
                <div className="bg-white rounded-sm shadow-md overflow-hidden border border-gray-200">
                    {/* Title */}
                    <div className="px-6 py-5 border-b border-gray-200">
                        <h2 className="text-2xl font-bold text-center">
                            <a
                                href="#"
                                className="text-red-600 hover:text-red-700 transition-colors underline"
                            >
                                G-Scheme &amp; E-Scheme Syllabus
                            </a>
                        </h2>
                    </div>

                    {/* Accordions */}
                    <div className="divide-y divide-gray-200">
                        {syllabusData.map((dept) => (
                            <div key={dept.id}>
                                {/* Header */}
                                <button
                                    onClick={() => toggleAccordion(dept.id)}
                                    className={`w-full px-6 py-4 flex items-center justify-between transition-colors duration-200 ${isOpen(dept.id)
                                            ? "bg-red-700 text-white"
                                            : "bg-white text-gray-800 hover:bg-gray-50"
                                        }`}
                                >
                                    <span className="font-bold text-sm tracking-wider uppercase">
                                        {dept.department}
                                    </span>
                                    <motion.div
                                        animate={{ rotate: isOpen(dept.id) ? 180 : 0 }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        <IoChevronDown
                                            className={`w-5 h-5 ${isOpen(dept.id) ? "text-white" : "text-gray-500"}`}
                                        />
                                    </motion.div>
                                </button>

                                {/* Content */}
                                <AnimatePresence initial={false}>
                                    {isOpen(dept.id) && (
                                        <motion.div
                                            initial="closed"
                                            animate="open"
                                            exit="closed"
                                            variants={accordionVariants}
                                            className="overflow-hidden"
                                        >
                                            <div className="bg-white px-6 py-5 space-y-5">
                                                {dept.items.map((item, i) => (
                                                    <div key={i}>
                                                        {/* Blue item title */}
                                                        <h4 className="text-base font-semibold text-blue-600 mb-3">
                                                            {item.name}
                                                        </h4>

                                                        {/* Card */}
                                                        <div className="inline-block border border-gray-200 rounded-sm p-3 min-w-[180px]">
                                                            {isImage(item.file) ? (
                                                                // Image preview
                                                                <a
                                                                    href={`${BASE_PATH}${encodeURIComponent(item.file)}`}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    <img
                                                                        src={`${BASE_PATH}${encodeURIComponent(item.file)}`}
                                                                        alt={item.name}
                                                                        className="w-28 h-24 object-contain mx-auto block hover:opacity-80 transition-opacity"
                                                                    />
                                                                </a>
                                                            ) : (
                                                                // Download button
                                                                <a
                                                                    href={`${BASE_PATH}${encodeURIComponent(item.file)}`}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="inline-flex items-center gap-1.5 px-4 py-1.5 border border-red-500 text-red-600 text-sm font-medium rounded-sm hover:bg-red-50 transition-colors"
                                                                >
                                                                    <svg
                                                                        className="w-3.5 h-3.5"
                                                                        fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        stroke="currentColor"
                                                                        strokeWidth={2.5}
                                                                    >
                                                                        <path
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"
                                                                        />
                                                                    </svg>
                                                                    Download
                                                                </a>
                                                            )}
                                                        </div>
                                                    </div>
                                                ))}
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

export default SyllabusDownload;