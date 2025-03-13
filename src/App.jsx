import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [query, setQuery] = useState("");

  const handleSubmit = (newQuery) => {
    if (newQuery.trim() === "") {
      alert("Необхідно ввести текст для пошуку зображень!");
      return;
    }
    setQuery(newQuery);
    console.log(newQuery);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
    </>
  );
}

export default App;
