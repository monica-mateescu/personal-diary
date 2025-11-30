const EntryDetails = ({ entry }) => {
  const { title, date, imageUrl, content } = entry;
  return (
    <div className="card">
      <h3 className="font-bold text-lg mb-1">{title}</h3>
      <p className="text-neutral/80 text-sm text-right mb-2 ">
        {new Date(date).toLocaleString("de-DE", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <figure>
        <img src={imageUrl} alt={title} className="w-auto max-h-80 mx-auto" />
      </figure>
      <p className="py-4">{content}</p>
    </div>
  );
};

export default EntryDetails;
