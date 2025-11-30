import Header from "../components/Header";
import AddEntryModal from "../components/AddEntryModal";
import EntryList from "../components/EntryList";
import Footer from "../components/Footer";

import { useEffect, useState } from "react";

const Home = () => {
  const [entries, setEntries] = useState(null);

  useEffect(() => {
    const storedEntries = JSON.parse(localStorage.getItem("entries"));
    if (storedEntries) {
      storedEntries.sort((a, b) => new Date(b.date) - new Date(a.date));
      setEntries(storedEntries);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <main className="container mx-auto py-8 grow">
        <AddEntryModal setEntries={setEntries} />
        <EntryList entries={entries} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
