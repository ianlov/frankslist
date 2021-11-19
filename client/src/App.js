import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import About from "./screens/About/About";
import Detail from "./screens/Detail/Detail";
import Login from "./screens/Login/Login";
import Profile from "./screens/Profile/Profile";
import Hobbies from "./screens/Search/Search";
import Splash from "./screens/Splash/Splash";
import { useState, useEffect } from "react";
import SignUpScreen from "./screens/SignUp/SignUp";
import CreateScreen from "./screens/Create/Create";
import { verifyUser } from "./services/users";

const App = () => {
  const [user, setUser] = useState(null);


  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    fetchUser();
    console.log(user ? true: false)
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Splash user={user} />
        </Route>
        <Route path="/sign-in">
          <Login setUser={setUser} />
        </Route>
        <Route path="/sign-up">
          <SignUpScreen setUser={setUser} />
        </Route>
        <Route path="/hobbies">
          <Hobbies setUser={setUser} />
        </Route>
        <Route path="/hobbies/:id">
          <Detail setUser={setUser} />
        </Route>
        <Route path="/aboutus">
          <About setUser={setUser} />
        </Route>
        <Route path="/newhobby">
          <CreateScreen setUser={setUser} />
          {/* {user ? <CreateScreen user={user} /> : <Redirect to="/sign-in" />} */}
        </Route>
        <Route path="/myprofile">
          <Profile />
          {/* {user ? <Profile user={user} /> : <Redirect to="/sign-up" />} */}
        </Route>
      </Switch>
    </div>
  );
};

export default App;
