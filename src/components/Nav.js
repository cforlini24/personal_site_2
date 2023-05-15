import { Card, MobileNav, Navbar,IconButton, Collapse, Typography } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Nav = () => {
    const [openNav, setOpenNav] = useState(false);

    const navList = (
        <ul className="flex flex-col gap-2 mt-2 md:mt-0 md:flex md:flex-row md:mx-auto md:mb-0 md:items-center md:gap-6 scrollbar-hide">
            <Link to="/about-me" onClick={() => setOpenNav(false)} className="cursor-pointer">
            <Typography as="li" variant="small" className="p-1">
                About Me
            </Typography>
            </Link>
            <Link to="/portfolio" onClick={() => setOpenNav(false)} className="cursor-pointer">
            <Typography as="li" variant="small" className="p-1" >
                Portfolio
            </Typography>
            </Link>
            <Link to="/resume" onClick={() => setOpenNav(false)} className="cursor-pointer">
            <Typography as="li" variant="small" className="p-1" >
                Resume
            </Typography>
            </Link>
            <Link to="/contact" onClick={() => setOpenNav(false)} className="cursor-pointer">
            <Typography as="li" variant="small" className="p-1" >
                Conact
            </Typography>
            </Link>
        </ul>
    )

    return( 
    <Navbar className="text-white bg-blue bg-opacity-100 sticky inset-0 z-10 h-max max-w-full py-2 my-auto px-3 mx-auto lg:py-4 md:overflow-hidden scrollbar-hide" >
        <div className="container flex justify-between items-center mx-auto">
        <Link to="/" onClick={() => setOpenNav(false)}>
            <Typography className="cursor-pointer py-1" variant="h6">
                Chase Forlini
            </Typography>
            </Link>
            <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
            >
            {openNav ? (
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
                </svg>
            ) : (
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                />
                </svg>
            )}
            </IconButton>
            <div className="hidden md:block" >
                {navList}
            </div>
        </div>
        <Collapse open={openNav}>
            {navList}
        </Collapse>
    </Navbar>
    )
}

export default Nav;