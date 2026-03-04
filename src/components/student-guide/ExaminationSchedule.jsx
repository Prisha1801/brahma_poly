import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import HeroSection from '../common/components/HeroSection';
import { examinationScheduleHero } from '../common/data/heroData';

const ExaminationSchedule = () => {
    const tableRef = useRef(null);
    const isTableInView = useInView(tableRef, { once: true, margin: "-100px" });

    const scheduleData = [
        {
            activity: "Practical Exam",
            winter2025: "28 October – 06 November, 2025",
            summer2026: "08– 18 April, 2026"
        },
        {
            activity: "Theory Exam",
            winter2025: "11 November – 03 December, 2025",
            summer2026: "23 April – 16 May, 2026"
        },
        {
            activity: "Declaration of result",
            winter2025: "2nd Week of January, 2026 (Tentatively)",
            summer2026: "3rd Week of June, 2026 (Tentatively)"
        }
    ];

    return (
        <div className="bg-white pb-20">
            <HeroSection {...examinationScheduleHero} />

            <div className="container mx-auto px-4 mt-16">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-inner"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-2xl md:text-3xl font-bold text-center text-red-600 mb-10 underline decoration-2 underline-offset-8"
                    >
                        Important Dates
                    </motion.h2>

                    <motion.div
                        ref={tableRef}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isTableInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="overflow-x-auto shadow-2xl rounded-lg border border-gray-200"
                    >
                        <table className="min-w-full bg-white border-collapse">
                            <thead>
                                <tr className="bg-slate-700 text-white text-xs md:text-sm uppercase tracking-wider">
                                    <th className="py-4 px-6 border-r border-slate-600 text-center font-bold">ACTIVITIES</th>
                                    <th className="py-4 px-6 border-r border-slate-600 text-center font-bold">WINTER- 2025 EXAMINATION SCHEDULE</th>
                                    <th className="py-4 px-6 text-center font-bold">SUMMER 2026 EXAMINATION SCHEDULE</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {scheduleData.map((item, index) => (
                                    <tr
                                        key={index}
                                        className="hover:bg-blue-50 transition-colors duration-200 text-xs md:text-sm"
                                    >
                                        <td className="py-5 px-6 border-r border-gray-200 text-gray-800 font-medium">
                                            {item.activity}
                                        </td>
                                        <td className="py-5 px-6 border-r border-gray-200 text-gray-600 text-center">
                                            {item.winter2025}
                                        </td>
                                        <td className="py-5 px-6 text-gray-600 text-center">
                                            {item.summer2026}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default ExaminationSchedule;
