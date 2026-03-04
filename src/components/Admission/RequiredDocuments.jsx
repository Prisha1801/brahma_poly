import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import HeroSection from '../common/components/HeroSection';
import { requiredDocumentsHero } from '../common/data/heroData';

// ── First Year Engineering Documents
const feDocuments = [
    { no: 1, document: "SSC (Std. X) mark sheet", open: true, ews: true, reserved: false },
    { no: 2, document: "H.S.C. (12th) / Diploma / B. Sc. mark sheet", open: true, ews: true, reserved: true },
    { no: 3, document: "Score Card of MHT-CET-PCM 2025 / JEE 2025", open: true, ews: true, reserved: true },
    { no: 4, document: "Certificate of the Indian Nationality of the candidate / father / mother of candidate", open: true, ews: true, reserved: true },
    { no: 5, document: "Maharashtra Domicile Certificate of candidate / father / mother of candidate", open: true, ews: true, reserved: true },
    { no: 6, document: "Leaving Certificate after passing Qualifying Examination", open: true, ews: true, reserved: true },
    { no: 7, document: "Birth Certificate indicating the Place Of Birth in Maharashtra", open: true, ews: true, reserved: true },
    { no: 12, document: "EWS Certificate (As per Maharashtra State GR)", open: false, ews: true, reserved: false },
];

const feReservedDocuments = [
    { no: 8, document: "Caste / Tribe Certificate", open: false, ews: false, reserved: true },
    { no: 9, document: "Caste / Tribe Validity Certificate", open: false, ews: false, reserved: true },
    { no: 10, document: "Non-Creamy Layer Certificate valid up to 31st March 2026 (Except SC & ST)", open: false, ews: false, reserved: true },
    { no: 11, document: "Income Certificate of Parents issued by Competent Authority of Govt. Of Maharashtra having Annual Income lower than Rs. 8,00,000", open: false, ews: false, reserved: true },
    { no: 13, document: "Any other document as per type of candidate", open: false, ews: false, reserved: false },
];

// ── Direct Second Year Engineering Documents
const dseDocuments = [
    { no: 1, document: "HSC (Std. XII) mark sheet", open: true, ews: true, reserved: true },
    { no: 2, document: "H.S.C. (12th) mark sheet (If available)", open: true, ews: true, reserved: false },
    { no: 3, document: "Diploma / B. Sc. mark sheet", open: true, ews: true, reserved: false },
    { no: 4, document: "Certificate of the Indian Nationality of the candidate / father / mother of candidate", open: true, ews: true, reserved: true },
    { no: 5, document: "Maharashtra Domicile Certificate of candidate / father / mother of candidate", open: true, ews: true, reserved: true },
    { no: 6, document: "Leaving Certificate after passing Qualifying Examination", open: true, ews: true, reserved: true },
    { no: 7, document: "Birth Certificate indicating the Place Of Birth in Maharashtra", open: true, ews: true, reserved: true },
];

const dseReservedDocuments = [
    { no: 8, document: "Caste / Tribe Certificate", open: false, ews: false, reserved: true },
    { no: 9, document: "Caste / Tribe Validity Certificate", open: false, ews: false, reserved: true },
    { no: 10, document: "Non-Creamy Layer Certificate valid up to 31st March 2026 (Except SC & ST)", open: false, ews: false, reserved: true },
    { no: 11, document: "Income Certificate of Parents issued by Competent Authority of Govt. Of Maharashtra having Annual Income lower than Rs. 8,00,000", open: false, ews: true, reserved: true },
    { no: 12, document: "EWS Certificate (As per Maharashtra State GR)", open: false, ews: true, reserved: false },
];

// ── Reusable Table Component
const DocumentTable = ({ title, documents, reservedDocuments, delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay }}
            className="mb-16"
        >
            <h2 className="text-xl md:text-2xl font-bold text-center text-blue-700 mb-6 italic">
                {title}
            </h2>

            <div className="overflow-x-auto shadow-lg rounded-lg">
                <table className="w-full border-collapse">
                    <thead className="bg-[#2d3748] text-white">
                        <tr>
                            <th className="text-left px-4 py-3 text-xs md:text-sm uppercase tracking-wider font-semibold w-16">No</th>
                            <th className="text-left px-4 py-3 text-xs md:text-sm uppercase tracking-wider font-semibold">List of Document</th>
                            <th className="text-center px-4 py-3 text-xs md:text-sm uppercase tracking-wider font-semibold w-20">Open</th>
                            <th className="text-center px-4 py-3 text-xs md:text-sm uppercase tracking-wider font-semibold w-20">EWS</th>
                            <th className="text-center px-4 py-3 text-xs md:text-sm uppercase tracking-wider font-semibold w-36">Reserved Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {documents.map((doc, index) => (
                            <tr key={doc.no} className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50 transition-colors`}>
                                <td className="px-4 py-3 text-sm text-gray-600">{doc.no}.</td>
                                <td className="px-4 py-3 text-sm text-gray-700">{doc.document}</td>
                                <td className="px-4 py-3 text-center text-sm">{doc.open ? '✓' : ''}</td>
                                <td className="px-4 py-3 text-center text-sm">{doc.ews ? '✓' : ''}</td>
                                <td className="px-4 py-3 text-center text-sm">{doc.reserved ? '✓' : ''}</td>
                            </tr>
                        ))}

                        {/* Reserved Category / EWS Section Header */}
                        <tr className="bg-white">
                            <td colSpan="5" className="px-4 py-3">
                                <span className="font-bold text-sm text-gray-900">For Reserved Category / EWS Candidates</span>
                            </td>
                        </tr>

                        {reservedDocuments.map((doc, index) => (
                            <tr key={doc.no} className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-colors`}>
                                <td className="px-4 py-3 text-sm text-gray-600">{doc.no}.</td>
                                <td className="px-4 py-3 text-sm text-gray-700">{doc.document}</td>
                                <td className="px-4 py-3 text-center text-sm">{doc.open ? '✓' : ''}</td>
                                <td className="px-4 py-3 text-center text-sm">{doc.ews ? '✓' : ''}</td>
                                <td className="px-4 py-3 text-center text-sm">{doc.reserved ? '✓' : ''}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </motion.div>
    );
};

const RequiredDocuments = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <>
            {/* HERO SECTION */}
            <HeroSection {...requiredDocumentsHero} />

            <motion.section
                ref={ref}
                className="max-w-7xl mx-auto px-6 py-12"
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45 }}
            >
                <motion.h1
                    initial={{ opacity: 0, y: 18 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.1 }}
                    className="text-3xl font-bold text-center text-blue-600 mb-12"
                >
                    Required Documents
                </motion.h1>

                {/* First Year Engineering Table */}
                <DocumentTable
                    title="List of Documents required for First Year Engineering Admission"
                    documents={feDocuments}
                    reservedDocuments={feReservedDocuments}
                    delay={0.15}
                />

                {/* Direct Second Year Engineering Table */}
                <DocumentTable
                    title="List of Documents Required for Direct Second Year Engineering Admission"
                    documents={dseDocuments}
                    reservedDocuments={dseReservedDocuments}
                    delay={0.25}
                />
            </motion.section>
        </>
    );
};

export default RequiredDocuments;
