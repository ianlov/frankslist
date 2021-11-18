import Layout from "../../components/Layout/Layout";
import AboutModal from "../../components/AboutModal/AboutModal";
import "./script.css";

import { useState } from "react";

const About = () => {
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
          bio: "grabby. Barry LANDS on a ball and COLLAPSES. - JS REVISIONS 8/13/07 25. BARRY Oh my sweet lord of bees. JACKSON Hey, candy brain, get off there! Barry attempts to pulls his legs off, but they stick. BARRY Problem! A tennis shoe and a hand ENTER FRAME. The hand picks up the ball with Barry underneath it. BARRY (CONT'D) Guys! BUZZ This could be bad. JACKSON Affirmative. Vanessa walks back to the service line, BOUNCES the ball. Each time it BOUNCES, the other bees cringe and GASP. ANGLE ON: Barry, terrified. Pure du",
          img_url:
            "https://media2.fdncms.com/metrotimes/imager/u/original/23590968/kermit_dia.png",
          github: "",
          linkedin: "",
        });
        break;
      case "ricky":
        setFocus({
          name: "Ricky Boyd",
          bio: "grabby. Barry LANDS on a ball and COLLAPSES. - JS REVISIONS 8/13/07 25. BARRY Oh my sweet lord of bees. JACKSON Hey, candy brain, get off there! Barry attempts to pulls his legs off, but they stick. BARRY Problem! A tennis shoe and a hand ENTER FRAME. The hand picks up the ball with Barry underneath it. BARRY (CONT'D) Guys! BUZZ This could be bad. JACKSON Affirmative. Vanessa walks back to the service line, BOUNCES the ball. Each time it BOUNCES, the other bees cringe and GASP. ANGLE ON: Barry, terrified. Pure dumb luck, he’s",
          img_url:
            "https://media2.fdncms.com/metrotimes/imager/u/original/23590968/kermit_dia.png",
          github: "",
          linkedin: "",
        });
        break;
      case "paul":
        setFocus({
          name: "Paul Pardo",
          bio: "grabby. Barry LANDS on a ball and COLLAPSES. - JS REVISIONS 8/13/07 25. BARRY Oh my sweet lord of bees. JACKSON Hey, candy brain, get off there! Barry attempts to pulls his legs off, but they stick. BARRY Problem! A tennis shoe and a hand ENTER FRAME. The hand picks up the ball with Barry underneath it. BARRY (CONT'D) Guys! BUZZ This could be bad. JACKSON Affirmative. Vanessa walks back to the service line, BOUNCES the ball. Each time it BOUNCES, the other bees cringe and GASP. ANGLE ON: Barry, terrified. Pure dumb luck, he",
          img_url:
            "https://media2.fdncms.com/metrotimes/imager/u/original/23590968/kermit_dia.png",
          github: "",
          linkedin: "",
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
      default:
        break;
    }
    setIsVisible(!isVisible);
  };

  return (
    <Layout>
      <div className="about-container">
        <h1>Meet the Developers</h1>
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
          <p id="marquel">MARQUEL SEARS</p>
          <AboutModal isVisible={isVisible} name={focus.name} bio={focus.bio} />
        </div>
        <div className="about-container__card" id="ian" onClick={toggleModal}>
          <img
            src="https://media2.fdncms.com/metrotimes/imager/u/original/23590968/kermit_dia.png"
            alt="Marquel"
            id="ian"
          />
          <p id="ian">IAN LOVICE</p>
          <AboutModal isVisible={isVisible} name={focus.name} bio={focus.bio} />
        </div>
        <div className="about-container__card" id="ricky" onClick={toggleModal}>
          <img
            src="https://media2.fdncms.com/metrotimes/imager/u/original/23590968/kermit_dia.png"
            alt="Marquel"
            id="ricky"
          />
          <p id="ricky">RICKY BOYD</p>
          <AboutModal isVisible={isVisible} name={focus.name} bio={focus.bio} />
        </div>
        <div className="about-container__card" id="paul" onClick={toggleModal}>
          <img
            src="https://media2.fdncms.com/metrotimes/imager/u/original/23590968/kermit_dia.png"
            alt="Marquel"
            id="paul"
          />
          <p id="paul">PAUL PARDO</p>
          <AboutModal isVisible={isVisible} name={focus.name} bio={focus.bio} />
        </div>
        <div className="about-container__card" id="vince" onClick={toggleModal}>
          <img
            src="https://media2.fdncms.com/metrotimes/imager/u/original/23590968/kermit_dia.png"
            alt="Marquel"
            id="vince"
          />
          <p id="vince">VINCE ABUYUAN</p>
          <AboutModal isVisible={isVisible} name={focus.name} bio={focus.bio} />
        </div>
      </div>
    </Layout>
  );
};

export default About;
