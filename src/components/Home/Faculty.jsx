import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faculties = [
  {
    name: "PROF. DHURVE PRIYANKA VISHWANATH",
    designation: "HOD, ELECTRONICS",
    image: "/faculties/PROF. DHURVE PRIYANKA VISHWANATH.jpg",
  },
  {
    name: "PROF. AHER KOMAL ARUN",
    designation: "HOD, ELECTRICAL DEPARTMENT",
    image: "/faculties/PROF. AHER KOMAL ARUN.jpg",
  },
  {
    name: "PROF. SHINDE DHANANJAY GORAKHNATH",
    designation: "HOD, MECHANICAL DEPARTMENT",
    image: "/faculties/PROF. SHINDE DHANANJAY GORAKHNATH.jpg",
  },
  {
    name: "PROF. MANDAR MANOHAR KULKARNI",
    designation: "SENIOR FACULTY",
    image: "/faculties/PROF. MANDAR MANOHAR KULKARNI.jpg",
  },
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

const Faculty = () => {
  const [page, setPage] = useState(0);
  const [[pageIndex, direction], setPaginate] = useState([0, 0]);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(faculties.length / itemsPerPage);

  // Auto-advance every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPaginate([page + 1, 1]);
      setPage((prev) => (prev + 1) % totalPages);
    }, 4000); // ← change delay here (4000 ms = 4 seconds)

    return () => clearInterval(interval);
  }, [page, totalPages]);

  const start = page * itemsPerPage;
  const visibleFaculties = faculties.slice(start, start + itemsPerPage);

  return (
    <section className="py-20 bg-gray-50 overflow-hidden ">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 ">
          Meet Our Expert Faculty
        </h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          Our dedicated and experienced staff empower students with hands-on knowledge and practical skills vital for today’s industry needs.
        </p>

        {/* Carousel */}
        <div className="relative h-[480px] overflow-hidden ">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={pageIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 280, damping: 28 },
                opacity: { duration: 0.4 },
              }}
              className="absolute inset-0 flex justify-center gap-6 px-4"
            >
              {visibleFaculties.map((faculty) => (
                <div
                  key={faculty.name}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-xs flex-shrink-0 mb-16"
                >
                  <div className="h-80 overflow-hidden bg-gray-100">
                    <img
                      src={faculty.image}
                      alt={faculty.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="font-semibold text-lg text-gray-800 leading-tight">
                      {faculty.name}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2">
                      {faculty.designation}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Faculty;