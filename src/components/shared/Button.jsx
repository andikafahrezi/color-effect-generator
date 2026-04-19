import "./Button.css"

export default function Button({
    variant = "primary",
    onClick,
    children,
    ...props
}) {
    const className = `btn btn-${variant}`;
    return (
        <button className={className} onClick={onClick} {...props}>
            {children}
        </button>
    );
}