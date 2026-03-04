import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import HeroSection from '../common/components/HeroSection';
import { academicCalendarHero } from '../common/data/heroData';

const AcademicCalendar = () => {
    const tableRef = useRef(null);
    const isTableInView = useInView(tableRef, { once: true, margin: "-100px" });

    const scheduleData = [
        {
            srNo: 1,
            activity: "Academic term",
            odd3rd5th: "01 July – 17 October, 2025",
            odd1st: "17 July – 17 October, 2025",
            even1st3rd5th: "15 December, 2025– 04 April,2026"
        },
        {
            srNo: 2,
            activity: "First Class Test",
            odd3rd5th: "11-13 August, 2025",
            odd1st: "08-10 September, 2025",
            even1st3rd5th: "27-29 january, 2026"
        },
        {
            srNo: 3,
            activity: "Second Class Test",
            odd3rd5th: "13-15 October, 2025",
            odd1st: "13-15 October, 2025",
            even1st3rd5th: "30 March – 02 April, 2025"
        }
    ];

    return (
        <div className="bg-white pb-20">
            <HeroSection {...academicCalendarHero} />

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
                        Academic Schedule – A. Y. 2025–26
                    </motion.h2>

                    <motion.div
                        ref={tableRef}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isTableInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="overflow-x-auto shadow-2xl rounded-lg border border-gray-200"
                    >
                        <table className="min-w-full bg-white border-collapse text-center">
                            <thead>
                                <tr className="bg-slate-700 text-white text-xs md:text-sm uppercase tracking-wider">
                                    <th rowSpan="2" className="py-4 px-4 border-r border-slate-600 w-16">SR. NO.</th>
                                    <th rowSpan="2" className="py-4 px-6 border-r border-slate-600">ACTIVITIES</th>
                                    <th colSpan="2" className="py-3 px-6 border-b border-slate-600 border-r border-slate-600 font-bold">ODD SEMESTER</th>
                                    <th className="py-3 px-6 border-b border-slate-600 font-bold">EVEN SEMESTER</th>
                                </tr>
                                <tr className="bg-slate-700 text-white text-[10px] md:text-xs uppercase tracking-wider">
                                    <th className="py-3 px-4 border-r border-slate-600">3RD/5TH SEMESTER</th>
                                    <th className="py-3 px-4 border-r border-slate-600">1ST SEMESTER</th>
                                    <th className="py-3 px-4">1ST/3RD/5TH SEMESTER</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {scheduleData.map((item, index) => (
                                    <tr
                                        key={index}
                                        className="hover:bg-blue-50 transition-colors duration-200 text-xs md:text-sm"
                                    >
                                        <td className="py-4 px-4 border-r border-gray-200 font-semibold text-gray-700">{item.srNo}</td>
                                        <td className="py-4 px-6 border-r border-gray-200 font-bold text-gray-800 text-left">{item.activity}</td>
                                        <td className="py-4 px-4 border-r border-gray-200 text-gray-600">{item.odd3rd5th}</td>
                                        <td className="py-4 px-4 border-r border-gray-200 text-gray-600">{item.odd1st}</td>
                                        <td className="py-4 px-4 text-gray-600 text-center">{item.even1st3rd5th}</td>
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

export default AcademicCalendar;
