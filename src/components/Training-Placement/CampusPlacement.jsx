import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiUser } from 'react-icons/fi';
import HeroSection from '../common/components/HeroSection';
import { campusPlacementHero } from '../common/data/heroData';

// ── Students Data
const placedStudents = [
    {
        name: "Sagar Wadekar",
        branch: "Mechanical",
        company: "Bajaj Auto, Pune",
        image: null // Can be added later
    },
];

// ── Highlights Images
const highlightImages = [
    "/placement/p1.png",
    "/placement/p2.png",
    "/placement/p3.png",
    "/placement/p4.png",
    "/placement/p5.png",
    "/placement/p6.png"
];

const CampusPlacement = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const studentsRef = useRef(null);
    const highlightsRef = useRef(null);

    const isStudentsInView = useInView(studentsRef, { once: true, margin: "-60px" });
    const isHighlightsInView = useInView(highlightsRef, { once: true, margin: "-60px" });

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % highlightImages.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % highlightImages.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + highlightImages.length) % highlightImages.length);

    return (
        <div className="bg-gray-50 min-h-screen">
            <HeroSection {...campusPlacementHero} />

            {/* PLACED STUDENTS GRID */}
            <section ref={studentsRef} className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {placedStudents.map((student, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isStudentsInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-center text-center border-b-4 border-purple-500"
                        >
                            <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-4 overflow-hidden border-2 border-purple-100">
                                {student.image ? (
                                    <img src={student.image} alt={student.name} className="w-full h-full object-cover" />
                                ) : (
                                    <FiUser size={48} className="text-gray-300" />
                                )}
                            </div>
                            <h3 className="text-xl font-bold text-purple-700 mb-1">{student.name}</h3>
                            <p className="text-gray-500 italic text-sm mb-3">{student.branch}</p>
                            <span className="text-blue-600 font-bold text-sm">{student.company}</span>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* PLACEMENT HIGHLIGHTS CAROUSEL */}
            <section ref={highlightsRef} className="max-w-5xl mx-auto px-6 pb-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isHighlightsInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
                >
                    <div className="relative aspect-[16/8] bg-gray-900 group">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={currentSlide}
                                src={highlightImages[currentSlide]}
                                alt="Placement Highlight"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.6 }}
                                className="w-full h-full object-cover opacity-80"
                            />
                        </AnimatePresence>

                        {/* Arrows */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/40 transition-all opacity-0 group-hover:opacity-100"
                        >
                            <FiChevronLeft size={24} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/40 transition-all opacity-0 group-hover:opacity-100"
                        >
                            <FiChevronRight size={24} />
                        </button>
                    </div>

                    <div className="p-8 text-center">
                        <h2 className="text-2xl font-bold text-purple-700 mb-2">Our Placement Highlights</h2>
                        <p className="text-gray-500">
                            Moments from our successful placement drives and industry interactions.
                        </p>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default CampusPlacement;
