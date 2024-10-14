import React from "react";
import { FiX } from "react-icons/fi";
import {
  ComposableMap,
  Geographies,
  Geography,
  GeographyProps,
} from "react-simple-maps";

interface StateModalProps {
  selectedState: any;
  setSelectedState: (state: any | null) => void;
  stateName: string;
  stateScale: number | null;
  stateCenter: [number, number] | null;
  handleStateMouseEnter: (geo: GeographyProps["geography"]) => void;
  handleMouseLeave: () => void;
  handleMouseMove: (event: React.MouseEvent<SVGElement, MouseEvent>) => void;
}

const StateModal: React.FC<StateModalProps> = ({
  selectedState,
  setSelectedState,
  stateName,
  stateScale,
  stateCenter,
  handleStateMouseEnter,
  handleMouseLeave,
  handleMouseMove,
}) => {
  return (
    selectedState && (
      <div
        className="fixed inset-0 bg-black/40 flex justify-center items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white rounded-lg z-50 transition-transform transform duration-300 ease-in-out">
          <div className="h-fit flex justify-between shadow-md shadow-slate-200 items-center p-4">
            <p className="font-semibold text-lg flex-1 text-center">
              {stateName}
            </p>
            <button
              className="text-red-500 text-2xl hover:text-red-800 transition-colors duration-400"
              onClick={() => setSelectedState(null)}
            >
              <FiX />
            </button>
          </div>

          <div className="w-[50vw] h-[50vh] max-md:h-[40vh] max-md:w-[80vw] relative mt-5">
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                scale: stateScale ?? 100,
                center: stateCenter ?? [0, 0],
              }}
              viewBox="0 0 800 600"
              className="w-full h-full"
            >
              <Geographies geography={selectedState}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={() => handleStateMouseEnter(geo)}
                      onMouseLeave={handleMouseLeave}
                      onMouseMove={handleMouseMove}
                      className="hover:cursor-pointer"
                      style={{
                        default: {
                          fill: "#A2C2E9",
                          stroke: "#004B87",
                          strokeWidth: 0.5,
                          outline: "none",
                        },
                        hover: {
                          fill: "#34A853",
                          outline: "none",
                        },
                        pressed: {
                          fill: "#FBBF24",
                          outline: "none",
                        },
                      }}
                    />
                  ))
                }
              </Geographies>
            </ComposableMap>
          </div>
        </div>
      </div>
    )
  );
};

export default StateModal;
