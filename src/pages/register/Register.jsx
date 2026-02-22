import { useNavigate } from "react-router";
import "./register.css";
import SocialLogin from "../../components/socialLogin/SocialLogin";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect, useState } from "react";
import Success from "../../components/modals/success/Success";
import Error from "../../components/modals/error/Error";
import {
  validateEmail,
  validateName,
  validatePassword,
} from "../../utils/validation";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isOk, setIsOk] = useState(false);

  // error states
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await register(email, password);
      setShowSuccess(true);
    } catch (error) {
      setShowError(true);
    }
  };

  const handleSuccess = () => {
    setShowSuccess(false);
    navigate("/dashboard");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  useEffect(() => {
    // first name
    if (firstName) {
      setFirstNameError(validateName(firstName) || "");
    }

    // last name
    if (lastName) {
      setLastNameError(validateName(lastName) || "");
    }

    // email
    if (email) {
      setEmailError(validateEmail(email) ? "" : "Invalid email address");
    }

    // password
    if (password) {
      setPasswordError(validatePassword(password) || "");
    }

    // confirm password
    if (confirmPassword) {
      if (password !== confirmPassword) {
        setConfirmPasswordError("Passwords do not match");
      } else {
        setConfirmPasswordError("");
      }
    }

    // enable submit button
    if (
      validateEmail(email) &&
      validatePassword(password) === null &&
      validatePassword(confirmPassword) === null &&
      validateName(firstName) === null &&
      validateName(lastName) === null &&
      isChecked &&
      password === confirmPassword
    ) {
      setIsOk(true);
    } else {
      setIsOk(false);
    }
  }, [firstName, lastName, password, confirmPassword, email, isChecked]);

  return (
    <div className="register-wrapper">
      {showSuccess && <Success onClose={handleSuccess} />}
      {showError && <Error onClose={() => setShowError(false)} />}
      <div className="register-card">
        <div className="register-brand">
          <div className="register-flame">🔥</div>
          <span className="register-brand-name">Auth</span>
          <span className="register-badge">App</span>
        </div>

        <h2 className="register-title">Create account</h2>
        <p className="register-sub">Join us — it only takes a minute</p>

        <form className="register-form">
          <div className="input-row">
            <div className="input-group">
              <label>First Name</label>
              <input
                type="text"
                placeholder="John"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={firstNameError ? "input-error" : ""}
              />
              {firstNameError && (
                <span className="error-msg">{firstNameError}</span>
              )}
            </div>
            <div className="input-group">
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Doe"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className={lastNameError ? "input-error" : ""}
              />
              {lastNameError && (
                <span className="error-msg">{lastNameError}</span>
              )}
            </div>
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="mail@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={emailError ? "input-error" : ""}
            />
            {emailError && <span className="error-msg">{emailError}</span>}
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={passwordError ? "input-error" : ""}
            />
            {passwordError && (
              <span className="error-msg">{passwordError}</span>
            )}
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={confirmPasswordError ? "input-error" : ""}
            />
            {confirmPasswordError && (
              <span className="error-msg">{confirmPasswordError}</span>
            )}
          </div>

          <div className="terms-row">
            <input
              type="checkbox"
              id="terms"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <label htmlFor="terms" className="terms-label">
              I agree to the <span className="terms-link">Terms</span> and{" "}
              <span className="terms-link">Privacy Policy</span>
            </label>
          </div>

          <SocialLogin page={"Register"} />

          <button
            type="submit"
            className="btn-amber-reg"
            onClick={handleRegister}
            disabled={!isOk}
          >
            Create Account
          </button>
        </form>

        <p className="register-footer">
          Already have an account?{" "}
          <span className="login-link" onClick={handleLogin}>
            Sign In
          </span>
        </p>

        <div className="register-secure">
          <span className="secure-dot-reg"></span>
          SSL Secured
        </div>
      </div>
    </div>
  );
}
