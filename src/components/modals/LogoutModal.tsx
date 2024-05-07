import { FC } from "react";
import ModalContainer from "../wrappers/ModalContainer";
import { handleLogout } from "../../../utils/logoutService.ts";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LogoutModal: FC<ModalProps> = ({ isOpen, setIsOpen }) => {
  return (
    <ModalContainer isOpen={isOpen} setIsOpen={setIsOpen}>
      <h2>Are you sure you want to logout?</h2>
      <div className="flex justify-end mt-6">
        <button
          onClick={() => setIsOpen(false)}
          className="px-4 py-1 bg-[#ccc] text-[#333] font-semibold rounded-md"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            handleLogout(isOpen, setIsOpen);
          }}
          className="px-4 py-1 bg-[#ff0406] text-[#fff] font-semibold rounded-md ml-4"
        >
          Logout
        </button>
      </div>
    </ModalContainer>
  );
};

export default LogoutModal;
