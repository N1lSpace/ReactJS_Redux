import { useState } from "react";

// Replace these with your actual logo image imports
import Sh from "../../assets/icon/shefinds.svg";
import Yh from "../../assets/icon/yahoo.svg";
import Hl from "../../assets/icon/Healthline.svg";
import Msn from "../../assets/icon/MSN.svg";
import logo from "../../assets/icon/Logo-White.svg";

const logos = [
  { name: "Logo1", src: Sh },
  { name: "Logo2", src: Yh },
  { name: "Logo3", src: Hl },
  { name: "Logo4", src: Msn },
  { name: "Logo1", src: Sh },
  { name: "Logo2", src: Yh },
  { name: "Logo3", src: Hl },
];

const footerColumns = [
  {
    heading: "PRODUCTS",
    links: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
  },
  {
    heading: "LEGAL PAGES",
    links: [
      "Lorem Ipsum Text",
      "Lorem Ipsum Text",
      "Lorem Ipsum Text",
      "Lorem Ipsum",
      "Lorem Ipsum",
    ],
  },
  {
    heading: "PRODUCTS",
    links: [
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
    ],
  },
  {
    heading: "PRODUCTS",
    links: [
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
    ],
  },
  {
    heading: "LEGAL PAGES",
    links: [
      "Lorem Ipsum Text",
      "Lorem Ipsum Text",
      "Lorem Ipsum Text",
      "Lorem Ipsum",
      "Lorem Ipsum",
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email) setSubmitted(true);
  };

  return (
    <footer
      className="w-full font-sans"
      style={{ background: "#1a1a1a", fontFamily: "'DM Sans', sans-serif" }}>
      {/* Press logos bar */}
      <div
        className="w-full border-b border-t"
        style={{ borderColor: "#2e4a6a", background: "#f5f7fa" }}>
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between gap-4 flex-wrap">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center opacity-60 hover:opacity-90 transition-opacity cursor-pointer">
              <img
                src={logo.src}
                alt={logo.name}
                className="h-6 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter section */}
      <div
        className="w-full py-16 px-6 flex flex-col items-center gap-6"
        style={{ background: "#2c2c2c" }}>
        <img src={logo} alt="Logo" className="h-10 w-auto" />
        <h2
          className="text-white text-center text-2xl md:text-3xl font-light leading-snug max-w-lg"
          style={{ letterSpacing: "0.01em" }}>
          Subscribe To Your Newsletter To Stay
          <br />
          Updated About Discounts
        </h2>
        <div className="relative mt-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            placeholder="person@email.com"
            className="rounded-full px-5 py-3 pr-14 bg-transparent border text-white text-sm w-72 outline-none focus:border-blue-400 transition-colors placeholder-gray-500"
            style={{ borderColor: "#555" }}
          />
          <button
            onClick={handleSubmit}
            className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-full w-9 h-9 flex items-center justify-center text-white transition-colors"
            style={{ background: submitted ? "#22c55e" : "#333" }}
            aria-label="Subscribe">
            {submitted ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8.5L6.5 12L13 5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
        {submitted && (
          <p className="text-green-400 text-sm -mt-2">
            Thanks for subscribing!
          </p>
        )}
      </div>

      {/* Links grid */}
      <div className="w-full px-8 py-12" style={{ background: "#252525" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {footerColumns.map((col, ci) => (
            <div key={ci}>
              <p
                className="text-xs font-semibold mb-4 tracking-widest"
                style={{ color: "#888", letterSpacing: "0.12em" }}>
                {col.heading}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link, li) => (
                  <li key={li}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                      style={{ fontWeight: 300 }}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright bar */}
      <div
        className="w-full py-4 text-center text-xs border-t"
        style={{ color: "#666", borderColor: "#333", background: "#1e1e1e" }}>
        Copyright © 2023 Renew Bariatrics, Inc
      </div>
    </footer>
  );
}
