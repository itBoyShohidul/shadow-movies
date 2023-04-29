// Dependancies
import { useState } from "react";

// // Internals
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import SearchContext from "./context/searchContext";
import Footer from "./components/Footer";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <SearchContext.Provider value={{ search, setSearch }}>
        <Navbar />
        <Movies />
        <Footer />
      </SearchContext.Provider>
    </div>
  );
}

export default App;
