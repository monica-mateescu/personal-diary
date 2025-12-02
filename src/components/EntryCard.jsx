import Button from "./Button";
import { useModal } from "../contexts/ModalContext";

const EntryCard = ({ entry, onClick }) => {
  const { title, date, imageUrl } = entry;
  const { openModal } = useModal();
  return (
    <div
      onClick={onClick}
      className="card card-side bg-base-100 shadow-sm mb-4"
    >
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
            onClick={() => openModal("viewEntry")}
          />
        </div>
      </div>
    </div>
  );
};

export default EntryCard;
