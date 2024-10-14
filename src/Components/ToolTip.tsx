import React from "react";

interface TooltipProps {
  tooltipContent: string;
  tooltipPosition: { x: number; y: number };
}

const Tooltip: React.FC<TooltipProps> = ({
  tooltipContent,
  tooltipPosition,
}) => {
  return (
    tooltipContent && (
      <div
        className="absolute select-none bg-gray-800 text-white p-2 rounded-lg text-sm z-10 shadow-md transition-opacity duration-200"
        style={{
          top: `${tooltipPosition.y + 10}px`,
          left: `${tooltipPosition.x + 10}px`,
          opacity: tooltipContent ? 1 : 0,
        }}
      >
        <div className="border border-gray-600 rounded-lg p-2">
          <p className="font-semibold">{tooltipContent}</p>
        </div>
      </div>
    )
  );
};

export default Tooltip;
