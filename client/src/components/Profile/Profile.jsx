import "./style.css";

function ProfileContainer(props) {
  return (
    <>
      <div className="main__div">
        <div className="left__profile__panel">
          <img
            className="profile-img"
            src="https://icon-library.com/images/default-profile-icon/default-profile-icon-16.jpg"
            alt=""
          ></img>
          <div className="profile__info">
            <p>Hello {props.user.username}!</p>
          </div>
        </div>
        <div className="vl"></div>
        <hr className="hr" />
        <div className="right__hobbies__panel">
          <div className="top__right">
            <p>Favorited hobbies</p>

            <div className="fav__carousel">
              <div className="content">
                <div className="content-overlay"></div>
                <img
                  className="pool__img"
                  src="https://i.imgur.com/3nszJ8u.jpg"
                  alt=""
                />
                <div className="hover__text fadeIn__top">
                  <h3>Billiards</h3>
                </div>
              </div>

              <div className="content">
                <div className="content-overlay"></div>
                <img
                  className="pool__img"
                  src="https://i0.wp.com/glacierguides.com/wp-content/uploads/2020/09/IMG_2821.jpg?fit=960%2C640&ssl=1"
                  alt=""
                />
                <div className="hover__text fadeIn__top">
                  <h3>White Water Rafting</h3>
                </div>
              </div>

              <div className="content">
                <div className="content-overlay"></div>
                <img
                  className="pool__img"
                  src="https://media.wired.com/photos/5fbe703e534553a88817f988/4:3/w_2132,h_1599,c_limit/Sec_poker_914262206.jpg"
                  alt=""
                />
                <div className="hover__text fadeIn__top">
                  <h3>Poker</h3>
                </div>
              </div>

              <div className="content">
                <div className="content-overlay"></div>
                <img
                  className="pool__img"
                  src="https://cdn1.dotesports.com/wp-content/uploads/2019/09/12195522/league-of-legends.jpg"
                  alt=""
                />
                <div className="hover__text fadeIn__top">
                  <h3>PC Games</h3>
                </div>
              </div>

              <div className="content">
                <div className="content-overlay"></div>
                <img
                  className="pool__img"
                  src="https://i0.wp.com/nowyoureadme.com/wp-content/uploads/2021/11/4b729fd07d16b5ad132eae42d7629a4e.jpeg?resize=780%2C470&ssl=1"
                  alt=""
                />
                <div className="hover__text fadeIn__top">
                  <h3>Mixed Martial Arts</h3>
                </div>
              </div>

              <div className="content">
                <div className="content-overlay"></div>
                <img
                  className="pool__img"
                  src="https://diving-info.com/wp-content/uploads/2018/06/Things-Every-Diver-Needs-to-Know-About-Deep-Sea-Diving-1050x675.jpg"
                  alt=""
                />
                <div className="hover__text fadeIn__top">
                  <h3>Deep sea diving</h3>
                </div>
              </div>

              <div className="content">
                <div className="content-overlay"></div>
                <img
                  className="pool__img"
                  src="https://blog.pearsoninternationalschools.com/wp-content/uploads/2020/01/AL1331618_Original_1800x900-1132x670.jpg"
                  alt=""
                />
                <div className="hover__text fadeIn__top">
                  <h3>Reading</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom__right">
            <p>Suggested Hobbies</p>
            <div className="sug__carousel">
              <div className="content">
                <div className="content-overlay"></div>
                <img
                  className="pool__img"
                  src="https://alpsinsight.com/wp-content/uploads/2019/02/15CL0415.jpg"
                  alt=""
                />
                <div className="hover__text fadeIn__top">
                  <h3>Mountain Climbing</h3>
                </div>
              </div>

              <div className="content">
                <div className="content-overlay"></div>
                <img
                  className="pool__img"
                  src="https://www.ibjja.com/wp-content/uploads/2020/02/Coach-James-Clingerman-Demonstrates-BJJ-Armbar.jpg"
                  alt=""
                />
                <div className="hover__text fadeIn__top">
                  <h3>Brazilian Jiu Jitsu</h3>
                </div>
              </div>

              <div className="content">
                <div className="content-overlay"></div>
                <img
                  className="pool__img"
                  src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/73/a0/a8.jpg"
                  alt=""
                />
                <div className="hover__text fadeIn__top">
                  <h3>Parasailing</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileContainer;
