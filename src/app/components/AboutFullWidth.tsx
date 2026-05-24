import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { useLanguage } from "../contexts/LanguageContext";
import { Award, Star, Users, Utensils } from "lucide-react";

export function AboutFullWidth() {
  const [ref, isInView] = useInView();
  const { t, isRTL } = useLanguage();

  const stats = [
    { icon: Award, label: t.about.stat1, value: "10+" },
    { icon: Utensils, label: t.about.stat2, value: "50+" },
    { icon: Users, label: t.about.stat3, value: "15" },
    { icon: Star, label: t.about.stat4, value: "5★" },
  ];

  return (
    <section
      id="about"
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
              {t.common.aboutUs}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            {t.about.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/10 dark:to-purple-900/10 hover:shadow-lg transition-shadow"
              >
                <Icon className="h-10 w-10 text-violet-600 dark:text-violet-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={isRTL ? 'lg:order-2' : ''}
          >
            <h3 className="text-2xl font-serif font-semibold text-gray-900 dark:text-white mb-6">
              {t.common.ourStory}
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>
          </motion.div>

          {/* Image/Quote Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={isRTL ? 'lg:order-1' : ''}
          >
            <div className="relative rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 p-8 text-white shadow-2xl">
              <div className="text-6xl mb-4 opacity-50">"</div>
              <p className="text-xl italic mb-6 leading-relaxed">
                {t("about.quote")}
              </p>
              <div className={`flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-2xl">
                  👨‍🍳
                </div>
                <div className={isRTL ? "text-right" : "text-left"}>
                  <div className="font-semibold">{t("about.quoteAuthor")}</div>
                  <div className="text-sm text-white/80">{t.chef.role}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
