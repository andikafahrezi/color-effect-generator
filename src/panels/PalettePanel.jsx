import { useState } from "react";
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
    // const { hslToHex } = require("../utils/colorMath.js");
 
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
 
  const renderLayout = () => {
    if (!palette) {
      return (
        <div className="empty-state">
          <div className="empty-icon">◎</div>
          <div className="empty-title">No palette generated yet</div>
          <div className="empty-desc">Pick a color or choose from recommendations</div>
        </div>
      );
    }
 
    if (layout === "columns") {
      return (
        <div className="layout-columns">
          {palette.map(({ step, hex }) => (
            <div key={step} className="shade-item">
              <div className="shade-swatch" style={{ background: hex }}></div>
              <div className="shade-info">
                <div className="shade-step">{step}</div>
                <button
                  className="shade-hex"
                  onClick={() => {
                    copyToClipboard(hex.toUpperCase(), () =>
                      showToast(`Copied ${hex.toUpperCase()}`)
                    );
                  }}
                >
                  {hex.toUpperCase()}
                </button>
              </div>
            </div>
          ))}
        </div>
      );
    }
 
    if (layout === "cards") {
      return (
        <div className="layout-cards">
          {palette.map(({ step, hex }) => (
            <div key={step} className="shade-item">
              <div className="shade-swatch" style={{ background: hex }}></div>
              <div className="shade-info">
                <div className="shade-step">
                  {paletteName}-{step}
                </div>
                <button
                  className="shade-hex"
                  onClick={() => {
                    copyToClipboard(hex.toUpperCase(), () =>
                      showToast(`Copied ${hex.toUpperCase()}`)
                    );
                  }}
                >
                  {hex.toUpperCase()}
                </button>
              </div>
            </div>
          ))}
        </div>
      );
    }
 
    // rows
    return (
      <div className="layout-rows">
        {palette.map(({ step, hex }) => {
          const [h, s, l] = hexToHsl(hex);
          return (
            <div key={step} className="shade-item">
              <div className="shade-swatch" style={{ background: hex }}></div>
              <div className="shade-info">
                <div className="shade-step">{step}</div>
                <button
                  className="shade-hex"
                  onClick={() => {
                    copyToClipboard(hex.toUpperCase(), () =>
                      showToast(`Copied ${hex.toUpperCase()}`)
                    );
                  }}
                >
                  {hex.toUpperCase()}
                </button>
                <div className="shade-hsl">
                  {Math.round(h)}° {Math.round(s)}% {Math.round(l)}%
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
 
  return (
    <div className="palette-panel">
      <div className="card">
        <span className="card-label">Base Color</span>
        <div className="input-row">
          <ColorPicker value={baseHex} onChange={setBaseHex} id="colorPicker1" />
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
          <Button onClick={handleGenerate}>Generate</Button>
        </div>
        <div className="input-hint">Enter a hex color to generate a 100–1000 scale.</div>
      </div>
 
      <div className="reco-section">
        <div className="section-label">Recommended Colors</div>
        <div className="reco-grid">
          {COLOR_RECOS.map((reco) => (
            <Chip
              key={reco.hex}
              color={reco.hex}
              name={reco.name}
              hex={reco.hex}
              onClick={() => handleLoadReco(reco.hex, reco.name)}
            />
          ))}
        </div>
      </div>
 
      <hr className="divider" />
 
      {palette && (
        <div className="output-section">
          <div className="output-header">
            <div className="color-name-badge">
              <div className="color-name-swatch" style={{ background: baseHex }}></div>
              <span className="color-name-text">{paletteName}</span>
              <span className="color-count">{palette.length} tokens</span>
            </div>
            <div className="layout-tabs">
              <button
                className={`layout-tab ${layout === "columns" ? "active" : ""}`}
                onClick={() => setLayout("columns")}
              >
                Columns
              </button>
              <button
                className={`layout-tab ${layout === "cards" ? "active" : ""}`}
                onClick={() => setLayout("cards")}
              >
                Cards
              </button>
              <button
                className={`layout-tab ${layout === "rows" ? "active" : ""}`}
                onClick={() => setLayout("rows")}
              >
                Rows
              </button>
            </div>
          </div>
          {renderLayout()}
        </div>
      )}
    </div>
  );
}