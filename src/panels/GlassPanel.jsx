import { useState } from "react";
import { hexToRgb, validateHex } from "../utils/colorMath";
import { copyToClipboard } from "../utils/clipboard";
import Button from "../components/shared/Button";
import Input from "../components/shared/Input";
import ColorPicker from "../components/shared/ColorPicker";
import { GLASS_PRESETS } from "../data/glassPresets";
import "./GlassPanel.css";

export default function GlassPanel({ showToast }) {
  const [blur, setBlur] = useState(20);
  const [bgOpacity, setBgOpacity] = useState(15);
  const [borderOpacity, setBorderOpacity] = useState(25);
  const [borderWidth, setBorderWidth] = useState(1);
  const [radius, setRadius] = useState(16);
  const [shadow, setShadow] = useState(20);
  const [tint, setTint] = useState("#ffffff");
  const [tone, setTone] = useState("light");
  const [bgBlobColors, setBgBlobColors] = useState([
    "#6366f1",
    "#06b6d4",
    "#f0abfc",
  ]);

  const [tr, tg, tb] = hexToRgb(tint);
  const bgAlpha = (bgOpacity / 100).toFixed(2);
  const borderAlpha = (borderOpacity / 100).toFixed(2);
  const isDark = tone === "dark";

  const handleLoadPreset = (preset) => {
    setBlur(preset.blur);
    setBgOpacity(preset.bgOpacity);
    setBorderOpacity(preset.borderOpacity);
    setBorderWidth(preset.borderWidth);
    setRadius(preset.radius);
    setShadow(preset.shadow);
    setTint(preset.tint);
    setTone(preset.tone);
    setBgBlobColors(preset.bgBlobColors);
  };

  const handleSetTone = (newTone) => {
    setTone(newTone);
    if (newTone === "dark") setTint("#000000");
    else if (newTone === "light") setTint("#ffffff");
    else setTint("#f8fafc");
  };

  const blobPositions = [
    { top: "10%", left: "5%" },
    { top: "30%", left: "45%" },
    { top: "50%", left: "20%" },
  ];

  const bgBase = isDark ? "#0f172a" : "#e0e7ff";

  const tokens = [
    { name: "blur", value: `${blur}px`, desc: "backdrop-filter blur value" },
    { name: "fill-color", value: tint, desc: "base tint hex color" },
    { name: "fill-opacity", value: `${bgOpacity}%`, desc: "background fill alpha" },
    {
      name: "fill-rgba",
      value: `rgba(${tr}, ${tg}, ${tb}, ${bgAlpha})`,
      desc: "CSS background value",
    },
    { name: "border-color", value: "#ffffff", desc: "stroke base color" },
    { name: "border-opacity", value: `${borderOpacity}%`, desc: "stroke alpha" },
    {
      name: "border-width",
      value: `${borderWidth}px`,
      desc: "stroke weight",
    },
    { name: "corner-radius", value: `${radius}px`, desc: "border-radius" },
    { name: "shadow-blur", value: `${shadow}px`, desc: "box-shadow blur" },
    {
      name: "shadow-color",
      value: `rgba(0,0,0,${isDark ? 0.5 : 0.15})`,
      desc: "box-shadow color",
    },
  ];

  const cssSnippet = `.glass-card {
  background: rgba(${tr}, ${tg}, ${tb}, ${bgAlpha});
  backdrop-filter: blur(${blur}px);
  -webkit-backdrop-filter: blur(${blur}px);
  border: ${borderWidth}px solid rgba(255, 255, 255, ${borderAlpha});
  border-radius: ${radius}px;
  box-shadow: 0 ${Math.round(shadow / 3)}px ${shadow}px rgba(0, 0, 0, ${
    isDark ? 0.5 : 0.15
  });
}`;

  return (
    <div className="glass-panel">
      <div className="card">
        <span className="card-label">Glass & Blur Settings</span>
        <div className="glass-controls">
          {/* BLUR */}
          <div className="glass-control-row">
            <div className="glass-control-label">
              Blur Intensity <span>backdrop-filter</span>
            </div>
            <div className="slider-wrap">
              <input
                type="range"
                min="0"
                max="80"
                value={blur}
                onChange={(e) => setBlur(+e.target.value)}
              />
              <span className="slider-val">{blur}px</span>
            </div>
          </div>

          {/* BG OPACITY */}
          <div className="glass-control-row">
            <div className="glass-control-label">
              Fill Opacity <span>background alpha</span>
            </div>
            <div className="slider-wrap">
              <input
                type="range"
                min="0"
                max="100"
                value={bgOpacity}
                onChange={(e) => setBgOpacity(+e.target.value)}
              />
              <span className="slider-val">{bgOpacity}%</span>
            </div>
          </div>

          {/* BORDER OPACITY */}
          <div className="glass-control-row">
            <div className="glass-control-label">
              Border Opacity <span>stroke alpha</span>
            </div>
            <div className="slider-wrap">
              <input
                type="range"
                min="0"
                max="100"
                value={borderOpacity}
                onChange={(e) => setBorderOpacity(+e.target.value)}
              />
              <span className="slider-val">{borderOpacity}%</span>
            </div>
          </div>

          {/* BORDER WIDTH */}
          <div className="glass-control-row">
            <div className="glass-control-label">
              Border Width <span>stroke weight</span>
            </div>
            <div className="slider-wrap">
              <input
                type="range"
                min="0"
                max="4"
                step="0.5"
                value={borderWidth}
                onChange={(e) => setBorderWidth(+e.target.value)}
              />
              <span className="slider-val">{borderWidth}px</span>
            </div>
          </div>

          {/* RADIUS */}
          <div className="glass-control-row">
            <div className="glass-control-label">
              Corner Radius <span>border-radius</span>
            </div>
            <div className="slider-wrap">
              <input
                type="range"
                min="0"
                max="40"
                value={radius}
                onChange={(e) => setRadius(+e.target.value)}
              />
              <span className="slider-val">{radius}px</span>
            </div>
          </div>

          {/* SHADOW */}
          <div className="glass-control-row">
            <div className="glass-control-label">
              Shadow Spread <span>box-shadow</span>
            </div>
            <div className="slider-wrap">
              <input
                type="range"
                min="0"
                max="60"
                value={shadow}
                onChange={(e) => setShadow(+e.target.value)}
              />
              <span className="slider-val">{shadow}px</span>
            </div>
          </div>

          {/* TINT COLOR */}
          <div className="glass-control-row">
            <div className="glass-control-label">
              Tint Color <span>fill base</span>
            </div>
            <div className="glass-tint-row">
              <ColorPicker
                value={tint}
                onChange={setTint}
                id="glassTintPicker"
              />
              <Input
                className="hex"
                value={tint}
                onChange={(e) => setTint(e.target.value)}
                placeholder="#ffffff"
              />
              <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
                {["light", "dark", "frosted"].map((t) => (
                  <button
                    key={t}
                    className={`dir-btn ${tone === t ? "active" : ""}`}
                    onClick={() => handleSetTone(t)}
                  >
                    {t.charAt(0).toUpperCase() + t.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* PREVIEW */}
        <div className="glass-preview-wrap">
          <div className="glass-preview-bg" style={{ background: bgBase }}>
            {bgBlobColors.map((color, i) => (
              <div
                key={i}
                className="glass-preview-blob"
                style={{
                  background: color,
                  position: "absolute",
                  top: blobPositions[i].top,
                  left: blobPositions[i].left,
                  width: "55%",
                  height: "70%",
                  borderRadius: "50%",
                }}
              ></div>
            ))}
          </div>
          <div
            className="glass-preview-card"
            style={{
              background: `rgba(${tr}, ${tg}, ${tb}, ${bgAlpha})`,
              backdropFilter: `blur(${blur}px)`,
              WebkitBackdropFilter: `blur(${blur}px)`,
              border:
                borderWidth > 0
                  ? `${borderWidth}px solid rgba(255, 255, 255, ${borderAlpha})`
                  : "none",
              borderRadius: `${radius}px`,
              boxShadow: `0 ${Math.round(shadow / 3)}px ${shadow}px rgba(0,0,0,${
                isDark ? 0.5 : 0.15
              })`,
            }}
          >
            <div className="glass-preview-label">Preview</div>
            <div className="glass-preview-title">Glass Effect</div>
            <div className="glass-preview-subtitle">backdrop-filter active</div>
          </div>
        </div>
      </div>

      {/* PRESETS */}
      <div className="reco-section">
        <div className="section-label">Style Presets</div>
        <div className="glass-reco-grid">
          {GLASS_PRESETS.map((preset, i) => {
            const [pr, pg, pb] = hexToRgb(preset.tint);
            const pBgAlpha = (preset.bgOpacity / 100).toFixed(2);
            const pBorderAlpha = (preset.borderOpacity / 100).toFixed(2);
            const pBgBase = preset.tone === "dark" ? "#0f172a" : "#c7d2fe";
            return (
              <div
                key={preset.name}
                className="glass-reco-card"
                onClick={() => handleLoadPreset(preset)}
              >
                <div className="glass-reco-preview" style={{ background: pBgBase }}>
                  {preset.bgBlobColors.map((c, bi) => (
                    <div
                      key={bi}
                      style={{
                        position: "absolute",
                        top: blobPositions[bi].top,
                        left: blobPositions[bi].left,
                        width: "55%",
                        height: "70%",
                        background: c,
                        borderRadius: "50%",
                        filter: "blur(20px)",
                        opacity: 0.8,
                      }}
                    ></div>
                  ))}
                  <div
                    className="glass-reco-mini"
                    style={{
                      background: `rgba(${pr}, ${pg}, ${pb}, ${pBgAlpha})`,
                      backdropFilter: `blur(${Math.min(preset.blur, 20)}px)`,
                      WebkitBackdropFilter: `blur(${Math.min(preset.blur, 20)}px)`,
                      border: `${preset.borderWidth}px solid rgba(255,255,255,${pBorderAlpha})`,
                      borderRadius: `${preset.radius}px`,
                      padding: "8px 14px",
                      fontSize: "10px",
                      fontWeight: 600,
                      color: "#fff",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {preset.name}
                  </div>
                </div>
                <div className="glass-reco-info">
                  <div className="glass-reco-name">{preset.name}</div>
                  <div className="glass-reco-desc">{preset.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <hr className="divider" />

      {/* TOKENS */}
      <div>
        <div style={{ marginBottom: "12px" }}>
          <span className="section-label">Design Tokens</span>
        </div>
        <div className="glass-tokens-grid">
          {tokens.map((t) => (
            <div key={t.name} className="glass-token-row">
              <div className="glass-token-name">{t.name}</div>
              <div className="glass-token-value">{t.value}</div>
              <div className="glass-token-desc">{t.desc}</div>
              <button
                className="glass-copy-btn"
                onClick={() => {
                  copyToClipboard(t.value, () =>
                    showToast(`Copied ${t.name}!`)
                  );
                }}
              >
                Copy
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* CSS SNIPPET */}
      <div style={{ marginTop: "20px", marginBottom: "10px" }}>
        <span className="section-label">CSS Output</span>
      </div>
      <div className="figma-snippet">
        <button
          className="snippet-copy-btn"
          onClick={() => {
            copyToClipboard(cssSnippet, () => showToast("CSS copied!"));
          }}
        >
          Copy
        </button>
        <pre>{cssSnippet}</pre>
      </div>
    </div>
  );
}