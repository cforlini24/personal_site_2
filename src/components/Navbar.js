import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return( 
    <nav>
        <div id="navTitle">
            Chase Forlini
        </div>
        <div id="navButtons">
            <Link to="/">Homepage</Link>
            <Link to="/about-me">About Me</Link>
            <Link to="/portfolio">Portfolio</Link>
        </div>
    </nav>
    )
}

export default Navbar;