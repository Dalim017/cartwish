import React from "react";
import "./NavBar.css";
import rocket from "../../assets/rocket.png";
import star from "../../assets/glowing-star.png";
import idButton from "../../assets/id-button.png";
import memo from "../../assets/memo.png";
import lock from "../../assets/locked.png";
import order from "../../assets/package.png";

import LinkWithIcon from "./LinkWithIcon";

const NavBar = () => {
  return (
    <nav className="align_center navbar">
      {/* First part of Navbar */}
      <div className="align_center">
        <h1 className="navbar_heading">CartWish</h1>
        <form className="align_center navbar_form">
          <input
            type="text"
            className="navbar_search"
            placeholder="Search Products"
          />
          <button type="submit" className="search_button">
            Search
          </button>
        </form>
      </div>
      {/* Second part of Navbar  */}
      <div className="align_center navbar_links">
        <LinkWithIcon title="Home" link="/" emoji={rocket} />
        <LinkWithIcon title="Products" link="/Products" emoji={star} />
        <LinkWithIcon title="LogIn" link="/Login" emoji={idButton} />
        <LinkWithIcon title="SignUp" link="/signup" emoji={memo} />
        <LinkWithIcon title="My Orders" link="/myorders" emoji={order} />
        <LinkWithIcon title="logout" link="/logout" emoji={lock} />
        <a href="/cart" className="align_center">
          Cart <p className="align_center cart_counts">0</p>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
