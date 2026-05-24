import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { useLanguage } from "../contexts/LanguageContext";
import { Card } from "./ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Food Critic",
    text: "Savoria redefines fine dining with its impeccable attention to detail and extraordinary flavors. Every dish is a masterpiece that tells a story. Truly unforgettable!",
    rating: 5,
  },
  {
    name: "James Richardson",
    role: "Wine Enthusiast",
    text: "The perfect harmony between cuisine and ambiance. The chef's creativity shines through in every course, and the service is nothing short of exceptional.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "Travel Blogger",
    text: "An extraordinary culinary journey from start to finish. The presentation is stunning, the flavors are divine, and the atmosphere is pure elegance. A must-visit!",
    rating: 5,
  },
];

export function Testimonials() {
  const [ref, isInView] = useInView();
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-32 px-4 bg-gradient-to-b from-black via-zinc-950 to-black relative overflow-hidden" ref={ref}>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-rose-600/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-7xl font-serif bg-gradient-to-br from-emerald-400 to-emerald-600 bg-clip-text text-transparent mb-6">
            {t.testimonials.title}
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-rose-600 mx-auto mb-8" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-8 bg-gradient-to-br from-zinc-900 to-black border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 h-full relative overflow-hidden group">
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-16 h-16 text-emerald-500" />
                </div>

                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-emerald-500 text-emerald-500"
                    />
                  ))}
                </div>

                <p className="text-gray-300 text-lg mb-8 leading-relaxed relative z-10">
                  "{testimonial.text}"
                </p>

                <div className="border-t border-emerald-500/20 pt-6">
                  <p className="text-emerald-400 text-lg font-serif">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
