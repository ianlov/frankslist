import "./style.css";
import handlePrice from "../../utilities/handlePrice.js";
import handleRisk from "../../utilities/handleRisk.js";
import handleRating from "../../utilities/handleRating.js";
import { Link } from "react-router-dom";

const HobbyCard = ({ hobby }) => {
  return (
    <div className="hobby-card">
      <div className="hobby-card__image-box">
        <Link to={`hobby/${hobby._id}`}>
          <img src={hobby.img_url} alt={hobby.name} />
        </Link>
        <button>Save Hobby</button>
      </div>
      <Link to={`hobby/${hobby._id}`} className="hobby-card__info">
        <h1>{hobby.name}</h1>
        {handleRating(hobby.rating)}
        <div className="hobby-card__info__details">
          <div className="hobby-card__info__details__left">
            <p>Location</p>
            <p>Price</p>
            <p>Risk</p>
          </div>
          <div className="hobby-card__info__details__right">
            <p>{hobby.indoors ? "Indoors" : "Outdoors"}</p>
            <p>{handlePrice(hobby.price.low)}</p>
            <p>{handleRisk(hobby.risk)}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HobbyCard;
