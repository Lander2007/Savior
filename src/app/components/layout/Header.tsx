import { useState } from "react";
import { Moon, Sun, Languages, Bell, User, Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { useLanguage } from "../../contexts/LanguageContext";
import { useTheme } from "../../contexts/ThemeContext";
import { cn } from "../ui/utils";
import { Avatar, AvatarFallback } from "../ui/avatar";

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function Header({ activeSection }: HeaderProps) {
  const { language, setLanguage, t, isRTL } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  return (
    <header className={cn(
      "fixed top-0 z-30 w-full bg-background/80 backdrop-blur-lg border-b border-border",
      "md:pl-64",
      isRTL && "md:pl-0 md:pr-64"
    )}>
      <div className="flex items-center justify-between h-20 px-4 sm:px-6">
        <h1 className="md:hidden text-xl font-serif bg-gradient-to-r from-violet-500 to-purple-600 bg-clip-text text-transparent">
          {t.hero.title}
        </h1>

        <div className={cn("flex items-center gap-2", isRTL && "flex-row-reverse")}>
          <Button variant="ghost" size="icon" onClick={toggleLanguage} className="text-muted-foreground hover:text-primary">
            <Languages className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="text-muted-foreground hover:text-primary">
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-violet-500 rounded-full" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-gradient-to-br from-violet-500 to-purple-600 text-white">
                <User className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
          </Button>
        </div>
      </div>
    </header>
  );
}
