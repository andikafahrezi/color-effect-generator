import { motion } from "framer-motion";
import "./MainTabs.css";

export default function MainTabs({ activeTab, onTabChange }) {
  const tabs = ["palette", "gradient", "glass"];
  const icons = {
    palette: (
      <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="1" y="1" width="5" height="12" rx="1.5" />
        <rect x="8" y="1" width="5" height="12" rx="1.5" />
      </svg>
    ),
    gradient: (
      <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="7" cy="7" r="5.5" />
        <path d="M7 1.5C9.5 3 10.5 5 10.5 7s-1 4-3.5 5.5" strokeLinecap="round" />
      </svg>
    ),
    glass: (
      <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="10" height="10" rx="3" />
        <path d="M2 5h10M5 2v3" strokeLinecap="round" />
      </svg>
    ),
  };

  return (
    <div className="main-tabs">
      {tabs.map((tab) => (
        <motion.button
          key={tab}
          className={`main-tab ${activeTab === tab ? "active" : ""}`}
          onClick={() => onTabChange(tab)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          {icons[tab]}
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </motion.button>
      ))}
    </div>
  );
}