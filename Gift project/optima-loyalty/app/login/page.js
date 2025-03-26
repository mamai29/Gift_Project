import Link from "next/link";
import FormInput from "../../components/FormInput";
import "./Login.css";

export default function Login() {
  return (
    <div className="center-container bg-gray">
      <div className="login-container">
        {/* Left: Form */}
        <div className="login-form-container">
          <div className="login-form">
            <h1>Log In</h1>
            <FormInput
              label="Email"
              type="email"
              placeholder="Enter your email address"
              icon="email"
            />
            <FormInput
              label="Password"
              type="password"
              placeholder="Enter your password"
              icon="password"
            />
            <div className="checkbox-container">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <Link href="/forgot-password">Forgot Password</Link>
            </div>
            <button className="login-button">Log In</button>
            <button className="google-button">
              <img src="image/gmail.jpeg" alt="Google" className="w-5 h-5" />
              <span>Sign in with Google</span>
            </button>
            <p className="signup-link">
              Don’t have an account? <Link href="/register">Sign Up</Link>
            </p>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="login-image">
          <div className="overlay"></div>
          <div className="text-container">
            <h2 className="text-white">Welcome Here</h2>
            <p className="text-white small-text">
              Access your personal account by logging in
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}