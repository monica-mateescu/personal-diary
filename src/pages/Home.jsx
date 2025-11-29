import Header from "../components/Header";
import AddEntryModal from "../components/AddEntryModal";
import EntryList from "../components/EntryList";
import ViewEntryModal from "../components/ViewEntryModal";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <main className="container mx-auto py-8 grow">
        <AddEntryModal />
        <EntryList />
        <ViewEntryModal />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
