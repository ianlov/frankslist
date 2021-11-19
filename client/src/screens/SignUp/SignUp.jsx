import Layout from "../../components/Layout/Layout";
import SignUp from "../../components/SignUpForm/SignUp";

const SignUpScreen = (props) => {
  return (
    <>
      <Layout user={props.user} setUser={props.setUser}>
        <SignUp />
      </Layout>
    </>
  );
};

export default SignUpScreen;