import "./style.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const SplashContainer = () => {
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
            src="https://images.unsplash.com/uploads/141148589884100082977/a816dbd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
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
            <button>Get Started</button>
          </div>
          <img
            src="https://images.unsplash.com/photo-1615310748170-29d7088865ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt=""
          />
        </article>
      </section>
      <section className="body">
        <article className="body__featured">
          <h3>Featured Hobbies</h3>
          <div>
            <img
              src="https://images.unsplash.com/photo-1495555687398-3f50d6e79e1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
            <div className="featured__buttons">
              <div className="featured__arrowLeft">
                <ArrowBackIosIcon style={{ color: "white" }} />
              </div>
              <div className="featured__tick "></div>
              <div className="featured__tick"></div>
              <div className="featured__tick"></div>
              <div className="featured__arrowRight">
                <ArrowForwardIosIcon style={{ color: "white" }} />
              </div>
            </div>
          </div>
        </article>
        <article className="body__categories">
          <div>
            <h3>Outdoor Hobbies</h3>
            <div>
              <img
                src="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1632&q=80"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1632&q=80"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1632&q=80"
                alt=""
              />
            </div>
          </div>
          <div>
            <h3>Indoor Hobbies</h3>
            <div>
              <img
                src="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1632&q=80"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1632&q=80"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1632&q=80"
                alt=""
              />
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default SplashContainer;
