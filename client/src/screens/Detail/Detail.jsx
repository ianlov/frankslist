import HobbyDetail from "../../components/HobbyDetail/Hobbydetail";
import Layout from "../../components/Layout/Layout";

const Detail = (props) => {
  return (
    <>
      <Layout user={props.user} setUser={props.setUser}>
        <HobbyDetail />
      </Layout>
    </>
  );
};

export default Detail;
