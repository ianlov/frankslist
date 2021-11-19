import LogIn from "../../components/LoginForm/LoginForm";
import Layout from "../../components/Layout/Layout";

const LoginScreen = ({ setUser }) => {
  return (
    <>
      <Layout>
        <LogIn setUser={setUser} />
      </Layout>
    </>
  );
};

export default LoginScreen;
