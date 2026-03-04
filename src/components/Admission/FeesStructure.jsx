import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import HeroSection from '../common/components/HeroSection';
import { FeeStructureHero } from '../common/data/heroData';

const FeesStructure = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const feeData = [
    { year: "2024-2025", firstYear: "57166", dse: "60000", status: "Approved", date: "24/07/2024", badgeColor: "bg-green-600" },
    { year: "2022-2023", firstYear: "60000", dse: "53000", status: "Approved", date: "23/03/2023", badgeColor: "bg-green-600" },
    { year: "2021-2022", firstYear: "53000", dse: "53000", status: "No Upward Revision", date: "23/12/2019", badgeColor: "bg-cyan-500" },
    { year: "2020-2021", firstYear: "53000", dse: "53000", status: "Approved", date: "23/12/2019", badgeColor: "bg-green-600" },
    { year: "2019-2020", firstYear: "45000", dse: "45000", status: "No Upward Revision", date: "27/12/2017", badgeColor: "bg-cyan-500" },
    { year: "2018-2019", firstYear: "45000", dse: "45000", status: "Approved", date: "27/12/2017", badgeColor: "bg-green-600" },
    { year: "2017-2018", firstYear: "40000", dse: "40000", status: "Approved", date: "14/12/2016", badgeColor: "bg-green-600" },
    { year: "2016-17", firstYear: "57560", dse: "57560", status: "No Upward Revision", date: "22/12/2025", badgeColor: "bg-cyan-500" }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HERO SECTION */}
      <HeroSection
        {...FeeStructureHero}
        title="Fees and Regulatory Authority"
        subtitle="Official fee structure for Polytechnic Courses over the years."
      />

      <section ref={ref} className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Polytechnic Fee Structure</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="overflow-x-auto shadow-2xl rounded-xl border border-gray-200"
        >
          <table className="w-full border-collapse bg-white text-center">
            <thead className="bg-[#334155] text-white">
              <tr>
                <th className="px-6 py-5 border-r border-slate-600 uppercase text-xs font-bold tracking-wider">YEAR</th>
                <th className="px-6 py-5 border-r border-slate-600 uppercase text-xs font-bold tracking-wider">FIRST YEAR</th>
                <th className="px-6 py-5 border-r border-slate-600 uppercase text-xs font-bold tracking-wider">DIRECT SECOND YEAR</th>
                <th className="px-6 py-5 border-r border-slate-600 uppercase text-xs font-bold tracking-wider">STATUS</th>
                <th className="px-6 py-5 uppercase text-xs font-bold tracking-wider">DATE OF MEETING</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {feeData.map((fee, index) => (
                <tr
                  key={index}
                  className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50/50 transition-colors duration-200`}
                >
                  <td className="px-6 py-5 border-r border-gray-200 text-gray-700 font-medium">{fee.year}</td>
                  <td className="px-6 py-5 border-r border-gray-200 text-gray-600">{fee.firstYear}</td>
                  <td className="px-6 py-5 border-r border-gray-200 text-gray-600">{fee.dse}</td>
                  <td className="px-6 py-5 border-r border-gray-200">
                    <span className={`${fee.badgeColor} text-white text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-tighter`}>
                      {fee.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-gray-600">{fee.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Optional Action Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 flex justify-center"
        >
          {/* The mockup shows a 'View' button in the hero area sometimes, but let's keep it clean here */}
        </motion.div>
      </section>
    </div>
  );
};

export default FeesStructure;
