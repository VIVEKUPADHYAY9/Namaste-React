import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import "../css/header.css";

const Header = () => {
  const [btnLogin, setBtnLogin] = useState("Login");

  return (
    <div className="header flex bg-white justify-between -m-1 p-5 shadow-lg shadow-green-900  sticky top-0 z-2">
      <div className="logo-container">
        <img className="logo w-48 h-28  p-1 -m-7" src={LOGO_URL} />
      </div>
      <div className="nav-bar flex items-center ">
        <ul className="flex p-4 m-4 ">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/About">About</Link>{" "}
          </li>
          <li className="px-4">
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li className="px-4"> Cart(0)</li>
          <button
            className="login-btn  p-5 ml-4 -mr-7 mt-0 mb-0 bg-green-700 "
            onClick={() => {
              btnLogin == "Login"
                ? setBtnLogin("Logout")
                : setBtnLogin("Login");
            }}
          >
            {btnLogin}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
