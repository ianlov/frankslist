import "./style.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import * as service from "./splashservices";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as fetchRequest from "../../services/hobbies";
import randomizer from "../../utilities/randomizer";

const SplashContainer = () => {
  const [featuredFocus, setFeaturedFocus] = useState(service.carouselArray[0]);
  const [count, setCount] = useState(0);
  const [toggleTransition, setTransition] = useState(false);
  const [indoor, setIndoor] = useState([]);
  const [outdoor, setOutdoor] = useState([]);

  useEffect(() => {
    const fetchHobbies = async () => {
      const res = await fetchRequest.getHobbies();
      console.log(res);
      setIndoor(
        randomizer(
          3,
          res.filter((hobby) => hobby.indoors)
        )
      );
      setOutdoor(
        randomizer(
          3,
          res.filter((hobby) => !hobby.indoors)
        )
      );
    };
    fetchHobbies();
  }, []);

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
            You work, you eat, you sleep - and that's about it... your life is boring. That's why we made Frankslist! Frankslist is the one stop web application for finding your dream hobby. Create an account, search for hobbies based on your unique lifestyle, and save your favorites! 
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
              Bored? Explore our catalog, meet new people, find a new passion, and starting living life.
            </p>
          </div>
        </article>
        <article className="head__info3">
          <div className="head__info3__box">
            <h1>3. Discover</h1>
            <p>
            Browse through our existing catalog of hobbies or if you have a hobby you would like to share with the community, you can create a new page for that hobby!
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
              {outdoor.map((hobby) => {
                return (
                  <div>
                    <div className="overlayText">
                      <h3 className="overlayText__h3">{hobby.name}</h3>
                    </div>
                    <img className="category__img" src={hobby.img_url} alt="" />
                  </div>
                );
              })}
            </div>
          </div>
          <div style={{marginTop:"10px"}}>
            <h3>Indoor Hobbies</h3>
            <div>
              {indoor.map((hobby) => {
                return (
                  <div>
                    <div className="overlayText">
                      <h3 className="overlayText__h3">{hobby.name}</h3>
                    </div>
                    <img className="category__img" src={hobby.img_url} alt="" />
                  </div>
                );
              })}
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default SplashContainer;
