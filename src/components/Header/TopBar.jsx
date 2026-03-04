import React from 'react';
import { Link } from 'react-router-dom';
import fb from "/social-icons/fb.jpg"
import insta from "/social-icons/ig.jpg"
import linkedin from "/social-icons/id.jpg"
import youtube from "/social-icons/yt.jpg"
import whatsapp from "/social-icons/wp.jpg"
import three from "/social-icons/360.jpg"

const TopBar = () => {
    return (
        <div className="w-full bg-bviom-dark text-black/80 py-1.5 text-[12px] hidden md:block">
            <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
                <ul className="flex items-center gap-6 list-none m-0 p-0">
                    <li>

                        <Link to={"/pdf/brocher.pdf"} target="_blank" className="hover:text-bviom-green transition-colors font-medium flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-bviom-green inline-block" />
                            Download E-Brochures
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/admission/admission-form"
                            className="hover:text-bviom-green transition-colors font-medium flex items-center gap-1.5"
                        >
                            <span className="w-1 h-1 rounded-full bg-bviom-green inline-block" />
                            Admission
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/alumni"
                            className="hover:text-bviom-green transition-colors font-medium flex items-center gap-1.5"
                        >
                            <span className="w-1 h-1 rounded-full bg-bviom-green inline-block" />
                            Alumni
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className="hover:text-bviom-green transition-colors font-medium flex items-center gap-1.5"
                        >
                            <span className="w-1 h-1 rounded-full bg-bviom-green inline-block" />
                            Contact Us
                        </Link>
                    </li>
                </ul>

                <ul className="flex items-center gap-4 list-none m-0 p-0">
                    <li>
                        <span className="text-bviom-green font-semibold uppercase tracking-wider text-[10px]">Get Connected</span>
                    </li>
                    {[
                        { src: whatsapp, alt: "WhatsApp" },
                        { src: three, alt: "360" },
                        { src: fb, alt: "Facebook" },
                        { src: insta, alt: "Instagram" },
                        { src: linkedin, alt: "LinkedIn" },
                        { src: youtube, alt: "YouTube" }
                    ].map((item, idx) => (
                        <li key={idx}>
                            <a href="#" target="_blank" className="block w-5 h-5 rounded overflow-hidden hover:scale-125 transition-transform">
                                <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TopBar;
