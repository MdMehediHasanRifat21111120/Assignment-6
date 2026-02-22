import "./error.css";

export default function Error({ message = "Something went wrong. Please try again.", onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="error-modal" onClick={(e) => e.stopPropagation()}>

        <button className="error-close-btn" onClick={onClose}>✕</button>

        <div className="error-icon-wrap">
          <svg className="error-icon-svg" viewBox="0 0 52 52">
            <circle className="error-circle" cx="26" cy="26" r="25" />
            <line className="icon-cross" x1="16" y1="16" x2="36" y2="36" />
            <line className="icon-cross" x1="36" y1="16" x2="16" y2="36" />
          </svg>
        </div>

        <h3 className="error-title">Oops!</h3>
        <p className="error-message">{message}</p>

        <div className="error-actions">
          <button className="error-btn" onClick={onClose}>Try Again</button>
          <button className="error-btn-ghost" onClick={onClose}>✕</button>
        </div>

        <div className="error-secure">
          <span className="error-dot"></span>
          Error logged securely
        </div>

      </div>
    </div>
  );
}