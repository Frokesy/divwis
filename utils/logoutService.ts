import React from "react";
import { supabase } from "./supabaseClient";

export async function handleLogout(
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
) {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw error.message;
  }
  if (!error) {
    setIsOpen(!isOpen);
    localStorage.removeItem("id");
  }
}
