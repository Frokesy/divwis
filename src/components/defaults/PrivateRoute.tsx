import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import Spinner from "./Spinner";
import useAuthStore from "../../../store/authStore";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { isAuthenticated, checkAuth, setIsModalOpen } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <Spinner color="#000" />
      </div>
    );
  }

  if (!isAuthenticated) {
    setIsModalOpen(true);
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
