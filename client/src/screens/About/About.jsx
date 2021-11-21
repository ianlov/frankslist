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
          bio: "Hey, it's Marquel. I'm young, talented, handsome, and smart. I am an aircraft mechanic for the United States Air Force. I'm currently pursuing a career as a software developer. In my off time I like to play the ukelele, video games, workout, and bother my loved ones. Let's connect!",
          img_url:
            "https://i.imgur.com/ExGccLL.jpg",
          github: "https://github.com/Marquel101",
          linkedin: "https://www.linkedin.com/in/marquel-sears-0b8907219/",
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
            "https://i.imgur.com/woxoiQW.png",
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
          bio: "Hi my name is Vince (he/him). I have a background in working in the medical field and have a BS in Biopsychology from University of California, Santa Barbara. I like to spend my free time hanging out with my partner, camping, going to the beach, playing with my cats, and trying new foods.",
          img_url:
            "https://i.imgur.com/b6tQMlL.jpg",
          github: "https://github.com/booyouon",
          linkedin: "https://www.linkedin.com/in/vinceabuyuan/",
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
            src="https://i.imgur.com/4ZEgqKB.jpg"
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
            src="https://i.imgur.com/woxoiQW.png"
            alt="Ricky"
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
            src="https://i.imgur.com/b6tQMlL.jpg"
            alt="Vince"
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
