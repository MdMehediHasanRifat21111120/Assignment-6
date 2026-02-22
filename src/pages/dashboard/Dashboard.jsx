import { useAuth } from "../../contexts/AuthContext";
import { useEffect, useState } from "react";
import Signout from "../../components/modals/signout/Signout";
import "./dashboard.css";

export default function Dashboard() {
  const { user, logout, loading } = useAuth();
  const [showSignout, setShowSignout] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
    }
  }, [user, loading]);

  const handleLogout = async () => {
    try {
      await logout();
      setShowSignout(false);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="dashboard-wrapper">
      <div className="orb db-orb-1"></div>
      <div className="orb db-orb-2"></div>

      <div className="dashboard-card">
        <div className="db-avatar-wrap">
          {user?.photoURL ? (
            <img src={user.photoURL} alt="avatar" className="db-avatar-img" />
          ) : (
            <div className="db-avatar-fallback">
              {user?.displayName?.[0] || user?.email?.[0]?.toUpperCase() || "U"}
            </div>
          )}
          <span className="db-avatar-badge">🔥</span>
        </div>

        <div className="db-user-info">
          <h2 className="db-name">{user?.displayName || "Welcome Back!"}</h2>
          <p className="db-email">{user?.email}</p>
        </div>

        <div className="db-divider"></div>

        <div className="db-details">
          <div className="db-detail-row">
            <span className="db-detail-label">User ID</span>
            <span className="db-detail-value db-uid">{user?.uid}</span>
          </div>

          <div className="db-detail-row">
            <span className="db-detail-label">Provider</span>
            <span className="db-detail-value">
              {user?.providerData?.[0]?.providerId === "google.com" &&
                "🔵 Google"}
              {user?.providerData?.[0]?.providerId === "github.com" &&
                "⚫ GitHub"}
              {user?.providerData?.[0]?.providerId === "password" && "🔐 Email"}
            </span>
          </div>

          <div className="db-detail-row">
            <span className="db-detail-label">Email Verified</span>
            <span
              className={`db-badge ${user?.emailVerified ? "db-badge-success" : "db-badge-warn"}`}
            >
              {user?.emailVerified ? "✓ Verified" : "✗ Not Verified"}
            </span>
          </div>

          <div className="db-detail-row">
            <span className="db-detail-label">Account Created</span>
            <span className="db-detail-value">
              {user?.metadata?.creationTime
                ? new Date(user.metadata.creationTime).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    },
                  )
                : "—"}
            </span>
          </div>

          <div className="db-detail-row">
            <span className="db-detail-label">Last Sign In</span>
            <span className="db-detail-value">
              {user?.metadata?.lastSignInTime
                ? new Date(user.metadata.lastSignInTime).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    },
                  )
                : "—"}
            </span>
          </div>
        </div>

        <div className="db-divider"></div>

        <button className="db-logout-btn" onClick={() => setShowSignout(true)}>
          Sign Out
        </button>

        <div className="db-secure">
          <span className="db-secure-dot"></span>
          Session Active
        </div>
      </div>

      {showSignout && (
        <Signout
          onConfirm={handleLogout}
          onClose={() => setShowSignout(false)}
        />
      )}
    </div>
  );
}