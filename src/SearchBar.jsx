// src/components/SearchBar.jsx
import { useState } from "react";

function SearchBar({ setSearchTerm }) {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setSearchTerm(e.target.value); // Update the search term
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search expenses"
        value={search}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default SearchBar;
