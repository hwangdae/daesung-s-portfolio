import React from "react";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <aside className="fixed top-1/2 right-0 z-50 transform -translate-x-1/2">
      <div>
        <Link to="1" spy={true} smooth={true}>
          <span>PROFILE</span>
        </Link>
        <br />
        <Link to="2" spy={true} smooth={true}>
          <span>ABOUTME</span>
        </Link>
        <br />
        <Link to="3" spy={true} smooth={true}>
          <span>SKILL</span>
        </Link>
        <br />
        <Link to="4" spy={true} smooth={true}>
          <span>PROJECT</span>
        </Link>
      </div>
    </aside>
  );
};

export default Nav;
