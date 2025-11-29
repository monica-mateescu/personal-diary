import EntryForm from "./EntryForm";

const AddEntryModal = ({ open, setOpen }) => {
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
        <EntryForm setOpen={setOpen} />
      </div>
    </dialog>
  );
};

export default AddEntryModal;
