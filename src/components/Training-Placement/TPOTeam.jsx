import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import HeroSection from '../common/components/HeroSection';
import { tpoTeamHero } from '../common/data/heroData';

// ── Team Data
const teamMembers = [
    {
        name: "Prof. A. V. Dhanwate",
        designation: "Lecturer, Mechanical Engineering",
        role: "TPO"
    },
    {
        name: "Prof. D. G. Shinde",
        designation: "H.O.D, Mechanical Engineering",
        role: "Member"
    },
    {
        name: "Prof. P. R. Jadhav",
        designation: "H.O.D, Civil Dept.",
        role: "Member"
    },
    {
        name: "Prof. K.A.Aher",
        designation: "H.O.D. Electrical Dept.",
        role: "Member"
    },
    {
        name: "Prof. P.V.Dhurve",
        designation: "H.O.D. Electronics & Computer Engineering Dept.",
        role: "Member"
    },
    {
        name: "Prof. P.V.Ogale",
        designation: "H.O.D. Science & Humanities Dept.",
        role: "Member"
    },
    {
        name: "Prof. Mandar. M Kulkarni",
        designation: "Computer Technology",
        role: "HOD"
    }
];

// ── Placement Activities Images
const placementImages = [
    "/placement/p1.png",
    "/placement/p2.png",
    "/placement/p3.png",
    "/placement/p4.png",
    "/placement/p5.png",
    "/placement/p6.png"
];

const TPOTeam = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const teamRef = useRef(null);
    const galleryRef = useRef(null);

    const isTeamInView = useInView(teamRef, { once: true, margin: "-60px" });
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
            <HeroSection {...tpoTeamHero} />

            {/* TEAM GRID SECTION */}
            <section ref={teamRef} className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-center text-center border-t-4 border-purple-500"
                        >
                            <h3 className="text-xl font-bold text-purple-700 mb-2">
                                {member.name}
                            </h3>
                            <p className="text-gray-500 italic mb-4">
                                {member.designation}
                            </p>
                            <span className="text-blue-600 font-bold uppercase tracking-wider">
                                {member.role}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* PLACEMENT ACTIVITIES GALLERY SECTION */}
            <section ref={galleryRef} className="max-w-4xl mx-auto px-6 pb-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isGalleryInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
                >
                    {/* Header */}
                    <div className="p-8 text-center bg-white border-b border-gray-50">
                        <h2 className="text-2xl font-bold text-purple-700 mb-2">
                            Our Placement Activities
                        </h2>
                        <p className="text-gray-500">
                            Discover the vibrant events and initiatives led by our TPO team.
                        </p>
                    </div>

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
                                onError={(e) => {
                                    // Fallback if image doesn't exist
                                    e.target.src = "https://via.placeholder.com/800x500?text=Placement+Activity";
                                }}
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
                </motion.div>
            </section>
        </div>
    );
};

export default TPOTeam;
