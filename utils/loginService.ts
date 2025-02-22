import { toast } from "react-toastify";
import useAuthStore from "../store/authStore";
import { ErrorProps } from "../src/components/modals/AuthModal";

export async function handleLogin(
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  validateField: (value: string) => boolean,
  userData: { email: string; password: string; fullName: string },
  validatePassword: (password: string) => boolean,
  setError: React.Dispatch<React.SetStateAction<ErrorProps>>
) {
  setLoading(true);
  const { login, setIsModalOpen } = useAuthStore.getState();
  const isEmailValid = validateField(userData.email);
  const isPasswordValid = validatePassword(userData.password);

  setError({
    email: isEmailValid ? "" : "Email is required",
    password: isPasswordValid ? "" : "Password must be at least 6 characters",
  });

  if (isEmailValid && isPasswordValid) {
    try {
      const userId = await login(userData.email, userData.password);

      if (userId) {
        localStorage.setItem("id", userId);
        toast.success("Login successful!", {
          position: "top-center",
          theme: "light",
          autoClose: 2000,
          hideProgressBar: true,
          draggable: true,
        });

        setTimeout(() => {
          setIsModalOpen(false);
        }, 2000);

        setLoading(false);
      }
    } catch (error) {
      toast.error("Invalid login credentials!", {
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
