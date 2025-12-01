import { createContext, use, useReducer, useEffect } from "react";

const EntriesContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "ADD_ENTRY": {
      const newEntry = [...state, action.payload];

      localStorage.setItem("entries", JSON.stringify(newEntry));

      return newEntry;
    }

    case "SET_ENTRIES":
      return action.payload;
    default:
      throw new Error("Unknon action: ", action.type);
  }
}

export default function EntriesContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, []);

  const addEntry = (entry) => dispatch({ type: "ADD_ENTRY", payload: entry });

  useEffect(() => {
    const entries = JSON.parse(localStorage.getItem("entries"));
    if (entries) {
      entries.sort((a, b) => new Date(b.date) - new Date(a.date));
      dispatch({ type: "SET_ENTRIES", payload: entries });
    }
  }, []);

  return (
    <EntriesContext value={{ entries: state, addEntry }}>
      {children}
    </EntriesContext>
  );
}

export function useEntries() {
  return use(EntriesContext);
}
