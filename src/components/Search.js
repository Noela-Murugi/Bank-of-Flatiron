import React from "react";

function Search({handleChange}) {

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={handleChange}
        // value={search}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
