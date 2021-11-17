import "./Search.css";
import { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";

const Search = () => {
  const [hobbies, setHobbies] = useState([]);

  // useEffect(() => {
  //     const getHobbies = async () => {
  //         const hobbyAPI = await getHobbies()
  //         setHobbies(hobbyAPI)
  //         setSearchResult(hobbyAPI)
  //     }
  // }, [])

  // const handleSearch = (event) => {
  //     const results = hobbies.filter((hobby) =>
  //       hobby.toLowerCase().includes(event.target.value.toLowerCase())
  //     )
  //     setSearchResult(results)
  // }

  const onSubmit = (event) => {
    <Route>
      <Redirect to="/hobbies" />
    </Route>;
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input
        className="bar"
        // onChange={(e) => handleSearch(e)}
        // value={value}
        name="Search"
        placeholder="Search"
        type="text"
        autoFocus
      />
    </form>
  );
};

export default Search;
