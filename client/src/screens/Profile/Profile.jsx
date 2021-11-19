import Layout from '../../components/Layout/Layout';
import ProfileContainer from '../../components/Profile/Profile';

function Profile(props) {


  return (
    <>
      <Layout user={props.user} setUser={props.setUser}>
        <ProfileContainer user={props.user}/>
      </Layout>
    </>
  );
}

export default Profile;
