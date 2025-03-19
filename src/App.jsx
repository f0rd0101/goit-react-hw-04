import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchPhotos } from "./components/photoService";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import s from './App.module.css'
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [query, setQuery] = useState([]);
  const [page,setPage] = useState(1);
  const [searchPhotos,setSeachPhotos] = useState("");
  const [isOpen,setIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [alt, setAlt] = useState("");
 

  const handlePage = ()=>{
    setPage(page+1)

  }
  const openModal =() =>{
    setIsOpen(true);
  }
  const closeModal=()=>{
    setIsOpen(false);
  }
 
  const handleSearch = (topic)=>{
    setSeachPhotos(topic)
    setPage(1)
    setQuery([])
  }
  const handleModalContent = (src, alt) => {
    setModalImage(src);
    setAlt(alt);
  };
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
      <ImageGallery items ={query}  openModal={openModal}  modalContent={handleModalContent}/>
        {query.length > 0 && <LoadMoreBtn query={query} handlePage={handlePage}/> }
        <ImageModal openModal={isOpen} closeModal={closeModal} alt={alt} src={modalImage}/>
        
    

      
      
    </>
  );
}

export default App;
