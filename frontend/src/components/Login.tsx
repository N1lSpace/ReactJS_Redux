import { useState } from "react";
import eye from "../assets/icon/Eye.svg";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [passFocused, setPassFocused] = useState(false);

  return (
    <div
      className=" flex items-center justify-center p-20"
      style={{ backgroundColor: "#f5f5f3", fontFamily: "'Georgia', serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=DM+Sans:wght@300;400;500&display=swap');

        .login-card {
          font-family: 'DM Sans', sans-serif;
        }
        .login-title {
          font-family: 'Playfair Display', serif;
        }
        .input-field {
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          outline: none;
        }
        .input-field:focus {
          border-color: #1a1a1a;
          box-shadow: 0 0 0 3px rgba(26,26,26,0.08);
        }
        .login-btn {
          transition: background-color 0.2s ease, transform 0.1s ease;
        }
        .login-btn:hover {
          background-color: #2d2d2d;
        }
        .login-btn:active {
          transform: scale(0.99);
        }
        .eye-btn {
          transition: color 0.2s ease;
        }
        .eye-btn:hover {
          color: #1a1a1a;
        }
        .image-panel {
          background: linear-gradient(135deg, #c9c5be 0%, #b0aba2 40%, #9e9890 100%);
          position: relative;
          overflow: hidden;
        }
        .image-panel::before {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 40px,
            rgba(255,255,255,0.04) 40px,
            rgba(255,255,255,0.04) 80px
          );
        }
        .image-panel::after {
          content: '';
          position: absolute;
          bottom: -60px;
          right: -60px;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          background: rgba(255,255,255,0.07);
        }
        .create-link {
          color: #1a1a1a;
          text-decoration: underline;
          text-underline-offset: 2px;
          transition: opacity 0.2s ease;
        }
        .create-link:hover {
          opacity: 0.6;
        }
        .forgot-link {
          color: #555;
          text-decoration: underline;
          text-underline-offset: 2px;
          font-size: 0.85rem;
          transition: color 0.2s ease;
        }
        .forgot-link:hover {
          color: #1a1a1a;
        }
      `}</style>

      <div
        className="login-card w-full max-w-3/4 bg-white rounded-2xl overflow-hidden shadow-lg flex"
        style={{ minHeight: "600px" }}>
        {/* Left: Form */}
        <div
          className="flex-1 p-10 flex flex-col justify-center"
          style={{ minWidth: 0 }}>
          <h1
            className="login-title text-3xl font-semibold mb-1"
            style={{ color: "#1a1a1a", letterSpacing: "-0.02em" }}>
            Login
          </h1>
          <p className="text-sm mb-8" style={{ color: "#888" }}>
            Do not have an account?{" "}
            <a
              href="#"
              className="create-link font-medium"
              style={{ color: "#1a1a1a" }}>
              create a new one.
            </a>
          </p>

          {/* Email */}
          <div className="mb-5">
            <label
              className="block text-sm font-medium mb-2"
              style={{ color: "#333", letterSpacing: "0.01em" }}>
              Enter Your Email Or Phone
            </label>
            <input
              type="text"
              className="input-field w-full px-4 py-3 rounded-xl border text-sm"
              style={{
                borderColor: emailFocused ? "#1a1a1a" : "#e0deda",
                backgroundColor: "#fafaf9",
                color: "#1a1a1a",
              }}
              placeholder="michael.joe@xmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
            />
          </div>

          {/* Password */}
          <div className="mb-8">
            <label
              className="block text-sm font-medium mb-2"
              style={{ color: "#333", letterSpacing: "0.01em" }}>
              Enter Your Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="input-field w-full px-4 py-3 pr-11 rounded-xl border text-sm"
                style={{
                  borderColor: passFocused ? "#1a1a1a" : "#e0deda",
                  backgroundColor: "#fafaf9",
                  color: "#1a1a1a",
                }}
                placeholder="••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setPassFocused(true)}
                onBlur={() => setPassFocused(false)}
              />
              <button
                type="button"
                className="eye-btn absolute right-3 top-1/2 -translate-y-1/2"
                style={{
                  color: "#aaa",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "2px",
                }}
                onClick={() => setShowPassword(!showPassword)}
                aria-label="Toggle password visibility">
                {showPassword ? (
                  // Eye-off icon
                  <img src={eye} />
                ) : (
                  // Eye icon
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            className="login-btn w-full py-3 rounded-xl text-white font-medium text-sm tracking-wide mb-5 cursor-pointer"
            style={{ backgroundColor: "#1a1a1a", letterSpacing: "0.04em" }}>
            Login
          </button>

          <div className="text-center">
            <a href="#" className="forgot-link">
              Forgot Your Password
            </a>
          </div>
        </div>

        {/* Right: Image panel */}
        <div
          className="image-panel hidden md:block"
          style={{ width: "42%", minHeight: "360px", flexShrink: 0 }}
        />
      </div>
    </div>
  );
}
