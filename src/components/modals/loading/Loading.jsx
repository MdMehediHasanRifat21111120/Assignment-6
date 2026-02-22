import "./loading.css";

export default function Loading({ message = "Please wait..." }) {
  return (
    <div className="modal-overlay">
      <div className="loading-modal">

        {/* Spinner */}
        <div className="loading-spinner-wrap">
          <svg className="loading-svg" viewBox="0 0 52 52">
            <circle className="loading-track" cx="26" cy="26" r="22" />
            <circle className="loading-spin" cx="26" cy="26" r="22" />
          </svg>
          <span className="loading-flame">🔥</span>
        </div>

        <h3 className="loading-title">Loading</h3>
        <p className="loading-message">{message}</p>

        {/* Dot pulse row */}
        <div className="loading-dots">
          <span className="ld"></span>
          <span className="ld"></span>
          <span className="ld"></span>
        </div>

      </div>
    </div>
  );
}