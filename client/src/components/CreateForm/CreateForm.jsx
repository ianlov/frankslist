import { useState } from 'react'
import './CreateForm.css'
import { Redirect } from 'react-router-dom'
import { createHobby } from '../../services/hobbies'

const CreateForm = (props) => {
  const [hobby, setHobby] = useState({
    name: '',
    img_url: '',
    description: '',
    price: {
      low: { type: Number, required: true },
      high: { type: Number, required: true },
    },
    indoors: { type: Boolean, required: true },
    risk: { type: Number, required: true },
  })

  const [isCreated, setCreated] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    if (name !== hobby.price.low || name !== hobby.price.high) {
      setHobby({
        ...hobby,
        [name]: value,
      })
    } else {
      setHobby({
        ...hobby,
        price: {
          ...hobby.price,
          [name]: value,
        },
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
          
    {/* Didn't pass through any props
    
    
    
    */}
      <form className="form"  onSubmit={handleSubmit}>

      <h5 className="text__hobby__1">Indoors/ Outdoors</h5>
            
    {/* Didn't add input tag to dropdown box...might cause problems 
    
    
    
    */}
          <select className="in-outdoor" id="in-outdoor">
            <option value="indoors">Indoors</option>
            <option value="outdoors">Outdoors</option>
          </select>
            
      <h5 className="text__hobby__2">Danger/ Risk Level</h5>
            
    {/* Didn't add input tag to dropdown box...might cause problems 
    
    
    
    */}
          <select className="risk" id="risk">
            <option value="option 1">1 (Safe)</option>
            <option value="option 2">2 (Kind Of Safe)</option>
            <option value="option 3">3 (Median Safe/Dangerous)</option>
            <option value="option 4">4 (Kind Of Dangerous)</option>
            <option value="option 5">5 (Dangerous)</option>
            </select>

          <h5 className="text__hobby__3">Price Low</h5>
            <input
              className="input-price"
              placeholder="Price Low"
              value={hobby.price}
              name="low"
              type="number"
              required
              onChange={handleChange}
            />
            
          <h5 className="text__hobby__3">Price High</h5>
            <input
              className="input-price"
              placeholder="Price High"
              value={hobby.price}
              name="high"
              type="number"
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