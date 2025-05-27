// src/components/VerticalCard.tsx
import React, { useState } from "react";

type VerticalCardProps = {
  /** The header/title of the card */
  title: string;
  /** The hidden content to reveal when open */
  children: React.ReactNode;
};

const VerticalCard: React.FC<VerticalCardProps> = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded overflow-hidden shadow-sm">
      {/* Header / toggle button */}
      <button
        type="button"
        className={`w-full text-left px-4 py-3 font-medium cursor-pointer focus:outline-none ${
          open ? "bg-gray-100" : "bg-white"
        }`}
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        {title}
      </button>

      {/* Content panel */}
      {open && (
        <div className="p-4 bg-white border-t border-gray-200">
          {children}
        </div>
      )}
    </div>
  );
};

export default VerticalCard;
