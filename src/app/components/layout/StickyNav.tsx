import { useCallback, useEffect, useMemo, useState } from "react";
import { Languages, Menu, Moon, Sun, X } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { useTheme } from "../../contexts/ThemeContext";
import "../../../styles/nav.css";

const SECTION_IDS = [
  "hero",
  "about",
  "menu",
  "chef",
  "gallery",
  "testimonials",
] as const;

export function StickyNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t, isRTL } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const navLinks = useMemo(
    () => [
      { label: t.nav.home, id: "hero" },
      { label: t.nav.about, id: "about" },
      { label: t.nav.menu, id: "menu" },
      { label: t.nav.chef, id: "chef" },
      { label: t.nav.gallery, id: "gallery" },
      { label: t.nav.testimonials, id: "testimonials" },
    ],
    [t]
  );

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      setIsScrolled(scrollTop > 40);
      setScrollProgress(
        maxScroll > 0 ? Math.min(1, scrollTop / maxScroll) : 0
      );
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    updateScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = SECTION_IDS.map((id) =>
      document.getElementById(id)
    ).filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-42% 0px -48% 0px", threshold: [0, 0.15, 0.35] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  }, []);

  const linkTone = isScrolled
    ? "text-gray-600 dark:text-gray-300 hover:text-violet-700 dark:hover:text-violet-300"
    : theme === "dark"
      ? "text-white/90 hover:text-white"
      : "text-gray-700 hover:text-violet-700";

  const iconTone = isScrolled
    ? "text-gray-700 dark:text-gray-300"
    : theme === "dark"
      ? "text-white"
      : "text-gray-700";

  return (
    <>
      <nav
        className={`site-nav${isScrolled ? " site-nav--scrolled" : ""}`}
        aria-label={t("a11y.mainNav")}
      >
        <div
          className="site-nav__progress"
          style={{ width: `${scrollProgress * 100}%` }}
          aria-hidden
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className={`site-nav__inner ${isRTL ? "flex-row-reverse" : ""}`}
          >
            <button
              type="button"
              onClick={() => scrollToSection("hero")}
              className="site-nav__logo shrink-0"
            >
              {t.hero.title}
            </button>

            <div
              className={`site-nav__links ${isRTL ? "flex-row-reverse" : ""}`}
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    className={`site-nav__link ${
                      isActive ? "site-nav__link--active" : linkTone
                    }`}
                  >
                    {isActive && (
                      <span className="site-nav__link-dot" aria-hidden />
                    )}
                    {link.label}
                  </button>
                );
              })}
            </div>

            <div
              className={`site-nav__actions ${isRTL ? "flex-row-reverse" : ""}`}
            >
              <button
                type="button"
                className={`site-nav__icon-btn lg:hidden ${iconTone}`}
                onClick={() => setIsMobileMenuOpen((open) => !open)}
                aria-expanded={isMobileMenuOpen}
                aria-label={
                  isMobileMenuOpen ? t("a11y.closeMenu") : t("a11y.openMenu")
                }
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>

              <button
                type="button"
                className={`site-nav__icon-btn ${iconTone}`}
                onClick={toggleLanguage}
                aria-label={t("a11y.toggleLanguage")}
              >
                <Languages className="h-5 w-5" />
              </button>

              <button
                type="button"
                className={`site-nav__icon-btn ${iconTone}`}
                onClick={toggleTheme}
                aria-label={t("a11y.toggleTheme")}
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>

              <button
                type="button"
                className="site-nav__cta"
                onClick={() => scrollToSection("reservation")}
              >
                {t.nav.bookTable}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <>
            <button
              type="button"
              className="site-nav__backdrop lg:hidden"
              aria-label={t("a11y.closeMenu")}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div className="site-nav__drawer lg:hidden">
              <div className="space-y-1 px-4 py-3">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <button
                      key={link.id}
                      type="button"
                      onClick={() => scrollToSection(link.id)}
                      className={`site-nav__drawer-link text-gray-700 dark:text-gray-200 ${
                        isActive ? "site-nav__drawer-link--active" : ""
                      }`}
                    >
                      {link.label}
                    </button>
                  );
                })}
                <button
                  type="button"
                  onClick={() => scrollToSection("reservation")}
                  className="site-nav__cta site-nav__drawer-cta"
                >
                  {t.nav.bookTable}
                </button>
              </div>
            </div>
          </>
        )}
      </nav>
    </>
  );
}
