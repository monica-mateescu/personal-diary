import { createContext, use, useState } from "react";

const ModalContext = createContext();

export default function ModalContextProvider({ children }) {
  const [modals, setModals] = useState({
    newEntry: false,
    viewEntry: false,
  });

  const toggleModal = (name) => {
    setModals((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <ModalContext value={{ modals, toggleModal }}>{children}</ModalContext>
  );
}

export function useModal() {
  return use(ModalContext);
}
