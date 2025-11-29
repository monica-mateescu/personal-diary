import EntryDetails from "./EntryDetail";
const ViewEntryModal = () => {
  return (
    <dialog id="view-entry-modal" className="modal">
      <div className="modal-box w-11/12 max-w-5xl">
        <EntryDetails />
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default ViewEntryModal;
