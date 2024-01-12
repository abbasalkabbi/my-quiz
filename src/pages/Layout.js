
import { NavLink, Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            {/* nav */}
            <nav class="navbar navbar-expand-lg  bg-dark text-light"  data-bs-theme="dark">
                <div class="container-fluid  ">
                    <a className="navbar-brand " href="#">My-Quiz</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                  {/* llist */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink
                    			to='/'
                    			className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                 				Home
                 			</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                  				to='/login'
                  				className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                  				Login
                  			</NavLink>
                         </li>
                    </ul>
                </div>
                  {/* end ist */}
                </div>
            </nav>
            {/* end nav */}
            <Outlet />
        </>
    )
}
export default Layout;