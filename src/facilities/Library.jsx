import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import HeroSection from '../components/common/components/HeroSection';
import { libraryHero } from '../components/common/data/heroData';

const Library = () => {
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);

    const isSection1InView = useInView(section1Ref, { once: true, margin: "-100px" });
    const isSection2InView = useInView(section2Ref, { once: true, margin: "-100px" });

    const libraryPdfs = [
        { title: "DIGITAL LIBRARY", path: "/pdf/library/DIGITAL LIBRARY.pdf" },
        { title: "CENTRAL LIBRARY", path: "/pdf/library/CENTRAL LIBRARY.pdf" },
        { title: "EVENT LIBRARY", path: "/pdf/library/EVENT LIBRARY.pdf" },
        { title: "BOOK CIRCULATION TIME TABLE", path: "/pdf/library/BOOK CIRCULATION TIME TABLE.pdf" },
        { title: "LIBRARY STAFF", path: "/pdf/library/LIBRARY STAFF.pdf" },
        { title: "INTRODUCTION", path: "/pdf/library/INTRODUCTION.pdf" },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <HeroSection {...libraryHero} />

            {/* Well-Equipped Library Section */}
            <section ref={section1Ref} className="max-w-7xl mx-auto px-6 py-16">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isSection1InView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
                >
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        animate={isSection1InView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-2xl md:text-3xl font-bold text-red-600 mb-8 underline underline-offset-8"
                    >
                        Well – Equipped Library :
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={isSection1InView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="rounded-xl overflow-hidden shadow-lg"
                        >
                            <img
                                src="/facilities/Library.webp"
                                alt="Library Interior"
                                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={isSection1InView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-gray-700 leading-relaxed text-lg"
                        >
                            <p>
                                A well-equipped spacious library is set with adequate reference books, text books, Journals, which are required for different courses. A separate reading hall is provided for knowledge updates.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* Library PDF Resources Section */}
            <section ref={section2Ref} className="max-w-7xl mx-auto px-6 py-16 mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isSection2InView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
                >
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        animate={isSection2InView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-2xl md:text-3xl font-bold text-red-600 mb-10 underline underline-offset-8"
                    >
                        Library PDF Resources:
                    </motion.h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {libraryPdfs.map((pdf, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isSection2InView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.4, delay: 0.1 * index }}
                                className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
                            >
                                <h3 className="text-gray-800 font-bold mb-6 text-sm md:text-base tracking-tight uppercase">
                                    {pdf.title}
                                </h3>
                                <a
                                    href={pdf.path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full text-center py-2.5 px-4 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all duration-300"
                                >
                                    View PDF
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Library;
