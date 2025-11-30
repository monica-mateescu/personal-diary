import EntryForm from "./EntryForm";
import { useModal } from "../contexts/ModalContext";

const AddEntryModal = () => {
  const { open, setOpen } = useModal();

  return (
    <dialog className={`modal ${open ? "modal-open" : ""}`}>
      <div className="modal-box">
        <form method="dialog">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
        </form>
        <EntryForm />
      </div>
    </dialog>
  );
};

export default AddEntryModal;
