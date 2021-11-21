import CreateForm from "../../components/CreateForm/CreateForm"
import Layout from "../../components/Layout/Layout";

const CreateScreen = (props) => {
  return (
    <>
      <Layout user={props.user} setUser={props.setUser}>
        <CreateForm />
      </Layout>
    </>
  );
};

export default CreateScreen;