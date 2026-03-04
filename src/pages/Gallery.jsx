import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GalleryHero } from "../components/common/data/heroData";
import HeroSection from "../components/common/components/HeroSection";

const galleryData = [
  {
    title: "Campus Life",
    folder: "Campus Life",
    images: ["c1.jpg", "c2.jpg", "c3.jpg", "c4.jpg", "c5.jpg"],
  },
  {
    title: "Workshop & Seminar",
    folder: "Workshop",
    images: ["w1.png"],
  },
  {
    title: "Industrial Visit",
    folder: "Industrial Visit",
    images: [
      "i1.jpg",
      "i2.jpg",
      "i3.jpg",
      "i4.jpg",
      "i5.jpg",
      "i6.jpg",
      "i7.jpg",
      "i8.jpg",
      "i9.jpg",
    ],
  },
  {
    title: "Theme Days",
    folder: "Theme Days",
    images: [
      "t1.jpeg","t2.jpeg","t3.jpeg","t4.jpeg","t5.jpeg","t6.jpeg","t7.jpeg","t8.jpeg","t9.jpeg",
      "t10.jpeg","t11.jpeg","t12.jpeg","t13.jpeg","t14.jpeg","t15.jpeg","t16.jpeg","t17.jpeg",
    ],
  },
  {
    title: "Home",
    folder: "Home",
    images: ["h1.jpg", "h2.jpg"],
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCategory, setCurrentCategory] = useState(null);

  const openModal = (category, index) => {
    setCurrentCategory(category);
    setCurrentIndex(index);
    setSelectedImage(category.images[index]);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentCategory(null);
  };

  const nextImage = () => {
    const next = (currentIndex + 1) % currentCategory.images.length;
    setCurrentIndex(next);
    setSelectedImage(currentCategory.images[next]);
  };

  const prevImage = () => {
    const prev =
      (currentIndex - 1 + currentCategory.images.length) %
      currentCategory.images.length;
    setCurrentIndex(prev);
    setSelectedImage(currentCategory.images[prev]);
  };

  return (
    <>
      <HeroSection {...GalleryHero} />

      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          {galleryData.map((category, catIndex) => (
            <div key={catIndex}>
              
              {/* Section Title */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-10"
              >
                <h2 className="text-4xl font-bold text-blue-600">
                  {category.title}
                </h2>
                <p className="text-gray-500 mt-2">
                  {category.images.length} images found
                </p>
              </motion.div>

              {/* Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {category.images.map((img, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="cursor-pointer rounded-xl overflow-hidden shadow-md bg-white"
                    onClick={() => openModal(category, index)}
                  >
                    <img
                      src={`/gallery/${category.folder}/${img}`}
                      alt=""
                      className="w-full h-48 object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FULLSCREEN MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close */}
            <button
              className="absolute top-6 right-8 text-white text-4xl"
              onClick={closeModal}
            >
              ×
            </button>

            {/* Left Button */}
            {currentCategory.images.length > 1 && (
              <button
                onClick={prevImage}
                className="absolute left-6 text-white text-5xl px-4"
              >
                ‹
              </button>
            )}

            {/* Image */}
            <motion.img
              key={selectedImage}
              src={`/gallery/${currentCategory.folder}/${selectedImage}`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
            />

            {/* Right Button */}
            {currentCategory.images.length > 1 && (
              <button
                onClick={nextImage}
                className="absolute right-6 text-white text-5xl px-4"
              >
                ›
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;