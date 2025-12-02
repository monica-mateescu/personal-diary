import EntryDetails from "./EntryDetail";
import { useModal } from "../contexts/ModalContext";

const ViewEntryModal = ({ entry }) => {
  const { closeModal } = useModal();
  return (
    <dialog className="modal modal-open">
      <div className="modal-box w-11/12 max-w-5xl">
       <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => closeModal("viewEntry")}
          >
            ✕
          </button>
        <EntryDetails entry={entry} />
        <div className="modal-action">
          <form method="dialog">
            <button className="btn" onClick={() => closeModal("viewEntry")}>
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default ViewEntryModal;
