import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { useLanguage } from "../contexts/LanguageContext";
import { Star, Quote } from "lucide-react";

export function TestimonialsFullWidth() {
  const [ref, isInView] = useInView();
  const { t, isRTL } = useLanguage();

  const testimonials = t.testimonials.items;

  return (
    <section
      id="testimonials"
      ref={ref}
      className="min-h-screen flex items-center py-24 bg-gray-50 dark:bg-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-violet-100 dark:bg-violet-900/20 rounded-full mb-4">
            <span className="text-violet-600 dark:text-violet-400 text-sm font-semibold uppercase tracking-wide">
              {t.common.testimonials}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t.testimonials.subtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto rounded-full mt-4"></div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all h-full relative">
                <div className={`absolute top-6 ${isRTL ? 'left-6' : 'right-6'} opacity-10`}>
                  <Quote className="w-16 h-16 text-violet-500" />
                </div>

                <div className={`flex gap-1 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-violet-500 text-violet-500"
                    />
                  ))}
                </div>

                <p className={`text-gray-700 dark:text-gray-300 leading-relaxed mb-8 ${isRTL ? 'text-right' : ''}`}>
                  "{testimonial.text}"
                </p>

                <div className="border-t border-gray-200 dark:border-zinc-700 pt-6">
                  <p className={`text-violet-600 dark:text-violet-400 font-semibold text-lg ${isRTL ? 'text-right' : ''}`}>
                    {testimonial.name}
                  </p>
                  <p className={`text-sm text-gray-500 dark:text-gray-400 ${isRTL ? 'text-right' : ''}`}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
