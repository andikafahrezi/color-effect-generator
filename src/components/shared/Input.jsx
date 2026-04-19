import "./Input.css"

export default function Input ({
    className = "",
    type = "text",
    value,
    onChange,
    placeholder,
    ...props
}) {
    return (
        <input
            type={type}
            className={`text-input ${className}`}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            {...props}
        />
    );
}