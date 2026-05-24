import { useState } from "react";
import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { useLanguage } from "../contexts/LanguageContext";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

type MenuItem = {
  name: string;
  description: string;
  price: string;
  image: string;
};

const menuDataEN = {
  Starters: [
    {
      name: "Seared Scallops",
      description: "With citrus beurre blanc and microgreens",
      price: "$28",
      image: "https://images.unsplash.com/photo-1676471926534-d5c9771909fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    },
    {
      name: "Truffle Mushroom Soup",
      description: "Wild mushrooms, truffle oil, crispy shallots",
      price: "$18",
      image: "https://images.unsplash.com/photo-1616671285410-2a676a9a433d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    },
    {
      name: "Tuna Tartare",
      description: "Fresh tuna, avocado, sesame, wasabi aioli",
      price: "$24",
      image: "https://images.unsplash.com/photo-1689672235501-6dc1e56d454c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    },
  ],
  "Main Courses": [
    {
      name: "Wagyu Beef Tenderloin",
      description: "With roasted vegetables and red wine reduction",
      price: "$68",
      image: "https://images.unsplash.com/photo-1621494268492-d01b98eba7e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    },
    {
      name: "Pan-Seared Sea Bass",
      description: "Seasonal vegetables, lemon butter sauce",
      price: "$52",
      image: "https://images.unsplash.com/photo-1565895405140-6b9830a88c19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    },
    {
      name: "Duck Confit",
      description: "Crispy duck leg, berry compote, potato gratin",
      price: "$48",
      image: "https://images.unsplash.com/photo-1565895405227-31cffbe0cf86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    },
  ],
  Desserts: [
    {
      name: "Chocolate Lava Cake",
      description: "Molten chocolate center, vanilla ice cream",
      price: "$16",
      image: "https://images.unsplash.com/photo-1673912402587-57ac40f1b4a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    },
    {
      name: "Crème Brûlée",
      description: "Classic French custard with caramelized sugar",
      price: "$14",
      image: "https://images.unsplash.com/photo-1761138785146-7b5ad15851b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    },
    {
      name: "Pistachio Éclair",
      description: "Delicate pastry with pistachio cream filling",
      price: "$15",
      image: "https://images.unsplash.com/photo-1759277513461-41fde7d24083?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    },
  ],
  Drinks: [
    {
      name: "Savoria Signature",
      description: "Whiskey, honey, orange bitters, smoked rosemary",
      price: "$18",
      image: "https://images.unsplash.com/photo-1500217052183-bc01eee1a74e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    },
    {
      name: "Elderflower Martini",
      description: "Gin, elderflower, prosecco, fresh lemon",
      price: "$16",
      image: "https://images.unsplash.com/photo-1605270012917-bf157c5a9541?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    },
    {
      name: "Golden Hour",
      description: "Champagne, peach purée, gold flakes",
      price: "$20",
      image: "https://images.unsplash.com/photo-1607622750671-6cd9a99eabd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    },
  ],
};

export function Menu() {
  const [ref, isInView] = useInView();
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("Starters");

  const categories = {
    Starters: t.menu.starters,
    "Main Courses": t.menu.mains,
    Desserts: t.menu.desserts,
    Drinks: t.menu.drinks,
  };

  return (
    <section id="menu" className="py-32 px-4 bg-black relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-7xl font-serif bg-gradient-to-br from-emerald-400 to-emerald-600 bg-clip-text text-transparent mb-6">
            {t.menu.title}
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-rose-600 mx-auto mb-8" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t.menu.subtitle}
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {Object.entries(categories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-8 py-4 rounded-full transition-all duration-300 ${
                activeCategory === key
                  ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-emerald-400 border border-emerald-500/20"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuDataEN[activeCategory as keyof typeof menuDataEN].map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden bg-gradient-to-br from-zinc-900 to-black border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                <div className="relative h-72 overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-2 rounded-full shadow-lg">
                    {item.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl text-emerald-400 mb-2 font-serif">{item.name}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
