import { Outlet, Link } from "react-router-dom";
import "../Css/style.css"
function Layout() {
  return (
    <>
      <nav className="nav">
        <div className="logo">Zaphire</div>
        <ul className="navItems">
          <li>
            <Link to="/" className="link">Home</Link>
          </li>
          <li>
            <Link to="/users" className="link">Users</Link>
          </li>
          <li>
            <Link to="/posts" className="link">Posts</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}

export default Layout