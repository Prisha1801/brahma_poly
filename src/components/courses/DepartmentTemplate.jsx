import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import HeroSection from '../common/components/HeroSection';
import { FaChevronLeft, FaChevronRight, FaTimes, FaExternalLinkAlt, FaWrench, FaBuilding, FaFileAlt, FaRulerCombined, FaLeaf } from "react-icons/fa";


const SectionHeader = ({ title }) => (
    <div className="bg-slate-900 rounded-t-lg px-6 py-4">
        <h2 className="text-white text-xl font-bold">{title}</h2>
    </div>
);

// --- Civil Engineering Home Section ---
const CivilHomeSection = ({ data }) => (
    <div>
        <SectionHeader title={data.title} />
        <div className="bg-white rounded-b-lg shadow p-6 text-sm text-gray-700 leading-relaxed">
            {data.programmeOutcomes && (
                <div className="mb-6">
                    <h3 className="text-slate-900 font-bold text-base mb-1">{data.programmeOutcomes.title}</h3>
                    <p className="text-gray-500 text-xs mb-3">{data.programmeOutcomes.subtitle}</p>
                    <div className="space-y-2">
                        {data.programmeOutcomes.outcomes.map((po, index) => (
                            <p key={index} className="text-xs leading-relaxed">
                                <span className="font-bold text-slate-900">{po.id}:</span>{' '}
                                <span className="font-bold">{po.title}</span> – {po.desc}
                            </p>
                        ))}
                    </div>
                </div>
            )}
            {data.vision && (
                <div className="mb-4">
                    <h3 className="text-slate-900 font-bold text-base mb-2">{data.vision.title}</h3>
                    <p className="text-xs leading-relaxed">{data.vision.text}</p>
                </div>
            )}
            {data.mission && (
                <div className="mb-4">
                    <h3 className="text-slate-900 font-bold text-base mb-2">{data.mission.title}</h3>
                    <ul className="list-disc pl-5 space-y-1">
                        {data.mission.items.map((item, index) => (
                            <li key={index} className="text-xs leading-relaxed">{item}</li>
                        ))}
                    </ul>
                </div>
            )}
            {data.keyFeatures && (
                <div className="mb-4">
                    <h3 className="text-slate-900 font-bold text-base mb-2">{data.keyFeatures.title}</h3>
                    <ul className="space-y-1">
                        {data.keyFeatures.items.map((item, index) => (
                            <li key={index} className="text-xs leading-relaxed flex items-start gap-2">
                                <span className="text-red-500 mt-0.5">
                                    {item.icon === 'wrench' && <FaWrench size={12} />}
                                    {item.icon === 'building' && <FaBuilding size={12} />}
                                    {item.icon === 'file' && <FaFileAlt size={12} />}
                                    {item.icon === 'design' && <FaRulerCombined size={12} />}
                                    {item.icon === 'leaf' && <FaLeaf size={12} />}
                                </span>
                                {item.text}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {data.scope && (
                <div className="mb-4">
                    <h3 className="text-slate-900 font-bold text-base mb-2">{data.scope.title}</h3>
                    <ul className="list-disc pl-5 space-y-1">
                        {data.scope.items.map((item, index) => (
                            <li key={index} className="text-xs leading-relaxed">{item}</li>
                        ))}
                    </ul>
                </div>
            )}
            {data.wordsOfWisdom && (
                <div className="mt-6 pt-4 border-t border-gray-200">
                    <h3 className="text-slate-900 font-bold text-base mb-2">{data.wordsOfWisdom.title}</h3>
                    <p className="text-xs text-gray-500 italic">{data.wordsOfWisdom.text}</p>
                </div>
            )}
        </div>
    </div>
);

// --- Generic Home Section (Programme Outcomes + optional overview) ---
const GenericHomeSection = ({ data }) => (
    <div>
        <SectionHeader title={data.title} />
        <div className="bg-white rounded-b-lg shadow p-6 text-sm text-gray-700 leading-relaxed">
            {/* Overview text (Science & Humanities) */}
            {data.overview && (
                <div className="mb-6">
                    {data.overview.split('\n\n').map((para, i) => (
                        <p key={i} className="text-xs leading-relaxed mb-3">{para}</p>
                    ))}
                </div>
            )}
            {data.programmeOutcomes && (
                <div className="mb-6">
                    {data.programmeOutcomes.title && (
                        <h3 className="text-slate-900 font-bold text-base mb-1">{data.programmeOutcomes.title}</h3>
                    )}
                    <p className="text-gray-500 text-xs mb-3">{data.programmeOutcomes.subtitle}</p>
                    <div className="space-y-2">
                        {data.programmeOutcomes.outcomes.map((po, index) => (
                            <p key={index} className="text-xs leading-relaxed">
                                <span className="font-bold text-slate-900">{po.id}:</span>{' '}
                                <span className="font-bold">{po.title}</span> – {po.desc}
                            </p>
                        ))}
                    </div>
                </div>
            )}
        </div>
    </div>
);

// --- HOD's Desk Section ---
const HodSection = ({ data }) => (
    <div>
        <SectionHeader title={data.title} />
        <div className="bg-white rounded-b-lg shadow p-6 text-sm text-gray-700 leading-relaxed">
            <div className="flex flex-wrap gap-6 items-start mb-5">
                <div className="flex flex-col items-center">
                    <div className="w-48 h-48 rounded bg-slate-100 border-2 border-slate-300 flex items-center justify-center text-5xl overflow-hidden">
                        <img src={data.image} alt={data.name} className='w-full h-full object-contain' />
                    </div>
                    <p className="mt-2 font-semibold text-gray-800 text-center text-xs">{data.name}</p>
                    <p className="text-xs text-gray-500 text-center">{data.designation}</p>
                    {data.qualification && (
                        <p className="text-xs text-gray-400 text-center mt-1">{data.qualification}</p>
                    )}
                </div>
                <div className="flex-1 min-w-0">
                    {data.aboutTitle && <h3 className="text-slate-900 font-bold text-base mb-3">{data.aboutTitle}</h3>}
                    {data.about && (
                        <div className="text-xs leading-relaxed space-y-2">
                            {data.about.split('\n\n').map((para, index) => (
                                <p key={index}>{para}</p>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            {data.vision && (
                <>
                    <hr className="my-5 border-gray-200" />
                    <h3 className="text-slate-900 font-bold text-base mb-2">Vision</h3>
                    <p className="text-xs leading-relaxed mb-4">{data.vision}</p>
                </>
            )}
            {data.mission && (
                <>
                    <h3 className="text-slate-900 font-bold text-base mb-2">Mission</h3>
                    <ul className="list-disc pl-5 space-y-1">
                        {data.mission.map((item, index) => (
                            <li key={index} className="text-xs leading-relaxed">{item}</li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    </div>
);

// --- Faculty Table Section ---
const FacultySection = ({ data }) => (
    <div>
        <SectionHeader title={data.title} />
        <div className="bg-white rounded-b-lg shadow p-4 overflow-x-auto">
            {data.faculty.length === 0 ? (
                <p className="text-sm text-gray-400 text-center py-10">Faculty details will be updated soon.</p>
            ) : (
                <table className="w-full text-sm border-collapse">
                    <thead>
                        <tr className="bg-slate-900 text-white">
                            <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Sr.No.</th>
                            <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Name of Faculty</th>
                            <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Designation</th>
                            <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Qualification</th>
                            <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Teaching Experience</th>
                            <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Profile</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.faculty.map((faculty, index) => (
                            <tr key={faculty.id} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                                <td className="px-4 py-3 border-b border-gray-100">{faculty.id}</td>
                                <td className="px-4 py-3 border-b border-gray-100">{faculty.name}</td>
                                <td className="px-4 py-3 border-b border-gray-100">{faculty.designation ?? '—'}</td>
                                <td className="px-4 py-3 border-b border-gray-100">{faculty.qualification ?? '—'}</td>
                                <td className="px-4 py-3 border-b border-gray-100">{faculty.experience ?? '—'}</td>
                                <td className="px-4 py-3 border-b border-gray-100">
                                    {faculty.resume ? (
                                        <a
                                            href={faculty.resume}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-slate-700 font-semibold hover:text-slate-900 hover:underline transition-colors"
                                        >
                                            View
                                        </a>
                                    ) : (
                                        <span className="text-gray-400">NA</span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    </div>
);

// --- Faculty Cards Section (for departments with image cards) ---
const FacultyCardsSection = ({ data }) => (
    <div>
        <SectionHeader title={data.title} />
        <div className="bg-white rounded-b-lg shadow p-6">
            {data.faculty.length === 0 ? (
                <p className="text-sm text-gray-400 text-center py-10">Faculty details will be updated soon.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {data.faculty.map((faculty) => (
                        <div key={faculty.id} className="border border-gray-200 rounded-lg p-4 flex flex-col items-center text-center">
                            <div className="w-full h-40 bg-gray-100 rounded mb-3 flex items-center justify-center overflow-hidden">
                                <img
                                    src={faculty.image}
                                    alt={faculty.name}
                                    className="w-full h-full object-contain"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.parentNode.innerHTML = `<span class="text-gray-400 text-xs">${faculty.name}</span>`;
                                    }}
                                />
                            </div>
                            <h4 className="font-bold text-sm text-slate-900">{faculty.name}</h4>
                            {faculty.designation && (
                                <p className="text-xs text-gray-500 mt-0.5">{faculty.designation}</p>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    </div>
);

// --- Toppers Section ---
const ToppersSection = ({ data }) => (
    <div>
        <SectionHeader title={data.title} />
        <div className="bg-white rounded-b-lg shadow p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {data.toppers.map((topper) => (
                    <div key={topper.id} className="border border-gray-200 rounded-lg overflow-hidden">
                        <div className="w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                            <img
                                src={topper.image}
                                alt={topper.name}
                                className="w-full h-full object-contain"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.parentNode.innerHTML = `<span class="text-gray-400 text-xs">${topper.name}</span>`;
                                }}
                            />
                        </div>
                        <div className="p-3 border-t border-gray-200">
                            <p className="text-xs text-gray-600 text-center font-semibold">{topper.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

// --- PDF Section — handles both syllabus and laboratory PDFs ---
const PdfSection = ({ data }) => (
    <div>
        <SectionHeader title={data.title} />
        <div className="bg-white rounded-b-lg shadow p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {data.pdfs.map((pdf) => (
                    <div key={pdf.id} className="flex flex-col items-center">
                        <div className="w-full h-32 bg-gray-50 rounded flex items-center justify-center mb-3 border border-gray-100">
                            <svg className="w-12 h-12 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
                                <path d="M9 12h6v1H9zm0 2h6v1H9zm0 2h4v1H9z" />
                            </svg>
                        </div>
                        <a
                            href={pdf.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-red-500 border border-red-500 rounded px-3 py-1 flex items-center gap-1 hover:bg-red-50 transition-colors"
                        >
                            <FaExternalLinkAlt size={10} />
                            {pdf.label}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

// --- Laboratory Section — supports both labs list AND pdfs ---
const LaboratorySection = ({ data }) => {
    // If data has pdfs array, render PDF layout
    if (data.pdfs) {
        return <PdfSection data={data} />;
    }
    // Otherwise render labs list
    return (
        <div>
            <SectionHeader title={data.title} />
            <div className="bg-white rounded-b-lg shadow p-6 text-sm text-gray-700 leading-relaxed">
                <ul className="list-disc pl-5 flex flex-col gap-2">
                    {(data.labs ?? []).map((lab, index) => (
                        <li key={index}>
                            {typeof lab === 'string' ? (
                                lab
                            ) : (
                                <>
                                    {lab.name}
                                    {lab.subItems && (
                                        <ul className="list-[circle] pl-6 mt-1 flex flex-col gap-1">
                                            {lab.subItems.map((sub, i) => <li key={i}>{sub}</li>)}
                                        </ul>
                                    )}
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

// --- Student Projects Section ---
const StudentProjectsSection = ({ data }) => (
    <div>
        <SectionHeader title={data.title} />
        <div className="bg-white rounded-b-lg shadow p-4 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="bg-slate-900 text-white">
                        <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Sr No.</th>
                        <th className="px-4 py-3 text-left font-semibold">Topic</th>
                        <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Guide</th>
                        <th className="px-4 py-3 text-left font-semibold">Students</th>
                    </tr>
                </thead>
                <tbody>
                    {data.projects.map((project, index) => (
                        <tr key={project.id} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                            <td className="px-4 py-3 border-b border-gray-100 align-top">{project.id}</td>
                            <td className="px-4 py-3 border-b border-gray-100 align-top">{project.topic}</td>
                            <td className="px-4 py-3 border-b border-gray-100 align-top whitespace-nowrap">{project.guide}</td>
                            <td className="px-4 py-3 border-b border-gray-100 align-top">
                                <ul className="list-disc pl-4 flex flex-col gap-1">
                                    {project.students.map((s, i) => <li key={i}>{s}</li>)}
                                </ul>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

const InnovativeTeachingSection = ({ data }) => (
    <div>
        <SectionHeader title={data.title} />
        <div className="bg-white rounded-b-lg shadow p-6 text-sm text-gray-700 leading-relaxed">
            {data.methods.map((item, index, arr) => (
                <div key={index}>
                    <p>
                        <span className="font-semibold">{item.title}:</span> {item.desc}
                    </p>
                    {index < arr.length - 1 && <hr className="my-4 border-gray-100" />}
                </div>
            ))}
        </div>
    </div>
);

// --- Placements Section ---
const PlacementsSection = ({ data }) => {
    const [currentIndex, setCurrentIndex] = useState(null);
    const openModal = (index) => setCurrentIndex(index);
    const closeModal = () => setCurrentIndex(null);
    const prevImage = () => setCurrentIndex((prev) => prev === 0 ? data.images.length - 1 : prev - 1);
    const nextImage = () => setCurrentIndex((prev) => prev === data.images.length - 1 ? 0 : prev + 1);

    return (
        <div>
            <SectionHeader title={data.title} />
            <div className="bg-white rounded-b-lg shadow p-6">
                <div className="grid grid-cols-3 gap-4">
                    {data.images.map((img, i) => (
                        <div key={i} onClick={() => openModal(i)} className="cursor-pointer rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                            <img src={img.src} alt={img.alt} className="w-full h-44 object-contain" />
                        </div>
                    ))}
                </div>
            </div>
            {currentIndex !== null && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                    <button onClick={closeModal} className="absolute top-6 right-6 text-white text-2xl hover:text-gray-300"><FaTimes /></button>
                    <button onClick={prevImage} className="absolute left-6 text-white text-3xl hover:text-gray-300"><FaChevronLeft /></button>
                    <img src={data.images[currentIndex].src} alt={data.images[currentIndex].alt} className="max-h-[80vh] max-w-[90vw] object-contain rounded-lg shadow-lg" />
                    <button onClick={nextImage} className="absolute right-6 text-white text-3xl hover:text-gray-300"><FaChevronRight /></button>
                </div>
            )}
        </div>
    );
};

// --- News Letter Section ---
const NewsLetterSection = ({ data }) => (
    <div>
        <SectionHeader title={data.title} />
        <div className="bg-white rounded-b-lg shadow p-6 text-sm text-gray-700">
            <div className="border-b border-gray-200 pb-4">
                <p className="font-medium mb-2">{data.pdfLabel}</p>
                <a href={data.pdfLink} target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-slate-900 hover:underline transition-colors">
                    View PDF
                </a>
            </div>
        </div>
    </div>
);

// --- Staff Achievement Section ---
const StaffAchievementSection = ({ data }) => (
    <div>
        <SectionHeader title={data.title} />
        <div className="bg-white rounded-b-lg shadow p-4 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="bg-slate-900 text-white">
                        <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Sr.No.</th>
                        <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Name of Staff</th>
                        <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">FDP/STTP/Industrial Training</th>
                        <th className="px-4 py-3 text-left font-semibold">Role(Expert/Participant)</th>
                        <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Year</th>
                    </tr>
                </thead>
                <tbody>
                    {data.achievements.map((item, index) => (
                        <tr key={item.id} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                            <td className="px-4 py-3 border-b border-gray-100 align-top">{item.id}</td>
                            <td className="px-4 py-3 border-b border-gray-100 align-top whitespace-nowrap">{item.name}</td>
                            <td className="px-4 py-3 border-b border-gray-100 align-top">{item.fdp}</td>
                            <td className="px-4 py-3 border-b border-gray-100 align-top">{item.role}</td>
                            <td className="px-4 py-3 border-b border-gray-100 align-top whitespace-nowrap">{item.year}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

// --- Student Achievements Section ---
const StudentAchievementsSection = ({ data }) => (
    <div>
        <SectionHeader title={data.title} />
        <div className="bg-white rounded-b-lg shadow p-4 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="bg-slate-900 text-white">
                        <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Sr.No.</th>
                        <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Name</th>
                        <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Event/Training</th>
                        <th className="px-4 py-3 text-left font-semibold">Achievement</th>
                        <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Year</th>
                    </tr>
                </thead>
                <tbody>
                    {data.achievements.map((item, index) => (
                        <tr key={item.id} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                            <td className="px-4 py-3 border-b border-gray-100">{item.id}</td>
                            <td className="px-4 py-3 border-b border-gray-100 whitespace-nowrap">{item.name}</td>
                            <td className="px-4 py-3 border-b border-gray-100">{item.fdp}</td>
                            <td className="px-4 py-3 border-b border-gray-100">{item.role}</td>
                            <td className="px-4 py-3 border-b border-gray-100 whitespace-nowrap">{item.year}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

// --- Syllabus Accordion Section ---
const SyllabusSection = ({ data }) => {
    const [openIndex, setOpenIndex] = useState(0);
    return (
        <div>
            <SectionHeader title={data.title} />
            <div className="bg-white rounded-b-lg shadow p-6">
                <p className="text-sm font-semibold text-gray-700 mb-4">{data.subtitle}</p>
                <div className="flex flex-col gap-3">
                    {data.categories.map((item, index) => (
                        <div key={index} className="rounded-lg overflow-hidden border border-slate-200">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                className="w-full text-left px-5 py-3 bg-slate-900 text-white font-semibold text-sm"
                            >
                                {item.year}
                            </button>
                            {openIndex === index && item.links.length > 0 && (
                                <div className="px-5 py-3 flex flex-col gap-2 bg-white">
                                    {item.links.map((link, i) => (
                                        <a key={i} href={link.href} target="_blank" rel="noopener noreferrer" className="text-slate-700 text-sm hover:underline hover:text-slate-900 transition-colors">
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// --- Video Section ---
const VideoSection = ({ data }) => (
    <div>
        <SectionHeader title={data.title} />
        <div className="bg-white rounded-b-lg shadow p-6">
            <div className="flex flex-wrap gap-4">
                {data.videos.map((video, index) => (
                    <div key={index} className="rounded-lg overflow-hidden border border-gray-200 shadow-sm w-72">
                        <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                            <iframe className="absolute top-0 left-0 w-full h-full" src={video.embedUrl} title={video.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                        </div>
                        <p className="text-center text-sm font-semibold text-slate-900 py-3 border-t border-gray-100">{video.title}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

// --- Photo Gallery Section ---
const PhotoGallerySection = ({ data }) => {
    const [currentIndex, setCurrentIndex] = useState(null);
    const openModal = (index) => setCurrentIndex(index);
    const closeModal = () => setCurrentIndex(null);
    const prevImage = () => setCurrentIndex((prev) => prev === 0 ? data.images.length - 1 : prev - 1);
    const nextImage = () => setCurrentIndex((prev) => prev === data.images.length - 1 ? 0 : prev + 1);

    return (
        <div>
            <SectionHeader title={data.title} />
            <div className="bg-white rounded-b-lg shadow p-6">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {data.images.map((img, index) => (
                        <div key={index} onClick={() => openModal(index)} className="cursor-pointer rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group">
                            <img src={img.src} alt={img.alt} className="w-full h-44 object-contain group-hover:scale-105 transition-transform duration-300"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.parentNode.classList.add('bg-slate-100', 'flex', 'items-center', 'justify-center', 'h-44');
                                    e.target.parentNode.innerHTML = `<p class="text-gray-400 text-xs text-center p-3">${img.alt}</p>`;
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
            {currentIndex !== null && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
                    <button onClick={closeModal} className="absolute top-6 right-6 text-white text-3xl hover:text-gray-300 transition"><FaTimes /></button>
                    <button onClick={prevImage} className="absolute left-6 text-white text-4xl hover:text-gray-300 transition"><FaChevronLeft /></button>
                    <div className="flex flex-col items-center">
                        <img src={data.images[currentIndex].src} alt={data.images[currentIndex].alt} className="max-h-[80vh] max-w-[90vw] object-contain rounded-lg shadow-2xl" />
                        <p className="text-white text-sm mt-4">{data.images[currentIndex].alt}</p>
                    </div>
                    <button onClick={nextImage} className="absolute right-6 text-white text-4xl hover:text-gray-300 transition"><FaChevronRight /></button>
                </div>
            )}
        </div>
    );
};

// --- Placeholder Section ---
const PlaceholderSection = ({ title }) => (
    <div>
        <SectionHeader title={title} />
        <div className="bg-white rounded-b-lg shadow px-6 py-16 text-center text-gray-400 text-sm">
            Content for <span className="font-semibold text-gray-600">{title}</span> will be added soon.
        </div>
    </div>
);

// ─────────────────────────────────────────────────────────────
// Decides which Home component to use based on data shape
// ─────────────────────────────────────────────────────────────
const resolveHomeSection = (data) => {
    const home = data.homeSection;
    if (!home) return <PlaceholderSection title="Home" />;

    // Civil has vision/mission/keyFeatures/scope inside homeSection
    if (home.vision || home.mission || home.keyFeatures || home.scope) {
        return <CivilHomeSection data={home} />;
    }

    // All other departments
    return <GenericHomeSection data={home} />;
};

// ─────────────────────────────────────────────────────────────
// Decides which Faculty component to use based on data shape:
// - empty array    → card layout with "coming soon" message
// - has image keys → card layout
// - has designation/qualification/experience → table layout
// ─────────────────────────────────────────────────────────────
const resolveFacultySection = (data) => {
    const fac = data.facultySection;
    if (!fac) return <PlaceholderSection title="Faculty" />;

    const first = fac.faculty[0];
    // Use table layout only when faculty have experience field (detailed data)
    const useTable = first && first.experience !== undefined;

    return useTable
        ? <FacultySection data={fac} />
        : <FacultyCardsSection data={fac} />;
};

// --- Section Renderer ---
const renderSection = (active, data) => {
    if (active === 'Home') return resolveHomeSection(data);
    if (active === 'Faculty') return resolveFacultySection(data);

    const sectionMap = {
        "HOD's Desk": { component: HodSection, dataKey: 'hodSection' },
        'Laboratory': { component: LaboratorySection, dataKey: 'laboratorySection' },
        "Topper's List": { component: ToppersSection, dataKey: 'toppersSection' },
        // Syllabus & Curriculum → PdfSection when data has pdfs array
        'Syllabus & Curriculum': { component: PdfSection, dataKey: 'syllabusSection' },
        'Syllabus': { component: SyllabusSection, dataKey: 'syllabusSection' },
        'Student Projects': { component: StudentProjectsSection, dataKey: 'studentProjectsSection' },
        'Innovative Teaching Methods': { component: InnovativeTeachingSection, dataKey: 'innovativeTeachingSection' },
        'Placements': { component: PlacementsSection, dataKey: 'placementsSection' },
        'News Letter': { component: NewsLetterSection, dataKey: 'newsLetterSection' },
        'Staff Achievement': { component: StaffAchievementSection, dataKey: 'staffAchievementSection' },
        'Student Achievements': { component: StudentAchievementsSection, dataKey: 'studentAchievementsSection' },
        'Video': { component: VideoSection, dataKey: 'videoSection' },
        'Photo Gallery': { component: PhotoGallerySection, dataKey: 'photoGallerySection' },
    };

    const config = sectionMap[active];
    if (config && data[config.dataKey]) {
        const Component = config.component;
        return <Component data={data[config.dataKey]} />;
    }

    return <PlaceholderSection title={active} />;
};

// --- Main Department Template ---
const DepartmentTemplate = ({ data }) => {
    const [activeSection, setActiveSection] = useState(data.sidebarItems[0] || 'Home');
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <div>
            <HeroSection {...data.hero} />

            <motion.div
                ref={ref}
                className="max-w-6xl mx-auto px-5 py-10 flex gap-6 items-start"
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45 }}
            >
                {/* Sidebar */}
                <motion.aside
                    initial={{ opacity: 0, y: 18 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.1 }}
                    className="lg:sticky lg:top-24 w-64 flex-shrink-0"
                >
                    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                        <div className="border-b border-slate-200 bg-slate-50 px-4 py-3">
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{data.sidebarTitle}</p>
                        </div>
                        <div className="p-2">
                            {data.sidebarItems.map((item) => (
                                <button
                                    key={item}
                                    onClick={() => setActiveSection(item)}
                                    className={`mb-1 block w-full rounded-xl px-3 py-2.5 text-left text-sm font-semibold transition-colors ${activeSection === item
                                        ? "bg-slate-900 text-white"
                                        : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                                        }`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                </motion.aside>

                {/* Main Content */}
                <motion.main
                    initial={{ opacity: 0, y: 18 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.15 }}
                    className="flex-1 min-w-0"
                >
                    {renderSection(activeSection, data)}
                </motion.main>
            </motion.div>
        </div>
    );
};

export default DepartmentTemplate;