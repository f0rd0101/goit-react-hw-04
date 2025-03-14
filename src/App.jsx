import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchPhotos } from "./components/photoService";
import ImageGallery from "./components/ImageGallery/ImageGallery";

function App() {
  const [query, setQuery] = useState([]);
 

 
  const handleSearch = async (newQuery)=>{
    try{
      const data = await fetchPhotos(newQuery);
      setQuery(data)
      console.log(data);
      
    }
    catch(error){
      console.log(error);
      
    }
  };
  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <ImageGallery items ={query}/>
      
    </>
  );
}

export default App;
