import React from "react";
import '../css/home.css'
import { NavLink } from "react-router-dom";
function Home() {
    return (
        <>
            <main className="bg-dark-subtle home d-flex flex-column justify-content-center align-items-center">
                    <h1 className="text-center">
                        Make your Quiz 
                        <p>
                            it's esay
                        </p>
                    </h1>
                    <NavLink
                    to='/login'
                    className='btn btn-secondary text-white link'>
                        Take A Quiz
                    </NavLink>
            </main>
        </>
    );
}
export default Home;