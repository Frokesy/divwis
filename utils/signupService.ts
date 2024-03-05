import { toast } from "react-toastify";
import { supabase } from "./supabaseClient";

export async function handleSignup(
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  validateField: (value: string) => boolean,
  userData: { email: string; password: string; fullName: string },
  validatePassword: (password: string) => boolean,
  setError: React.Dispatch<
    React.SetStateAction<{ email: string; password: string; fullName: string }>
  >
) {
  setLoading(true);

  const isFullnameValid = validateField(userData.fullName);
  const isEmailValid = validateField(userData.email);
  const isPasswordValid = validatePassword(userData.password);

  setError({
    fullName: isFullnameValid ? "" : "fullname is required",
    email: isEmailValid ? "" : "Email is required",
    password: isPasswordValid
      ? ""
      : "Password must be at least 6 character with at least 1 lowercase, 1 uppercase, 1 digit and 1 special case",
  });

  if (isFullnameValid && isEmailValid && isPasswordValid) {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: userData.email,
        password: userData.password,
      });
      if (error) {
        if (error.message === "User already registered") {
          throw error.message;
        }
      }
      if (!error) {
        const id = data.user?.id;
        const { data: userDetails, error: userError } = await supabase
          .from("users")
          .insert([
            { userId: id, name: userData.fullName, email: userData.email },
          ]);
        if (userError) {
          throw userError.message;
        } else {
          toast.success("Account created successfully!", {
            position: "top-center",
            theme: "dark",
            autoClose: 2000,
            hideProgressBar: true,
            draggable: true,
          });
          setLoading(false);
          setTimeout(() => {
            console.log("Account created successfully", userDetails);
          }, 2000);
        }
      }
    } catch (error) {
      toast.error(error, {
        position: "top-center",
        theme: "dark",
        autoClose: 2000,
        hideProgressBar: true,
        draggable: true,
      });
      setLoading(false);
    }
  } else {
    setLoading(false);
    if (!isFullnameValid) {
      setTimeout(() => {
        setError((prevState) => ({ ...prevState, fullName: "" }));
      }, 3000);
    }
    if (!isEmailValid) {
      setTimeout(() => {
        setError((prevState) => ({ ...prevState, email: "" }));
      }, 3000);
    }
    if (!isPasswordValid) {
      setTimeout(() => {
        setError((prevState) => ({ ...prevState, password: "" }));
      }, 3000);
    }
  }
}
