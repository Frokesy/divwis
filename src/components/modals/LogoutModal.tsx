import { FC } from "react";
import ModalContainer from "../wrappers/ModalContainer";

interface ModalProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }

const LogoutModal:FC<ModalProps> = ({ isOpen, setIsOpen }) => {
  return (
    <ModalContainer isOpen={isOpen} setIsOpen={setIsOpen}>
      <h2></h2>
    </ModalContainer>
  )
}

export default LogoutModal
