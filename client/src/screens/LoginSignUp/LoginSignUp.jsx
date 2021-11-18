import LogIn from "../../components/LoginForm/LoginForm";
import Layout from "../../components/Layout/Layout";
import SignUp from "../../components/SignUpForm/SignUp";

const LoginSignUp = () => {
  return (
    <>
      <Layout>
        <LogIn />
        <SignUp />
      </Layout>
    </>
  );
};

export default LoginSignUp;
