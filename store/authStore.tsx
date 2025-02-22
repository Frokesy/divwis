import { create } from "zustand";
import { pb } from "../utils/pocketbaseClient";
import { UserProps } from "../src/components/account/profile";

interface AuthState {
  user: UserProps | null;
  isAuthenticated: boolean;
  isModalOpen: boolean;
  checkAuth: () => void;
  login: (email: string, password: string) => Promise<string | null>;
  logout: () => void;
  setIsModalOpen: (open: boolean) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  user: pb.authStore.model as UserProps | null,
  isAuthenticated: !!pb.authStore.model,
  isModalOpen: false,

  checkAuth: () => {
    const user = pb.authStore.model as UserProps | null;
    set({ user, isAuthenticated: !!user });
  },

  login: async (email, password) => {
    try {
      const authData = await pb
        .collection("users")
        .authWithPassword(email, password);
      const userId = authData.record.id;
      const user = authData.record as unknown as UserProps;

      set({ user, isAuthenticated: true, isModalOpen: false });
      return userId;
    } catch (error) {
      console.error("Login failed", error);
      return null;
    }
  },

  logout: () => {
    pb.authStore.clear();
    localStorage.removeItem("id");
    set({ user: null, isAuthenticated: false });
  },

  setIsModalOpen: (open) => set({ isModalOpen: open }),
}));

export default useAuthStore;
