import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import HeroSection from '../components/common/components/HeroSection';
import { transportationHero } from '../components/common/data/heroData';

const Transportation = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <div className="bg-gray-50 min-h-screen">
            <HeroSection {...transportationHero} />

            {/* Transportation Section */}
            <section ref={sectionRef} className="max-w-7xl mx-auto px-6 py-16">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
                >
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-2xl md:text-3xl font-bold text-red-600 mb-8 underline underline-offset-8"
                    >
                        Transportation :
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="rounded-xl overflow-hidden shadow-lg"
                        >
                            <img
                                src="/posters/transportation.jpeg"
                                alt="Transportation"
                                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-gray-700 leading-relaxed text-lg"
                        >
                            <ul className="list-disc list-outside space-y-4 pl-5">
                                <li>
                                    Institute provides its own regular and prompt bus service at an affordable cost for students and staff from different areas.
                                </li>
                                <li>
                                    MSRTC also offers regular bus services to the college campus from various parts of Nashik city and district.
                                </li>
                                <li>
                                    A dedicated representative from MSRTC is available on campus to issue{' '}
                                    <span className="text-red-600 font-semibold">
                                        Student Concessional Passes.
                                    </span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Transportation;