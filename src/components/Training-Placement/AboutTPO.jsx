import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FiChevronDown, FiInfo, FiList, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import HeroSection from '../common/components/HeroSection';
import { trainingPlacementHero } from '../common/data/heroData';

// ── Company logos
const companies = [
    { name: "Google", logo: "/top-recruiters/google.png" },
    { name: "Infosys", logo: "/top-recruiters/infosys.png" },
    { name: "iPower", logo: "/top-recruiters/ipower.png" },
    { name: "Larsen", logo: "/top-recruiters/larsen.png" },
    { name: "Revival", logo: "/top-recruiters/revival.png" },
    { name: "Siemens", logo: "/top-recruiters/siemens.png" },
    { name: "Simpolo", logo: "/top-recruiters/simpolo.png" },
    { name: "Tata Motors", logo: "/top-recruiters/tata motors.png" },
    { name: "Teknoflow", logo: "/top-recruiters/teknoflow.png" },
    { name: "U", logo: "/top-recruiters/u.png" },
    { name: "Vaishnavi Auto", logo: "/top-recruiters/vaishnavi auto.png" },
    { name: "Wipro", logo: "/top-recruiters/wipro.png" },
];

const VISIBLE = 2;      // 2 logos fit nicely inside the card
const INTERVAL = 2500;

// ── Accordion Data
const accordionData = [
    {
        id: 1,
        title: "About Our TPO",
        icon: <FiInfo />,
        content: (
            <>
                <p className="text-gray-700 leading-relaxed mb-4">
                    The <strong>Training & Placement Cell, BVCTE</strong> facilitates the process of placement of students
                    passing out from the Institute besides collaborating with leading organizations and institutes in setting up of
                    internship and training program of students.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                    The T&P Cell liaises with various industrial establishments, corporate houses etc which conduct
                    campus interviews and select diploma students from all disciplines like, Mechanical, Electrical,
                    Electronics and Communication, Computer/IT, Civil.
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                    The industries which approach the institute come under the purview of:
                </p>
                <ul className="list-disc list-inside space-y-1.5 text-gray-700 mb-5 pl-2">
                    <li>Core Engineering industries</li>
                    <li>IT & IT enabled services</li>
                    <li>Manufacturing Industries</li>
                    <li>Consultancy Firms</li>
                    <li>SMEs</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-4">
                    The placement season runs through the course of the year commencing from August through to May.
                    Pre-Placement Talks are also conducted in this regard as per mutual convenience.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    The T&P Cell is assisted by a committee comprising of HODs of all departments. The committee evolves
                    a broad policy framework every year besides a set of rules which are inviolable.
                </p>
            </>
        ),
    },
    {
        id: 2,
        title: "Placement Procedure",
        icon: <FiList />,
        content: (
            <ul className="list-disc list-inside space-y-3 text-gray-600 pl-2">
                <li>Interested companies contact Head, Training and Placement Cell for a Job Notification</li>
                <li>Prior to arrival on campus, the companies are requested to inform the T&P Cell about the modalities of the recruitment procedure to be followed by them.</li>
                <li>T&P Cell requires the companies to notify mandatory details of the job profile role offered, pay package, place of posting, eligible departments.</li>
                <li>Once all the required details is received, T&P Cell notifies all students. Going further, T&P Cell registers eligible and interested candidates.</li>
                <li>The interested candidates list is forwarded to company.</li>
                <li>Shortlisted students get notified.</li>
                <li>The placement cell allots the dates for the campus interviews.</li>
                <li>After the completion of the selection procedure on campus, company is required to announce the final list of the students.</li>
            </ul>
        ),
    },
];

// ── Mini Recruiter Carousel (lives inside the TPO Events card)
function MiniRecruiterCarousel() {
    const [startIndex, setStartIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const timerRef = useRef(null);
    const total = companies.length;

    const next = () => {
        setDirection(1);
        setStartIndex((prev) => (prev + 1) % total);
    };
    const prev = () => {
        setDirection(-1);
        setStartIndex((prev) => (prev - 1 + total) % total);
    };
    const resetTimer = () => {
        clearInterval(timerRef.current);
        timerRef.current = setInterval(next, INTERVAL);
    };

    useEffect(() => {
        timerRef.current = setInterval(next, INTERVAL);
        return () => clearInterval(timerRef.current);
    }, []);

    const handlePrev = () => { prev(); resetTimer(); };
    const handleNext = () => { next(); resetTimer(); };

    const visibleCompanies = Array.from({ length: VISIBLE }, (_, i) => {
        const idx = (startIndex + i) % total;
        return { ...companies[idx], key: `${idx}-${startIndex}-${i}` };
    });

    return (
        <div className="w-full mt-3">
            {/* Slide row */}
            <div className="flex items-center gap-2">
                {/* Prev */}
                <button
                    onClick={handlePrev}
                    className="shrink-0 w-7 h-7 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center text-gray-400 hover:border-purple-400 hover:text-purple-500 transition-all duration-200"
                >
                    <FiChevronLeft size={14} />
                </button>

                {/* Logo cards */}
                <div className="flex-1 grid grid-cols-2 gap-3 overflow-hidden">
                    {visibleCompanies.map((company, i) => (
                        <motion.div
                            key={company.key}
                            initial={{ opacity: 0, x: direction * 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.05, ease: "easeOut" }}
                            className="flex flex-col items-center justify-center gap-2 bg-gray-50 border border-gray-100 rounded-xl p-3 hover:shadow-sm hover:border-purple-200 transition-all duration-200 group"
                        >
                            <div className="w-full h-10 flex items-center justify-center">
                                <img
                                    src={company.logo}
                                    alt={company.name}
                                    className="max-h-10 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                            <p className="text-[10px] text-gray-400 font-medium text-center leading-tight">
                                {company.name}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Next */}
                <button
                    onClick={handleNext}
                    className="shrink-0 w-7 h-7 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center text-gray-400 hover:border-purple-400 hover:text-purple-500 transition-all duration-200"
                >
                    <FiChevronRight size={14} />
                </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-1 mt-3">
                {companies.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => { setDirection(i > startIndex ? 1 : -1); setStartIndex(i); resetTimer(); }}
                        className={`h-1 rounded-full transition-all duration-300 ${i === startIndex ? "w-4 bg-purple-500" : "w-1 bg-gray-300 hover:bg-gray-400"}`}
                    />
                ))}
            </div>
        </div>
    );
}

// ── Accordion Item
function AccordionItem({ item, isOpen, onToggle }) {
    return (
        <div className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? "border-purple-200 shadow-md" : "border-gray-200 shadow-sm hover:border-gray-300"}`}>
            <button onClick={onToggle} className="w-full flex items-center justify-between px-7 py-5 bg-white text-left group">
                <div className="flex items-center gap-3">
                    <span className={`text-xl transition-colors duration-300 ${isOpen ? "text-purple-500" : "text-gray-400 group-hover:text-gray-600"}`}>
                        {item.icon}
                    </span>
                    <span className={`font-semibold text-lg transition-colors duration-200 ${isOpen ? "text-purple-600" : "text-gray-700 group-hover:text-gray-900"}`}>
                        {item.title}
                    </span>
                </div>
                <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`text-xl shrink-0 ml-4 transition-colors duration-200 ${isOpen ? "text-purple-500" : "text-gray-400"}`}
                >
                    <FiChevronDown />
                </motion.span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div className="h-px bg-purple-100 mx-7" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} />
                )}
            </AnimatePresence>

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
                        <div className="px-7 pt-5 pb-7 bg-white">{item.content}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

// ── Main Component
export default function AboutTPO() {
    const [openId, setOpenId] = useState(1);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

    return (
        <>
            <HeroSection {...trainingPlacementHero} />

            <motion.section
                ref={ref}
                className="max-w-6xl mx-auto px-6 py-12"
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45 }}
            >
                {/* Top Cards Row */}
                <div className="grid md:grid-cols-5 gap-6 mb-10">

                    {/* Left: TPO Officer */}
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.45, delay: 0.1 }}
                        className="md:col-span-3 bg-white border border-gray-200 rounded-2xl shadow-sm p-8 flex flex-col items-center text-center"
                    >
                        <div className="w-28 h-28 rounded-full bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center mb-4 overflow-hidden border-4 border-purple-200">
                            <img src="/posters/Prof. A. V. Dhanwate.jpg" alt="" className="w-full h-full object-cover" />
                        </div>
                        <h3 className="text-lg font-bold text-purple-600 mb-1">Prof. A. V. Dhanwate</h3>
                        <p className="text-sm text-gray-500 italic">BE (Mechanical Engineering)</p>
                    </motion.div>

                    {/* Right: TPO Events & Activities card — carousel inside */}
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.45, delay: 0.2 }}
                        className="md:col-span-2 bg-white border border-gray-200 rounded-2xl shadow-sm p-6 flex flex-col items-center"
                    >
                        {/* Icon */}
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                            </svg>
                        </div>

                        {/* Title & subtitle */}
                        <h3 className="text-base font-bold text-purple-600 mb-0.5 text-center">
                            TPO Events & Activities
                        </h3>
                        <p className="text-xs text-gray-400 text-center mb-1">
                            Our Top Recruiters
                        </p>

                        {/* Carousel */}
                        <MiniRecruiterCarousel />
                    </motion.div>
                </div>

                {/* Accordion */}
                <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.3 }}
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
            </motion.section>
        </>
    );
}