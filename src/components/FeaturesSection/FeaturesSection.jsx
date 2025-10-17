import { useState } from "react";
import { motion } from "motion/react";
import { Mic, Users, BarChart3, Play } from "lucide-react";
import { useAppStore } from "@/store/appStore";
import { ContactForm } from "@/components/ContactForm/ContactForm";
import { renderAnimation } from "./FeatureAnimations";

export const FeaturesSection = () => {
  const { openModal } = useAppStore();
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const features = [
    {
      id: "voice",
      icon: <Mic className="w-12 h-12 text-blue-400" />,
      title: "AI Voice Interviews",
      description:
        "Automated candidate screening with natural conversation flow",
      animation: "waveform",
      demo: "voice-interview",
    },
    {
      id: "training",
      icon: <Users className="w-12 h-12 text-green-400" />,
      title: "Agent Training",
      description: "Level-based skill development with real-time feedback",
      animation: "progress",
      demo: "training-module",
    },
    {
      id: "scorecards",
      icon: <BarChart3 className="w-12 h-12 text-purple-400" />,
      title: "Smart Scorecards",
      description: "AI-generated comprehensive candidate evaluation reports",
      animation: "chart",
      demo: "scorecard-sample",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6">
      <h2 className="text-white font-bold text-[clamp(2rem,6vw,3rem)] mb-6 text-center">
        Powerful Features
      </h2>
      <p className="text-gray-300 text-lg mb-12 text-center max-w-2xl">
        Experience the future of call center hiring and training with our
        AI-powered platform
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {features.map((feature) => (
          <motion.div
            key={feature.id}
            className="bg-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center cursor-pointer"
            whileHover={{ scale: 1.02 }}
            onMouseEnter={() => setHoveredFeature(feature.id)}
            onMouseLeave={() => setHoveredFeature(null)}
            onClick={() =>
              openModal(
                <div className="text-center">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-white font-semibold text-xl mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <div className="bg-gray-800 rounded-lg p-4 mb-4">
                    <div className="text-sm text-gray-400 mb-2">
                      Interactive Demo:
                    </div>
                    {renderAnimation(feature.animation, true)}
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors">
                    Try Full Demo
                  </button>
                </div>,
              )
            }
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-white font-semibold text-xl mb-3">
              {feature.title}
            </h3>
            <div className="mb-4">
              {renderAnimation(
                feature.animation,
                hoveredFeature === feature.id,
              )}
            </div>
            <p className="text-gray-400 text-sm mb-4">{feature.description}</p>
            <div className="text-blue-400 text-sm flex items-center justify-center">
              Try Demo <Play size={16} className="ml-2" />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => openModal(<ContactForm />)}
        className="mt-12 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors"
      >
        Book a Demo
      </motion.button>
    </div>
  );
};
