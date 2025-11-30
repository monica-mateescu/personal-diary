import EntryCard from "./EntryCard";

const EntryList = ({ entries }) => {
  if (!entries) {
    return (
      <section>
        <h2 className="font-bold text-lg text-center">
          {" "}
          🌱 Your diary is empty for now. Start writing your thoughts and watch
          your story grow!
        </h2>
      </section>
    );
  }

  return (
    <section>
      {entries.map((entry) => (
        <EntryCard key={entry.id} entry={entry} />
      ))}
    </section>
  );
};

export default EntryList;
