import { useState } from "react";
import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { useLanguage } from "../contexts/LanguageContext";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card } from "./ui/card";
import { Calendar, Clock, Users } from "lucide-react";
import { toast } from "sonner";

export function Reservation() {
  const [ref, isInView] = useInView();
  const { t, isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t.reservation.success);
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "2",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="reservation" className="py-32 px-4 bg-black relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-emerald-500/10 to-rose-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-7xl font-serif bg-gradient-to-br from-emerald-400 to-emerald-600 bg-clip-text text-transparent mb-6">
            {t.reservation.title}
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-rose-600 mx-auto mb-8" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t.reservation.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="p-10 bg-gradient-to-br from-zinc-900/80 to-black/80 border-emerald-500/30 backdrop-blur-xl shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-gray-300 mb-3 block text-base">
                    {t.reservation.name}
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-emerald-500/30 text-white focus:border-emerald-500 h-12 text-base"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-300 mb-3 block text-base">
                    {t.reservation.email}
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-emerald-500/30 text-white focus:border-emerald-500 h-12 text-base"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone" className="text-gray-300 mb-3 block text-base">
                  {t.reservation.phone}
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border-emerald-500/30 text-white focus:border-emerald-500 h-12 text-base"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <Label htmlFor="date" className={`text-gray-300 mb-3 block flex items-center gap-2 text-base ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <Calendar className="w-5 h-5" />
                    {t.reservation.date}
                  </Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-emerald-500/30 text-white focus:border-emerald-500 h-12 text-base"
                  />
                </div>
                <div>
                  <Label htmlFor="time" className={`text-gray-300 mb-3 block flex items-center gap-2 text-base ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <Clock className="w-5 h-5" />
                    {t.reservation.time}
                  </Label>
                  <Input
                    id="time"
                    name="time"
                    type="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-emerald-500/30 text-white focus:border-emerald-500 h-12 text-base"
                  />
                </div>
                <div>
                  <Label htmlFor="guests" className={`text-gray-300 mb-3 block flex items-center gap-2 text-base ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <Users className="w-5 h-5" />
                    {t.reservation.guests}
                  </Label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    className="w-full h-12 px-4 rounded-md bg-white/5 border border-emerald-500/30 text-white focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-base"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <option key={num} value={num} className="bg-zinc-900">
                        {num} {num === 1 ? t.reservation.guest : t.reservation.guests}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-lg h-14 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
              >
                {t.reservation.submit}
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
