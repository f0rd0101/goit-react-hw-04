import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchPhotos } from "./components/photoService";
import ImageGallery from "./components/ImageGallery/ImageGallery";
// import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

function App() {
  const [query, setQuery] = useState([]);
  const [page,setPage] = useState(1);
  const [searchPhotos,setSeachPhotos] = useState("");
 

 
 
  const handleSearch = (topic)=>{
    setSeachPhotos(topic)
    setPage(1)
    setQuery([])
  }
  useEffect(()=>{
    console.log(page,searchPhotos);
    async function getData() {
        try{
     
        if(searchPhotos){
        const data = await fetchPhotos(page, searchPhotos);
        setQuery((prev)=>[...prev,...data.results])
      }
        return
      
 
      
    }
    catch(error){
      console.log(error);
      
    }
      
    }
    getData()

    

  },[page,searchPhotos])

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <ImageGallery items ={query}/>
        {query.length > 0 && <button type='button'  onClick={()=>setPage(page+1)} >Load more images</button>}  
       {/* <LoadMoreBtn/>  */}
    

      
      
    </>
  );
}

export default App;
