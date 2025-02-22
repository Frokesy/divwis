import { toast } from "react-toastify";
import { pb } from "./pocketbaseClient";
import useAuthStore from "../store/authStore";
import { ErrorProps } from "../src/components/modals/AuthModal";

export async function handleSignup(
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  validateField: (value: string) => boolean,
  userData: { email: string; password: string; fullName: string; phone: string },
  validatePassword: (password: string) => boolean,
  setError: React.Dispatch<React.SetStateAction<ErrorProps>>
) {
  setLoading(true);

  const isFullnameValid = validateField(userData.fullName);
  const isPhoneNumberValid = validateField(userData.phone);
  const isEmailValid = validateField(userData.email);
  const isPasswordValid = validatePassword(userData.password);
  const { setIsModalOpen } = useAuthStore.getState();

  setError({
    fullName: isFullnameValid ? "" : "fullname is required",
    email: isEmailValid ? "" : "Email is required",
    phone: isPhoneNumberValid ? "" : "Field is empty",
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
        phone: userData.phone,
        emailVisibility: true,
      };

      const record = await pb.collection("users").create(data);
      if (record) {
        toast.success("Account created successfully! Please check your email to complete signup process!", {
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
          setIsModalOpen(false);
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
    if (!isPhoneNumberValid) {
      setTimeout(() => {
        setError((prevState) => ({ ...prevState, phone: "" }));
      }, 3000);
    }
    if (!isPasswordValid) {
      setTimeout(() => {
        setError((prevState) => ({ ...prevState, password: "" }));
      }, 3000);
    }
  }
}
