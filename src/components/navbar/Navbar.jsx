import logo from "../../images/logo.svg";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

function Navbar() {
  const [nav, setNav] = useState(false);

  //handle toggle for nav in mobile
  const HandleToggle = () => {
    setNav(!nav);
  };
  const condition = nav && 450;

  return (
    <header>
      <div className="container  ">
        <div className="join-nav" style={{ height: condition }}>
          <div className="logo-join">
            <div>
              <img src={logo} alt="house logo for land interiors" />
            </div>
            <IoMenu onClick={HandleToggle} />
            <div className={nav ? "" : "menu-small-device"}>
              <p>join as Design Expert</p>
              <p>Partner With LAND interiors </p>
            </div>
          </div>
          <nav className={nav ? "" : "menu-small-device"}>
            <ul>
              <li>about </li>
              <li>projects</li>
              <li>studio</li>
              <li>blog</li>
              <li>contant</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
