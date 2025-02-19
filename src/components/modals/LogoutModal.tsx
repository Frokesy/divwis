import { FC, useState } from "react";
import ModalContainer from "../wrappers/ModalContainer";
import { handleLogout } from "../../../utils/logoutService.ts";
import Loader from "../defaults/Loader.tsx";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LogoutModal: FC<ModalProps> = ({ isOpen, setIsOpen }) => {
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <ModalContainer>
      <div className="lg:w-[20vw] w-[80vw]">
        <h2 className="">Are you sure you want to logout?</h2>
        <div className="flex justify-end mt-6">
          <button
            onClick={() => setIsOpen(false)}
            className="px-4 py-1 bg-[#ccc] text-[#333] h-[40px] w-[85px] text-[14px] font-semibold rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              handleLogout(isOpen, setIsOpen, setLoading);
            }}
            className="px-4 py-1 bg-[#ff0406] text-[#fff] h-[40px] w-[85px] font-semibold rounded-md ml-4 text-[14px]"
          >
            {loading ? <Loader /> : "Logout"}
          </button>
        </div>
      </div>
    </ModalContainer>
  );
};

export default LogoutModal;
