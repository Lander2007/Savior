import { motion } from "motion/react";
import { ArrowRight, Award, Sparkles, Star, Utensils, Users } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "../contexts/LanguageContext";
import "../../styles/hero.css";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1679312061521-d7d619a8cfb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400";

const HERO_PATTERN_LIGHT =
  "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%237c3aed' fill-opacity='0.06'%3E%3Cpath d='M36 34c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4 4-1.79 4-4zm0-30c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4 4-1.79 4-4zM6 34c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4 4-1.79 4-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")";

const HERO_PATTERN_DARK =
  "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTMwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHpNNiAzNGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')";

const statsConfig = [
  { icon: Award, valueKey: "hero.stats.years", labelKey: "stat1" as const },
  { icon: Utensils, valueKey: "hero.stats.dishes", labelKey: "stat2" as const },
  { icon: Users, valueKey: "hero.stats.chefs", labelKey: "stat3" as const },
  { icon: Star, valueKey: "hero.stats.rating", labelKey: "stat4" as const },
];

export function HeroFullWidth() {
  const { t, isRTL } = useLanguage();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const textAlign = isRTL ? "text-right" : "text-left";
  const itemsAlign = isRTL ? "items-end" : "items-start";

  return (
    <section
      id="hero"
      className="hero-section relative min-h-screen flex items-center overflow-hidden bg-violet-50 dark:bg-zinc-950"
    >
      {/* Ambient background photo */}
      <img
        src={HERO_IMAGE}
        alt=""
        aria-hidden
        className="hero-bg-image absolute inset-0 h-full w-full scale-105"
        loading="eager"
        decoding="sync"
        fetchPriority="high"
      />

      <div className="hero-overlay absolute inset-0" aria-hidden />

      <div
        className="absolute inset-0 dark:hidden"
        style={{ backgroundImage: HERO_PATTERN_LIGHT }}
        aria-hidden
      />
      <div
        className="absolute inset-0 hidden opacity-25 dark:block"
        style={{ backgroundImage: HERO_PATTERN_DARK }}
        aria-hidden
      />

      <div className="hero-grain pointer-events-none absolute inset-0" aria-hidden />

      <div
        className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-violet-400/20 blur-3xl dark:bg-violet-500/15"
        style={{ willChange: 'transform', contain: 'strict' }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-purple-300/25 blur-3xl dark:bg-indigo-600/20"
        style={{ willChange: 'transform', contain: 'strict' }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-28 sm:px-6 sm:py-32 lg:px-8">
        <div
          className={`grid items-center gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-14 ${
            isRTL ? "lg:[direction:rtl]" : ""
          }`}
        >
          {/* Copy column */}
          <div
            className={`lg:col-span-6 xl:col-span-7 flex flex-col ${itemsAlign} ${
              isRTL ? "lg:order-2" : ""
            }`}
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className={`w-full ${textAlign}`}
            >
              <div
                className={`inline-flex items-center gap-2 rounded-sm border px-3.5 py-1.5 mb-7 bg-violet-100/90 border-violet-200/90 dark:bg-white/10 dark:border-white/20 ${
                  isRTL ? "flex-row-reverse" : ""
                }`}
              >
                <Sparkles className="h-3.5 w-3.5 shrink-0 text-amber-500 dark:text-yellow-300" />
                <span className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-violet-800 dark:text-violet-100">
                  {t.common.michelinRated}
                </span>
              </div>

              <p
                className={`mb-3 text-sm font-medium tracking-[0.2em] uppercase text-violet-600/90 dark:text-violet-200/80 ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {t.hero.subtitle}
              </p>

              <h1
                className={`font-serif font-bold leading-[1.05] tracking-tight text-gray-900 dark:text-white text-5xl sm:text-6xl xl:text-7xl mb-5 ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                <span className="hero-title-accent block sm:inline">
                  {t.hero.title}
                </span>
              </h1>

              <div
                className={`mb-6 h-px w-20 bg-gradient-to-r from-violet-500 to-transparent dark:from-violet-300 ${
                  isRTL ? "mr-auto bg-gradient-to-l" : ""
                }`}
                aria-hidden
              />

              <p
                className={`max-w-xl text-lg leading-relaxed text-gray-600 dark:text-white/85 sm:text-xl mb-10 ${
                  isRTL ? "text-right ml-auto" : "text-left"
                }`}
              >
                {t.hero.description}
              </p>

              <div
                className={`flex flex-col sm:flex-row gap-4 mb-12 ${
                  isRTL ? "sm:flex-row-reverse" : ""
                } ${isRTL ? "items-end sm:items-center" : "items-stretch sm:items-center"}`}
              >
                <Button
                  onClick={() => scrollToSection("reservation")}
                  size="lg"
                  className={`group inline-flex items-center justify-center gap-2 w-full sm:w-auto text-base sm:text-lg px-8 py-6 h-auto shadow-lg shadow-violet-500/20 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white dark:shadow-violet-900/40 ${
                    isRTL ? "flex-row-reverse" : ""
                  }`}
                >
                  {t.hero.cta}
                  <ArrowRight
                    className={`h-5 w-5 transition-transform group-hover:translate-x-1 ${
                      isRTL ? "rotate-180 group-hover:-translate-x-1" : ""
                    }`}
                  />
                </Button>
                <Button
                  onClick={() => scrollToSection("menu")}
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-base sm:text-lg px-8 py-6 h-auto border-2 border-violet-600/80 text-violet-800 hover:bg-violet-50 dark:border-white/35 dark:text-white dark:hover:bg-white/10"
                >
                  {t.nav.viewMenu}
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
                {statsConfig.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.key}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.35 + index * 0.08 }}
                      className="hero-stat-card rounded-xl px-3 py-4 text-center sm:px-4"
                    >
                      <Icon className="mx-auto mb-2 h-5 w-5 text-violet-600 dark:text-violet-300" />
                      <div className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                        {t(stat.valueKey)}
                      </div>
                      <div className="mt-0.5 text-[0.65rem] leading-snug font-medium uppercase tracking-wide text-gray-500 dark:text-white/65 sm:text-xs">
                        {t.about[stat.labelKey]}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Visual column */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`relative lg:col-span-6 xl:col-span-5 ${
              isRTL ? "lg:order-1" : ""
            }`}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="hero-image-frame relative overflow-hidden rounded-2xl aspect-[4/5] sm:aspect-[5/6]">
                <img
                  src={HERO_IMAGE}
                  alt={t.hero.title}
                  className="h-full w-full object-cover object-center"
                  loading="eager"
                  decoding="sync"
                  fetchPriority="high"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-violet-950/50 via-transparent to-transparent dark:from-black/60"
                  aria-hidden
                />
              </div>

              {/* Floating badge — top */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className={`hero-float-badge absolute top-5 rounded-xl px-4 py-3 shadow-lg ${
                  isRTL ? "left-5" : "right-5"
                }`}
              >
                <div
                  className={`flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-100 dark:bg-violet-500/20">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  </div>
                  <div className={isRTL ? "text-right" : "text-left"}>
                    <p className="text-xs font-semibold text-gray-900 dark:text-white">
                      {t("common.starRating")} {t.about.stat4}
                    </p>
                    <p className="text-[0.65rem] text-gray-500 dark:text-white/60">
                      {t.common.michelinRated}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge — bottom */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, duration: 0.5 }}
                className={`hero-float-badge absolute bottom-5 rounded-xl px-4 py-3 shadow-lg ${
                  isRTL ? "right-5" : "left-5"
                }`}
              >
                <p
                  className={`text-[0.65rem] font-bold uppercase tracking-[0.12em] text-violet-600 dark:text-violet-300 ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                >
                  {t.common.curatedMenu}
                </p>
                <p
                  className={`text-sm font-semibold text-gray-900 dark:text-white ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                >
                  {t("hero.stats.dishes")} {t.common.dishes}
                </p>
              </motion.div>

              {/* Decorative ring */}
              <div
                className="pointer-events-none absolute -inset-3 rounded-[1.25rem] border border-violet-300/30 dark:border-white/10"
                aria-hidden
              />
            </div>

            <div
              className={`hero-float-orb pointer-events-none absolute -z-10 h-24 w-24 rounded-full bg-gradient-to-br from-violet-400/40 to-purple-500/30 blur-2xl ${
                isRTL ? "-left-6 bottom-12" : "-right-6 bottom-12"
              }`}
              aria-hidden
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.button
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-violet-600/80 transition-colors hover:text-violet-700 dark:text-white/50 dark:hover:text-white/80"
        aria-label={t.nav.about}
      >
        <span className="text-[0.625rem] font-semibold uppercase tracking-[0.2em]">
          {t.nav.about}
        </span>
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-current">
          <div className="hero-scroll-dot mt-2 h-1.5 w-1.5 rounded-full bg-current" />
        </div>
      </motion.button>
    </section>
  );
}
