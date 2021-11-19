import { useState } from "react";
import { createPortal } from "react-dom";
import { Redirect } from 'react-router-dom'

import { updateHobby } from '../../services/hobbies'
import "./style.css";


const EditModal = ({ isVisible, setIsVisible, hobby }) => {
  // console.log(hobby)
  // const [isCreated, setIsCreated] = useState(false)
  const [hobbyEdit, setHobbyEdit] = useState({
    name: '',
    indoors: '',
    risk: '',
    price: {
      low: '',
      high: '',
    },
    img_url: '',
    description: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    if (name === "low" || name === "high") {
      setHobbyEdit({
        ...hobby,
        price: {
          ...hobby.price,
          [name]: value,
        },
      })
    } else {
      setHobbyEdit({
        ...hobby,
        [name]: value,
      })
    }
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    const created = await updateHobby(hobby._id, hobbyEdit)
    window.location.reload(false);
  }



  return isVisible ? createPortal(
    <div className="screen">
      <div className="modal-wrapper">
        <div className="modal-container">
          <section className="form-container">
            <form className="form" onSubmit={handleSubmit}>

              <h5 className="text__hobby__5">Hobby Name</h5>
              <input
                className="hobby__name"
                placeholder="Hobby Name"
                defaultValue={hobby.name}
                name="name"
                type="text"
                required
                onChange={handleChange}
              />

              <h5 className="text__hobby__1">Indoors/ Outdoors</h5>
              <select
                name="indoors"
                className="in-outdoor"
                id="in-outdoor"
                onChange={handleChange}
                defaultValue={hobby.indoors}
                required>

                <option value="true">Indoors</option>
                <option value="false">Outdoors</option>
              </select>



              <h5 className="text__hobby__2">Danger/ Risk Level</h5>
              <select
                name="risk"
                className="risk"
                id="risk"
                onChange={handleChange}
                defaultValue={hobby.risk}
                type="number"
                required>

                <option value="1">1 (No Risk)</option>
                <option value="2">2 (Little Risk)</option>
                <option value="3">3 (Moderate Risk)</option>
                <option value="4">4 (Risky)</option>
                <option value="5">5 (Dangerous)</option>
              </select>


              <h5 className="text__hobby__3">Price Low</h5>
              <input
                className="input-price__1"
                placeholder="Price Low"
                defaultValue={hobby.price.low}
                name="low"
                type="number"
                required
                onChange={handleChange}
              />

              <h5 className="text__hobby__3">Price High</h5>
              <input
                className="input-price__2"
                placeholder="Price High"
                defaultValue={hobby.price.high}
                name="high"
                type="number"
                required
                onChange={handleChange}
              />

              <h5 className="text__hobby__6">Add Image</h5>
              <input
                className="input-image-link"
                placeholder="Image Link"
                defaultValue={hobby.img_url}
                name="img_url"
                type="text"
                required
                onChange={handleChange}
              />

              <h5 className="text__hobby__4">Description</h5>
              <textarea
                className="textbox"
                rows={8}
                placeholder="Description"
                defaultValue={hobby.description}
                name="description"
                type="text"
                required
                onChange={handleChange}
              />

              <div className="">
                <button className="btn__1" type="submit">Submit</button>
                <button className="btn__2" onClick={() => setIsVisible(!isVisible)}>Close</button>
              </div>

            </form>
          </section>
        </div>
      </div>
    </div>,
    document.body,
  ) : null
}

export default EditModal;