import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import HeroSection from '../components/common/components/HeroSection';
import { sportsHero } from '../components/common/data/heroData';

const Sports = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <div className="bg-gray-50 min-h-screen">
            <HeroSection {...sportsHero} />

            {/* Sports Facility Section */}
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
                        Sports Facility :
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="rounded-xl overflow-hidden shadow-lg"
                        >
                            <img
                                src="/posters/sports.jpg"
                                alt="Sports Facility"
                                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-gray-700 leading-relaxed text-lg"
                        >
                            <p>
                                Students are encouraged to participate in various sports events. A 400 meters running track is developed, Indoor &amp; Outdoor sports facilities are available. Annual Sports Week is celebrated every year where students participate enthusiastically in various indoor and outdoor games. Apart from indoor games like Chess, Carom and Badminton and outdoor games like Cricket, Football, Kho-Kho, Volleyball, Dodgeball some Athletic events are also organized in the competition.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Sports;