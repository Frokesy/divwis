import React from "react";
import { pb } from "./pocketbaseClient";

export async function handleLogout(
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  try {
    setLoading(true);

    pb.authStore.clear();

    localStorage.removeItem("id");

    setLoading(false);
    setIsOpen(!isOpen);

    // Redirect to the homepage using location
    location.href = "/";
  } catch (error) {
    console.error("Error logging out:", error);
  }
}
