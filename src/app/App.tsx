import { useEffect, useState } from "react";
import { Toaster } from "./components/ui/sonner";
import { LoadingScreen } from "./components/LoadingScreen";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { StickyNav } from "./components/layout/StickyNav";
import { HeroFullWidth } from "./components/HeroFullWidth";
import { AboutFullWidth } from "./components/AboutFullWidth";
import { MenuFullWidth } from "./components/MenuFullWidth";
import { ChefFullWidth } from "./components/ChefFullWidth";
import { GalleryFullWidth } from "./components/GalleryFullWidth";
import { TestimonialsFullWidth } from "./components/TestimonialsFullWidth";
import { ReservationFullWidth } from "./components/ReservationFullWidth";
import { FooterFullWidth } from "./components/FooterFullWidth";

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const { t, language } = useLanguage();

  useEffect(() => {
    document.title = t("meta.title");
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", t("meta.description"));
  }, [t, language]);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="scroll-smooth">
      <StickyNav />
      <main>
        <HeroFullWidth />
        <AboutFullWidth />
        <MenuFullWidth />
        <ChefFullWidth />
        <GalleryFullWidth />
        <TestimonialsFullWidth />
        <ReservationFullWidth />
        <FooterFullWidth />
      </main>
      <Toaster />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}
