import { useState } from "react";
import s from '../SearchBar/SearchBar.module.css'

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
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
        <button type="submit">Search</button>
      </form>
    </header>
    </div>
  );
};

export default SearchBar;
