import { createPortal } from "react-dom";
import "./style.css"

const AboutModal = ({ isVisible, name, bio }) => {
  return isVisible ? createPortal(
    <div className="screen">
      <div className="modal-wrapper" >
        <div className="modal-container">
          <div className="modal-container__info" >
            <img src="https://media2.fdncms.com/metrotimes/imager/u/original/23590968/kermit_dia.png" alt="Marquel" />
            <div className="bio" >
              <h1>{name}</h1>
              <p>{bio}</p>
              <p>Links</p>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  ) : null
}

export default AboutModal