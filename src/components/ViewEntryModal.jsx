import EntryDetails from "./EntryDetail";
import { useModal } from "../contexts/ModalContext";

const ViewEntryModal = ({ entry }) => {
  const { modals, toggleModal } = useModal();
  return (
    <dialog className={`modal ${modals.viewEntry ? "modal-open" : ""}`}>
      <div className="modal-box w-11/12 max-w-5xl">
        <EntryDetails entry={entry} />
        <div className="modal-action">
          <form method="dialog">
            <button className="btn" onClick={() => toggleModal("viewEntry")}>
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default ViewEntryModal;
