import { Link } from "react-router";
import "./navbar.css";
import { useAuth } from "../../../contexts/AuthContext";
export default function Navbar() {
  const { user } = useAuth();

  return (
    <nav className="navbar">
      <Link className="nav-brand" to="/">
        <div className="flame">🔥</div>
        <span className="name">Auth</span>
        <span className="badge">App</span>
      </Link>

      <ul className="nav-links">
        {user && (
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        )}

        <li>
          <Link to="/">Security</Link>
        </li>
        <li>
          <Link to="/">Sessions</Link>
        </li>
        <li>
          <Link to="/">Docs</Link>
        </li>
      </ul>

      <div className="nav-actions">
        <div className="nav-status">
          <div className="dot"></div>
          Secured
        </div>

        {!user && (
          <>
            <Link to="/login">
              <button className="btn-ghost">Sign In</button>
            </Link>
            <Link to="/register">
              <button className="btn-amber">Get Started</button>
            </Link>
          </>
        )}
      </div>

      <button className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}
