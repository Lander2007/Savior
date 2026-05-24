import { useState } from "react";
import { 
  Home, 
  Info, 
  UtensilsCrossed, 
  ChefHat, 
  Images, 
  MessageSquare, 
  Calendar,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Button } from "../ui/button";
import { useLanguage } from "../../contexts/LanguageContext";
import { cn } from "../ui/utils";

interface SidebarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function Sidebar({ activeSection, onNavigate }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { t, isRTL } = useLanguage();

  const navItems = [
    { id: "hero", label: t.nav.home, icon: Home },
    { id: "about", label: t.nav.about, icon: Info },
    { id: "menu", label: t.nav.menu, icon: UtensilsCrossed },
    { id: "chef", label: t.nav.chef, icon: ChefHat },
    { id: "gallery", label: t.nav.gallery, icon: Images },
    { id: "testimonials", label: t.nav.testimonials, icon: MessageSquare },
    { id: "reservation", label: t.nav.contact, icon: Calendar },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      onNavigate(id);
    }
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={cn(
          "hidden md:flex fixed top-0 bottom-0 z-40 flex-col bg-card border-r border-border transition-all duration-300",
          isCollapsed ? "w-20" : "w-64",
          isRTL ? "right-0 border-l border-r-0" : "left-0"
        )}
      >
        {/* Logo */}
        <div className="h-20 flex items-center justify-between px-6 border-b border-border">
          {!isCollapsed && (
            <h1 className="text-2xl font-serif bg-gradient-to-r from-violet-500 to-purple-600 bg-clip-text text-transparent">
              {t.hero.title}
            </h1>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={cn(
              "text-muted-foreground hover:text-primary",
              isCollapsed && "mx-auto"
            )}
          >
            {isRTL ? (
              isCollapsed ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />
            ) : (
              isCollapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-6 px-3">
          <div className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:bg-accent hover:text-primary",
                    isCollapsed && "justify-center",
                    isRTL && "flex-row-reverse"
                  )}
                  title={isCollapsed ? item.label : undefined}
                >
                  <Icon className={cn("h-5 w-5 flex-shrink-0", isActive && "animate-pulse")} />
                  {!isCollapsed && (
                    <span className="text-sm font-medium">{item.label}</span>
                  )}
                  {!isCollapsed && isActive && (
                    <div className={cn(
                      "ml-auto w-1.5 h-1.5 rounded-full bg-primary-foreground",
                      isRTL && "mr-auto ml-0"
                    )} />
                  )}
                </button>
              );
            })}
          </div>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-border">
          {!isCollapsed && (
            <div className="text-xs text-muted-foreground text-center">
              <p>© 2026 {t.hero.title}</p>
            </div>
          )}
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      <div className="md:hidden">
        {/* This will be handled by the mobile menu in the header */}
      </div>
    </>
  );
}
