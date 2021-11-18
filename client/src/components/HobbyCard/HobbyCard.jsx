import "./HobbyCard.css";
const HobbyCard = () => {
  return (
    <>
      <div className="results">
        <h5> SEARCH RESULTS FOR THIS THING YOU SEARCHED</h5>
      </div>
      <div className="cards">
        <div className="card">
          <div className="test">
            <img
              className="hobby__pic"
              src="https://i.imgur.com/BHeG8or.jpg?1"
            />
            <button className="dummy">DUMMY CLICK</button>
          </div>
          <div className="info">
            <div className="header">
              <div className="activity">
                <h1>MIKE NEZZER MIKE NEZZER</h1>
              </div>
              <h5>1 2 3 4 5</h5>
              <p>Details</p>
            </div>
            <div className="details">
              <div className="left__side">
                <div className="category">
                  <h6>LOCATION</h6>
                  <h6>PRICE</h6>
                  <h6>RISK</h6>
                </div>
              </div>

              <div className="right__side">
                <div className="values">
                  <h6>THE STREETS</h6>
                  <h6>$32.17</h6>
                  <h6>BAD MOFO</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HobbyCard;
