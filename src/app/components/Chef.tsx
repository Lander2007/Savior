import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { useLanguage } from "../contexts/LanguageContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Award, Star, Utensils } from "lucide-react";

export function Chef() {
  const [ref, isInView] = useInView();
  const { t } = useLanguage();

  return (
    <section id="chef" className="py-32 px-4 bg-gradient-to-b from-black via-zinc-950 to-black relative overflow-hidden" ref={ref}>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-rose-600/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-7xl font-serif bg-gradient-to-br from-emerald-400 to-emerald-600 bg-clip-text text-transparent mb-6">
            {t.chef.title}
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-rose-600 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-rose-600/20 blur-2xl rounded-3xl"></div>
            <div className="relative overflow-hidden rounded-3xl border border-emerald-500/20">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1572715376701-98568319fd0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Executive Chef Marco Bennetti"
                className="w-full h-[700px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-5xl font-serif bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent mb-2">
                  {t.chef.name}
                </h3>
                <p className="text-2xl text-gray-300">{t.chef.role}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <p className="text-gray-300 text-xl leading-relaxed">
              {t.chef.bio1}
            </p>

            <p className="text-gray-300 text-xl leading-relaxed">
              {t.chef.bio2}
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center p-6 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-2xl border border-emerald-500/20 backdrop-blur-sm">
                <Award className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
                <p className="text-emerald-400 font-serif text-lg mb-1">{t.chef.award1}</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-2xl border border-emerald-500/20 backdrop-blur-sm">
                <Star className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
                <p className="text-emerald-400 font-serif text-lg mb-1">{t.chef.award2}</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-2xl border border-emerald-500/20 backdrop-blur-sm">
                <Utensils className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
                <p className="text-emerald-400 font-serif text-lg mb-1">{t.chef.award3}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
