
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <h1>Hi From layout</h1>
            <Outlet />
        </>
    )
}
export default Layout;