# CSS Files for Dark Mode Update

## 1. src/components/shared/Button.css
```css
.btn {
    height: 36px;
    padding: 0 16px;
    border: none;
    border-radius: 8px;
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    transition: opacity 0.15s;
    white-space: nowrap;
    flex-shrink: 0;
}

.btn-primary {
    background: #1d1d1f;
    color: #fff;
}

.btn-primary:hover {
    opacity: 0.78;
}

.btn-secondary {
    background: #f5f5f7;
    color: #1d1d1f;
    border: 1px solid #e5e5e7;
}

.btn-secondary:hover {
    background: #ebebed;
}
```

## 2. src/components/shared/Chip.css
```css
.reco-chip {
  display: flex;
  align-items: center;
  gap: 7px;
  background: #fff;
  border: 1px solid #e5e5e7;
  border-radius: 100px;
  padding: 4px 11px 4px 5px;
  cursor: pointer;
  transition: border-color 0.15s, background 0.15s;
  font-size: 11px;
  font-weight: 500;
  color: #1d1d1f;
  font-family: "Plus Jakarta Sans", sans-serif;
}

.reco-chip:hover {
  border-color: #aaa;
  background: #f0f0f2;
}

.reco-dot {
  width: 17px;
  height: 17px;
  border-radius: 50%;
  flex-shrink: 0;
  border: 1px solid rgba(0, 0, 0, 0.08);
}

.reco-hex {
  color: #aeaeb2;
  font-size: 10px;
  font-weight: 400;
}
```

## 3. src/components/shared/ColorPicker.css
```css
.color-picker-wrap {
  position: relative;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #e5e5e7;
  flex-shrink: 0;
}

.color-picker-wrap input[type="color"] {
  position: absolute;
  width: 200%;
  height: 200%;
  top: -50%;
  left: -50%;
  border: none;
  cursor: pointer;
  background: none;
}
```

## 4. src/components/shared/Input.css
```css
.text-input {
  height: 36px;
  border: 1px solid #e5e5e7;
  border-radius: 8px;
  padding: 0 12px;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: #1d1d1f;
  background: #f5f5f7;
  outline: none;
  transition: border-color 0.15s;
  min-width: 0;
}

.text-input:focus {
  border-color: #999;
}

.text-input.hex {
  width: 130px;
  flex-shrink: 0;
}

.text-input.name {
  width: 140px;
  flex-shrink: 0;
}
```

## 5. src/components/Header.css
```css
header {
  background: rgba(245, 245, 247, 0.9);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border-color);
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 0 20px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Dark mode header styling */
:root[data-theme="dark"] header {
  background: rgba(26, 26, 26, 0.9);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
}

.header-text {
  flex: 1;
  text-align: start;
}

.header-title {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--text-primary);
}

/* .header-sub {
  font-size: 11px;
  color: var(--text-secondary);
} */

/* ===== THEME TOGGLE BUTTON ===== */
.theme-toggle-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background-color: var(--bg-secondary);
  color: var(--text-primary);
  cursor: pointer;
  font-size: 20px;
  font-family: "Material Symbols Rounded";
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.theme-toggle-btn:hover {
  background-color: var(--bg-tertiary);
  border-color: var(--text-secondary);
  transform: scale(1.05);
}

.theme-toggle-btn:active {
  transform: scale(0.95);
}

.theme-toggle-btn .material-symbols-rounded {
  font-size: 16px;
  font-weight: 500;
  font-variation-settings:
    "FILL" 0,
    "wght" 500,
    "GRAD" 0,
    "opsz" 24;
}

/* Responsive */
@media (max-width: 640px) {
  header {
    padding: 0 16px;
    height: 48px;
  }

  .header-content {
    gap: 12px;
  }

  .header-title {
    font-size: 12px;
  }

  .theme-toggle-btn {
    width: 36px;
    height: 36px;
  }

  .theme-toggle-btn .material-symbols-rounded {
    font-size: 18px;
  }
}
```

## 6. src/components/MainTabs.css
```css
.main-tabs {
  display: flex;
  gap: 1px;
  background: #e5e5e7;
  border-radius: 10px;
  padding: 4px;
  margin-bottom: 20px;
}

.main-tab {
  flex: 1;
  padding: 8px 10px;
  border: none;
  border-radius: 9px;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: #6e6e73;
  background: transparent;
  cursor: pointer;
  transition: all 0.15s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  white-space: nowrap;
}

.main-tab.active {
  background: #fff;
  color: #1d1d1f;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}

.main-tab svg {
  width: 13px;
  height: 13px;
  flex-shrink: 0;
}

@media (max-width: 640px) {
  .main-tab {
    font-size: 11px;
    padding: 7px 6px;
  }
}
```

## 7. src/components/Toast.css
```css
.copied-toast {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%) translateY(8px);
  background: #1d1d1f;
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 100px;
  pointer-events: none;
  opacity: 0;
  transition: all 0.2s;
  z-index: 999;
  white-space: nowrap;
}

.copied-toast.show {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}
```

## 8. src/panels/GlassPanel.css
```css
.glass-panel {
}

.card {
  background: #fff;
  border: 1px solid #e5e5e7;
  border-radius: 12px;
  padding: 18px;
  margin-bottom: 20px;
}

.card-label {
  font-size: 10px;
  font-weight: 600;
  color: #6e6e73;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  margin-bottom: 12px;
  display: block;
}

.glass-controls {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.glass-control-row {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.glass-control-label {
  font-size: 11px;
  font-weight: 500;
  color: #6e6e73;
  width: 110px;
  flex-shrink: 0;
}

.glass-control-label span {
  font-size: 10px;
  color: #aeaeb2;
  font-weight: 400;
  display: block;
}

.slider-wrap {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
  min-width: 180px;
}

.slider-wrap input[type="range"] {
  flex: 1;
  accent-color: #1d1d1f;
  height: 8px;
}

.slider-val {
  font-size: 12px;
  font-weight: 600;
  color: #1d1d1f;
  min-width: 36px;
  text-align: right;
}

.glass-tint-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.glass-preview-wrap {
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: 12px;
  overflow: hidden;
  margin-top: 16px;
}

.glass-preview-bg {
  position: absolute;
  inset: 0;
  display: flex;
}

.glass-preview-blob {
  border-radius: 50%;
  filter: blur(40px);
  opacity: 0.8;
}

.glass-preview-card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px 24px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 180px;
  text-align: center;
}

.glass-preview-label {
  font-size: 11px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
}

.glass-preview-title {
  font-size: 14px;
  font-weight: 600;
  color: #fff;
}

.glass-preview-subtitle {
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
}

.reco-section {
  margin-bottom: 20px;
}

.section-label {
  font-size: 10px;
  font-weight: 600;
  color: #6e6e73;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  margin-bottom: 10px;
}

.glass-reco-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 8px;
}

.glass-reco-card {
  border: 1px solid #e5e5e7;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.15s, transform 0.15s;
  background: #fff;
}

.glass-reco-card:hover {
  border-color: #aaa;
  /* transform: translateY(-1px); */
}

.glass-reco-preview {
  height: 90px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.glass-reco-info {
  padding: 10px 12px;
  border-top: 1px solid #e5e5e7;
}

.glass-reco-name {
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 2px;
}

.glass-reco-desc {
  font-size: 10px;
  color: #aeaeb2;
}

.divider {
  border: none;
  border-top: 1px solid #e5e5e7;
  margin-bottom: 20px;
}

.glass-tokens-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-top: 16px;
}

.glass-token-row {
  background: #f5f5f7;
  border: 1px solid #e5e5e7;
  border-radius: 8px;
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.glass-token-name {
  font-size: 10px;
  font-weight: 600;
  color: #6e6e73;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.glass-token-value {
  font-size: 12px;
  font-weight: 500;
  color: #1d1d1f;
  font-family: "SF Mono", "Fira Mono", monospace;
  word-break: break-all;
}

.glass-token-desc {
  font-size: 10px;
  color: #aeaeb2;
}

.glass-copy-btn {
  margin-top: 4px;
  display: inline-flex;
  align-items: center;
  gap: 3px;
  font-size: 10px;
  color: #aeaeb2;
  cursor: pointer;
  background: none;
  border: none;
  font-family: "Plus Jakarta Sans", sans-serif;
  padding: 0;
}

.glass-copy-btn:hover {
  color: #1d1d1f;
}

.figma-snippet {
  background: #1e1e1e;
  border-radius: 12px;
  padding: 14px 16px;
  margin-top: 16px;
  position: relative;
}

.figma-snippet pre {
  font-size: 11px;
  line-height: 1.7;
  color: #d4d4d4;
  font-family: "SF Mono", "Fira Mono", monospace;
  white-space: pre-wrap;
  word-break: break-word;
  text-align: start;
}

.snippet-copy-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: #fff;
  font-size: 11px;
  font-weight: 500;
  padding: 4px 10px;
  border-radius: 6px;
  cursor: pointer;
  font-family: "Plus Jakarta Sans", sans-serif;
  transition: background 0.15s;
}

.snippet-copy-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}

@media (max-width: 500px) {
  .glass-tokens-grid {
    grid-template-columns: 1fr;
  }
}
```

## 9. src/panels/GradientPanel.css
```css
.gradient-panel {
}

.card {
  background: #fff;
  border: 1px solid #e5e5e7;
  border-radius: 12px;
  padding: 18px;
  margin-bottom: 20px;
}

.card-label {
  font-size: 10px;
  font-weight: 600;
  color: #6e6e73;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  margin-bottom: 12px;
  display: block;
}

.gradient-inputs {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.gradient-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.gradient-label-sm {
  font-size: 11px;
  font-weight: 500;
  color: #6e6e73;
  width: 64px;
  flex-shrink: 0;
  text-align: start;
}

.direction-btns {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
}

.dir-btn {
  padding: 5px 10px;
  border: 1px solid #e5e5e7;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 500;
  background: #f5f5f7;
  color: #6e6e73;
  cursor: pointer;
  transition: all 0.15s;
  font-family: "Plus Jakarta Sans", sans-serif;
}

.dir-btn.active {
  background: #1d1d1f;
  color: #fff;
  border-color: #1d1d1f;
}

.steps-control {
  display: flex;
  align-items: center;
  gap: 8px;
}

.steps-control input[type="range"] {
  width: 100px;
  accent-color: #1d1d1f;
}

.steps-val {
  font-size: 12px;
  font-weight: 600;
  min-width: 20px;
}

.gradient-preview-bar {
  width: 100%;
  height: 88px;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  margin: 16px 0;
  transition: all 0.3s;
}

.gradient-preview-css {
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.gradient-css-code {
  flex: 1;
  background: #f5f5f7;
  border: 1px solid #e5e5e7;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 11px;
  color: #6e6e73;
  font-family: "SF Mono", "Fira Mono", monospace;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.reco-section {
  margin-bottom: 20px;
}

.section-label {
  font-size: 10px;
  font-weight: 600;
  color: #6e6e73;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  margin-bottom: 10px;
}

.gradient-reco-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.gradient-reco-chip {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #fff;
  border: 1px solid #e5e5e7;
  border-radius: 100px;
  padding: 4px 12px 4px 5px;
  cursor: pointer;
  transition: border-color 0.15s, background 0.15s;
  font-size: 11px;
  font-weight: 500;
  color: #1d1d1f;
  font-family: "Plus Jakarta Sans", sans-serif;
}

.gradient-reco-chip:hover {
  border-color: #aaa;
  background: #f0f0f2;
}

.gradient-reco-swatch {
  width: 40px;
  height: 17px;
  border-radius: 100px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  flex-shrink: 0;
}

.divider {
  border: none;
  border-top: 1px solid #e5e5e7;
  margin-bottom: 20px;
}

.output-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.gradient-stops-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(96px, 1fr));
  gap: 6px;
}

.gradient-stop-item {
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.06);
  background: #fff;
}

.gradient-stop-swatch {
  height: 60px;
  width: 100%;
}

.gradient-stop-info {
  padding: 8px;
}

.gradient-stop-pct {
  font-size: 10px;
  font-weight: 600;
  margin-bottom: 2px;
}

.gradient-stop-hex {
  font-size: 10px;
  color: #6e6e73;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  font-family: inherit;
}

.empty-state {
  text-align: center;
  padding: 52px 24px;
  background: #fff;
  border: 1px solid #e5e5e7;
  border-radius: 12px;
}

.empty-icon {
  font-size: 26px;
  margin-bottom: 10px;
  opacity: 0.35;
}

.empty-title {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
}

.empty-desc {
  font-size: 12px;
  color: #aeaeb2;
}
```

## 10. src/panels/PalettePanel.css
```css
/* .palette-panel { } */
 
.card {
  background: #fff;
  border: 1px solid #e5e5e7;
  border-radius: 12px;
  padding: 18px;
  margin-bottom: 20px;
}
 
.card-label {
  font-size: 10px;
  font-weight: 600;
  color: #6e6e73;
  text-transform: uppercase;
  text-align: start;
  letter-spacing: 0.07em;
  margin-bottom: 12px;
  display: block;
}
 
.input-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}
 
.input-hint {
  font-size: 11px;
  color: #aeaeb2;
  margin-top: 8px;
  text-align: start;
}
 
.reco-section {
  margin-bottom: 20px;
}
 
.section-label {
  font-size: 10px;
  font-weight: 600;
  color: #6e6e73;
  text-transform: uppercase;
  text-align: start;
  letter-spacing: 0.07em;
  margin-bottom: 10px;
}
 
.reco-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
 
.divider {
  border: none;
  border-top: 1px solid #e5e5e7;
  margin-bottom: 20px;
}
 
.output-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
 
.output-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
}
 
.color-name-badge {
  display: flex;
  align-items: center;
  gap: 9px;
}
 
.color-name-swatch {
  width: 22px;
  height: 22px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.08);
}
 
.color-name-text {
  font-size: 13px;
  font-weight: 600;
}
 
.color-count {
  font-size: 11px;
  color: #aeaeb2;
}
 
.layout-tabs {
  display: flex;
  gap: 2px;
  background: #f5f5f7;
  border: 1px solid #e5e5e7;
  border-radius: 8px;
  padding: 3px;
}
 
.layout-tab {
  padding: 5px 9px;
  border-radius: 6px;
  border: none;
  background: none;
  font-size: 11px;
  font-weight: 500;
  color: #6e6e73;
  cursor: pointer;
  transition: all 0.15s;
}
 
.layout-tab.active {
  background: #fff;
  color: #1d1d1f;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}
 
.empty-state {
  text-align: center;
  padding: 52px 24px;
  background: #fff;
  border: 1px solid #e5e5e7;
  border-radius: 12px;
}
 
.empty-icon {
  font-size: 26px;
  margin-bottom: 10px;
  opacity: 0.35;
}
 
.empty-title {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
}
 
.empty-desc {
  font-size: 12px;
  color: #aeaeb2;
}
 
/* Layouts */
.layout-columns {
  display: flex;
  gap: 4px;
  overflow-x: auto;
  padding-bottom: 4px;
}
 
.layout-columns .shade-item {
  flex: 1;
  min-width: 66px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
}

.layout-columns .shade-item:hover {
  border-color: #aaa;
  /* transform: translateY(-1px); */
}
 
.layout-columns .shade-swatch {
  height: 80px;
  width: 100%;
}
 
.layout-columns .shade-info {
  padding: 8px;
  background: #fff;
}
 
.layout-columns .shade-step {
  font-size: 10px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 3px;
}
 
.layout-columns .shade-hex {
  font-size: 10px;
  color: #6e6e73;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  font-family: inherit;
}
 
.layout-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 8px;
}
 
.layout-cards .shade-item {
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.06);
  background: #fff;
}
 
.layout-cards .shade-swatch {
  height: 88px;
  width: 100%;
}
 
.layout-cards .shade-info {
  padding: 10px;
}
 
.layout-cards .shade-step {
  font-size: 11px;
  font-weight: 600;
  margin-bottom: 3px;
}
 
.layout-cards .shade-hex {
  font-size: 10px;
  color: #6e6e73;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  font-family: inherit;
}
 
.layout-rows {
  display: flex;
  flex-direction: column;
  gap: 3px;
}
 
.layout-rows .shade-item {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #fff;
  border: 1px solid #e5e5e7;
  border-radius: 8px;
  padding: 8px 14px;
}
 
.layout-rows .shade-swatch {
  width: 30px;
  height: 30px;
  border-radius: 6px;
  flex-shrink: 0;
  border: 1px solid rgba(0, 0, 0, 0.06);
}
 
.layout-rows .shade-info {
  display: flex;
  align-items: center;
  flex: 1;
  gap: 12px;
}
 
.layout-rows .shade-step {
  font-size: 12px;
  font-weight: 600;
  width: 42px;
}
 
.layout-rows .shade-hex {
  font-size: 11px;
  color: #6e6e73;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  font-family: inherit;
  flex: 1;
}
 
.layout-rows .shade-hsl {
  font-size: 10px;
  color: #aeaeb2;
  flex-shrink: 0;
}
```

## 11. src/App.css
```css
:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f5f5f5;
  --bg-tertiary: #eeeeee;
  --text-primary: #1d1d1f;
  --text-secondary: #6e6e73;
  --text-tertiary: #aeaeb2;
  --border-color: #e5e5e7;
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);

  /* original variable */
  --bg: #f5f5f7;
  --surface: #ffffff;
  --border: #e5e5e7;
  --accent: #1d1d1f;
  --radius: 12px;
  --radius-sm: 8px;
}

/* theme variables (dark mode) */
:root[data-theme="dark"] {
  --bg-primary: #0a0a0a;
  --bg-secondary: #1d1d1d;
  --bg-tertiary: #2a2a2a;
  --text-primary: #f5f5f7;
  --text-secondary: #a1a1a6;
  --text-tertiary: #86868b;
  --border-color: #424245;
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.5);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.5);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.5);

  /* original variables */
  --bg: #0a0a0a;
  --surface: #1d1d1d;
  --border: #424245;
  --text-tertiary: #86868b;
  --accent: #f5f5f7;
}

/* smooth transition */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  transition: background-color 0.2s ease, color 0.2 ease, border-color 0.2s ease;
}

html,
body {
  -webkit-font-smoothing: antialiased;
}

body {
  font-family: "Plus Jakarta Sans", sans-serif;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  min-height: 100vh;
  font-size: 13px;
  line-height: 1.5;
}

.app-main {
  /* max-width: 1100px; */
  margin: 0 30px;
  padding: 24px 20px 64px;
}

@media (max-width: 640px) {
  .app-main {
    padding: 18px 16px 64px;
  }
}
```

## 12. src/index.css
```css
:root {
  --text: #6b6375;
  --text-h: #08060d;
  --bg: #fff;
  --border: #e5e4e7;
  --code-bg: #f4f3ec;
  --accent: #aa3bff;
  --accent-bg: rgba(170, 59, 255, 0.1);
  --accent-border: rgba(170, 59, 255, 0.5);
  --social-bg: rgba(244, 243, 236, 0.5);
  --shadow:
    rgba(0, 0, 0, 0.1) 0 10px 15px -3px, rgba(0, 0, 0, 0.05) 0 4px 6px -2px;

  --sans: system-ui, 'Segoe UI', Roboto, sans-serif;
  --heading: system-ui, 'Segoe UI', Roboto, sans-serif;
  --mono: ui-monospace, Consolas, monospace;

  font: 18px/145% var(--sans);
  letter-spacing: 0.18px;
  color-scheme: light dark;
  color: var(--text);
  background: var(--bg);
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @media (max-width: 1024px) {
    font-size: 16px;
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    --text: #9ca3af;
    --text-h: #f3f4f6;
    --bg: #16171d;
    --border: #2e303a;
    --code-bg: #1f2028;
    --accent: #c084fc;
    --accent-bg: rgba(192, 132, 252, 0.15);
    --accent-border: rgba(192, 132, 252, 0.5);
    --social-bg: rgba(47, 48, 58, 0.5);
    --shadow:
      rgba(0, 0, 0, 0.4) 0 10px 15px -3px, rgba(0, 0, 0, 0.25) 0 4px 6px -2px;
  }

  #social .button-icon {
    filter: invert(1) brightness(2);
  }
}

body {
  margin: 0;
}

#root {
  /* width: 1126px; */
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
  border-inline: 1px solid var(--border);
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

h1,
h2 {
  font-family: var(--heading);
  font-weight: 500;
  color: var(--text-h);
}

h1 {
  font-size: 56px;
  letter-spacing: -1.68px;
  margin: 32px 0;
  @media (max-width: 1024px) {
    font-size: 36px;
    margin: 20px 0;
  }
}
h2 {
  font-size: 24px;
  line-height: 118%;
  letter-spacing: -0.24px;
  margin: 0 0 8px;
  @media (max-width: 1024px) {
    font-size: 20px;
  }
}
p {
  margin: 0;
}

code,
.counter {
  font-family: var(--mono);
  display: inline-flex;
  border-radius: 4px;
  color: var(--text-h);
}

code {
  font-size: 15px;
  line-height: 135%;
  padding: 4px 8px;
  background: var(--code-bg);
}

```