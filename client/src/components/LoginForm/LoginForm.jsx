import './LoginForm.css'

const LogIn = () => {
  
  return (
<>
  <div className="box">
    <section className="container">
      <div className="header">Login</div>
          <form className="form">
            <div className="username">
              <h5 className="text__signin__1">Username</h5>
                <label>
                  <input type="text" username="username" />
                </label>
            </div>

            <div className="password">
              <h5 className="text__signin__2">Password</h5>
                <label >
                  <input type="text" password="password" />
                </label>
            </div>

            <h6 classname="forgot">Forgot Password?</h6>

            <div>
              <button className="btn__2" type="submit">Member Login</button>
            </div>
          </form>

            <h6>Not a member yet?</h6>
            
            <div>
                <button className="btn__3" type="submit">Create New Account</button>
            </div>
    </section>
  </div>
</>
  )
}

export default LogIn