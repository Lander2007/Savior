import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { useLanguage } from "../contexts/LanguageContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Award, Star, Utensils } from "lucide-react";

export function ChefFullWidth() {
  const [ref, isInView] = useInView();
  const { t, isRTL } = useLanguage();

  const awards = [
    { icon: Award, label: t.chef.award1 },
    { icon: Star, label: t.chef.award2 },
    { icon: Utensils, label: t.chef.award3 },
  ];

  return (
    <section
      id="chef"
      ref={ref}
      className="min-h-screen flex items-center py-24 bg-white dark:bg-zinc-950"
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
              {t.common.ourChef}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            {t.chef.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={isRTL ? 'lg:order-2' : ''}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1572715376701-98568319fd0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt={t("chef.imageAlt")}
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className={`absolute bottom-8 ${isRTL ? 'right-8 left-8' : 'left-8 right-8'}`}>
                <h3 className={`text-4xl font-serif font-bold bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent mb-2 ${isRTL ? 'text-right' : ''}`}>
                  {t.chef.name}
                </h3>
                <p className={`text-xl text-white/90 ${isRTL ? 'text-right' : ''}`}>{t.chef.role}</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={isRTL ? 'lg:order-1' : ''}
          >
            <h3 className="text-2xl font-serif font-semibold text-gray-900 dark:text-white mb-6">
              {t.common.biography}
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              <p className={isRTL ? 'text-right' : ''}>{t.chef.bio1}</p>
              <p className={isRTL ? 'text-right' : ''}>{t.chef.bio2}</p>
            </div>

            {/* Awards */}
            <div className="grid grid-cols-3 gap-4">
              {awards.map((award, index) => {
                const Icon = award.icon;
                return (
                  <div
                    key={index}
                    className="text-center p-4 rounded-xl bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/10 dark:to-purple-900/10"
                  >
                    <Icon className="h-8 w-8 text-violet-600 dark:text-violet-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">{award.label}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
