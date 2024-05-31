import kitchen from "../../images/kitchen.png";
import bedroom from "../../images/bedroom.png";
import livingroom from "../../images/livingroom.png";
import homeoffice from "../../images/homeoffice.png";
import calendar from "../../images/calendar.svg";
import certificate from "../../images/certificate.svg";
import homesmile from "../../images/homesmile.svg";

function Works() {
  return (
    <section className="works-section">
      <div className="container">
        {/* why-part */}
        <div className="why-part">
          <h3>Why LAND Interiors</h3>
          <div className="why-content">
            <div>
              <img src={calendar} alt="calendar logo" />
              <p>50 days or we pay you rent</p>
            </div>
            <div>
              <img src={homesmile} alt="homesmile logo" />
              <p>1500+happy customers</p>
            </div>
            <div>
              <img src={certificate} alt="certificate logo" />
              <p>300+ design experties</p>
            </div>
          </div>
          {/* What we do part */}
          <h3>What we do?</h3>
          <div className="Works-we-do">
            <div>
              <img src={kitchen} alt="kitchen " />
              <h3>Modular Kitchen </h3>
            </div>
            <div>
              <img src={bedroom} alt="bedroom" />
              <h3>Bedroom</h3>
            </div>
            <div>
              <img src={livingroom} alt="living room" />
              <h3>Living room </h3>
            </div>
            <div>
              <img src={homeoffice} alt="home office" />
              <h3>Home office</h3>
            </div>
          </div>
          <p className="details">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            dolor dolorum quas esse ratione suscipit harum itaque minima dicta
            molestias nobis fugit numquam, temporibus aut, repudiandae enim nemo
            necessitatibus quo!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Works;
