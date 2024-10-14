import React from "react";
import IndiaMap from "../Components/IndiaMap";

interface MapContainerProps {
  selectedState: any;
  setSelectedState: (state: any) => void;
  projectionConfig: { scale: number; center: [number, number] };
  india_state: any;
  handleMouseEnter: (geo: any) => void;
  handleMouseLeave: () => void;
  handleMouseMove: (event: React.MouseEvent<SVGElement, MouseEvent>) => void;
  handleClick: (
    event: React.MouseEvent<SVGElement, MouseEvent>,
    geo: any
  ) => void;
}

const MapContainer: React.FC<MapContainerProps> = ({
  selectedState,
  setSelectedState,
  projectionConfig,
  india_state,
  handleMouseEnter,
  handleMouseLeave,
  handleMouseMove,
  handleClick,
}) => {
  return (
    <div
      className="h-screen flex flex-col items-center relative"
      onClick={() => setSelectedState(null)}
    >
      <div className="h-screen w-full relative">
        <IndiaMap
          projectionConfig={projectionConfig}
          geography={india_state}
          selectedState={selectedState}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          handleMouseMove={handleMouseMove}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
};

export default MapContainer;
