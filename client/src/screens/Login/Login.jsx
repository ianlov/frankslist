import LogIn from "../../components/LoginForm/LoginForm";
import Layout from "../../components/Layout/Layout";

const LoginScreen = (props) => {
  return (
    <>
      <Layout>
        <LogIn setUser={props.setUser} user={props.user} setUser={props.setUser}/>
      </Layout>
    </>
  );
};

export default LoginScreen;
