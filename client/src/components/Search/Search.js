import "./Search.css";
import {useState} from 'react'

const Search = (props) => {
  return (
    <form className="search-form" onSubmit={(e) => props.onSubmit(e)}>
            <input
                className="search-input"
                value={props.results}
                onChange={(e) => props.handleSearch(e)}
                name="Search"
                placeholder="Search"
                type="text"
                autoFocus
                autocomplete="off"
            />
        </form>
  );
};

export default Search;
