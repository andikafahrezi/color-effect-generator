import { useState, useEffect } from "react";
import "./Toast.css";

export default function Toast({ message, show, duration = 1800 }) {
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    setVisible(show);
    if (show) {
      const timer = setTimeout(() => setVisible(false), duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration]);

  return (
    <div className={`copied-toast ${visible ? "show" : ""}`}>
      {message}
    </div>
  );
}