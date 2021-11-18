import { useState } from 'react'
import './SignUp.css'
import { signUp } from '../../services/users'
import { useHistory } from 'react-router-dom'

const SignUp = (props) => {
  const history = useHistory()

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    isError: false,
    errorMsg: '',
  })

  const handleChange = (event) =>
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })

  const onSignUp = async (event) => {
    event.preventDefault()
    const { setUser } = props
    try {
      const user = await signUp(form)
      setUser(user)
      history.push('/')
    } catch (error) {
      console.error(error)
      setForm({
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        isError: true,
        errorMsg: 'Sign Up Details Invalid',
      })
    }
  }

  const renderError = () => {
    const toggleForm = form.isError ? 'danger' : ''
    if (form.isError) {
      return (
        <button className="btn__4" type='submit' className={toggleForm}>
          {form.errorMsg}
        </button>
      )
    } else {
      return <button className="btn__4" type='submit'>Create New Account</button>
    }
  }

  const { username, email, password, passwordConfirmation } = form
  
  return (
<>
  <div className="box">
    <section className="container__2">
      <div className="header__2">Sign Up</div>
          <form className="form" onSubmit={onSignUp}>

              <label className="text__signup__1">Create Username</label>
                <input className="input__su__1"
                  required
                  type="text"
                  name="username"
                  value={username}
                  placeholder="Enter username"
                  onChange={handleChange}
              />
              <label className="text__signup__2">Email address</label>
                <input className="input__su__2"
                  required
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Enter email"
                  onChange={handleChange}
            />

              <label className="text__signup__3">Password</label>
                <input className="input__su__3"
                  required
                  name="password"
                  value={password}
                  type="password"
                  placeholder="Enter password"
                  onChange={handleChange}
              />
              
              <label className="text__signup__4">Password Confirmation</label>
                <input className="input__su__4"
                  required
                  name='passwordConfirmation'
                  value={passwordConfirmation}
                  type='password'
                  placeholder='Confirm Password'
                  onChange={handleChange}
            />
                    {renderError()}
          </form>

            {/* <div>
              <button className="btn__4" type="submit">Create New Account</button>
            </div> */}
          
    </section> 
  </div>
</>
  )
}

export default SignUp