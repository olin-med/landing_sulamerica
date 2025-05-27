import React from "react";
import { GoQuestion } from "react-icons/go";

type ClientButtonProps = {
    link?: string;
};
const ClientButton: React.FC<ClientButtonProps> = ({
    link,
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
          type="button"
          onClick={handleClick}
          className="flex items-center cursor-pointer transition duration-500 border border-[#e1763a] hover:bg-[#e1763a] hover:text-white text-[#e1763a] font-bold py-2 px-4 rounded"
        >
          {/* slightly larger, bold icon */}
          Já sou Cliente
          <GoQuestion className="ml-1 text-xl" />
        </button>
      );
}
export default ClientButton;