import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import HeroSection from '../common/components/HeroSection';
import { boardMembersHero } from '../common/data/heroData';
import rajaramImg from "/board-members/Mr. Rajaram D.Pangavhane.png";
import dhanishaImg from "/board-members/Dr.Dhanisha G. Pangavhane.png";
import gauravImg from "/board-members/Mr. Gaurav R. Pangavhane.jpeg";
import ashwiniImg from "/board-members/Mrs. Ashwini A Bhosale.jpg";
import sheetalImg from "/board-members/Mrs. Sheetal Y. Mule.jpg";
import prabhavatiImg from "/board-members/Mrs.Prabhavati R. Pangavhane.jpg";
import rohiniImg from "/board-members/Mrs.Rohini A Bhosle.jpg"

const BoardMembers = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    const members = [
        {
            name: "Mr. Rajaram D.Pangavhane (Patil)",
            role: "President",
            image: rajaramImg,
        },
        {
            name: "Dr.Dhanisha G. Pangavhane (Patil)",
            role: "Vice President",
            image: dhanishaImg,
        },
        {
            name: "Mrs. Ashwini A Bhosale",
            role: "Vice President",
            image: ashwiniImg,
        },
        {
            name: "Mr. Gaurav R. Pangavhane (Patil)",
            role: "General Secretary",
            image: gauravImg,
        },
        {
            name: "Mrs.Prabhavati R. Pangavhane",
            role: "Joint Secretary",
            image: prabhavatiImg,
        },
        {
            name: "Mrs.Rohini A Bhosle",
            role: "Member",
            image: rohiniImg,
        },
        {
            name: "Mrs. Sheetal Y. Mule",
            role: "Member",
            image: sheetalImg,
        },
    ];

    return (
        <div>
            {/* Reusable hero section */}
            <HeroSection {...boardMembersHero} />

            <motion.section
                ref={ref}
                className="bg-gray-100 py-16"
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45 }}
            >
                <div className="max-w-7xl mx-auto px-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 18 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.45, delay: 0.1 }}
                        className="text-center text-3xl md:text-4xl font-bold text-[#0b2c4d] mb-12"
                    >
                        Our Board Members
                    </motion.h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {members.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 18 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.45, delay: 0.1 + index * 0.05 }}
                                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden text-center p-6"
                            >
                                <div className="w-full h-64 overflow-hidden rounded-xl mb-6">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover hover:scale-105 transition duration-500"
                                    />
                                </div>
                                <h5 className="text-lg font-semibold text-[#0b2c4d]">
                                    {member.name}
                                </h5>
                                <p className="text-gray-500 mt-2 text-sm">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>
        </div>
    );
};

export default BoardMembers;