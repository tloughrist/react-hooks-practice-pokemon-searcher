import React from "react";

function Search(props) {

  function searchChangeHandler(e) {
    return props.handleSearch(e.target.value);
  };

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input tabIndex={6} onChange={searchChangeHandler} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
