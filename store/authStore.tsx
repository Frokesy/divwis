import { create } from "zustand";
import { pb } from "../utils/pocketbaseClient";

interface AuthState {
  user: unknown | null;
  isAuthenticated: boolean;
  isModalOpen: boolean;
  checkAuth: () => void;
  login: (email: string, password: string) => Promise<string | null>;
  logout: () => void;
  setIsModalOpen: (open: boolean) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  user: pb.authStore.model,
  isAuthenticated: !!pb.authStore.model,
  isModalOpen: false,
  
  checkAuth: () => {
    const user = pb.authStore.model;
    set({ user, isAuthenticated: !!user });
  },

  login: async (email, password) => {
    try {
      const authData = await pb.collection("users").authWithPassword(email, password);
      const userId = authData.record.id;

      set({ user: authData.record, isAuthenticated: true, isModalOpen: false });
      return userId;
    } catch (error) {
      console.error("Login failed", error);
      return null;
    }
  },

  logout: () => {
    pb.authStore.clear();
    set({ user: null, isAuthenticated: false });
  },

  setIsModalOpen: (open) => set({ isModalOpen: open }),
}));

export default useAuthStore;
