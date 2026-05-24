import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { useLanguage } from "../contexts/LanguageContext";
import { Award, Star, Users, Utensils } from "lucide-react";

export function About() {
  const [ref, isInView] = useInView();
  const { t } = useLanguage();

  return (
    <section id="about" className="py-32 px-4 bg-gradient-to-b from-black via-zinc-950 to-black relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-rose-600/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-5 gap-12 items-start"
        >
          <div className="lg:col-span-2 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-6xl md:text-7xl font-serif bg-gradient-to-br from-emerald-400 to-emerald-600 bg-clip-text text-transparent mb-6 leading-tight">
                {t.about.title}
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-rose-600 mb-8" />

              <div className="grid grid-cols-2 gap-4 mt-12">
                <div className="bg-gradient-to-br from-emerald-500/10 to-transparent p-6 rounded-2xl border border-emerald-500/20 backdrop-blur-sm">
                  <Award className="w-8 h-8 text-emerald-400 mb-3" />
                  <h3 className="text-3xl font-serif text-emerald-400 mb-1">10+</h3>
                  <p className="text-gray-400 text-sm">{t.about.stat1}</p>
                </div>
                <div className="bg-gradient-to-br from-emerald-500/10 to-transparent p-6 rounded-2xl border border-emerald-500/20 backdrop-blur-sm">
                  <Utensils className="w-8 h-8 text-emerald-400 mb-3" />
                  <h3 className="text-3xl font-serif text-emerald-400 mb-1">50+</h3>
                  <p className="text-gray-400 text-sm">{t.about.stat2}</p>
                </div>
                <div className="bg-gradient-to-br from-emerald-500/10 to-transparent p-6 rounded-2xl border border-emerald-500/20 backdrop-blur-sm">
                  <Users className="w-8 h-8 text-emerald-400 mb-3" />
                  <h3 className="text-3xl font-serif text-emerald-400 mb-1">15</h3>
                  <p className="text-gray-400 text-sm">{t.about.stat3}</p>
                </div>
                <div className="bg-gradient-to-br from-emerald-500/10 to-transparent p-6 rounded-2xl border border-emerald-500/20 backdrop-blur-sm">
                  <Star className="w-8 h-8 text-emerald-400 mb-3" />
                  <h3 className="text-3xl font-serif text-emerald-400 mb-1">5★</h3>
                  <p className="text-gray-400 text-sm">{t.about.stat4}</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3 space-y-8"
          >
            <p className="text-gray-300 text-xl leading-relaxed">
              {t.about.p1}
            </p>
            <p className="text-gray-300 text-xl leading-relaxed">
              {t.about.p2}
            </p>
            <p className="text-gray-300 text-xl leading-relaxed">
              {t.about.p3}
            </p>

            <div className="relative mt-12 p-8 bg-gradient-to-br from-emerald-500/5 to-rose-600/5 border border-emerald-500/20 rounded-3xl backdrop-blur-sm">
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                ✨
              </div>
              <p className="text-gray-300 text-lg italic leading-relaxed mt-4">
                "At Savoria, we don't just serve food—we craft experiences that celebrate the art of gastronomy, creating moments of pure delight with every carefully prepared dish."
              </p>
              <p className="text-emerald-400 mt-4">— Chef Marco Bennetti</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
