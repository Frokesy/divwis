import React from "react";
import useAuthStore from "../store/authStore";

export async function handleLogout(
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  try {
    setLoading(true);
    const { logout } = useAuthStore.getState();

    logout();

    setLoading(false);
    setIsOpen(!isOpen);

    location.href = "/";
  } catch (error) {
    console.error("Error logging out:", error);
  }
}
