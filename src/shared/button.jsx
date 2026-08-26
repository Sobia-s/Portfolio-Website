import { Link } from "react-router-dom";
import "./button.css";

export default function Button({
    children,
    to,
    variant = "primary",
    target,
    rel,
    onClick,
    type = "button",
}) {
    const isExternal = to?.startsWith("http");

    if (to) {
        if (isExternal) {
            return (
                <a
                    href={to}
                    className={`button button-${variant}`}
                    target={target}
                    rel={rel}
                    onClick={onClick}
                >
                    {children}
                </a>
            );
        }

        return (
            <Link
                to={to}
                className={`button button-${variant}`}
                onClick={onClick}
            >
                {children}
            </Link>
        );
    }

    return (
        <button
            type={type}
            className={`button button-${variant}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}