import { createPortal } from "react-dom";
import "./style.css"

const AboutModal = ({ isVisible, name, bio, github, linkedin, image}) => {
  return isVisible ? createPortal(
    <div className="screen">
      <div className="modal-wrapper" >
        <div className="modal-container">
          <div className="modal-container__info" >
            <img src={image} alt={name} />
            <div className="modal-container__info__bio" >
              <h1>{name}</h1>
              <p>{bio}</p>
              <ul className="modal-container__info__bio__links">
                <li><a href={linkedin} ><img src="https://sguru.org/wp-content/uploads/2018/02/linkedin-png-linkedin-icon-1600.png" alt="linkedin" /></a></li>
                <li><a href={github} ><img src="https://pngimg.com/uploads/github/github_PNG40.png" alt="github" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  ) : null
}

export default AboutModal