import { toast } from "react-toastify";
import { pb } from "./pocketbaseClient";

export async function handleSignup(
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  validateField: (value: string) => boolean,
  userData: { email: string; password: string; fullName: string },
  validatePassword: (password: string) => boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
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
      const data = {
        email: userData.email,
        password: userData.password,
        passwordConfirm: userData.password,
        name: userData.fullName,
      };

      const record = await pb.collection("users").create(data);
      if (record) {
        toast.success("Account created successfully!", {
          position: "top-center",
          theme: "light",
          autoClose: 2000,
          hideProgressBar: true,
          draggable: true,
        });
        const id = record.id;
        localStorage.setItem("id", id);
        setTimeout(() => {
          setLoading(false);
          setIsOpen(false)
        }, 2000);
      }
    } catch (error) {
      toast.error("Error creating account", {
        position: "top-center",
        theme: "light",
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
