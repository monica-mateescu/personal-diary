import { createContext, use, useState } from "react";

const ModalContext = createContext(false);

export default function ModalContextProvider({ children }) {
  const [open, setOpen] = useState(false);

  return <ModalContext value={{ open, setOpen }}>{children}</ModalContext>;
}

export function useModal() {
  return use(ModalContext);
}
