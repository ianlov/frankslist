import './LoginForm.css'
import { useState } from 'react'
import { signIn } from '../../services/users'
import { useHistory } from 'react-router-dom'

const LogIn = (props) => {
  const history = useHistory()

  const [form, setForm] = useState({
    email: '',
    password: '',
    isError: false,
    errorMsg: '',
  })

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const onSignIn = async (event) => {
    event.preventDefault()
    const { setUser } = props
    try {
      const user = await signIn(form)
      setUser(user)
      history.push('/')
    } catch (error) {
      console.error(error)
      setForm({
        isError: true,
        errorMsg: 'Invalid Credentials',
        email: '',
        password: '',
      })
    }
  }

  const renderError = () => {
    const toggleForm = form.isError ? 'danger' : ''
    if (form.isError) {
      return (
        <button className="btn__2" type='submit' className={toggleForm}>
          {form.errorMsg}
        </button>
      )
    } else {
      return <button className="btn__2" type='submit'>Member Login</button>
    }
  }

  const { email, password } = form
  
  return (
<>
  <div className="box">
    <section className="logincontainer">
      <div className="login__header">Login</div>
          <form onSubmit={onSignIn} className="form">

            <div className="username">
                <label className="text__signin__1">Email</label>
              <input className="input__1"
                required
                  type="text"
                  name="email"
                  value={email}
                  placeholer="Type your email"
                  onChange={handleChange}
                />
            </div>

            <div className="password">
                <label className="text__signin__2">Password</label>
              <input className ="input__2"
                required
                name="password"
                value={password}
                type="text"
                placeholer="Type your password"
                onChange={handleChange}
              />
              
              <h6 classname="forgot">Forgot Password?</h6>
              
              {renderError()}
            </div>
          </form>
          
            <h6 className="member">Not a member yet?</h6>
            
            <div>
                <button className="btn__3" type="submit">Create New Account</button>
            </div>
    </section>
  </div>
</>
  )
}

export default LogIn