import React from "react";
import { NavLink } from "react-router";
import TopNav from "../header/TopNav";
import BottomNav from "../header/BottomNav";

const Header = () => {
  return (
    <nav>
        <TopNav/>
       <BottomNav/>
    </nav>
  );
};

export default Header;
