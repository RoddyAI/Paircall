import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { useAppStore } from "@/store/appStore";
import { Modal } from "@/components/Modal/Modal";
import { Navbar } from "@/components/Navbar/Navbar";
import { GradientBars } from "@/components/GradientBars/GradientBars";
import { HomeSection } from "@/components/HomeSection/HomeSection";
import { FeaturesSection } from "@/components/FeaturesSection/FeaturesSection";
import { SolutionsSection } from "@/components/SolutionsSection/SolutionsSection";
import { PricingSection } from "@/components/PricingSection/PricingSection";
import { ContactSection } from "@/components/ContactSection/ContactSection";

export default function CallCenterApp() {
  const { currentSection, isModalOpen, modalContent, closeModal } =
    useAppStore();

  const renderSection = () => {
    switch (currentSection) {
      case "home":
        return <HomeSection />;
      case "features":
        return <FeaturesSection />;
      case "solutions":
        return <SolutionsSection />;
      case "pricing":
        return <PricingSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex flex-col items-center px-6 sm:px-8 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-gray-950"></div>
        <GradientBars />
        <Navbar />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 w-full flex items-center justify-center"
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          {isModalOpen && <Modal onClose={closeModal}>{modalContent}</Modal>}
        </AnimatePresence>
      </section>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes pulseBar {
          0% { transform: scaleY(var(--initial-scale, 1)); }
          100% { transform: scaleY(calc(var(--initial-scale, 1) * 1.3)); }
        }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
        }
      `}</style>
    </div>
  );
}
