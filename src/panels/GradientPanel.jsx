import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { lerpHex, validateHex } from "../utils/colorMath";
import { copyToClipboard } from "../utils/clipboard";
import Button from "../components/shared/Button";
import Input from "../components/shared/Input";
import ColorPicker from "../components/shared/ColorPicker";
import { GRADIENT_RECOS } from "../data/gradientRecommendations";
import "./GradientPanel.css";

export default function GradientPanel({ showToast }) {
  const [fromColor, setFromColor] = useState("#6366f1");
  const [toColor, setToColor] = useState("#ec4899");
  const [direction, setDirection] = useState("to right");
  const [stops, setStops] = useState(7);

  // ✅ SAFE gradient generator
  const generateGradient = () => {
    const gradientArray = [];

    for (let i = 0; i < stops; i++) {
      const t = stops > 1 ? i / (stops - 1) : 0;
      const pct = Math.round(t * 100);

      const safeHex =
        validateHex(fromColor) && validateHex(toColor)
          ? lerpHex(fromColor, toColor, t)
          : "#000000";

      gradientArray.push({
        pct,
        hex: safeHex,
      });
    }

    return gradientArray;
  };

  // ✅ memo biar performa lebih oke
  const gradientStops = useMemo(
    () => generateGradient(),
    [fromColor, toColor, stops]
  );

  const gradientCSS = `linear-gradient(${direction}, ${fromColor}, ${toColor})`;

  const handleLoadReco = (from, to) => {
    setFromColor(from);
    setToColor(to);
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  return (
    <div className="gradient-panel">
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <span className="card-label">Gradient Settings</span>

        <div className="gradient-inputs">
          {/* FROM COLOR */}
          <motion.div
            className="gradient-row"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.05 }}
          >
            <span className="gradient-label-sm">From</span>

            <ColorPicker
              value={fromColor}
              onChange={(val) => {
                if (validateHex(val)) setFromColor(val);
              }}
              id="gradColorFrom"
            />

            <Input
              className="hex"
              value={fromColor}
              onChange={(e) => setFromColor(e.target.value)}
              onBlur={(e) => {
                if (!validateHex(e.target.value)) {
                  setFromColor("#6366f1");
                }
              }}
              placeholder="#6366F1"
            />
          </motion.div>

          {/* TO COLOR */}
          <motion.div
            className="gradient-row"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="gradient-label-sm">To</span>

            <ColorPicker
              value={toColor}
              onChange={(val) => {
                if (validateHex(val)) setToColor(val);
              }}
              id="gradColorTo"
            />

            <Input
              className="hex"
              value={toColor}
              onChange={(e) => setToColor(e.target.value)}
              onBlur={(e) => {
                if (!validateHex(e.target.value)) {
                  setToColor("#ec4899");
                }
              }}
              placeholder="#EC4899"
            />
          </motion.div>

          {/* DIRECTION */}
          <motion.div
            className="gradient-row"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
          >
            <span className="gradient-label-sm">Direction</span>

            <div className="direction-btns">
              {[
                { label: "→ Right", value: "to right" },
                { label: "↘ Diagonal", value: "to bottom right" },
                { label: "↓ Down", value: "to bottom" },
                { label: "135°", value: "135deg" },
              ].map((dir, index) => (
                <motion.button
                  key={dir.value}
                  className={`dir-btn ${
                    direction === dir.value ? "active" : ""
                  }`}
                  onClick={() => setDirection(dir.value)}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {dir.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* STOPS */}
          <motion.div
            className="gradient-row"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="gradient-label-sm">Stops</span>

            <div className="steps-control">
              <input
                type="range"
                min="3"
                max="12"
                value={stops}
                onChange={(e) => setStops(Number(e.target.value))}
              />

              <motion.span
                className="steps-val"
                key={stops}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
              >
                {stops}
              </motion.span>
            </div>
          </motion.div>
        </div>

        {/* PREVIEW */}
        <motion.div
          className="gradient-preview-bar"
          style={{ background: gradientCSS }}
          key={`${fromColor}-${toColor}`}
          initial={{ opacity: 0.8, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* CSS */}
        <motion.div
          className="gradient-preview-css"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
        >
          <div className="gradient-css-code">
            {`background: ${gradientCSS};`}
          </div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              variant="secondary"
              onClick={() => {
                copyToClipboard(`background: ${gradientCSS};`, () =>
                  showToast("CSS copied!")
                );
              }}
            >
              Copy CSS
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* RECOMMENDATIONS */}
      <motion.div
        className="reco-section"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <div className="section-label">Recommended Gradients</div>

        <motion.div
          className="gradient-reco-grid"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          {GRADIENT_RECOS.map((g, index) => (
            <motion.button
              key={g.name}
              className="gradient-reco-chip"
              onClick={() => handleLoadReco(g.from, g.to)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.02 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span
                className="gradient-reco-swatch"
                style={{
                  background: `linear-gradient(to right, ${g.from}, ${g.to})`,
                }}
              ></span>

              <span>{g.name}</span>
            </motion.button>
          ))}
        </motion.div>
      </motion.div>

      <hr className="divider" />

      {/* OUTPUT */}
      <motion.div
        className="output-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div style={{ marginBottom: "10px", textAlign: "start" }}>
          <span className="section-label">
            Color Stops — {stops} tokens
          </span>
        </div>

        <motion.div
          className="gradient-stops-grid"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          {gradientStops.map((stop, index) => (
            <motion.div
              key={`${stop.pct}-${index}`} // ✅ FIX duplicate key
              className="gradient-stop-item"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div
                className="gradient-stop-swatch"
                style={{ background: stop.hex }}
              ></div>

              <div className="gradient-stop-info">
                <div className="gradient-stop-pct">{stop.pct}%</div>

                <motion.button
                  className="gradient-stop-hex"
                  onClick={() => {
                    copyToClipboard(stop.hex.toUpperCase(), () =>
                      showToast(`Copied ${stop.hex.toUpperCase()}`)
                    );
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {stop.hex.toUpperCase()}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}