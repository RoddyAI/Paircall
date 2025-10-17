import { motion } from "motion/react";
import { Check } from "lucide-react";
import { useAppStore } from "@/store/appStore";
import { ContactForm } from "@/components/ContactForm/ContactForm";

export const PricingSection = () => {
  const { openModal } = useAppStore();

  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for trying out our platform",
      features: [
        "Up to 10 interviews",
        "Basic training access",
        "Standard reports",
        "Email support",
      ],
      cta: "Try Free",
      popular: false,
    },
    {
      name: "Pro Plan",
      price: "$50/month",
      description: "For growing call centers",
      features: [
        "Unlimited interviews",
        "Advanced analytics",
        "Priority support",
        "Custom training modules",
        "API access",
      ],
      cta: "Upgrade Now",
      popular: true,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6">
      <h2 className="text-white font-bold text-[clamp(2rem,6vw,3rem)] mb-6 text-center">
        Simple Pricing
      </h2>
      <p className="text-gray-300 text-lg mb-12 text-center max-w-2xl">
        Start free and upgrade as you grow
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            className={`relative bg-gray-900/40 backdrop-blur-sm border rounded-xl p-8 text-center ${
              plan.popular ? "border-blue-500" : "border-gray-700"
            }`}
            whileHover={{ scale: 1.02 }}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
            )}
            <h3 className="text-white font-semibold text-2xl mb-2">
              {plan.name}
            </h3>
            <div className="text-4xl font-bold mb-2">
              <span className="text-white">{plan.price}</span>
            </div>
            <p className="text-gray-400 mb-6">{plan.description}</p>
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                if (plan.name === "Starter") {
                  openModal(
                    <div className="text-center">
                      <h3 className="text-white font-semibold text-xl mb-4">
                        Start Your Free Trial
                      </h3>
                      <p className="text-gray-300 mb-6">
                        Enter your email to get started with 10 free interviews
                      </p>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:border-blue-400 outline-none mb-4"
                      />
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors">
                        Start Free Trial
                      </button>
                    </div>,
                  );
                } else {
                  openModal(<ContactForm />);
                }
              }}
              className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                plan.popular
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-gray-700 hover:bg-gray-600 text-white"
              }`}
            >
              {plan.cta}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
