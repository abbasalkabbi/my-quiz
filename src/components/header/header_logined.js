/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";

function Header_logined(props){
    function logout(){
        localStorage.clear("id")
        if(!localStorage.getItem('id')){
            window.location.reload(false);
        }
    }
    return(
        <>
         {/* dropdown */}
        <div class="dropdown">
                    {/* Avatar  */}
                    <a
                        class="nav-link dropdown-toggle" 
                        href="#" role="button" 
                        id="navbarDropdownMenuAvatar"
                        data-bs-toggle="dropdown" 
                        aria-expanded="false"
                    >
                        <img
                            src={props.url_img}
                            class="rounded-circle"
                            height="25"
                            alt="Black and White Portrait of a Man"
                            loading="lazy"
                        />
                    </a>
                    {/* end Avatar  */}
                    {/* ul */}
                    <ul class="dropdown-menu dropdown-menu-lg-end dropdown-menu-sm-start">
                        <li>
                            <NavLink
                            to={`/user/${localStorage.getItem('id')}`}
                            className='dropdown-item'
                            >
                                My Profile
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                            to='/Settings'
                            className='dropdown-item'
                            >
                                Settings
                            </NavLink>
                        </li>
                        <li><li>
                            <NavLink
                            to='/upload'
                            className='dropdown-item'
                            >
                                Upload
                            </NavLink>
                        </li></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li ><button class="dropdown-item " onClick={()=>logout()}>Log out</button></li>
                    </ul>
                    {/* ul end  */}
                </div>
            {/* dropdown End */}
        </>
    )
}
export default Header_logined;