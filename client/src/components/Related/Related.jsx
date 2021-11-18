import related from "../../utilities/related.js";
import "./style.css";

import { Link } from "react-router-dom";
import { useParams } from "react-router";

const Related = () => {
  const relatedArray = related(hobbyDetail ,hobbies)

  return (
    <div className="related-container">
      <div className="related-container__title">Related</div>
      {relatedArray.map((hobby, idx) => (
        <Link 
          className="related-container__related"
          to={`/hobbies/${hobby.id}`}
          key={idx}
        >
          <div 
            className="img"
            style={{ backgroundImage : `url(${hobby.img_url})` }}
          ></div>
          <div>{hobby.name}</div>
        </Link>
      ))}
    </div>
  )
}

export default Related;