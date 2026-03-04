import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiBookOpen, FiShield, FiFileText, FiAlertCircle } from "react-icons/fi";
import HeroSection from '../common/components/HeroSection';
import { rulesRegulationsHero } from '../common/data/heroData';

// ── Mock Data — replace with API later
const accordionData = [
    {
        id: 1,
        title: "Rules",
        icon: <FiBookOpen />,
        content: {
            intro:
                "The candidate should be an Indian national & should have passed HSC (XII) examination of Maharashtra state board of Secondary & higher secondary education or its equivalent examination with subjects Physics, & Mathematics as compulsory subjects along with one of the Chemistry / Biotechnology / Biology / Technical Vocational subject such as:",
            list: [
                "General Civil Engineering (A4)",
                "Electrical Maintenance (A1)",
                "Mechanical Maintenance (A2)",
                "Scooter & Motor Cycle Servicing (A3)",
                "Electronics (C2)",
                "Computer Science (D9)",
            ],
            outro: (
                <>
                    and secured with minimum <strong>50% marks</strong> (minimum{" "}
                    <strong>45% marks</strong> in case of candidates from backward category) in the
                    above subjects taken together with <strong>MHT-CET</strong> or{" "}
                    <strong>JEE Score</strong>.
                </>
            ),
        },
    },
    {
        id: 2,
        title: "Regulations",
        icon: <FiShield />,
        content: {
            intro:
                "All students are required to adhere to the academic regulations set forth by the university and the institution. These regulations govern attendance, internal assessment, and conduct during examinations.",
            list: [
                "The Candidate must be an Indian National and should have passed Post-SSC or Post-HSC Diploma Course in Engineering/Technology with at least 45 % marks (40 % marks in case of candidates of backward class categories and Persons with Disability belonging only to Maharashtra State) in appropriate branch of Engineering / Technology from an AICTE approved Institution with English as the medium of instruction at Diploma level.",
                "The Candidate must be an Indian National and should have passed B.Sc. Degree from a UGC / Association of Indian Universities recognized University with at least 45% marks (40 % marks in case of candidates of Backward class categories and Persons with Disability belonging only to Maharashtra State) and passed XII standard examination with Mathematics as the subject and with English as the medium of instruction at B.Sc. level.",
            ],
            outro: null,
        },
    },
    // {
    //     id: 3,
    //     title: "Eligibility Criteria",
    //     icon: <FiFileText />,
    //     content: {
    //         intro:
    //             "Admission to various programs offered by Brahma Valley Group of Institutions is subject to fulfillment of eligibility criteria prescribed by the respective affiliating university and regulatory bodies.",
    //         list: [
    //             "B.E. / B.Tech — HSC (PCM) with minimum 50% marks + MHT-CET / JEE",
    //             "MBA — Any graduate with minimum 50% marks + MAH-MBA CET / CAT / MAT",
    //             "B.Pharm — HSC (PCB / PCM) with minimum 45% marks + MHT-CET",
    //             "B.Ed — Any graduate with minimum 50% marks",
    //             "Diploma — SSC (10th) with minimum 35% marks",
    //             "School — Age appropriate admission as per state board norms",
    //         ],
    //         outro: null,
    //     },
    // },
    // {
    //     id: 4,
    //     title: "Important Instructions",
    //     icon: <FiAlertCircle />,
    //     content: {
    //         intro:
    //             "All applicants are advised to read the following instructions carefully before submitting the admission form. Non-compliance may lead to cancellation of candidature.",
    //         list: [
    //             "Submit all original documents along with attested photocopies at the time of admission",
    //             "Admission forms incomplete in any respect will be summarily rejected",
    //             "Fee once paid will not be refunded except as per university refund policy",
    //             "Students must comply with the dress code and code of conduct of the institution",
    //             "Ragging in any form is strictly prohibited and punishable under law",
    //         ],
    //         outro: (
    //             <>
    //                 For any queries related to admission, contact the Admission Cell at{" "}
    //                 <strong>0253-2311244</strong> or email{" "}
    //                 <strong>njspm8050@gmail.com</strong>.
    //             </>
    //         ),
    //     },
    // },
];

function AccordionItem({ item, isOpen, onToggle }) {
    return (
        <div
            className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? "border-gray-300 shadow-md" : "border-gray-200 shadow-sm hover:border-gray-300"
                }`}
        >
            {/* Header */}
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between px-7 py-5 bg-white text-left group"
            >
                <div className="flex items-center gap-4">
                    <span
                        className={`text-xl transition-colors duration-300 ${isOpen ? "text-blue-500" : "text-gray-400 group-hover:text-gray-600"
                            }`}
                    >
                        {item.icon}
                    </span>
                    <span
                        className={`font-semibold text-lg transition-colors duration-200 ${isOpen ? "text-gray-900" : "text-gray-700 group-hover:text-gray-900"
                            }`}
                    >
                        {item.title}
                    </span>
                </div>

                <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`text-xl shrink-0 ml-4 transition-colors duration-200 ${isOpen ? "text-blue-500" : "text-gray-400"
                        }`}
                >
                    <FiChevronDown />
                </motion.span>
            </button>

            {/* Divider — only visible when open */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="h-px bg-gray-100 mx-7"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    />
                )}
            </AnimatePresence>

            {/* Body */}
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
                        style={{ overflow: "hidden" }}
                    >
                        <div className="px-7 pt-5 pb-7 bg-white">
                            {/* Intro paragraph */}
                            {item.content.intro && (
                                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                                    {item.content.intro}
                                </p>
                            )}

                            {/* List */}
                            {item.content.list?.length > 0 && (
                                <ul className="space-y-2.5 mb-5">
                                    {item.content.list.map((li, i) => (
                                        <motion.li
                                            key={i}
                                            className="flex items-start gap-3 text-gray-700 text-sm"
                                            initial={{ opacity: 0, x: -8 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 + i * 0.05, duration: 0.25 }}
                                        >
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                            {li}
                                        </motion.li>
                                    ))}
                                </ul>
                            )}

                            {/* Outro paragraph */}
                            {item.content.outro && (
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {item.content.outro}
                                </p>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function RulesRegulations() {
    const [openId, setOpenId] = useState(1);

    const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

    return (
        <>
            {/* HERO SECTION */}
            <HeroSection {...rulesRegulationsHero} />

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-6 md:px-12">

                    {/* Section header */}
                    <motion.div
                        className="mb-10"
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45 }}
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <span className="w-6 h-px bg-blue-500" />
                            <span className="text-blue-500 text-xs tracking-[0.25em] uppercase font-semibold">
                                Admission Guidelines
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Rules & Regulations
                        </h2>
                    </motion.div>

                    {/* Accordion list */}
                    <motion.div
                        className="space-y-3"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: 0.1 }}
                    >
                        {accordionData.map((item) => (
                            <AccordionItem
                                key={item.id}
                                item={item}
                                isOpen={openId === item.id}
                                onToggle={() => toggle(item.id)}
                            />
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    );
}