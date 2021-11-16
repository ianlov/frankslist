import related from "../../utilities/related.js";
import "./style.css";

import { Link } from "react-router-dom";
import { useParams } from "react-router";

const Related = (props) => {
  const relatedArray = related(props.hobbyDetail)

  return (
    <div className="related-container">
      <div className="related-container__title">Related</div>
      {relatedArray.map((hobby, idx) => {
        <Link 
          className="related-container__related"
          to={`/hobbies/${hobby.id}`}
          key={idx}
        >
          <img src={hobby.img_url} alt={`Related ${idx}`} />
          <p>{hobby.name}</p>
        </Link>
      })}
    </div>
  )
}

export default Related;