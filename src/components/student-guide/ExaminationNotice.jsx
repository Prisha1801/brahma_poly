import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import HeroSection from '../common/components/HeroSection';
import { examinationNoticeHero } from '../common/data/heroData';

const ExaminationNotice = () => {
    const tableRef = useRef(null);
    const isTableInView = useInView(tableRef, { once: true, margin: "-100px" });

    const notices = [
        {
            srNo: 1,
            activity: "Filling Examination Forms (Normal Fees)",
            winter2025: "01 – 11 September, 2025",
            summer2026: "02 – 12 February, 2026"
        },
        {
            srNo: 2,
            activity: "Filling Examination Forms (With Exam Form Fees + late Fees)",
            winter2025: "13 – 15 September, 2025",
            summer2026: "14 – 15 February, 2026"
        },
        {
            srNo: 3,
            activity: "Filling Examination Forms (With Exam Form Fees + Penalty Rs. 1500)",
            winter2025: "17-18 September, 2025",
            summer2026: "17 – 19 February, 2026"
        }
    ];

    return (
        <div className="bg-white pb-20">
            <HeroSection {...examinationNoticeHero} />

            <div className="container mx-auto px-4 mt-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold text-center text-red-600 mb-10 underline decoration-2 underline-offset-8"
                >
                    Examination Notice
                </motion.h2>

                <motion.div
                    ref={tableRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isTableInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="overflow-x-auto shadow-2xl rounded-lg border border-gray-200"
                >
                    <table className="min-w-full bg-white border-collapse">
                        <thead>
                            <tr className="bg-slate-700 text-white text-sm uppercase tracking-wider">
                                <th className="py-4 px-6 border-r border-slate-600 text-left w-20">SR. NO</th>
                                <th className="py-4 px-6 border-r border-slate-600 text-left">ACTIVITIES</th>
                                <th className="py-4 px-6 border-r border-slate-600 text-left">WINTER 2025 EXAMINATION</th>
                                <th className="py-4 px-6 text-left">SUMMER 2026 EXAMINATION</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {notices.map((item, index) => (
                                <tr
                                    key={index}
                                    className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50 transition-colors duration-200`}
                                >
                                    <td className="py-4 px-6 border-r border-gray-200 font-medium text-gray-700">{item.srNo}</td>
                                    <td className="py-4 px-6 border-r border-gray-200 text-gray-700">{item.activity}</td>
                                    <td className="py-4 px-6 border-r border-gray-200 text-gray-600">{item.winter2025}</td>
                                    <td className="py-4 px-6 text-gray-600">{item.summer2026}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>
            </div>
        </div>
    );
};

export default ExaminationNotice;
