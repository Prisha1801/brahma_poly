import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeroSection from "../common/components/HeroSection";
import { missionHero } from "../common/data/heroData";
import { Lightbulb, Eye, Flag } from "lucide-react";

const MissionVision = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      {/* HERO */}
      <HeroSection {...missionHero} />

      {/* CORE PRINCIPLES SECTION */}
      <section ref={ref} className="bg-gray-100 py-20">
        <div className="max-w-5xl mx-auto px-6">

          {/* SECTION HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Core Principles
            </h2>
            <p className="text-gray-500 text-lg">
              Shaping future technocrats through values, knowledge, and innovation.
            </p>
          </motion.div>

          <div className="space-y-10">

            {/* BELIEF CARD */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-md p-10 text-center"
            >
              <Lightbulb className="mx-auto mb-4 text-blue-500" size={48} />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Our Belief
              </h3>
              <p className="text-gray-600 italic">
                "There is nothing as pure as knowledge"
              </p>
            </motion.div>

            {/* VISION CARD */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-md p-10 text-center"
            >
              <Eye className="mx-auto mb-4 text-green-600" size={48} />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-8 max-w-4xl mx-auto">
                An Institute striving for excellence in providing transformative Education and enhancing multidisciplinary skills for developing Intellectual, Innovative and Quality Technician / Engineer / Entrepreneur which will benefit the Society and the Industrial challenges.
              </p>
            </motion.div>

            {/* MISSION CARD */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-md p-10"
            >
              <div className="text-center mb-6">
                <Flag className="mx-auto mb-4 text-red-500" size={48} />
                <h3 className="text-xl font-semibold text-gray-800">
                  Our Mission
                </h3>
              </div>

              <ul className="text-gray-600 leading-8 space-y-3 list-disc list-inside">
                <li>
                  To be a Technical Educational Institute in transforming aspiring Technicians/ Engineers through rigorous coursework and Technical skills, by providing understanding of the needs of Society and Industry.
                </li>
                <li>
                  To benchmark with the best global standards of Quality Education.
                </li>
                <li>
                  To enhance the commitment of faculty staff and Students by inculcating the spirit of inquisitiveness, teamwork, innovation and professionalism.
                </li>
                <li>
                  Establish a centre of excellence to enhance Academia-Industry partnership work on collaborative projects and encourage students to develop micro projects and patents.
                </li>
                <li>
                  To develop globally competent students by enhancing indigenous technologies and inculcating entrepreneurship quality in them.
                </li>
              </ul>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
};

export default MissionVision;