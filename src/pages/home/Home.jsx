import { useNavigate } from "react-router";
import "./home.css";
import { useAuth } from "../../contexts/AuthContext";

export default function Home() {
  const { user } = useAuth();

  const navigate = useNavigate();

  return (
    <div className="home-wrapper">
      {/* Glow Orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-eyebrow">
          <span className="eyebrow-dot"></span>
          Trusted Identity · Everywhere
        </div>

        <h1 className="hero-title">
          Auth that feels
          <br />
          <em>effortless.</em>
        </h1>

        <p className="hero-desc">
          A warm, secure authentication layer for modern products. Simple for
          users, powerful for teams. Get started in minutes.
        </p>

        {!user && (
          <div className="hero-actions">
            <button
              className="btn-amber-home"
              onClick={() => navigate("/register")}
            >
              Get Started Free
            </button>
            <button
              className="btn-ghost-home"
              onClick={() => navigate("/login")}
            >
              Sign In →
            </button>
          </div>
        )}

        <div className="hero-dots">
          <span className="hdot"></span>
          <span className="hdot lit"></span>
          <span className="hdot"></span>
        </div>
      </section>

      
      <section className="features">
        <div className="feature-card">
          <div className="feature-icon"><i className="fa-solid fa-lock"></i></div>
          <h3>Secure by Default</h3>
          <p>
            End-to-end encryption and SSL on every request. Your users' data
            stays safe.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon"><i className="fa-solid fa-bolt"></i></div>
          <h3>Lightning Fast</h3>
          <p>
            Auth responses under 100ms. No lag, no friction — just a seamless
            experience.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon"><i className="fa-solid fa-shield"></i></div>
          <h3>Fraud Protection</h3>
          <p>
            Built-in anomaly detection and session monitoring to keep bad actors
            out.
          </p>
        </div>
      </section>

      {/* Stats Row */}
      <section className="stats">
        <div className="stat-item">
          <span className="stat-number">99.9%</span>
          <span className="stat-label">Uptime</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <span className="stat-number">2M+</span>
          <span className="stat-label">Users Protected</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <span className="stat-number">&lt;100ms</span>
          <span className="stat-label">Avg. Response</span>
        </div>
        <div className="stat-divider"></div>
      </section>

      {!user && (
        <section className="cta-banner">
          <p className="cta-text">Ready to secure your app?</p>
          <button
            className="btn-amber-home"
            onClick={() => navigate("/register")}
          >
            Create Free Account
          </button>
        </section>
      )}
    </div>
  );
}
