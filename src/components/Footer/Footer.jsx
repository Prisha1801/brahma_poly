import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiMail, FiPhone, FiGlobe } from "react-icons/fi";
import { MdChevronRight } from "react-icons/md";

const quickLinks = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/board-members" },
    { label: "DTE Code", to: "/" },
    { label: "Event Gallery", to: "/gallery" },
    { label: "Alumini", to: "/alumni" },
    { label: "Admission", to: "/admission/admission-form" },
    { label: "Examination Notice", to: "/student-guide/examination-notice" },
    { label: "Contact", to: "/contact" },
];

const additionalLinks = [
    { label: "Campus Placements", to: "/training-placements/campus-placements" },
    { label: "Approvals", to: "/admission/approvals" },
    { label: "ANTI - Ragging Committee", to: "/grievances/anti-ragging-committee" },
    { label: "Vishakha Committee", to: "/grievances/vishakha-committee" },
    { label: "Emergency Contact Details", to: "/grievances/emergency-contact-details" },
    { label: "Terms & Condition", to: "#" },
];

const Footer = () => {
    const [email, setEmail] = useState("");

    const handleSubscribe = () => {
        console.log("Subscribed:", email);
        setEmail("");
    };

    return (
        <footer className="bg-[#1a1a1a] text-white pt-14 pb-6">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

                {/* Top Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-3 text-[15px] text-gray-300">
                            {quickLinks.map((link) => (
                                <li key={link.label} className="flex items-center gap-2">
                                    <MdChevronRight className="text-white flex-shrink-0" />
                                    <Link to={link.to} className="hover:text-white transition">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Additional Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Additional Links</h3>
                        <ul className="space-y-3 text-[15px] text-gray-300">
                            {additionalLinks.map((link) => (
                                <li key={link.label} className="flex items-center gap-2">
                                    <MdChevronRight className="text-white flex-shrink-0" />
                                    <Link to={link.to} className="hover:text-white transition">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Contact Info</h3>
                        <ul className="space-y-4 text-[15px] text-gray-300">
                            <li className="flex items-center gap-3">
                                <FiMail className="flex-shrink-0" />
                                <span>reply@brahmavalley.com</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FiPhone className="flex-shrink-0" />
                                <span>+91 9923072990; +91 9923072990</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FiGlobe className="flex-shrink-0" />
                                <span>www.brahmavalley.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Newsletter</h3>
                        <p className="text-gray-300 text-sm mb-5 leading-relaxed">
                            Stay updated with our latest news, events, and offers.
                        </p>
                        <div className="flex items-center gap-0">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your Email Address"
                                className="flex-1 px-4 py-2.5 text-sm text-gray-800 bg-white rounded-l-md focus:outline-none min-w-0"
                            />
                            <button
                                onClick={handleSubscribe}
                                className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-2.5 rounded-r-md transition-colors whitespace-nowrap"
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>

                </div>

                {/* Bottom Section */}
                <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-400 text-center md:text-left">
                        © 2026 Brahma Valley Group Of Institution. All rights reserved.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-3">
                        <a href="#" className="bg-white/10 p-2.5 rounded-full hover:bg-white/20 transition">
                            <FaFacebookF className="w-4 h-4" />
                        </a>
                        <a href="#" className="bg-white/10 p-2.5 rounded-full hover:bg-white/20 transition">
                            <FaTwitter className="w-4 h-4" />
                        </a>
                        <a href="#" className="bg-white/10 p-2.5 rounded-full hover:bg-white/20 transition">
                            <FaInstagram className="w-4 h-4" />
                        </a>
                        <a href="#" className="bg-white/10 p-2.5 rounded-full hover:bg-white/20 transition">
                            <FaLinkedinIn className="w-4 h-4" />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
