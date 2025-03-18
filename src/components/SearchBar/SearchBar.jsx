import { useState } from "react";
import s from "../SearchBar/SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); 

    if (!inputValue.trim()) {
      toast.error("Введіть текст для пошуку зображень!", {
        style: {
          backgroundColor: "#ffcccc",
          color: "#d8000c",
        },
        duration: 3000,
        position: "top-right",
      });
      return;
    }

    onSearch(inputValue);
    setInputValue(""); 
  };

  return (
    <div className={s.bar_div}>
      <header>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <button type="submit" className={s.button}>Search</button>
        </form>
      </header>
      <Toaster />
    </div>
  );
};

export default SearchBar;
