import { useState } from "react";
import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { useLanguage } from "../contexts/LanguageContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function MenuFullWidth() {
  const [ref, isInView] = useInView();
  const { t, isRTL } = useLanguage();
  type MenuCategory = "starters" | "mains" | "desserts" | "drinks";

  const [activeCategory, setActiveCategory] = useState<MenuCategory>("starters");

  const categories: Record<MenuCategory, string> = {
    starters: t.menu.starters,
    mains: t.menu.mains,
    desserts: t.menu.desserts,
    drinks: t.menu.drinks,
  };

  const menuData: Record<
    MenuCategory,
    { name: string; description: string; price: string; image: string }[]
  > = {
    starters: [
      {
        name: t.menu.items.searedScallops,
        description: t.menu.items.searedScallopsDesc,
        price: t.menu.items.searedScallopsPrice,
        image: "https://images.unsplash.com/photo-1676471926534-d5c9771909fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      },
      {
        name: t.menu.items.truffleSoup,
        description: t.menu.items.truffleSoupDesc,
        price: t.menu.items.truffleSoupPrice,
        image: "https://images.unsplash.com/photo-1616671285410-2a676a9a433d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      },
      {
        name: t.menu.items.tunaTartare,
        description: t.menu.items.tunaTartareDesc,
        price: t.menu.items.tunaTartarePrice,
        image: "https://images.unsplash.com/photo-1689672235501-6dc1e56d454c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      },
    ],
    mains: [
      {
        name: t.menu.items.wagyuBeef,
        description: t.menu.items.wagyuBeefDesc,
        price: t.menu.items.wagyuBeefPrice,
        image: "https://images.unsplash.com/photo-1621494268492-d01b98eba7e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      },
      {
        name: t.menu.items.seaBass,
        description: t.menu.items.seaBassDesc,
        price: t.menu.items.seaBassPrice,
        image: "https://images.unsplash.com/photo-1565895405140-6b9830a88c19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      },
      {
        name: t.menu.items.duckConfit,
        description: t.menu.items.duckConfitDesc,
        price: t.menu.items.duckConfitPrice,
        image: "https://images.unsplash.com/photo-1565895405227-31cffbe0cf86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      },
    ],
    desserts: [
      {
        name: t.menu.items.chocolateCake,
        description: t.menu.items.chocolateCakeDesc,
        price: t.menu.items.chocolateCakePrice,
        image: "https://images.unsplash.com/photo-1673912402587-57ac40f1b4a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      },
      {
        name: t.menu.items.cremeBrulee,
        description: t.menu.items.cremeBruleeDesc,
        price: t.menu.items.cremeBruleePrice,
        image: "https://images.unsplash.com/photo-1761138785146-7b5ad15851b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      },
      {
        name: t.menu.items.pistachioEclair,
        description: t.menu.items.pistachioEclairDesc,
        price: t.menu.items.pistachioEclairPrice,
        image: "https://images.unsplash.com/photo-1759277513461-41fde7d24083?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      },
    ],
    drinks: [
      {
        name: t.menu.items.savoriaSignature,
        description: t.menu.items.savoriaSignatureDesc,
        price: t.menu.items.savoriaSignaturePrice,
        image: "https://images.unsplash.com/photo-1500217052183-bc01eee1a74e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      },
      {
        name: t.menu.items.elderflowerMartini,
        description: t.menu.items.elderflowerMartiniDesc,
        price: t.menu.items.elderflowerMartiniPrice,
        image: "https://images.unsplash.com/photo-1605270012917-bf157c5a9541?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      },
      {
        name: t.menu.items.goldenHour,
        description: t.menu.items.goldenHourDesc,
        price: t.menu.items.goldenHourPrice,
        image: "https://images.unsplash.com/photo-1607622750671-6cd9a99eabd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      },
    ],
  };

  return (
    <section
      id="menu"
      ref={ref}
      className="min-h-screen py-24 bg-gray-50 dark:bg-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-violet-100 dark:bg-violet-900/20 rounded-full mb-4">
            <span className="text-violet-600 dark:text-violet-400 text-sm font-semibold uppercase tracking-wide">
              {t.common.ourMenu}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            {t.menu.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t.menu.subtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto rounded-full mt-4"></div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`flex flex-wrap justify-center gap-3 mb-12 ${isRTL ? 'flex-row-reverse' : ''}`}
        >
          {Object.entries(categories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === key
                  ? "bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg scale-105"
                  : "bg-white dark:bg-zinc-800 text-gray-700 dark:text-gray-300 hover:shadow-md"
              }`}
            >
              {label}
            </button>
          ))}
        </motion.div>

        {/* Menu Items Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuData[activeCategory as keyof typeof menuData].map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} bg-violet-500 text-white px-4 py-2 rounded-full text-lg font-bold shadow-lg`}>
                    {item.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className={`text-xl font-semibold text-gray-900 dark:text-white mb-2 ${isRTL ? 'text-right' : ''}`}>
                    {item.name}
                  </h3>
                  <p className={`text-gray-600 dark:text-gray-400 ${isRTL ? 'text-right' : ''}`}>
                    {item.description}
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
