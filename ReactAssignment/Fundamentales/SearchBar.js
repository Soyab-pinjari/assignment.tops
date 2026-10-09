
import React, { useState } from 'react';

function SearchBar() {
  const [search, setSearch] = useState('');

  return (
    <div>
      <h2>Flipkart Search</h2>

      <input
        type="text"
        placeholder="Search for products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <p>Search Text: {search}</p>
    </div>
  );
}

export default SearchBar;
