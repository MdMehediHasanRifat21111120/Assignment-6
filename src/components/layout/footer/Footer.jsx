import './footer.css'
import { Link } from 'react-router';
export default function Footer() {
  return (
    <>
      <footer className="footer-warm">
        <div className="dot-row">
          <div className="dot"></div>
          <div className="dot active"></div>
          <div className="dot"></div>
        </div>
        <p className="tagline">Trusted Identity · Everywhere</p>
        <nav>
          <Link to="/">Privacy</Link>
          <Link to="/">Terms</Link>
          <Link to="/">Security</Link>
          <Link to="/">Help</Link>
        </nav>
        <p className="copy">© 2026 Emberglow Auth. All rights reserved.</p>
      </footer>
    </>
  );
}
