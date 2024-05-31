import HomeInteriorsph from "../../images/HomeInteriorsph.png";

function HomeInteriors() {
  return (
    <section className="homeinter-section">
      <div className="container homeinteriorsph-container">
        <div className="home-interiorsph">
          <div>
            <img
              src={HomeInteriorsph}
              alt="photo for room contein library and some furniture"
            />
          </div>
          <div>
            <p>Get personalised home interiors</p>
            <h3> in just 50 days</h3>
            <button>SPEAK WITH A ONLINE CONSULTANT</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeInteriors;
