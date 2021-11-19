import "./hobbydetail.css";

const HobbyDetail = () => {
  return (
    <>
      <section className="topAbout">
        <div className="topAbout__left">
          <div className="top__leftTop">
            <h1>Brazilian Jiu Jitsu</h1>
            <div className="top__left__rating">
              <p>Rate</p>
              <div className="top__left__stars">
                <p>*</p>
                <p>*</p>
                <p>*</p>
                <p>*</p>
                <p>*</p>
              </div>
            </div>
            <p>Add Photo</p>
          </div>
          <button className="top__left__button">Save Hobby</button>
        </div>
        <img
          className="top__right"
          src="https://images.unsplash.com/photo-1576149146095-caa19d4de102?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1031&q=80"
          alt=""
        />
        <div></div>
      </section>
      <section className="bottom">
        <div className="bottom__left">
          <div className="bottom__left__up">
            <ul className="details__ul__left">
              <li>
                <strong>Details</strong>
              </li>
              <li>Indoor/Outdoors</li>
              <li>Price</li>
              <li>Risk</li>
            </ul>
            <ul className="details__ul__right">
              <li style={{ color: "white" }}>+</li>
              <li>Indoors</li>
              <li>$100-$200 per Month</li>
              <li>Risky</li>
            </ul>
          </div>
          <div className="bottom__left__down">
            <h4>Description</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              debitis corrupti perferendis sit illo fugiat, fugit veniam quae
              sed error deserunt mollitia officia architecto? Perspiciatis
              itaque facere veritatis expedita temporibus. Ipsa totam ratione
              amet, consectetur autem nam tempora sit praesentium dignissimos
              quod dolorem! Dicta delectus sint perspiciatis iste harum incidunt
              illum praesentium hic optio aspernatur! Possimus sint fugit dolor
              placeat. Vitae, commodi et necessitatibus itaque, natus possimus
              dolor modi optio dolorem ratione quasi eius mollitia dolore non
              assumenda aut nobis facere, voluptatem odit impedit eveniet
              tempora molestias adipisci saepe? Saepe? Neque quos magni
              explicabo tempora eos illum aspernatur sint nostrum est error?
              Deserunt ipsum incidunt sequi provident ab aut, quas inventore sed
              deleniti quibusdam placeat ad eveniet, voluptatem maxime
              asperiores.
            </p>
          </div>
        </div>
        <div className="bottomDetails__right">
          <p>
            <strong>Related</strong>
          </p>
          <div className="bottom__right__relatedCard">
            <img src="https://images.unsplash.com/photo-1501116518234-f32f28802bd1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" />
            <p>MMA</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HobbyDetail;
