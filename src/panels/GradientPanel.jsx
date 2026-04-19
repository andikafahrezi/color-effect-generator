import { useState } from "react";
import { lerpHex, validateHex } from "../utils/colorMath";
import { copyToClipboard } from "../utils/clipboard";
import Button from "../components/shared/Button";
import Input from "../components/shared/Input";
import ColorPicker from "../components/shared/ColorPicker";
import Chip from "../components/shared/Chip";
import { GRADIENT_RECOS } from "../data/gradientRecommendations";
import "./GradientPanel.css";

export default function GradientPanel({ showToast }) {
  const [fromColor, setFromColor] = useState("#6366f1");
  const [toColor, setToColor] = useState("#ec4899");
  const [direction, setDirection] = useState("to right");
  const [stops, setStops] = useState(7);

  const generateGradient = () => {
    const gradientArray = [];
    for (let i = 0; i < stops; i++) {
      const t = i / (stops - 1);
      const pct = Math.round(t * 100);
      gradientArray.push({
        pct,
        hex: lerpHex(fromColor, toColor, t),
      });
    }
    return gradientArray;
  };

  const gradientStops = generateGradient();
  const gradientCSS = `linear-gradient(${direction}, ${fromColor}, ${toColor})`;

  const handleLoadReco = (from, to) => {
    setFromColor(from);
    setToColor(to);
  };

  return (
    <div className="gradient-panel">
      <div className="card">
        <span className="card-label">Gradient Settings</span>
        <div className="gradient-inputs">
          {/* FROM COLOR */}
          <div className="gradient-row">
            <span className="gradient-label-sm">From</span>
            <ColorPicker
              value={fromColor}
              onChange={setFromColor}
              id="gradColorFrom"
            />
            <Input
              className="hex"
              value={fromColor}
              onChange={(e) => setFromColor(e.target.value)}
              placeholder="#6366F1"
            />
          </div>

          {/* TO COLOR */}
          <div className="gradient-row">
            <span className="gradient-label-sm">To</span>
            <ColorPicker
              value={toColor}
              onChange={setToColor}
              id="gradColorTo"
            />
            <Input
              className="hex"
              value={toColor}
              onChange={(e) => setToColor(e.target.value)}
              placeholder="#EC4899"
            />
          </div>

          {/* DIRECTION */}
          <div className="gradient-row">
            <span className="gradient-label-sm">Direction</span>
            <div className="direction-btns">
              {[
                { label: "→ Right", value: "to right" },
                { label: "↘ Diagonal", value: "to bottom right" },
                { label: "↓ Down", value: "to bottom" },
                { label: "135°", value: "135deg" },
              ].map((dir) => (
                <button
                  key={dir.value}
                  className={`dir-btn ${direction === dir.value ? "active" : ""}`}
                  onClick={() => setDirection(dir.value)}
                >
                  {dir.label}
                </button>
              ))}
            </div>
          </div>

          {/* STOPS */}
          <div className="gradient-row">
            <span className="gradient-label-sm">Stops</span>
            <div className="steps-control">
              <input
                type="range"
                min="3"
                max="12"
                value={stops}
                onChange={(e) => setStops(parseInt(e.target.value))}
              />
              <span className="steps-val">{stops}</span>
            </div>
          </div>
        </div>

        {/* PREVIEW */}
        <div className="gradient-preview-bar" style={{ background: gradientCSS }}></div>

        {/* CSS CODE */}
        <div className="gradient-preview-css">
          <div className="gradient-css-code">{`background: ${gradientCSS};`}</div>
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
        </div>
      </div>

      {/* RECOMMENDATIONS */}
      <div className="reco-section">
        <div className="section-label">Recommended Gradients</div>
        <div className="gradient-reco-grid">
          {GRADIENT_RECOS.map((g) => (
            <button
              key={g.name}
              className="gradient-reco-chip"
              onClick={() => handleLoadReco(g.from, g.to)}
            >
              <span
                className="gradient-reco-swatch"
                style={{
                  background: `linear-gradient(to right, ${g.from}, ${g.to})`,
                }}
              ></span>
              <span>{g.name}</span>
            </button>
          ))}
        </div>
      </div>

      <hr className="divider" />

      {/* OUTPUT STOPS */}
      <div className="output-section">
        <div style={{ marginBottom: "10px", textAlign: "start" }}>
          <span className="section-label">Color Stops — {stops} tokens</span>
        </div>
        <div className="gradient-stops-grid">
          {gradientStops.map((stop) => (
            <div key={stop.pct} className="gradient-stop-item">
              <div
                className="gradient-stop-swatch"
                style={{ background: stop.hex }}
              ></div>
              <div className="gradient-stop-info">
                <div className="gradient-stop-pct">{stop.pct}%</div>
                <button
                  className="gradient-stop-hex"
                  onClick={() => {
                    copyToClipboard(stop.hex.toUpperCase(), () =>
                      showToast(`Copied ${stop.hex.toUpperCase()}`)
                    );
                  }}
                >
                  {stop.hex.toUpperCase()}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}