import "./Chip.css";

export default function Chip({ color, name, hex, onClick }) {
  return (
    <button className="reco-chip" onClick={onClick}>
      <span className="reco-dot" style={{ background: color }}></span>
      <span>{name}</span>
      <span className="reco-hex">{hex}</span>
    </button>
  );
}