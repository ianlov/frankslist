import './SignUp.css'

const SignUp = () => {
  
  return (
<>
  <div className="box">
    <section className="container__2">
      <div className="header">Sign Up</div>
          <form className="form">

            <div className="user">
              <h5 className="text__signup__1">Create Username</h5>
                <label>
                  <input type="text" username="username" />
                </label>
            </div>

            <div className="password">
              <h5 className="text__signup__2">Password</h5>
                <label >
                  <input type="text" password="password" />
                </label>
            </div>

            <div className="confirm">
              <h5 className="text__signup__3">Confirm Password</h5>
                <label >
                  <input type="text" confirm="confirm" />
                </label>
            </div>

            <div>
              <button className="btn__4" type="submit">Create New Account</button>
            </div>

      </form>
    </section>
  </div>
</>
  )
}

export default SignUp