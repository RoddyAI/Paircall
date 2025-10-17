import { create } from "zustand";

export const useAppStore = create((set) => ({
  currentSection: "home",
  isModalOpen: false,
  modalContent: null,
  formData: {},
  language: "en",
  setCurrentSection: (section) => set({ currentSection: section }),
  openModal: (content) => set({ isModalOpen: true, modalContent: content }),
  closeModal: () => set({ isModalOpen: false, modalContent: null }),
  updateFormData: (data) =>
    set((state) => ({ formData: { ...state.formData, ...data } })),
  setLanguage: (lang) => set({ language: lang }),
}));
