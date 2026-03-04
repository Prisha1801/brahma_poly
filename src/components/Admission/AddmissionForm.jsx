import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import HeroSection from '../common/components/HeroSection';
import { admissionFormHero } from '../common/data/heroData';

const AddmissionForm = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Section Header Utility
    const SectionHeader = ({ title }) => (
        <div className="col-span-full border-b border-gray-200 pb-2 mb-4 mt-6">
            <h5 className="text-lg font-bold text-gray-800 uppercase tracking-wide">{title}</h5>
        </div>
    );

    // Label with Required Star
    const Label = ({ htmlFor, text, required }) => (
        <label htmlFor={htmlFor} className="block text-sm font-semibold text-gray-700 mb-1.5 flex items-center">
            {text} {required && <span className="text-red-500 ml-1 font-bold">*</span>}
        </label>
    );

    // Input Classes
    const inputClass = "w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition-all bg-white shadow-sm";
    const selectClass = "w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition-all bg-white shadow-sm cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%234b5563%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M5.293%207.293a1%201%200%20011.414%200L10%2010.586l3.293-3.293a1%201%200%20111.414%201.414l-4%204a1%201%200%2001-1.414%200l-4-4a1%201%200%20010-1.414z%22%20clip-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25em_1.25em] bg-[right_0.5rem_center] bg-no-repeat";

    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            {/* HERO SECTION */}
            <HeroSection {...admissionFormHero} />

            <div className="max-w-6xl mx-auto px-6 -mt-10 relative z-20">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="bg-white shadow-2xl rounded-2xl overflow-hidden p-8 md:p-12 border border-gray-100"
                >
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-extrabold text-[#334155] mb-2">Student Admission Form</h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
                    </div>

                    <form
                        id="admission_student_info"
                        method="post"
                        action="https://polytechnic.brahmavalley.edu.in/student-admission-submit"
                        encType="multipart/form-data"
                        noValidate
                        className="space-y-8"
                    >
                        {/* ── ADMISSION DETAILS ────────────── */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                            <SectionHeader title="Admission Details" />

                            <div className="space-y-1.5">
                                <Label htmlFor="sat" text="Admission Type" required />
                                <select className={selectClass} name="sat" id="sat" required>
                                    <option value="">Select</option>
                                    <option value="DFY">Direct 1st Year</option>
                                    <option value="DSY">Direct 2nd Year</option>
                                    <option value="DTY">Direct 3rd Year</option>
                                </select>
                            </div>

                            <div className="space-y-1.5">
                                <Label htmlFor="sabm" text="Admission Base Mode" required />
                                <select className={selectClass} name="sabm" id="sabm" required>
                                    <option value="">Select</option>
                                    <option>After 10th</option>
                                    <option>12th</option>
                                    <option>MCVC</option>
                                    <option>ITI</option>
                                    <option>COE</option>
                                </select>
                            </div>

                            <div className="space-y-1.5">
                                <Label htmlFor="sccs" text="Course Code" required />
                                <select className={selectClass} name="sccs" id="sccs" required>
                                    <option value="">Select</option>
                                    <option value="CM">Computer Technology</option>
                                    <option value="IF">Information Technology</option>
                                    <option value="EE">Electrical Engineering</option>
                                    <option value="EJ">Electronics & Telecommunication</option>
                                    <option value="ME">Mechanical Engineering</option>
                                    <option value="CE">Civil Engineering</option>
                                </select>
                            </div>

                            <div className="space-y-1.5">
                                <Label htmlFor="sgnd" text="Gender" required />
                                <select className={selectClass} name="sgnd" id="sgnd" required>
                                    <option value="">Select</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>

                        {/* ── STUDENT DETAILS ──────────────── */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                            <SectionHeader title="Student Details" />

                            <div className="space-y-1.5">
                                <Label htmlFor="sname" text="Student Full Name" required />
                                <input type="text" className={inputClass} name="sname" id="sname" placeholder="As on mark sheet" required />
                            </div>

                            <div className="space-y-1.5">
                                <Label htmlFor="scno" text="Student Contact No" required />
                                <input type="tel" className={inputClass} name="scno" id="scno" pattern="[0-9]{10}" maxLength="10" placeholder="10-digit number" required />
                            </div>

                            <div className="space-y-1.5">
                                <Label htmlFor="email" text="Email" required />
                                <input type="email" className={inputClass} name="email" id="email" placeholder="example@gmail.com" required />
                            </div>

                            <div className="space-y-1.5">
                                <Label htmlFor="sdob" text="Date of Birth" required />
                                <input type="date" className={inputClass} name="sdob" id="sdob" required />
                            </div>

                            <div className="space-y-1.5">
                                <Label htmlFor="spob" text="Place of Birth" />
                                <input type="text" className={inputClass} name="spob" id="spob" placeholder="e.g. Nashik" />
                            </div>

                            <div className="space-y-1.5">
                                <Label htmlFor="slsc" text="Latest School Completed" />
                                <input type="text" className={inputClass} name="slsc" id="slsc" placeholder="School/College Name" />
                            </div>

                            <div className="space-y-1.5">
                                <Label htmlFor="sn" text="Nationality" />
                                <input type="text" className={`${inputClass} bg-gray-50 font-medium`} name="sn" id="sn" value="Indian" readOnly />
                            </div>

                            <div className="space-y-1.5">
                                <Label htmlFor="sr" text="Religion" />
                                <select className={selectClass} name="sr" id="sr" defaultValue="">
                                    <option value="">Select</option>
                                    <option>Hindu</option>
                                    <option>Muslim</option>
                                    <option>Buddhist</option>
                                    <option>Christian</option>
                                    <option>Sikh</option>
                                    <option>Jain</option>
                                    <option>Parsi</option>
                                </select>
                            </div>

                            <div className="space-y-1.5">
                                <Label htmlFor="sc" text="Category" />
                                <select className={selectClass} name="sc" id="sc" defaultValue="">
                                    <option value="">Select</option>
                                    <option>OPEN</option>
                                    <option>SC</option>
                                    <option>ST</option>
                                    <option>VJ</option>
                                    <option>DT</option>
                                    <option>NT-A</option>
                                    <option>NT-B</option>
                                    <option>NT-C</option>
                                    <option>NT-D</option>
                                    <option>OBC</option>
                                    <option>SBC</option>
                                </select>
                            </div>

                            <div className="space-y-1.5">
                                <Label htmlFor="ssc" text="Sub-Caste" />
                                <input type="text" className={inputClass} name="ssc" id="ssc" placeholder="e.g. Maratha" />
                            </div>

                            <div className="space-y-1.5">
                                <Label htmlFor="sfname" text="Father's Name" />
                                <input type="text" className={inputClass} name="sfname" id="sfname" placeholder="Full Name" />
                            </div>

                            <div className="space-y-1.5">
                                <Label htmlFor="sfcno" text="Father/Guardian Contact No" />
                                <input type="tel" className={inputClass} name="sfcno" id="sfcno" pattern="[0-9]{10}" maxLength="10" placeholder="10-digit number" />
                            </div>
                        </div>

                        {/* ── ADDRESS DETAILS ──────────────── */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
                            <SectionHeader title="Address" />

                            <div className="col-span-full space-y-1.5">
                                <Label htmlFor="stasa" text="Street Address" />
                                <textarea className={`${inputClass} resize-none`} name="stasa" id="stasa" rows="3" placeholder="Apartment, Street Name, etc."></textarea>
                            </div>

                            <div className="space-y-1.5">
                                <Label htmlFor="stad" text="District" />
                                <input type="text" className={inputClass} name="stad" id="stad" defaultValue="Nashik" />
                            </div>

                            <div className="space-y-1.5">
                                <Label htmlFor="stas" text="State" />
                                <input type="text" className={inputClass} name="stas" id="stas" defaultValue="Maharashtra" />
                            </div>

                            <div className="space-y-1.5">
                                <Label htmlFor="stac" text="Country" />
                                <input type="text" className={inputClass} name="stac" id="stac" defaultValue="India" />
                            </div>
                        </div>

                        {/* SUBMIT BUTTON */}
                        <div className="flex justify-center pt-8 border-t border-gray-100 mt-10">
                            <button
                                type="submit"
                                className="bg-[#072448] hover:bg-[#0a3161] text-white px-12 py-3.5 rounded-md font-bold text-sm tracking-wide uppercase transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                            >
                                Send Enquiry
                            </button>
                        </div>
                    </form>
                </motion.div>

                <p className="text-center text-gray-500 text-xs mt-8">
                    &copy; {new Date().getFullYear()} Brahma Valley Polytechnic. All rights reserved.
                    <br />The information collected will be used for admission purposes only.
                </p>
            </div>
        </div>
    );
};

export default AddmissionForm;
