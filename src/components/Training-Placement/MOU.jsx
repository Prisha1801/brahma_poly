import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import HeroSection from '../common/components/HeroSection';
import { mouHero } from '../common/data/heroData';

// ── MOU Data
const mouData = [
    { organization: "Master CAD Designers", branches: "Mechanical, Electrical" },
    { organization: "CAVE STUDIOS", branches: "Mechanical / Civil" },
    { organization: "EXECUTE IT SOLUTIONS", branches: "Computer / IT / Electronics & Telecommunications" },
    { organization: "ENGENIUSPARK SOFTWARE SOLUTIONS", branches: "Computer / IT / Electronics & Telecommunications / Mechanical / Electrical" },
    { organization: "SAI METAL WORKS", branches: "Mechanical" },
    { organization: "GURUKRUPA INDUSTRIES", branches: "Mechanical / Electrical" },
    { organization: "ELEPHANTA MEGACON", branches: "Mechanical / Civil" },
    { organization: "OMAXX GRAPHICS", branches: "Computer / IT / Electronics & Telecommunications / Mechanical / Electrical" },
    { organization: "BHOLESHANKAR INDUSTRIES (proposed)", branches: "Mechanical / Electrical / Electronics & Telecommunication" },
    { organization: "VAISHNAVI AUTO Pvt Ltd (proposed)", branches: "Mechanical / Electrical / Electronics & Telecommunication" },
];

// ── Placement Activities Images (matches earlier components)
const placementImages = [
    "/placement/p1.png",
    "/placement/p2.png",
    "/placement/p3.png",
    "/placement/p4.png",
    "/placement/p5.png",
    "/placement/p6.png"
];

const MOU = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const tableRef = useRef(null);
    const galleryRef = useRef(null);

    const isTableInView = useInView(tableRef, { once: true, margin: "-60px" });
    const isGalleryInView = useInView(galleryRef, { once: true, margin: "-60px" });

    // Carousel logic
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % placementImages.length);
        }, 3500);
        return () => clearInterval(timer);
    }, []);

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % placementImages.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + placementImages.length) % placementImages.length);
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* HERO SECTION */}
            <HeroSection {...mouHero} />

            {/* MOU TABLE SECTION */}
            <section ref={tableRef} className="max-w-6xl mx-auto px-6 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isTableInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100"
                >
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-700 text-white uppercase text-sm tracking-wider">
                                    <th className="px-8 py-5 font-bold border-b border-slate-600">Organization</th>
                                    <th className="px-8 py-5 font-bold border-b border-slate-600">Branches</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {mouData.map((mou, index) => (
                                    <tr
                                        key={index}
                                        className="hover:bg-slate-50 transition-colors duration-200"
                                    >
                                        <td className="px-8 py-4 font-semibold text-gray-700 uppercase text-xs md:text-sm">
                                            {mou.organization}
                                        </td>
                                        <td className="px-8 py-4 text-gray-600 italic text-xs md:text-sm">
                                            {mou.branches}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            </section>

            {/* PLACEMENT ACTIVITIES GALLERY SECTION */}
            <section ref={galleryRef} className="max-w-4xl mx-auto px-6 pb-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isGalleryInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
                >
                    {/* Carousel Container */}
                    <div className="relative aspect-[16/10] bg-gray-900 group">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={currentImageIndex}
                                src={placementImages[currentImageIndex]}
                                alt={`Placement Activity ${currentImageIndex + 1}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="w-full h-full object-cover"
                            />
                        </AnimatePresence>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/40 transition-all opacity-0 group-hover:opacity-100"
                        >
                            <FiChevronLeft size={24} />
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/40 transition-all opacity-0 group-hover:opacity-100"
                        >
                            <FiChevronRight size={24} />
                        </button>

                        {/* Dots */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                            {placementImages.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentImageIndex(i)}
                                    className={`h-2 rounded-full transition-all duration-300 ${i === currentImageIndex ? "w-8 bg-white" : "w-2 bg-white/50"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="p-8 text-center bg-white border-t border-gray-50">
                        <h2 className="text-xl font-bold text-purple-700 mb-2">
                            Our Placement Highlights
                        </h2>
                        <p className="text-sm text-gray-500 italic">
                            Moments from our successful placement drives and industry interactions.
                        </p>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default MOU;
