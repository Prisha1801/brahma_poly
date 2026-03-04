import { motion } from "framer-motion";

const facilities = [
  {
    title: "Library",
    description:
      "Explore thousands of books, e-journals, and digital content in a quiet and resourceful environment.",
    image: "/facilities/Library.webp",
  },
  {
    title: "Secure Hostels",
    description:
      "Fully furnished hostels with Wi-Fi, 24/7 security, and a homely atmosphere.",
    image: "/facilities/Secure Hostels.webp",
  },
  {
    title: "Transport",
    description:
      "A hub for academic excellence with a vast collection of resources to support your studies.",
    image: "/facilities/Transport.jpg",
  },
  {
    title: "Cafeteria",
    description:
      "Fueling minds and appetites with hygienic, tasty, and affordable meals.",
    image: "/facilities/Cafeteria.jpg",
  },
  {
    title: "Sports",
    description:
      "College sports inspire teamwork, skill, and spirit. Play, excel, and make lasting memories.",
    image: "/facilities/Sports.jpg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Facilities = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            Our World-Class Facilities
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ y: -8 }}
              className="bg-white text-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="h-40 overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5 text-center">
                <h3 className="font-semibold text-lg mb-2">
                  {facility.title}
                </h3>
                <p className="text-sm text-gray-600 italic">
                  {facility.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-medium transition-all duration-300">
            See More
          </button>
        </div>

      </div>
    </section>
  );
};

export default Facilities;