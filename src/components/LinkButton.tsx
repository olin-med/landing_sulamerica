import React from "react";

type ButtonProps = {
    id?: string;
    className?: string;
    type?: "button" | "submit" | "reset";
    link?: string;
    children: React.ReactNode;
};
const Button: React.FC<ButtonProps> = ({
    id,
    className = "",
    type = "button",
    link,
    children,
    
}) => {

    const handleClick = () => {
        window.open(
        link,
        '_blank',
        'noopener,noreferrer'
        );
    };

    return (
        <button
            id={id}
            type={type}
            className={`bg-[#e1763a] cursor-pointer text-white font-bold transition duration-500 py-4 px-6 rounded hover:bg-orange-500 ${className}`}
            onClick={handleClick}
        >
            {children}
        </button>
    );
}
export default Button;