import React from "react";
import "./Search.css";

const Search = props => {
  return (
    <form className="search-area">
      <input onChange={props.changeHandler} />
      <button className="middle" onClick={props.onClickData}>
        GET DATA!
      </button>
      <button onClick={props.onClickConsole}>Show data</button>
    </form>
  );
};

export default Search;
