import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useInView } from "./hooks/useInView";
import { useLanguage } from "../contexts/LanguageContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { X } from "lucide-react";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1679312061521-d7d619a8cfb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    alt: "Elegant dining room",
  },
  {
    url: "https://images.unsplash.com/photo-1676471932681-45fa972d848a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    alt: "Gourmet plating",
  },
  {
    url: "https://images.unsplash.com/photo-1502920764203-b859c2384716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    alt: "Crystal chandelier",
  },
  {
    url: "https://images.unsplash.com/photo-1689672235271-727de51355e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    alt: "Wine pairing",
  },
  {
    url: "https://images.unsplash.com/photo-1651842462716-9829733957b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    alt: "Restaurant interior",
  },
  {
    url: "https://images.unsplash.com/photo-1616671276441-2f2c277b8bf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    alt: "Fine dining presentation",
  },
];

export function Gallery() {
  const [ref, isInView] = useInView();
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-32 px-4 bg-black relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-7xl font-serif bg-gradient-to-br from-emerald-400 to-emerald-600 bg-clip-text text-transparent mb-6">
            {t.gallery.title}
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-rose-600 mx-auto mb-8" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t.gallery.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group cursor-pointer overflow-hidden rounded-2xl border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 ${
                index === 0 ? "md:col-span-2 md:row-span-2" : "aspect-square"
              }`}
              onClick={() => setSelectedImage(index)}
            >
              <ImageWithFallback
                src={image.url}
                alt={image.alt}
                className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                  index === 0 ? "h-full" : ""
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <span className="text-emerald-400 text-lg px-6 py-2 bg-black/50 backdrop-blur-sm rounded-full border border-emerald-500/30">
                  {t.gallery.view}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-emerald-400 transition-colors bg-black/50 backdrop-blur-sm rounded-full p-3 border border-emerald-500/30"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <ImageWithFallback
                src={galleryImages[selectedImage].url}
                alt={galleryImages[selectedImage].alt}
                className="w-full h-auto rounded-2xl border border-emerald-500/30 shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
