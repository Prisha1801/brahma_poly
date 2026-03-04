import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ourCoursesData from "../../data/data";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const OurCourses = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Our Courses</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-3 rounded"></div>
        </div>

        {/* Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {ourCoursesData.map((course, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <img
                src={course.image}
                alt={course.title}
                className="w-24 h-24 mx-auto mb-6 object-contain"
              />

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {course.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm italic mb-4">
                "{course.description}"
              </p>

              {/* Short Tag */}
              <span className="inline-block bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full mb-4">
                {course.short}
              </span>

              {/* Button */}
              <div>
                <button
                  onClick={() => navigate(course.path)}
                  className="border border-blue-600 text-blue-600 px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  Explore
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default OurCourses;