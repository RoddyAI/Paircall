import { Globe } from "lucide-react";
import { useAppStore } from "@/store/appStore";

export const LanguageToggle = () => {
  const { language, setLanguage } = useAppStore();

  return (
    <div className="flex items-center space-x-2">
      <Globe className="w-4 h-4 text-gray-400" />
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="bg-transparent text-white text-sm border border-gray-600 rounded px-2 py-1 focus:border-blue-400 outline-none"
      >
        <option value="en" className="bg-gray-800">
          EN
        </option>
        <option value="fr" className="bg-gray-800">
          FR
        </option>
      </select>
    </div>
  );
};
