import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeroSection from '../common/components/HeroSection';
import { principalDeskHero } from '../common/data/heroData';
import PrincipalImage from '/posters/principal.png';

const PrincipalDesk = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <>
            {/* HERO SECTION */}
            <HeroSection {...principalDeskHero} />

            {/* PRINCIPAL Desk */}
            <motion.section
                ref={ref}
                className="bg-gray-50 py-16"
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45 }}
            >
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.45, delay: 0.1 }}
                        className="bg-white rounded-2xl shadow-md p-8 lg:p-12"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                            {/* LEFT SIDE - IMAGE */}
                            <motion.div
                                initial={{ opacity: 0, y: 18 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.45, delay: 0.15 }}
                                className="text-center"
                            >
                                <img
                                    src={PrincipalImage}
                                    alt="Principal"
                                    className="w-full max-h-[450px] object-cover rounded-xl shadow-md"
                                />

                                <div className="mt-6">
                                    <h4 className="text-xl font-semibold text-[#0b2c4d]">
                                        Dr. Hari N Kudal
                                    </h4>
                                    <p className="text-gray-600 mt-2">Principal</p>
                                    <p className="text-gray-500 text-sm mt-1">
                                        Brahma Valley College of Engineering & Research Institute
                                    </p>
                                    {/* LINK 
                                    now here will be option view resume on click we will open a pdf in another tab pdf is in public/pdf/principal.pdf
                                    */}
                                    <a
                                        href="/pdf/principal_resume.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline"
                                    >
                                        View Resume
                                    </a>

                                </div>
                            </motion.div>

                            {/* RIGHT SIDE - MESSAGE */}
                            <motion.div
                                initial={{ opacity: 0, y: 18 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.45, delay: 0.2 }}
                            >
                                <h2 className="text-2xl md:text-3xl font-bold text-[#0b2c4d] mb-6">
                                    From The Principal's Desk
                                </h2>

                                <p className="text-gray-600 leading-8 text-justify mb-4">
                                    Welcome to <strong>Brahma Valley College of Engineering & Research Institute</strong>,
                                    Where innovation, excellence, and value-based education come together to shape future-ready professionals.


                                </p>

                                <p className="text-gray-600 leading-8 text-justify mb-4">
                                    Our college offers a wide range of Engineering Programs—From traditional disciplines like Mechanical, Civil, Electrical, and Computer Engineering to modern fields in Information Technology and Web Technologies. While we embrace the latest industry trends, We continue to uphold the importance of core Engineering Foundations.
                                </p>

                                <p className="text-gray-600 leading-8 text-justify mb-4">
                                    We maintain strong collaborations with industry partners, allowing students to gain valuable hands-on experience that complements classroom learning. This practical exposure ensures our graduates are well-prepared to meet the demands of today's global workforce.
                                </p>

                                <p className="text-gray-600 leading-8 text-justify">
                                    At Brahma Valley, We are committed to producing not just expert engineers but also responsible citizens who will contribute to national growth and global progress.
                                </p>
                            </motion.div>

                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </>
    );
};

export default PrincipalDesk;