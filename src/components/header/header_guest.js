import React from "react";
import { NavLink } from "react-router-dom";
function Header_guest(){
    return(
        <>
        <NavLink
            to='/sing_in'
            className="btn btn-info px-3 me-2"
            >
            Login
        </NavLink>
        <NavLink
            to='/sing_up'
            className="btn btn-primary me-3"
            >
            Sign up for free
        </NavLink>
        </>
    )
}
export default Header_guest