import { useAppStore } from "@/store/appStore";
import { translations } from "@/data/translations";

export const useTranslation = () => {
  const language = useAppStore((state) => state.language);
  const t = (key) => translations[language][key] || key;
  return { t, language };
};
