import create from "zustand";
import { CATEGOIRES } from "../mock/categories";
type AppState = {
  selectedCategory: any;
  selectedGarage: any;
  setCategory: (selectedCategory: any) => void;
  setGarage: (value: any) => void;
};

export const useAppState = create<AppState>((set) => ({
  selectedCategory: CATEGOIRES[0],
  selectedGarage: CATEGOIRES[0].products[0].garages,
  setCategory: (category: any) => {
    set({ selectedCategory: category });
  },
  setGarage: (garage: any) => {
    set({ selectedGarage: garage });
  },
}));
