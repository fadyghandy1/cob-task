import logo from "../../images/logo.svg";
import { ImFacebook2 } from "react-icons/im";
import { FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container ">
        <div className="footer-content">
          {/* logo and description */}
          <div>
            <img src={logo} alt="house logo for land interiors" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
              ipsam, deserunt provident non soluta sed nostrum quod eveniet
              ducimus, reprehenderit dolores est at repellat quos odit eius
              voluptas! Provident, nesciunt?
            </p>
          </div>
          {/* list */}
          <div>
            <h3>What We Do</h3>
            <ul>
              <li>interior design </li>
              <li>kitchen</li>
              <li>ceilling</li>
              <li>bedroom</li>
              <li>smarthome</li>
            </ul>
          </div>
          {/* content */}
          <div>
            <h3>Get in Touch</h3>
            <p>landinteriors@gmail.com</p>
            <p>+91 9898765656</p>
          </div>
          {/* logos */}
          <div>
            <ul>
              <li>
                <ImFacebook2 />
              </li>
              <li>
                <FaLinkedin />
              </li>
              <li>
                <FaTwitter />
              </li>
              <li>
                <FaYoutube />
              </li>
              <li>
                <FaInstagram />
              </li>
            </ul>
          </div>
          {/* list */}
          <div>
            <ul>
              <li>about </li>
              <li>projects</li>
              <li>studio</li>
              <li>blog</li>
              <li>contant</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
