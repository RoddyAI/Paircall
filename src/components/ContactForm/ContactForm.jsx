import { useState } from "react";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import { useAppStore } from "@/store/appStore";

export const ContactForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    company: "",
    size: "",
    country: "",
    name: "",
    email: "",
    role: "",
    interests: [],
    timeline: "",
  });
  const { closeModal } = useAppStore();

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    closeModal();
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h3 className="text-white font-semibold text-xl mb-4">
              Company Information
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Company name"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:border-blue-400 outline-none"
              />
              <select
                value={formData.size}
                onChange={(e) =>
                  setFormData({ ...formData, size: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:border-blue-400 outline-none"
              >
                <option value="">Company size</option>
                <option value="<10">Less than 10</option>
                <option value="10-50">10-50 employees</option>
                <option value="50+">50+ employees</option>
              </select>
              <input
                type="text"
                placeholder="Country"
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:border-blue-400 outline-none"
              />
            </div>
            <button
              onClick={() => setStep(2)}
              disabled={!formData.company || !formData.size}
              className="w-full mt-6 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white py-3 rounded-lg transition-colors flex items-center justify-center"
            >
              Next <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
        );
      case 2:
        return (
          <div>
            <h3 className="text-white font-semibold text-xl mb-4">
              Contact Person
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:border-blue-400 outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:border-blue-400 outline-none"
              />
              <select
                value={formData.role}
                onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:border-blue-400 outline-none"
              >
                <option value="">Your role</option>
                <option value="manager">Manager</option>
                <option value="hr">HR</option>
                <option value="ceo">CEO</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setStep(1)}
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg transition-colors flex items-center justify-center"
              >
                <ArrowLeft size={16} className="mr-2" /> Back
              </button>
              <button
                onClick={() => setStep(3)}
                disabled={!formData.name || !formData.email}
                className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white py-3 rounded-lg transition-colors flex items-center justify-center"
              >
                Next <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h3 className="text-white font-semibold text-xl mb-4">
              Interest & Use Case
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-300 mb-3">
                  What are you most interested in?
                </p>
                <div className="space-y-2">
                  {["AI Interviews", "Agent Training", "Both"].map(
                    (interest) => (
                      <label key={interest} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.interests.includes(interest)}
                          onChange={(e) => {
                            const interests = e.target.checked
                              ? [...formData.interests, interest]
                              : formData.interests.filter(
                                  (i) => i !== interest,
                                );
                            setFormData({ ...formData, interests });
                          }}
                          className="mr-3"
                        />
                        <span className="text-white">{interest}</span>
                      </label>
                    ),
                  )}
                </div>
              </div>
              <select
                value={formData.timeline}
                onChange={(e) =>
                  setFormData({ ...formData, timeline: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:border-blue-400 outline-none"
              >
                <option value="">How soon would you like to start?</option>
                <option value="immediately">Immediately</option>
                <option value="this-month">This Month</option>
                <option value="later">Later</option>
              </select>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setStep(2)}
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg transition-colors flex items-center justify-center"
              >
                <ArrowLeft size={16} className="mr-2" /> Back
              </button>
              <button
                onClick={handleSubmit}
                disabled={formData.interests.length === 0 || !formData.timeline}
                className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white py-3 rounded-lg transition-colors flex items-center justify-center"
              >
                <Check size={16} className="mr-2" /> Submit
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div>
      <div className="flex mb-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className={`flex-1 h-2 rounded-full mx-1 ${i <= step ? "bg-blue-600" : "bg-gray-700"}`}
          />
        ))}
      </div>
      {renderStep()}
    </div>
  );
};
