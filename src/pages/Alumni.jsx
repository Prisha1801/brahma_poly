import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import HeroSection from '../components/common/components/HeroSection';
import { alumniHero } from '../components/common/data/heroData';

const students = [
    {
        name: "Rahul Patel",
        batch: "Class of 2017, Software Developer",
        message:
            '"The practical skills I gained at the polytechnic gave me a head start in my career. The alumni network continues to support my growth."',
    },
    {
        name: "Anita Sharma",
        batch: "Class of 2019, Mechanical Engineer",
        message:
            '"The hands-on training and mentorship at the institute were key to my success in the industry."',
    },
];

const galleryImages = [
    {
        src: "/gallery/Alumni Gallery/Alumni.jpg",
        caption: "Alumni",
    },
    {
        src: "/gallery/Alumni Gallery/Annual Alumni Meet 2023.jpg",
        caption: "Annual Alumni Meet 2023",
    },
];

// Default avatar SVG icon
const AvatarIcon = () => (
    <div className="w-20 h-20 rounded-full bg-blue-100 border-2 border-blue-300 flex items-center justify-center mx-auto mb-5">
        <svg viewBox="0 0 24 24" className="w-12 h-12 text-blue-400" fill="currentColor">
            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
        </svg>
    </div>
);

const Alumni = () => {
    const messagesRef = useRef(null);
    const galleryRef = useRef(null);

    const isMessagesInView = useInView(messagesRef, { once: true, margin: "-100px" });
    const isGalleryInView = useInView(galleryRef, { once: true, margin: "-100px" });

    return (
        <div className="bg-gray-50 min-h-screen">
            <HeroSection {...alumniHero} />

            {/* Student Messages Section */}
            <section ref={messagesRef} className="max-w-4xl mx-auto px-6 py-16">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={isMessagesInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10"
                >
                    Student Messages
                </motion.h2>

                <div className="grid sm:grid-cols-2 gap-6">
                    {students.map((student, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isMessagesInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="bg-white border border-gray-200 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <AvatarIcon />
                            <p className="text-gray-700 text-base leading-relaxed mb-5 italic">
                                {student.message}
                            </p>
                            <p className="font-bold text-gray-900 text-base">{student.name}</p>
                            <p className="text-gray-500 text-sm mt-1">{student.batch}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Alumni Gallery Section */}
            <section ref={galleryRef} className="max-w-4xl mx-auto px-6 pb-16">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={isGalleryInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10"
                >
                    Alumni Gallery
                </motion.h2>

                <div className="grid sm:grid-cols-2 gap-6">
                    {galleryImages.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isGalleryInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <img
                                src={img.src}
                                alt={img.caption}
                                className="w-full h-60 object-cover hover:scale-105 transition-transform duration-500"
                            />
                            <p className="text-gray-500 text-sm px-4 py-3 italic">{img.caption}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Alumni;