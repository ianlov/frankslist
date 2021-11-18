import "./style.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import * as service from "./splashservices";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as fetchRequest from "../../services/hobbies";

const SplashContainer = () => {
  const [featuredFocus, setFeaturedFocus] = useState(service.carouselArray[0]);
  const [count, setCount] = useState(0);
  const [toggleTransition, setTransition] = useState(false);

  // console.log(fetchRequest.getHobbies());

  const handleForward = () => {
    setTransition(true);
    setTimeout(() => {
      if (count === 0) {
        setFeaturedFocus(service.carouselArray[1]);
        setCount(1);
      } else if (count === 1) {
        setFeaturedFocus(service.carouselArray[2]);
        setCount(2);
      } else {
        setFeaturedFocus(service.carouselArray[0]);
        setCount(0);
      }
    }, 250);
    setTimeout(() => setTransition(false), 500);
  };

  const handleBack = () => {
    setTransition(true);
    setTimeout(() => {
      if (count === 0) {
        setFeaturedFocus(service.carouselArray[2]);
        setCount(2);
      } else if (count === 1) {
        setFeaturedFocus(service.carouselArray[0]);
        setCount(0);
      } else {
        setFeaturedFocus(service.carouselArray[1]);
        setCount(1);
      }
    }, 250);
    setTimeout(() => setTransition(false), 500);
  };

  return (
    <>
      <section className="head">
        <article className="head__info1">
          <div className="head__info1__box">
            <h1>1. Sign Up</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
              cumque accusamus placeat, modi quod officia tenetur a voluptates
              repudiandae dolorem optio distinctio eos et eligendi est,
              architecto obcaecati, voluptatum explicabo?
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1576149146095-caa19d4de102?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
            alt=""
          />
        </article>
        <article className="head__info2">
          <img
            src="https://images.unsplash.com/photo-1529690840038-f38da8894ff6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
          <div className="head__info2__box">
            <h1>2. Explore</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
              cumque accusamus placeat, modi quod officia tenetur a voluptates
              repudiandae dolorem optio distinctio eos et eligendi est,
              architecto obcaecati, voluptatum explicabo?
            </p>
          </div>
        </article>
        <article className="head__info3">
          <div className="head__info3__box">
            <h1>3. Discover</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
              cumque accusamus placeat, modi quod officia tenetur a voluptates
              repudiandae dolorem optio distinctio eos et eligendi est,
              architecto obcaecati, voluptatum explicabo?
            </p>
            <Link to="/sign-in">
              <button className="head__info3__boxButton">Get Started</button>
            </Link>
          </div>
          <img
            src="https://images.unsplash.com/photo-1615310748170-29d7088865ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt=""
          />
        </article>
      </section>
      <section className="splashBody">
        <article className="body__featured">
          <h3>Featured Hobbies</h3>
          <div>
            <img
              src={featuredFocus}
              alt=""
              style={{ animation: toggleTransition && "fadein 500ms 1" }}
            />
            <div className="featured__buttons">
              <div className="featured__arrowLeft">
                <ArrowBackIosIcon
                  style={{
                    marginLeft: "5px",
                    fontSize: "18px",
                  }}
                  onClick={handleBack}
                />
              </div>
              <div
                style={{ backgroundColor: count === 0 && "black" }}
                className="featured__tick"
              ></div>
              <div
                style={{ backgroundColor: count === 1 && "black" }}
                className="featured__tick"
              ></div>
              <div
                style={{ backgroundColor: count === 2 && "black" }}
                className="featured__tick"
              ></div>
              <div className="featured__arrowRight">
                <ArrowForwardIosIcon
                  style={{ fontSize: "18px" }}
                  onClick={handleForward}
                />
              </div>
            </div>
          </div>
        </article>
        <article className="body__categories">
          <div>
            <h3>Outdoor Hobbies</h3>
            <div>
              <div>

                <img className="category__img"
                  src="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1632&q=80"
                  alt=""
                />
                <h3 className="overlayText">Poker</h3>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1632&q=80"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1632&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div>
            <h3>Indoor Hobbies</h3>
            <div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1632&q=80"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1632&q=80"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1632&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default SplashContainer;
