import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import HeroSection from '../common/components/HeroSection';
import { approvalsHero } from '../common/data/heroData';
import { approvalsData } from '../../data/data';

// PDF icon SVG component
const PdfIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 64" className="w-14 h-16 md:w-16 md:h-20">
        {/* Page body */}
        <path d="M4 0h32l16 16v44a4 4 0 01-4 4H4a4 4 0 01-4-4V4a4 4 0 014-4z" fill="#fff" stroke="#e5e7eb" strokeWidth="1" />
        {/* Folded corner */}
        <path d="M36 0l16 16H40a4 4 0 01-4-4V0z" fill="#f3f4f6" stroke="#e5e7eb" strokeWidth="1" />
        {/* PDF badge */}
        <rect x="8" y="28" width="40" height="20" rx="3" fill="#dc2626" />
        <text x="28" y="42" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold" fontFamily="Arial, sans-serif">PDF</text>
        {/* Lines */}
        <rect x="10" y="54" width="24" height="2" rx="1" fill="#e5e7eb" />
    </svg>
);

const Approvals = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <>
            {/* HERO SECTION */}
            <HeroSection {...approvalsHero} />

            <motion.section
                ref={ref}
                className="max-w-7xl mx-auto px-6 py-12"
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45 }}
            >
                <motion.h2
                    initial={{ opacity: 0, y: 18 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.1 }}
                    className="text-3xl font-bold text-center mb-10"
                >
                    Approvals
                </motion.h2>

                {/* PDF Cards Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
                    {approvalsData.map(({ year, path }, index) => (
                        <motion.a
                            key={year}
                            href={path}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 18 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.35, delay: 0.15 + index * 0.04 }}
                            className="group flex flex-col items-center justify-center border border-gray-200 rounded-lg py-6 px-4 bg-white shadow-sm hover:shadow-md hover:border-blue-300 hover:bg-blue-50/30 transition-all duration-300 cursor-pointer"
                        >
                            <div className="mb-3 group-hover:scale-110 transition-transform duration-300">
                                <PdfIcon />
                            </div>
                            <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-700 transition-colors duration-300">
                                {year}
                            </span>
                        </motion.a>
                    ))}
                </div>
            </motion.section>
        </>
    );
};

export default Approvals;