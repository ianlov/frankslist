import "./Search.css";


const Search = (props) => {
  
  return (
    <form className="search-form" onSubmit={(e) => props.onSubmit(e)}>
      <input
        onClick={event => { 
          if(window.location.pathname !== '/hobbies') { 
            window.location.href='/hobbies'
          }}}
        className="bar"
        value={props.results}
        onChange={(e) => (props.handleSearch(e))}
        name="Search"
        placeholder="Search"
        type="text"
        autocomplete="off"
      />
    </form>
  );
};

export default Search;
