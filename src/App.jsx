import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchPhotos } from "./components/photoService";

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

  useEffect(()=>{
    async function getImage(){
      const data  = await fetchPhotos()
    }

    getImage()
  },[])

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
    </>
  );
}

export default App;
