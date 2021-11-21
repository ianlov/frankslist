import { useState } from 'react'
import './CreateForm.css'
import { Redirect } from 'react-router-dom'
import { createHobby } from '../../services/hobbies'

const CreateForm = () => {
  const [hobby, setHobby] = useState({
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

  const [isCreated, setCreated] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    if (name === "low" || name === "high") {
      setHobby({
        ...hobby,
        price: {
          ...hobby.price,
          [name]: value,
        },
      })
    } else {
      setHobby({
        ...hobby,
        [name]: value,
      })
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const created = await createHobby(hobby)
    setCreated({ created })
  }

  if (isCreated) {
    return <Redirect to={`/hobbies`} />
  }

  return (
    <>
      <div className="box">
        <section className="container__1">
          <div className="header__3">Create A Hobby</div>
          
          <form className="form" onSubmit={handleSubmit}>
            
          <h5 className="text__hobby__5">Hobby Name</h5>
            <input
              className="hobby__name"
              placeholder="Hobby Name"
              value={hobby.name}
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
              value={hobby.indoors}
              required>
              
                <option>Please Select</option>
                <option value="true">Indoors</option>
                <option value="false">Outdoors</option>
              </select>



            <h5 className="text__hobby__2">Danger/ Risk Level</h5>
            <select
              name="risk"
              className="risk"
              id="risk"
              onChange={handleChange}
              value={hobby.risk}
              type="number"
              required>
              
                <option>Please Select</option>
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
              defaultValue={hobby.price.low}
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
              value={hobby.description}
              name="description"
              type="text"
              required
              onChange={handleChange}
            />
          
          <button className="btn__1" type="submit">Submit</button>
            
</form>
        </section>
      </div>
    </>
  )
}

export default CreateForm