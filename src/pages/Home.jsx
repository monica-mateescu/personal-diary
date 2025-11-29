import Header from "../components/Header";
import AddEntryModal from "../components/AddEntryModal";
import EntryList from "../components/EntryList";
import ViewEntryModal from "../components/ViewEntryModal";
import Footer from "../components/Footer";
import { useState } from "react";

const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col min-h-screen ">
      <Header open={open} setOpen={setOpen} />
      <main className="container mx-auto py-8 grow">
        <AddEntryModal open={open} setOpen={setOpen} />
        <EntryList />
        <ViewEntryModal />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
