import { create } from "zustand";
import { ProductsProps } from "../src/components/modals/CompareModal";

interface ProductStore {
  activeCategoryId: number | undefined;
  filterType: string;
  filteredProducts: ProductsProps[];
  setActiveCategoryId: (id: number | undefined) => void;
  setFilterType: (type: string) => void;
  setFilteredProducts: (products: ProductsProps[]) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  activeCategoryId: undefined,
  filterType: "all",
  filteredProducts: [],
  setActiveCategoryId: (id) => set({ activeCategoryId: id }),
  setFilterType: (type) => set({ filterType: type }),
  setFilteredProducts: (products) => set({ filteredProducts: products }),
}));
