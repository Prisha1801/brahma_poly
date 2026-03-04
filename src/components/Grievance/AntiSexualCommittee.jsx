import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import HeroSection from '../common/components/HeroSection';
import { AntiSexualCommitteeHero } from '../common/data/heroData';
import { antiSexualCommitteeData } from '../../data/data';

const AntiSexualCommittee = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <div className="bg-white pb-20">
            <HeroSection {...AntiSexualCommitteeHero} />

            <section ref={ref} className="max-w-7xl mx-auto px-6 py-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold text-center text-gray-800 mb-12"
                >
                    Anti - Sexual Committee
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="overflow-x-auto shadow-2xl rounded-xl border border-gray-200"
                >
                    <table className="w-full border-collapse bg-white">
                        {/* Table Head */}
                        <thead className="bg-[#334155] text-white">
                            <tr>
                                <th className="text-left px-6 py-4 border-r border-slate-600 uppercase text-xs font-bold tracking-wider">Sr. No.</th>
                                <th className="text-left px-6 py-4 border-r border-slate-600 uppercase text-xs font-bold tracking-wider">Name of the Committee Member</th>
                                <th className="text-left px-6 py-4 border-r border-slate-600 uppercase text-xs font-bold tracking-wider">Profession / Designation</th>
                                <th className="text-left px-6 py-4 border-r border-slate-600 uppercase text-xs font-bold tracking-wider">Appointed As</th>
                                <th className="text-left px-6 py-4 border-r border-slate-600 uppercase text-xs font-bold tracking-wider">Mobile</th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody className="divide-y divide-gray-200">
                            {antiSexualCommitteeData.map((data, index) => (
                                <tr
                                    key={data.id}
                                    className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50/50 transition-colors duration-200`}
                                >
                                    <td className="px-6 py-4 text-gray-700 font-medium border-r border-gray-200">{data.id}.</td>
                                    <td className="px-6 py-4 text-gray-700 font-medium border-r border-gray-200">{data.name}</td>
                                    <td className="px-6 py-4 text-gray-600 border-r border-gray-200">{data.designation}</td>
                                    <td className="px-6 py-4 text-gray-600 font-medium border-r border-gray-200">{data.appointedAs}</td>
                                    <td className="px-6 py-4 text-gray-600 font-medium border-r border-gray-200">{data.mobile}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>
            </section>
        </div>
    )
}

export default AntiSexualCommittee;