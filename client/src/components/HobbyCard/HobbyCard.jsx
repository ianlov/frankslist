import "./style.css";
const HobbyCard = ({ hobby }) => {
  const handlePrice = (price) => {
    if (price < 20) {
      return "$";
    } else if (price >= 20 && price < 100) {
      return "$$";
    } else if (price >= 100 && price < 5000) {
      return "$$$";
    } else {
      return "$$$$";
    }
  }

  const handleRisk = (risk) => {
    let message = "";
    switch (risk) {
      case 1:
        message = "No Risk";
        break;
      case 2:
        message = "Little Risk";
        break;
      case 3:
        message = "Moderate Risk";
        break;
      case 4:
        message = "Risky";
        break;
      case 5:
        message = "Dangerous";
        break;
      default:
        message = "N/A"
        break;
    }
    return message
  }

  return (
    <div className="hobby-card" >
      <div className="hobby-card__image-box">
        <img src={hobby.img_url} alt={hobby.name} />
        <button>Save Hobby</button>
      </div>
      <div className="hobby-card__info" >
        <h1>{hobby.name}</h1>
        <p>{hobby.rating ? hobby.rating : "N/A"}</p>
        <div className="hobby-card__info__details" >
          <div className="hobby-card__info__details__left" >
            <p>Indoors</p>
            <p>Price</p>
            <p>Risk</p>
          </div>
          <div className="hobby-card__info__details__right" >
            <p>{hobby.indoors ? "Indoors" : "Outdoors"}</p>
            <p>{handlePrice(hobby.price.low)}</p>
            <p>{handleRisk(hobby.risk)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HobbyCard;
