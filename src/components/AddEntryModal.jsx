import EntryForm from "./EntryForm";
import { useModal } from "../contexts/ModalContext";
import { useEntries } from "../contexts/EntriesContext";

const AddEntryModal = () => {
  const { toggleModal } = useModal();
  const { setEntries } = useEntries();

  return (
    <dialog className="modal modal-open">
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
