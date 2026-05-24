import { useState, ReactNode } from "react";
import { Sidebar } from "../components/layout/Sidebar";
import { Header } from "../components/layout/Header";
import { useLanguage } from "../contexts/LanguageContext";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { isRTL } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 transition-colors duration-300">
      {/* Sidebar */}
      <Sidebar
        activeSection={activeSection}
        onNavigate={setActiveSection}
      />

      {/* Main Content Area */}
      <div
        className={`transition-all duration-300 ${
          isRTL ? 'md:mr-64' : 'md:ml-64'
        }`}
      >
        {/* Header */}
        <Header activeSection={activeSection} onNavigate={setActiveSection} />

        {/* Page Content */}
        <main className="p-6 overflow-y-auto pt-24">
          {children}
        </main>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
