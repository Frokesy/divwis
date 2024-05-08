import React from "react";
import { supabase } from "./supabaseClient";

export async function handleLogout(
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  setLoading(true);
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw error.message;
  }
  if (!error) {
    location.reload();
    setLoading(false);
    setIsOpen(!isOpen);
    localStorage.removeItem("id");
  }
}
