import { useState } from "react";
import { motion } from "motion/react";
import { Target, Users, Check, ChevronRight } from "lucide-react";
import { useAppStore } from "@/store/appStore";
import { ContactForm } from "@/components/ContactForm/ContactForm";

export const SolutionsSection = () => {
  const { openModal } = useAppStore();
  const [selectedSide, setSelectedSide] = useState(null);

  return (
    <div className="flex items-center justify-center min-h-screen px-6">
      <div className="max-w-6xl w-full">
        <h2 className="text-white font-bold text-[clamp(2rem,6vw,3rem)] mb-12 text-center">
          Solutions for Every Role
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            className="bg-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-xl p-8 cursor-pointer relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            onMouseEnter={() => setSelectedSide("managers")}
            onMouseLeave={() => setSelectedSide(null)}
            onClick={() =>
              openModal(
                <div>
                  <h3 className="text-white font-semibold text-xl mb-4">
                    For Call Center Managers
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-medium mb-2">
                        How big is your team?
                      </h4>
                      <div className="space-y-2">
                        {["1-5 agents", "5-20 agents", "20+ agents"].map(
                          (size) => (
                            <button
                              key={size}
                              className="block w-full text-left px-4 py-2 rounded bg-gray-800 hover:bg-gray-700 text-white transition-colors"
                            >
                              {size}
                            </button>
                          ),
                        )}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-2">
                        Would you like a pilot?
                      </h4>
                      <div className="flex gap-3">
                        <button
                          onClick={() => openModal(<ContactForm />)}
                          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition-colors"
                        >
                          Yes, book demo
                        </button>
                        <button
                          onClick={() => alert("Added to waitlist!")}
                          className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded transition-colors"
                        >
                          Not yet
                        </button>
                      </div>
                    </div>
                  </div>
                </div>,
              )
            }
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"
              animate={{ opacity: selectedSide === "managers" ? 1 : 0 }}
            />
            <div className="relative z-10">
              <Target className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-white font-semibold text-2xl mb-4">
                For Managers
              </h3>
              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Automate voice interviews
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Score candidates instantly
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Reduce hiring time by 70%
                </li>
              </ul>
              <div className="text-blue-400 font-medium flex items-center">
                Schedule a Demo <ChevronRight size={16} className="ml-2" />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-xl p-8 cursor-pointer relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            onMouseEnter={() => setSelectedSide("agents")}
            onMouseLeave={() => setSelectedSide(null)}
            onClick={() =>
              openModal(
                <div>
                  <h3 className="text-white font-semibold text-xl mb-4">
                    For Call Center Agents
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-medium mb-2">
                        What's your experience level?
                      </h4>
                      <div className="space-y-2">
                        {[
                          "New to call centers",
                          "1-2 years experience",
                          "2+ years experience",
                        ].map((level) => (
                          <button
                            key={level}
                            className="block w-full text-left px-4 py-2 rounded bg-gray-800 hover:bg-gray-700 text-white transition-colors"
                          >
                            {level}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-2">
                        Ready to start training?
                      </h4>
                      <div className="flex gap-3">
                        <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded transition-colors">
                          Start Training
                        </button>
                        <button className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded transition-colors">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>,
              )
            }
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-transparent"
              animate={{ opacity: selectedSide === "agents" ? 1 : 0 }}
            />
            <div className="relative z-10">
              <Users className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-white font-semibold text-2xl mb-4">
                For Agents
              </h3>
              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Train with real-life AI scenarios
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Get skill feedback instantly
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Unlock real interviews
                </li>
              </ul>
              <div className="text-green-400 font-medium flex items-center">
                Start Training Preview{" "}
                <ChevronRight size={16} className="ml-2" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
