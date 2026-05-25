import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const { t } = useLanguage();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-7xl md:text-9xl font-serif bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent mb-12 tracking-wide"
        >
          {t.hero.title}
        </motion.h1>

        <div className="w-80 h-2 bg-white/5 rounded-full overflow-hidden mx-auto border border-purple-500/20">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 via-purple-400 to-purple-600"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-400 mt-8 text-lg tracking-wide"
        >
          {t("loading.tagline")}
        </motion.p>
      </div>
    </motion.div>
  );
}
