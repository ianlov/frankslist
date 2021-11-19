import Layout from "../../components/Layout/Layout";
import SplashContainer from "../../components/SplashContainer/Splash";

const Splash = (props) => {
  return (
    <Layout user={props.user} setUser={props.setUser}>
      <SplashContainer />
    </Layout>
  );
};

export default Splash;
