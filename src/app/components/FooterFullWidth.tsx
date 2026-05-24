import { useLanguage } from "../contexts/LanguageContext";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

export function FooterFullWidth() {
  const { t, isRTL } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className={`text-3xl font-serif bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent mb-4 ${isRTL ? 'text-right' : ''}`}>
              {t.hero.title}
            </h3>
            <p className={`text-gray-400 leading-relaxed ${isRTL ? 'text-right' : ''}`}>
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-lg font-semibold mb-4 ${isRTL ? 'text-right' : ''}`}>
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2">
              {[
                { label: t.nav.home, id: "hero" },
                { label: t.nav.about, id: "about" },
                { label: t.nav.menu, id: "menu" },
                { label: t.nav.chef, id: "chef" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className={`text-gray-400 hover:text-violet-400 transition-colors ${isRTL ? 'text-right block w-full' : ''}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className={`text-lg font-semibold mb-4 ${isRTL ? 'text-right' : ''}`}>
              {t.footer.contact}
            </h4>
            <ul className="space-y-3">
              <li className={`flex items-start gap-3 text-gray-400 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                <MapPin className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                <span>{t.footer.address.split('\n').join(', ')}</span>
              </li>
              <li className={`flex items-center gap-3 text-gray-400 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Phone className="w-5 h-5 text-violet-400 flex-shrink-0" />
                <span>{t("footer.phone")}</span>
              </li>
              <li className={`flex items-center gap-3 text-gray-400 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Mail className="w-5 h-5 text-violet-400 flex-shrink-0" />
                <span>{t("footer.email")}</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className={`text-lg font-semibold mb-4 ${isRTL ? 'text-right' : ''}`}>
              {t.footer.follow}
            </h4>
            <p className={`text-gray-400 mb-4 ${isRTL ? 'text-right' : ''}`}>
              {t.footer.followDesc}
            </p>
            <div className={`flex gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-violet-500 transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-violet-500 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-violet-500 transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <p className={`text-center text-gray-400 text-sm ${isRTL ? 'text-right' : ''}`}>
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
