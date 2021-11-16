import './CreateForm.css'

const CreateForm = () => {

  return (
    <>
      <div className="box">
      <section className="container__1">
        <div className="header">Create A Hobby</div>
<form className="form">
        <div>
          <h5 className="text__hobby__1">Indoors/ Outdoors</h5>
            <select className="in-outdoor" id="in-outdoor">
              <option value="indoors">Indoors</option>
              <option value="outdoors">Outdoors</option>
            </select>
        </div>

        <div>
        <h5 className="text__hobby__2">Danger/ Risk Level</h5>
          <select className="risk" id="risk">
            <option value="option 1">1 (Safe)</option>
            <option value="option 2">2 (Kind Of Safe)</option>
            <option value="option 3">3 (Median Safe/Dangerous)</option>
            <option value="option 4">4 (Kind Of Dangerous)</option>
            <option value="option 5">5 (Dangerous)</option>
          </select>
        </div>

        <div className="price">
          <h5 className="text__hobby__3">Price</h5>
            <label>
              <input className="price" type="number" price="price" />
            </label>
          
        </div>

        <div className="description">
              <h5 className="text__hobby__4">Description</h5>
              
            <label >
              <input className="textbox" type="text" description="description" />
            </label>
            </div>
          
          <button className="btn__1" type="submit">Submit</button>
            
</form>
        </section>
      </div>
    </>
  )
}

export default CreateForm