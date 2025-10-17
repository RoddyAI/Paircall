import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Menu, X } from "lucide-react";
import { useAppStore } from "@/store/appStore";
import { ContactForm } from "@/components/ContactForm/ContactForm";
import { LanguageToggle } from "@/components/LanguageToggle/LanguageToggle";
import { useTranslation } from "@/hooks/useTranslation";

export const Navbar = () => {
  const { currentSection, setCurrentSection, openModal } = useAppStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const navItems = [
    { id: "home", label: t("home") },
    { id: "features", label: t("features") },
    { id: "solutions", label: t("solutions") },
    { id: "pricing", label: t("pricing") },
    { id: "contact", label: t("contact") },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent py-6 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <motion.div
            className="flex items-center cursor-pointer"
            onClick={() => setCurrentSection("home")}
            whileHover={{ scale: 1.05 }}
          >
            <Phone className="w-6 h-6 text-blue-400 mr-2" />
            <span className="text-white font-bold text-xl tracking-tighter">
              CallCenter AI
            </span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => setCurrentSection(item.id)}
                className={`transition-colors duration-300 ${
                  currentSection === item.id
                    ? "text-white border-b border-blue-400"
                    : "text-gray-300 hover:text-white"
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {item.label}
              </motion.button>
            ))}
            <LanguageToggle />
            <motion.button
              onClick={() => openModal(<ContactForm />)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("getStarted")}
            </motion.button>
          </div>

          <div className="md:hidden flex items-center space-x-3">
            <LanguageToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden mt-4 bg-gray-900 bg-opacity-95 backdrop-blur-sm rounded-lg p-4"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentSection(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`text-left py-2 transition-colors duration-300 ${
                      currentSection === item.id
                        ? "text-white"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={() => {
                    openModal(<ContactForm />);
                    setIsMenuOpen(false);
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition-all duration-300 w-full"
                >
                  {t("getStarted")}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
