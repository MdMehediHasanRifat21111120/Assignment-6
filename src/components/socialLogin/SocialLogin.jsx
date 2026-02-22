import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import "./socialLogin.css";
import Success from "../modals/success/Success";
import Error from "../modals/error/Error";
import { useNavigate } from "react-router";

export default function SocialLogin({ page }) {
  const { googleLogin, githubLogin } = useAuth();
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const navigate =useNavigate();

  const handleGoogleLogin = async (e) => {
    e.preventDefault();
    try {
      await googleLogin();
      setShowSuccess(true);
    } catch (error) {
      setShowError(true);
    }
  };

  const handleGithubLogin = async (e) => {
    e.preventDefault();
    try {
      await githubLogin();
      setShowSuccess(true);
    } catch (error) {
      setShowError(true);
    }
  };

  const handleSuccess = () => {
    setShowSuccess(false);
    navigate("/dashboard");
  };

  return (
    <div className="social-login">
      {showSuccess && <Success onClose={handleSuccess} />}
      {showError && <Error onClose={() => setShowError(false)} />}
      <p>{page} with</p>
      <div className="social-buttons">
        <button onClick={handleGoogleLogin}>
          <i className="fa-brands fa-google"></i>
          Google
        </button>
        <button onClick={handleGithubLogin}>
          <i className="fa-brands fa-github"></i>
          GitHub
        </button>
      </div>
    </div>
  );
}
