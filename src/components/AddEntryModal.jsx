import EntryForm from "./EntryForm";

const AddEntryModal = () => {
  return (
    <dialog id="add-entry-modal" className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <EntryForm />
      </div>
    </dialog>
  );
};

export default AddEntryModal;
