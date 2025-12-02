import EntryCard from "./EntryCard";
import { useEntries } from "../contexts/EntriesContext";

const EntryList = ({ setSelectedEntry }) => {
  const { entries } = useEntries();

  if (entries.length === 0) {
    return (
      <section>
        <h2 className="font-bold text-lg text-center">
          Your diary is empty for now. Start writing your thoughts ✍️
        </h2>
      </section>
    );
  }

  return (
    <section>
      {entries.map((entry) => (
        <EntryCard
          key={entry.id}
          entry={entry}
          onClick={() => setSelectedEntry(entry)}
        />
      ))}
    </section>
  );
};

export default EntryList;
