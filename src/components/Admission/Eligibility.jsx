import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import HeroSection from '../common/components/HeroSection';
import { eligibilityHero } from '../common/data/heroData';
import { eligibilityData } from '../../data/data';
import EligibilitySection from './EligibilitySection';

const Eligibility = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <>
            {/* HERO SECTION */}
            <HeroSection {...eligibilityHero} />

            <motion.section
                ref={ref}
                className="max-w-6xl mx-auto px-6 py-12"
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45 }}
            >
                <motion.h1
                    initial={{ opacity: 0, y: 18 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.1 }}
                    className="text-4xl font-extrabold text-[#334155] text-center mb-12"
                >
                    Eligibility Conditions and Requirements for Admissions
                </motion.h1>

                {eligibilityData.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
                    >
                        <EligibilitySection
                            title={item.title}
                            subtitle={item.subtitle}
                            description={item.description}
                            points={item.points}
                            table={item.table}
                            tableTitle={item.tableTitle}
                            note={item.note}
                        />
                    </motion.div>
                ))}

            </motion.section>
        </>
    );
};

export default Eligibility;