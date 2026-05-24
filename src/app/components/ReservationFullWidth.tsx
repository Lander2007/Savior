import { useState, FormEvent, ChangeEvent } from "react";
import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { useLanguage } from "../contexts/LanguageContext";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { toast } from "sonner";

export function ReservationFullWidth() {
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

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
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

  return (
    <section
      id="reservation"
      ref={ref}
      className="min-h-screen flex items-center py-24 bg-white dark:bg-zinc-950"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-violet-100 dark:bg-violet-900/20 rounded-full mb-4">
            <span className="text-violet-600 dark:text-violet-400 text-sm font-semibold uppercase tracking-wide">
              {t.common.makeReservation}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            {t.reservation.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t.reservation.subtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto rounded-full mt-4"></div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className={isRTL ? 'text-right block' : ''}>
                    {t.reservation.name}
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={t("reservation.placeholders.name")}
                    className={`h-12 ${isRTL ? 'text-right' : ''}`}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className={isRTL ? 'text-right block' : ''}>
                    {t.reservation.email}
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={t("reservation.placeholders.email")}
                    className={`h-12 ${isRTL ? 'text-right' : ''}`}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className={isRTL ? 'text-right block' : ''}>
                    {t.reservation.phone}
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder={t("reservation.placeholders.phone")}
                    className={`h-12 ${isRTL ? 'text-right' : ''}`}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="guests" className={isRTL ? 'text-right block' : ''}>
                    {t.reservation.guests}
                  </Label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    className={`w-full h-12 px-4 rounded-md bg-background border border-input text-foreground focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 ${isRTL ? 'text-right' : ''}`}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? t.common.guest : t.common.guests}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date" className={isRTL ? 'text-right block' : ''}>
                    {t.reservation.date}
                  </Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time" className={isRTL ? 'text-right block' : ''}>
                    {t.reservation.time}
                  </Label>
                  <Input
                    id="time"
                    name="time"
                    type="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white shadow-lg h-14 text-lg"
              >
                {t.reservation.submit}
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
