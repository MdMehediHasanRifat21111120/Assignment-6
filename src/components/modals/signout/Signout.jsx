import "./signout.css";

export default function Signout({ onConfirm, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="signout-modal" onClick={(e) => e.stopPropagation()}>

        <button className="signout-close-btn" onClick={onClose}>✕</button>

        <div className="signout-icon-wrap">
          <svg className="signout-icon-svg" viewBox="0 0 52 52">
            <circle className="signout-circle" cx="26" cy="26" r="25" />
            <path className="signout-door" d="M28 17 L20 17 L20 35 L28 35" />
            <path className="signout-arrow" d="M24 26 L36 26 M32 22 L36 26 L32 30" />
          </svg>
        </div>

        <h3 className="signout-title">Sign Out?</h3>
        <p className="signout-message">
          Are you sure you want to sign out of your account?
        </p>

        <div className="signout-actions">
          <button className="signout-btn-ghost" onClick={onClose}>Stay</button>
          <button className="signout-btn" onClick={onConfirm}>Yes, Sign Out</button>
        </div>

        <div className="signout-secure">
          <span className="signout-dot"></span>
          Session will be cleared
        </div>

      </div>
    </div>
  );
}