import "./ColorPicker.css";

export default function ColorPicker({ value, onChange, id }) {
  return (
    <div
      className="color-picker-wrap"
      style={{ background: value }}
      id={`${id}-wrap`}
    >
      <input
        type="color"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        id={id}
      />
    </div>
  );
}