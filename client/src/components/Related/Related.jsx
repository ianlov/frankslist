import related from "../../utilities/related.js";
import "./style.css";
import { getHobbies } from "../../services/hobbies.js";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Related = ({ hobbyDetail }) => {
  const [hobbies, setHobbies] = useState([]);
  useEffect(() => {
    const fetchHobbies = async () => {
      const res = await getHobbies();
      console.log(res);
      setHobbies(res);
    };
    fetchHobbies();
  }, []);

  const relatedArray = related(hobbyDetail, hobbies);
  console.log(relatedArray);

  return (
    <div className="related-container">
      <div className="related-container__title">Related</div>
      {hobbies.length
        ? relatedArray.map((hobby, idx) => (
            <Link
              className="related-container__related"
              to={`/hobby/${hobby && hobby._id}`}
              key={idx}
            >
              <div
                className="img"
                style={{ backgroundImage: `url(${hobby && hobby.img_url})` }}
              ></div>
              <div>{hobby && hobby.name}</div>
            </Link>
          ))
        : null}
    </div>
  );
};

export default Related;
