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
import Layout from "./components/Layout/Layout";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    fetchUser();
    console.log(user ? true : false);
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Splash user={user} setUser={setUser} />
        </Route>
        <Route path="/sign-in">
          <Login user={user} setUser={setUser} />
        </Route>
        <Route path="/sign-up">
          <SignUpScreen user={user} setUser={setUser} />
        </Route>
        <Route path="/hobbies">
          <Hobbies user={user} setUser={setUser} />
        </Route>
        <Route path="/hobby/">
          <Detail user={user} setUser={setUser} />
        </Route>
        <Route path="/aboutus">
          <About user={user} setUser={setUser} />
        </Route>
        <Route path="/newhobby">
          <CreateScreen user={user} setUser={setUser} />
          {/* {user ? <CreateScreen user={user} /> : <Redirect to="/sign-in" />} */}
        </Route>
        <Route path="/myprofile">
          <Profile user={user} setUser={setUser} />
          {/* {user ? <Profile user={user} /> : <Redirect to="/sign-up" />} */}
        </Route>
      </Switch>
    </div>
  );
};

export default App;
