import { createContext, use, useState } from "react";

const ModalContext = createContext();

export default function ModalContextProvider({ children }) {
  const [modals, setModals] = useState({});

  const openModal = (name) => {
    setModals((prev) => ({ ...prev, [name]: true }));
  };

  const closeModal = (name) => {
    setModals((prev) => ({ ...prev, [name]: false }));
  };


  return (
    <ModalContext value={{ modals, openModal, closeModal }}>{children}</ModalContext>
  );
}

export function useModal() {
  return use(ModalContext);
}
