import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import "./Header.css";
import { span } from "framer-motion/client";

export default function Header() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <div className="header-content">
        <div className="header-text">
          <div className="header-title">Color Token Generator by <span style={{ color: '#CC5605' }}>AfterFrameStudio™</span></div>
          {/* <div className="header-sub">Figma Variable Tokens</div> */}
        </div>
        
        {/* Dark Mode Toggle Button */}
        <button 
          className="theme-toggle-btn" 
          onClick={toggleTheme}
          title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          aria-label="Toggle dark mode"
        >
          <span className="material-symbols-rounded">
            {isDarkMode ? "light_mode" : "dark_mode"}
          </span>
        </button>
      </div>
    </header>
  );
}