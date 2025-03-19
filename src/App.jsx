import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchPhotos } from "./components/photoService";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import s from './App.module.css'
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Loader from "./components/Loader/Loader";

function App() {
  const [query, setQuery] = useState([]);
  const [page,setPage] = useState(1);
  const [searchPhotos,setSeachPhotos] = useState("");
  const [isOpen,setIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [alt, setAlt] = useState("");
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
 

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
        setError(false);
        setLoader(true);
     
        if(searchPhotos){
        const data = await fetchPhotos(page, searchPhotos);
        setQuery((prev)=>[...prev,...data.results])
      }
        return
      
 
      
    }
    catch{
      setError(true);
      
    }
    finally{
      setLoader(false)
    }
      
    }
    getData()

    

  },[page,searchPhotos])

  return (
    <>
    
      <SearchBar onSearch={handleSearch} />
      <ImageGallery items ={query}  openModal={openModal}  modalContent={handleModalContent}/>
        {query.length > 0 && <LoadMoreBtn query={query} handlePage={handlePage}/> }
        {loader && <Loader />}
    {error && <ErrorMessage />}
        <ImageModal openModal={isOpen} closeModal={closeModal} alt={alt} src={modalImage}/>
        
    

      
      
    </>
  );
}

export default App;
