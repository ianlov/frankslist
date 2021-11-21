import "./hobbydetail.css";
import { useParams } from "react-router";
import { getHobby } from "../../services/hobbies";
import { useEffect, useState } from "react";
import Related from "../Related/Related";
import handleRating from "../../utilities/handleRating.js";
import handleRisk from "../../utilities/handleRisk.js";
import { deleteHobby } from "../../services/hobbies";
import EditModal from "../../components/EditModal/EditModal.jsx";
import { useHistory } from "react-router";

const HobbyDetail = () => {

  const history = useHistory()

  const handleDelete = () => {
    deleteHobby(hobby._id)
    return history.push('/hobbies')
  }

  const [hobby, setHobby] = useState({});
  const [isVisible, setIsVisible] = useState(false)
  const { id } = useParams();
  
  useEffect(() => {
    const fetchHobby = async () => {
      const res = await getHobby(id);
      setHobby(res);
      console.log(res);
    };
    fetchHobby();
  }, [id]);

  
  return (
    <>
      <EditModal 
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        hobby={hobby}
      />
      <section className="topAbout">
        <div className="topAbout__left">
          <div className="top__leftTop">
            <h1>{hobby.name}</h1>
            <div className="top__left__rating">
              <p>Rating</p>
              <div className="top__left__stars">
                {handleRating(hobby.rating)}
              </div>
            </div>
            <p>Add Photo</p>
          </div>
          <button className="top__left__button">Save Hobby</button>
        </div>
        <img className="topAbout__right" src={hobby.img_url} alt="" />
        <div></div>
      </section>
      <section className="bottom">
        <div className="bottom__left">
          <div className="bottom__left__up">
            <ul className="details__ul__left">
              <li>
                <strong>Details</strong>
              </li>
              <li>Indoor/Outdoors</li>
              <li>Price</li>
              <li>Risk</li>
            </ul>
            <ul className="details__ul__right">
              <li style={{ color: "white" }}>+</li>
              <li>{hobby.indoors ? "Indoors" : "Outdoors"}</li>
              <li>
                ${hobby.price ? hobby.price.low : "0"}-$
                {hobby.price ? hobby.price.high : "0"} per Month
              </li>
              <li>{handleRisk(hobby.risk)}</li>
            </ul>
          </div>
          <div className="bottom__left__down">
            <h4>Description</h4>
            <p>{hobby.description}</p>
            <button className="bottom__edit__button" onClick={() => setIsVisible(!isVisible)}>Edit Hobby</button>
            <button className="bottom__delete_button"  onClick={handleDelete}>Delete Hobby</button>
          </div>
        </div>
        <div className="details__related">
          <Related hobbyDetail={hobby} />
        </div>
      </section>
    </>
  );
};

export default HobbyDetail;
