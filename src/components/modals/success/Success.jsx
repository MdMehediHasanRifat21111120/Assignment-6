import "./success.css";

export default function Success({ message = "Action completed successfully!", onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box success-modal" onClick={(e) => e.stopPropagation()}>

        <div className="modal-icon-wrap success-icon-wrap">
          <svg className="modal-icon-svg" viewBox="0 0 52 52">
            <circle className="icon-circle success-circle" cx="26" cy="26" r="25" />
            <path className="icon-check" fill="none" d="M14 27 L22 35 L38 18" />
          </svg>
        </div>

        <h3 className="modal-title success-title">Success!</h3>
        <p className="modal-message">{message}</p>

        <button className="modal-btn success-btn" onClick={onClose}>
          Continue
        </button>

        <div className="modal-secure">
          <span className="secure-dot-modal success-dot"></span>
          Secured & Verified
        </div>

      </div>
    </div>
  );
}

