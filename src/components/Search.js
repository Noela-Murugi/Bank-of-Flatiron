import React from "react";

function Search({search, setSearch}) {

  function handleSearch(event) {
    setSearch(event.target.value);
  }
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={handleSearch}
        value={search}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
