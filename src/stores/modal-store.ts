import { create } from "zustand";

interface ModalState {
  modal: string | null;
  openModal: (name: string) => void;
  closeModal: () => void;
}

export const useModal = create<ModalState>((set) => ({
  modal: null,
  openModal: (name) => {
    set({ modal: name });
  },
  closeModal: () => {
    set({ modal: null });
  },
}));
