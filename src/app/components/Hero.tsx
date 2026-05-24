import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../contexts/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  const scrollToReservation = () => {
    const element = document.getElementById("reservation");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="grid lg:grid-cols-2 w-full max-w-7xl mx-auto px-4 gap-12 items-center py-32">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-rose-600/10 border border-emerald-500/20 rounded-full mb-6"
          >
            <span className="text-emerald-400 text-sm">★ Michelin Rated Excellence</span>
          </motion.div>

          <h1 className="text-7xl md:text-8xl lg:text-9xl font-serif bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent mb-6 tracking-tight leading-none">
            {t.hero.title}
          </h1>

          <p className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
            {t.hero.subtitle}
          </p>

          <p className="text-lg text-gray-400 mb-12 max-w-xl leading-relaxed">
            {t.hero.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              onClick={scrollToReservation}
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-lg px-10 py-7 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]"
            >
              {t.hero.cta}
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 text-lg px-10 py-7 rounded-full transition-all duration-300"
            >
              View Menu
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative hidden lg:block"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-rose-600/20 blur-3xl rounded-full"></div>
            <div className="relative rounded-3xl overflow-hidden border border-emerald-500/20 shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1663530761401-15eefb544889?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Gourmet food plating"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-black/90 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-6 shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                  <span className="text-2xl">🍽️</span>
                </div>
                <div>
                  <p className="text-emerald-400 font-semibold">50+ Dishes</p>
                  <p className="text-gray-400 text-sm">Curated Menu</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
