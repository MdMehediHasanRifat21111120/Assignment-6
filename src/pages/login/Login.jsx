import { useNavigate } from "react-router";
import "./login.css";
import { useAuth } from "../../contexts/AuthContext";
import SocialLogin from "../../components/socialLogin/SocialLogin";
import { useState } from "react";
import Success from "../../components/modals/success/Success";
import Error from "../../components/modals/error/Error";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccess,setShowSuccess]=useState(false);
  const [showError,setShowError]=useState(false);

  const { emailPasswordLogin } = useAuth();

  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await emailPasswordLogin(email, password);
      setShowSuccess(true);
      setEmail("");
      setPassword("");
    } catch (error) {
      setShowError(true);
    }
  };

  const handleSuccess = ()=>{
    setShowSuccess(false);
    navigate("/dashboard");
  }

  return (
    <div className="login-wrapper">
      {
        showSuccess&&(
          <Success onClose={handleSuccess}/>
        )
      }
      {
        showError&&(
          <Error onClose={()=>setShowError(false)}/>
        )
      }
      <div className="login-card">
        {/* Brand */}
        <div className="login-brand">
          <div className="login-flame">🔥</div>
          <span className="login-brand-name">Auth</span>
          <span className="login-badge">App</span>
        </div>
        <h2 className="login-title">Welcome back</h2>
        <p className="login-sub">Sign in to your account</p>

        <form className="login-form">
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="mail@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="forgot">Forgot password?</span>
          </div>

          <button type="submit" className="btn-amber" onClick={handleLogin}>
            Login
          </button>
          <SocialLogin page={"Login"} />
        </form>

        <p className="login-footer">
          Don't have an account?{" "}
          <span className="register-link" onClick={handleRegister}>
            Register Now
          </span>
        </p>

        <div className="login-secure">
          <span className="secure-dot"></span>
          SSL Secured
        </div>
      </div>
    </div>
  );
}
