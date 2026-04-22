import { useState } from "react";
import { motion } from "framer-motion";
import { hexToHsl, validateHex, hslToHex } from "../utils/colorMath.js";
import { copyToClipboard } from "../utils/clipboard.js";
import Button from "../components/shared/Button.jsx";
import Input from "../components/shared/Input.jsx";
import ColorPicker from "../components/shared/ColorPicker.jsx";
import Chip from "../components/shared/Chip.jsx";
import { COLOR_RECOS } from "../data/colorRecommendations.js";
import "./PalettePanel.css";

export default function PalettePanel({ showToast }) {
  const [baseHex, setBaseHex] = useState("#3b82f6");
  const [paletteName, setPaletteName] = useState("Blue");
  const [palette, setPalette] = useState(null);
  const [layout, setLayout] = useState("columns");

  const generateScale = (hex) => {
    const [h, s] = hexToHsl(hex);

    const steps = [
      { step: 100, lF: 0.97, sF: 0.15 },
      { step: 200, lF: 0.9, sF: 0.3 },
      { step: 300, lF: 0.8, sF: 0.55 },
      { step: 400, lF: 0.67, sF: 0.75 },
      { step: 500, lF: 0.55, sF: 0.92 },
      { step: 600, lF: 0.43, sF: 1.0 },
      { step: 700, lF: 0.33, sF: 1.0 },
      { step: 800, lF: 0.23, sF: 0.95 },
      { step: 900, lF: 0.15, sF: 0.85 },
      { step: 1000, lF: 0.08, sF: 0.7 },
    ];

    return steps.map(({ step, lF, sF }) => ({
      step,
      hex: hslToHex(
        h,
        Math.min(100, s * sF + (100 - s) * 0.1),
        lF * 95
      ),
    }));
  };

  const handleGenerate = () => {
    const hex = validateHex(baseHex);
    if (!hex) {
      alert("Masukkan hex yang valid, contoh: #3B82F6");
      return;
    }
    setPalette(generateScale(hex));
  };

  const handleLoadReco = (hex, name) => {
    setBaseHex(hex);
    setPaletteName(name);
    const newPalette = generateScale(hex);
    setPalette(newPalette);
  };

  const itemVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
  };

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const renderLayout = () => {
    if (!palette) {
      return (
        <motion.div
          className="empty-state"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="empty-icon">◎</div>
          <div className="empty-title">No palette generated yet</div>
          <div className="empty-desc">
            Pick a color or choose from recommendations
          </div>
        </motion.div>
      );
    }

    if (layout === "columns") {
      return (
        <motion.div
          className="layout-columns"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {palette.map(({ step, hex }) => (
            <motion.div
              key={step}
              className="shade-item"
              variants={itemVariants}
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div
                className="shade-swatch"
                style={{ background: hex }}
              ></div>
              <div className="shade-info">
                <div className="shade-step">{step}</div>
                <motion.button
                  className="shade-hex"
                  onClick={() => {
                    copyToClipboard(hex.toUpperCase(), () =>
                      showToast(`Copied ${hex.toUpperCase()}`)
                    );
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {hex.toUpperCase()}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      );
    }

    if (layout === "cards") {
      return (
        <motion.div
          className="layout-cards"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          variants={containerVariants}
        >
          {palette.map(({ step, hex }) => (
            <motion.div
              key={step}
              className="shade-item"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <div
                className="shade-swatch"
                style={{ background: hex }}
              ></div>
              <div className="shade-info">
                <div className="shade-step">
                  {paletteName}-{step}
                </div>
                <motion.button
                  className="shade-hex"
                  onClick={() => {
                    copyToClipboard(hex.toUpperCase(), () =>
                      showToast(`Copied ${hex.toUpperCase()}`)
                    );
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {hex.toUpperCase()}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      );
    }

    // rows
    return (
      <motion.div
        className="layout-rows"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        variants={containerVariants}
      >
        {palette.map(({ step, hex }) => {
          const [h, s, l] = hexToHsl(hex);
          return (
            <motion.div
              key={step}
              className="shade-item"
              variants={itemVariants}
              whileHover={{ scale: 1.02, x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div
                className="shade-swatch"
                style={{ background: hex }}
              ></div>
              <div className="shade-info">
                <div className="shade-step">{step}</div>
                <motion.button
                  className="shade-hex"
                  onClick={() => {
                    copyToClipboard(hex.toUpperCase(), () =>
                      showToast(`Copied ${hex.toUpperCase()}`)
                    );
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {hex.toUpperCase()}
                </motion.button>
                <div className="shade-hsl">
                  {Math.round(h)}° {Math.round(s)}% {Math.round(l)}%
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className="palette-panel">
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <span className="card-label">Base Color</span>
        <div className="input-row">
          <ColorPicker
            value={baseHex}
            onChange={setBaseHex}
            id="colorPicker1"
          />
          <Input
            className="hex"
            value={baseHex}
            onChange={(e) => setBaseHex(e.target.value)}
            placeholder="#3B82F6"
          />
          <Input
            className="name"
            value={paletteName}
            onChange={(e) => setPaletteName(e.target.value)}
            placeholder="Name (e.g. Blue)"
          />
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button onClick={handleGenerate}>Generate</Button>
          </motion.div>
        </div>
        <div className="input-hint">
          Enter a hex color to generate a 100–1000 scale.
        </div>
      </motion.div>

      <motion.div
        className="reco-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <div className="section-label">Recommended Colors</div>
        <motion.div className="reco-grid">
          {COLOR_RECOS.map((reco, index) => (
            <motion.div
              key={reco.hex}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.02 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Chip
                color={reco.hex}
                name={reco.name}
                hex={reco.hex}
                onClick={() => handleLoadReco(reco.hex, reco.name)}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <hr className="divider" />

      {palette && (
        <motion.div
          className="output-section"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="output-header">
            <div className="color-name-badge">
              <div
                className="color-name-swatch"
                style={{ background: baseHex }}
              ></div>
              <span className="color-name-text">{paletteName}</span>
              <span className="color-count">{palette.length} tokens</span>
            </div>
            <div className="layout-tabs">
              {["columns", "cards", "rows"].map((l) => (
                <motion.button
                  key={l}
                  className={`layout-tab ${layout === l ? "active" : ""}`}
                  onClick={() => setLayout(l)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {l.charAt(0).toUpperCase() + l.slice(1)}
                </motion.button>
              ))}
            </div>
          </div>
          {renderLayout()}
        </motion.div>
      )}
    </div>
  );
}