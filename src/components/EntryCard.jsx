import Button from "./Button";
import ViewEntryModal from "./ViewEntryModal";
import { useModal } from "../contexts/ModalContext";

const EntryCard = ({ entry }) => {
  const { title, date, imageUrl } = entry;
  const { toggleModal } = useModal();
  return (
    <>
      <div className="card card-side bg-base-100 shadow-sm mb-4">
        <figure>
          <img src={imageUrl} alt={title} className="h-40" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-sm text-neutral/80">
            {new Date(date).toLocaleString("de-DE", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <div className="card-actions justify-end">
            <Button
              label="See Entry"
              className="btn-secondary btn-outline"
              onClick={() => toggleModal("viewEntry")}
            />
          </div>
        </div>
      </div>

      <ViewEntryModal entry={entry} />
    </>
  );
};

export default EntryCard;
