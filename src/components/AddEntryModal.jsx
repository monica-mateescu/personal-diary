import EntryForm from "./EntryForm";
import { useModal } from "../contexts/ModalContext";

const AddEntryModal = ({ setEntries }) => {
  const { modals, toggleModal } = useModal();

  return (
    <dialog className={`modal ${modals.newEntry ? "modal-open" : ""}`}>
      <div className="modal-box">
        <form method="dialog">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => toggleModal("newEntry")}
          >
            ✕
          </button>
        </form>
        <EntryForm setEntries={setEntries} />
      </div>
    </dialog>
  );
};

export default AddEntryModal;
