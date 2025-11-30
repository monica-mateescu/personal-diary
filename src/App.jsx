import ModalContextProvider from "./contexts/ModalContext";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <ModalContextProvider>
        <Home />
      </ModalContextProvider>
    </>
  );
}

export default App;
