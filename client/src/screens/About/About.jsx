import Layout from "../../components/Layout/Layout";
import AboutModal from "../../components/AboutModal/AboutModal";
import "./script.css";

import { useState } from "react";

const About = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [focus, setFocus] = useState({
    name: "",
    bio: "",
    img_url: "",
    github: "",
    linkedin: "",
  });

  const toggleModal = (ev) => {
    switch (ev.target.id) {
      case "marquel":
        setFocus({
          name: "Marquel Sears",
          bio: "grabby. Barry LANDS on a ball and COLLAPSES. - JS REVISIONS 8/13/07 25. BARRY Oh my sweet lord of bees. JACKSON Hey, candy brain, get off there! Barry attempts to pulls his legs off, but they stick. BARRY Problem! A tennis shoe and a hand ENTER FRAME. The hand picks up the ball with Barry underneath it. BARRY (CONT'D) Guys! BUZZ This could be bad. JACKSON Affirmative. Vanessa walks back to the service line, BOUNCES the ball. Each time it BOUNCES, the other bees cringe and GASP. ANGLE ON: Barry, terrified. P",
          img_url:
            "https://media2.fdncms.com/metrotimes/imager/u/original/23590968/kermit_dia.png",
          github: "",
          linkedin: "",
        });
        break;
      case "ian":
        setFocus({
          name: "Ian Lovice",
          bio: "I am a former Firefighter with a background in Biosystems Engineering. I enjoy brazilian jiu jitu, weightlifting, kayaking, and spending time with my fiance. Connect with me on Github or Linkedin!",
          img_url:
            "https://i.imgur.com/Cf9UTHj.jpg",
          github: "https://github.com/ianlov",
          linkedin: "https://www.linkedin.com/in/ian-lovice/",
        });
        break;
      case "ricky":
        setFocus({
          name: "Ricky Boyd",
          bio: "Hey my name is Ricky, I'm from Memphis, TN. I currently live in Atlanta, GA and transitioned into software engineering from trucking/logistics after extensive research while on working over the road. A few hobbies I enjoy are...going to the gym, playing basketball, binge watch anime and shopping.",
          img_url:
            "https://imgur.com/a/A3Y4MXg",
          github: "https://github.com/rickyboyd45",
          linkedin: "https://www.linkedin.com/in/ricky-boyd-7a41a6217/",
        });
        break;
      case "paul":
        setFocus({
          name: "Paul Pardo",
          bio: "Hey guys I’m 24 and recently graduated from University of South Florida. I have a degree in Economics and Information Studies but had a change of heart. I am pursuing a career in software development. My hobbies include bodybuilding, training Brazilian Jiu Jitsu, playing video games (a lot of league over the years) and spending time with my girlfriend and her dog Chubbie.",
          img_url:
            "https://i.imgur.com/4xcnBUZ.jpg",
          github: "https://github.com/pauljpardo",
          linkedin: "https://www.linkedin.com/in/paul-j-pardo/",
        });
        break;
      case "vince":
        setFocus({
          name: "Vince Abuyuan",
          bio: "grabby. Barry LANDS on a ball and COLLAPSES. - JS REVISIONS 8/13/07 25. BARRY Oh my sweet lord of bees. JACKSON Hey, candy brain, get off there! Barry attempts to pulls his legs off, but they stick. BARRY Problem! A tennis shoe and a hand ENTER FRAME. The hand picks up the ball with Barry underneath it. BARRY (CONT'D) Guys! BUZZ This could be bad. JACKSON Affirmative. Vanessa walks back to the service line, BOUNCES the ball. Each time it BOUNCES, the other bees cringe and GASP. ANGLE ON: Barry, terrified. Pure dumb l",
          img_url:
            "https://media2.fdncms.com/metrotimes/imager/u/original/23590968/kermit_dia.png",
          github: "",
          linkedin: "",
        });
        break;
      case "frank":
        setFocus({
          name: "Frankie",
          bio: "Hi, I'm a two year old golden retriever and my favorite hobbies are walking, tug-of-war, napping, and staring at people while they eat. I don't know what github and linkedin are.",
          img_url:
            "https://i.imgur.com/Lf9k7iE.jpg",
          github: "https://giphy.com/search/golden-retriever",
          linkedin: "https://giphy.com/search/golden-retriever",
        });
        break;
      default:
        break;
    }
    setIsVisible(!isVisible);
  };

  return (
    <Layout user={props.user} setUser={props.setUser}>
      <AboutModal 
        setIsVisible={setIsVisible}
        isVisible={isVisible}
        name={focus.name}
        bio={focus.bio}
        github={focus.github}
        linkedin={focus.linkedin}
        image={focus.img_url}
      />
      <h1 className="about-title">Meet the Developers</h1>
      <div className="about-container">
        <div
          className="about-container__card"
          id="marquel"
          onClick={toggleModal}
        >
          <img
            src="https://media2.fdncms.com/metrotimes/imager/u/original/23590968/kermit_dia.png"
            alt="Marquel"
            id="marquel"
          />
          <p>Marquel Sears</p>
        </div>
        <div className="about-container__card" id="ian" onClick={toggleModal}>
          <img
            src="https://i.imgur.com/Cf9UTHj.jpg"
            alt="Ian"
            id="ian"
          />
          <p>Ian Lovice</p>
        </div>
        <div className="about-container__card" id="ricky" onClick={toggleModal}>
          <img
            src="https://media2.fdncms.com/metrotimes/imager/u/original/23590968/kermit_dia.png"
            alt="Marquel"
            id="ricky"
          />
          <p>Ricky Boyd</p>
        </div>
        <div className="about-container__card" id="paul" onClick={toggleModal}>
          <img
            src="https://i.imgur.com/4xcnBUZ.jpg"
            alt="Paul"
            id="paul"
          />
          <p>Paul Pardo</p>
        </div>
        <div className="about-container__card" id="vince" onClick={toggleModal}>
          <img
            src="https://media2.fdncms.com/metrotimes/imager/u/original/23590968/kermit_dia.png"
            alt="Marquel"
            id="vince"
          />
          <p>Vince Abuyuan</p>
        </div>
        <div className="about-container__card" id="frank" onClick={toggleModal}>
          <img
            src="https://i.imgur.com/Lf9k7iE.jpg"
            alt="Frankie"
            id="frank"
          />
          <p>Frankie</p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
