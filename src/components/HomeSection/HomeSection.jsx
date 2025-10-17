import { useState } from "react";
import { motion } from "motion/react";
import {
  Mic,
  Users,
  Target,
  ChevronRight,
  Check,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";
import { useAppStore } from "@/store/appStore";
import { FeatureDemoModal } from "@/components/FeatureDemoModal/FeatureDemoModal";
import { ContactForm } from "@/components/ContactForm/ContactForm";
import { useTranslation } from "@/hooks/useTranslation";

export const HomeSection = () => {
  const { openModal } = useAppStore();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { t } = useTranslation();

  const features = [
    {
      icon: <Mic className="w-8 h-8 text-blue-400" />,
      title: t("aiVoiceTitle"),
      description: t("aiVoiceDesc"),
    },
    {
      icon: <Users className="w-8 h-8 text-green-400" />,
      title: t("agentTrainingTitle"),
      description: t("agentTrainingDesc"),
    },
    {
      icon: <Target className="w-8 h-8 text-purple-400" />,
      title: t("smartScorecardsTitle"),
      description: t("smartScorecardsDesc"),
    },
  ];

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail("");
      openModal(
        <div className="text-center">
          <div className="mb-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-8 h-8 text-green-600" />
            </div>
          </div>
          <h3 className="text-white font-semibold text-xl mb-3">
            {t("thanksEarlyList")}
          </h3>
          <p className="text-gray-300 mb-6">{t("wantTestCompany")}</p>
          <button
            onClick={() => openModal(<ContactForm />)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors"
          >
            {t("bookDemo")}
          </button>
        </div>,
      );
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <div className="text-center w-full max-w-6xl mx-auto flex flex-col items-center justify-center min-h-screen py-8 sm:py-16">
      <div className="mb-6 sm:mb-8">
        <div className="inline-flex items-center space-x-3 bg-gray-900/60 backdrop-blur-sm rounded-full py-2 px-3 sm:py-2 sm:px-4 text-xs sm:text-sm">
          <div className="flex -space-x-2 sm:-space-x-3">
            {[
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
              "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
              "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
            ].map((avatar, index) => (
              <div
                key={index}
                className="relative h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 rounded-full overflow-hidden border-2 border-gray-700 shadow-lg"
              >
                <img
                  src={avatar}
                  alt="User avatar"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
          <p className="text-white whitespace-nowrap">
            <span className="text-white font-semibold">1.2K+</span>{" "}
            {t("managersJoined")}
          </p>
        </div>
      </div>

      <h1 className="w-full text-white leading-tight tracking-tight mb-6 sm:mb-8 px-4">
        <span className="block font-bold text-[clamp(2rem,8vw,4rem)] mb-2">
          {t("heroTitle")}
        </span>
        <span className="block font-light text-[clamp(1.8rem,6vw,3rem)] text-blue-400">
          {t("heroSubtitle")}
        </span>
      </h1>

      <div className="mb-8 sm:mb-10 px-4 max-w-3xl">
        <p className="text-[clamp(1.1rem,3vw,1.4rem)] text-gray-300 leading-relaxed mb-4">
          {t("heroDescription")}
        </p>
      </div>

      <div className="w-full max-w-2xl mb-8 sm:mb-12 px-4">
        {!isSubmitted ? (
          <form
            onSubmit={handleEmailSubmit}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("emailPlaceholder")}
              className="flex-1 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gray-900/60 border border-gray-700 focus:border-white outline-none text-white text-sm sm:text-base shadow-[0_0_15px_rgba(0,0,0,0.3)] backdrop-blur-sm transition-all duration-300"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 whitespace-nowrap text-sm sm:text-base ${
                isSubmitting
                  ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              {isSubmitting ? (
                <div className="h-4 w-4 sm:h-5 sm:w-5 border-2 border-gray-300 border-t-white rounded-full animate-spin"></div>
              ) : (
                t("getEarlyAccess")
              )}
            </button>
          </form>
        ) : (
          <div className="bg-green-500/20 border border-green-500/30 text-green-300 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-center text-sm sm:text-base">
            {t("thanksNotify")}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03, y: -5 }}
            className="bg-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center cursor-pointer"
            onClick={() => openModal(<FeatureDemoModal feature={feature} />)}
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-white font-semibold text-lg mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-400 text-sm">{feature.description}</p>
            <div className="mt-4 text-blue-400 text-sm flex items-center justify-center">
              {t("viewDemo")} <ChevronRight size={16} className="ml-1" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center space-x-6 mt-12">
        <a
          href="#"
          className="text-gray-500 hover:text-gray-300 transition-colors duration-300"
        >
          <Instagram size={22} />
        </a>
        <a
          href="#"
          className="text-gray-500 hover:text-gray-300 transition-colors duration-300"
        >
          <Linkedin size={22} />
        </a>
        <a
          href="#"
          className="text-gray-500 hover:text-gray-300 transition-colors duration-300"
        >
          <Github size={22} />
        </a>
      </div>
    </div>
  );
};
