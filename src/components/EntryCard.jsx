import Button from "./Button";

const EntryCard = () => {
  return (
    <div className="card card-side bg-base-100 shadow-sm mb-4">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
          alt="Album"
          className="h-40"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Lorem ipsum dolor sit Lorem ipsum dolor si Lorem ipsum dolor si Lorem
          ipsum dolor
        </h2>
        <p className="handwriting text-sm text-neutral/80">Sat 29. Nov 2025</p>
        <div className="card-actions justify-end">
          <Button
            label="See Entry"
            className="btn-secondary btn-outline"
            onClick={() =>
              document.getElementById("view-entry-modal").showModal()
            }
          />
        </div>
      </div>
    </div>
  );
};

export default EntryCard;
