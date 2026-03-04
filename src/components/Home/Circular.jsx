import { motion } from "framer-motion";

const circulars = [
  {
    title: "Circular: Library Book Return Deadline",
    link: "#library-book-return",
  },
  {
    title: "Notice: Anti-Ragging Committee Meeting",
    link: "#anti-ragging-meeting",
  },
  {
    title: "Circular: Holiday on 17th July 2025",
    link: "#holiday-july-2025",
  },
  {
    title: "Notice: Internship Fair 2025",
    link: "#internship-fair-2025",
  },
  {
    title: "Circular: Dress Code Policy for Students",
    link: "#dress-code-policy",
  },
  {
    title: "Notice: Semester Exam Time Table Released",
    link: "#exam-time-table",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Circular = () => {
  return (
    <div className="max-w-5xl mx-auto mt-10 px-4 mb-10">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-800 to-red-600 text-white py-4 px-6 rounded-t-xl text-lg font-semibold">
        📢 Notices & Circulars
      </div>

      {/* List Container */}
      <motion.div
        className="bg-gray-100 rounded-b-xl shadow-md divide-y"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {circulars.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            variants={itemVariants}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-4 px-6 py-4 bg-gray-100 hover:bg-white hover:shadow-md transition-all duration-300 group"
          >
            {/* NEW Badge */}
            <span className="bg-blue-900 text-white text-xs font-semibold px-3 py-1 rounded-full">
              NEW
            </span>

            {/* Title */}
            <span className="text-gray-800 font-medium group-hover:text-purple-700 transition-colors duration-300">
              {item.title}
            </span>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default Circular;