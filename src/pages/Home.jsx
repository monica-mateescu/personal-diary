import Header from "../components/Header";
import EntryList from "../components/EntryList";
import AddEntryModal from "../components/AddEntryModal";
import ViewEntryModal from "../components/ViewEntryModal";
import Footer from "../components/Footer";

import { useModal } from "../contexts/ModalContext";
import { useState } from "react";

const Home = () => {
  const { modals } = useModal();
  const [selectedEntry, setSelectedEntry] = useState(null);

  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <main className="container mx-auto py-8 grow">
        <EntryList setSelectedEntry={setSelectedEntry} />
        {modals.newEntry && <AddEntryModal />}
        {modals.viewEntry && <ViewEntryModal selectedEntry={selectedEntry} />}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
