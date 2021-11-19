import Layout from "../../components/Layout/Layout";
import HobbyCard from "../../components/HobbyCard/HobbyCard";
import { getHobbies } from "../../services/hobbies";
import { useState, useEffect } from "react";

const Hobbies = (props) => {
  const [hobbies, setHobbies] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const hobbyFetch = async () => {
      const allHobbies = await getHobbies();
      setHobbies(allHobbies);
      setSearchResult(allHobbies);
    };
    hobbyFetch();
    console.log(hobbies);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleSearch = (event) => {
    const results = hobbies.filter((hobby) =>
      hobby.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearchResult(results);
  };

  return (
    <Layout
      user={props.user}
      handleSearch={handleSearch}
      onSubmit={handleSubmit}
      setUser={props.setUser}
    >
      {searchResult.map((hobby, index) => {
        return <HobbyCard hobby={hobby} key={index} />;
      })}
    </Layout>
  );
};

export default Hobbies;
