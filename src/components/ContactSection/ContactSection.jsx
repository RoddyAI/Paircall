import { motion } from "motion/react";
import { useAppStore } from "@/store/appStore";
import { ContactForm } from "@/components/ContactForm/ContactForm";

export const ContactSection = () => {
  const { openModal } = useAppStore();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6">
      <h2 className="text-white font-bold text-[clamp(2rem,6vw,3rem)] mb-6 text-center">
        Get In Touch
      </h2>
      <p className="text-gray-300 text-lg mb-12 text-center max-w-2xl">
        Ready to transform your call center? Let's discuss how we can help.
      </p>

      <div className="max-w-md w-full">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => openModal(<ContactForm />)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold mb-6 transition-colors"
        >
          Schedule a Demo
        </motion.button>

        <div className="text-center">
          <p className="text-gray-400 mb-4">Or reach out directly:</p>
          <div className="space-y-2">
            <p className="text-gray-300">hello@callcenterai.com</p>
            <p className="text-gray-300">+1 (555) 123-4567</p>
          </div>
        </div>
      </div>
    </div>
  );
};
