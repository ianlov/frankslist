import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import About from "./screens/About/About";
import Create from "./screens/Create/Create";
import Detail from "./screens/Detail/Detail";
import LoginSignUp from "./screens/LoginSignUp/LoginSignUp";
import Profile from "./screens/Profile/Profile";
import Hobbies from "./screens/Search/Search";
import Splash from "./screens/Splash/Splash";
import { useState, useEffect } from "react";

const App = () => {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const user = await verifyUser();
  //     user ? setUser(user) : setUser(null);
  //   };
  //   fetchUser();
  // }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Splash user={user} />
        </Route>
        {/* <Route path="/sign-in">
          <LoginSignUp setUser={setUser} />
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
          {user ? <Create user={user} /> : <Redirect to="/sign-up" />}
        </Route>
        <Route path="/myprofile">
          {user ? <Profile user={user} /> : <Redirect to="/sign-up" />}
        </Route> */}
      </Switch>
    </div>
  );
};

export default App;
