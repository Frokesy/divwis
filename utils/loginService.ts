import { toast } from "react-toastify";
import { pb } from "./pocketbaseClient";

export async function handleLogin(
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  validateField: (value: string) => boolean,
  userData: { email: string; password: string; fullName: string },
  validatePassword: (password: string) => boolean,
  setError: React.Dispatch<
    React.SetStateAction<{ email: string; password: string; fullName: string }>
  >,
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
) {
  setLoading(true);
  const isEmailValid = validateField(userData.email);
  const isPasswordValid = validatePassword(userData.password);

  setError({
    email: isEmailValid ? "" : "Email is required",
    password: isPasswordValid ? "" : "Password must be at least 6 characters",
    fullName: "",
  });

  if (isEmailValid && isPasswordValid) {
    try {
      const authData = await pb
        .collection("users")
        .authWithPassword(userData.email, userData.password);
        console.log("yo",authData)
      if (authData) {
        const id = authData.record.id;
        localStorage.setItem("id", id);
        toast.success("Login successful!", {
          position: "top-center",
          theme: "light",
          autoClose: 2000,
          hideProgressBar: true,
          draggable: true,
        });
        setTimeout(() => {
          setIsOpen(!isOpen);
        }, 2000);
        setLoading(false);
      } else {
        console.log("authData", authData)
      }
    } catch (error) {
      toast.error("invalid login credentials!", {
        position: "top-center",
        theme: "light",
        autoClose: 2000,
        hideProgressBar: true,
        draggable: true,
      });
      setLoading(false);
      console.error(error);
    }
  } else {
    setLoading(false);
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
