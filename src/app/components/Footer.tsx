import { useLanguage } from "../contexts/LanguageContext";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  const { t, isRTL } = useLanguage();

  return (
    <footer id="contact" className="bg-black border-t border-emerald-500/20 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 py-20 relative">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-4xl font-serif bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent mb-4">
              {t.hero.title}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h4 className="text-xl text-emerald-400 mb-6 font-serif">{t.footer.contact}</h4>
            <div className="space-y-4">
              <div className={`flex items-start gap-3 text-gray-400 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                <MapPin className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <span>{t.footer.address.split('\n')[0]}<br />{t.footer.address.split('\n')[1]}</span>
              </div>
              <div className={`flex items-center gap-3 text-gray-400 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className={`flex items-center gap-3 text-gray-400 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>hello@savoria.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl text-emerald-400 mb-6 font-serif">{t.footer.hours}</h4>
            <div className="space-y-3 text-gray-400">
              <div className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                <Clock className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <p>{t.footer.mondayThursday}</p>
                  <p className="text-sm text-gray-500">5:00 PM - 10:00 PM</p>
                </div>
              </div>
              <div className={`${isRTL ? 'text-right pr-8' : 'pl-8'}`}>
                <p>{t.footer.fridaySaturday}</p>
                <p className="text-sm text-gray-500">5:00 PM - 11:00 PM</p>
              </div>
              <div className={`${isRTL ? 'text-right pr-8' : 'pl-8'}`}>
                <p>{t.footer.sunday}</p>
                <p className="text-sm text-gray-500">4:00 PM - 9:00 PM</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl text-emerald-400 mb-6 font-serif">{t.footer.follow}</h4>
            <div className={`flex gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/30 flex items-center justify-center hover:bg-gradient-to-br hover:from-emerald-500 hover:to-emerald-600 hover:border-emerald-500 transition-all duration-300 group"
              >
                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/30 flex items-center justify-center hover:bg-gradient-to-br hover:from-emerald-500 hover:to-emerald-600 hover:border-emerald-500 transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/30 flex items-center justify-center hover:bg-gradient-to-br hover:from-emerald-500 hover:to-emerald-600 hover:border-emerald-500 transition-all duration-300 group"
              >
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-6">
              {t.footer.followDesc}
            </p>
          </div>
        </div>

        <div className="border-t border-emerald-500/20 pt-10 text-center text-gray-500">
          <p>&copy; {t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
