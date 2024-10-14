import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

interface GeographyType {
  rsmKey: string;
  properties: { [key: string]: any };
}

interface ProjectionConfig {
  scale: number;
  center: [number, number];
}

interface IndiaMapProps {
  projectionConfig: ProjectionConfig;
  geography: any;
  selectedState: GeographyType | null;
  handleMouseEnter: (geo: GeographyType) => void;
  handleMouseLeave: () => void;
  handleMouseMove: (event: React.MouseEvent<SVGElement, MouseEvent>) => void;
  handleClick: (
    event: React.MouseEvent<SVGElement, MouseEvent>,
    geo: GeographyType
  ) => void;
}

const stateColors = [
  "#1E90FF",
  "#FF6347",
  "#32CD32",
  "#FFD700",
  "#FF4500",
  "#8A2BE2",
  "#FF1493",
  "#00CED1",
  "#FF8C00",
  "#9370DB",
  "#7FFF00",
  "#FF69B4",
  "#00BFFF",
  "#FF7F50",
  "#ADFF2F",
  "#B0C4DE",
  "#FFB6C1",
  "#8FBC8F",
  "#B22222",
  "#FF4500",
  "#00FA9A",
  "#4682B4",
  "#DDA0DD",
  "#FF6347",
  "#20B2AA",
  "#F08080",
  "#ADD8E6",
  "#FFE4B5",
  "#FFDAB9",
  "#A0522D",
  "#C71585",
  "#B8860B",
  "#FF1493",
  "#B0E0E6",
  "#98FB98",
  "#FF4500",
];

const IndiaMap: React.FC<IndiaMapProps> = ({
  projectionConfig,
  geography,
  selectedState,
  handleMouseEnter,
  handleMouseLeave,
  handleMouseMove,
  handleClick,
}) => {
  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={projectionConfig}
      viewBox="0 0 800 600"
      className="w-full h-full"
    >
      <Geographies geography={geography}>
        {({ geographies }) =>
          geographies.map((geo: GeographyType, index: number) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              onMouseEnter={() => handleMouseEnter(geo)}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
              onClick={(event) => handleClick(event, geo)}
              className="hover:cursor-pointer transition duration-300 ease-in-out"
              style={{
                default: {
                  fill: stateColors[index % stateColors.length],
                  stroke: "#FFFFFF",
                  strokeWidth:
                    selectedState && selectedState.rsmKey === geo.rsmKey
                      ? 2
                      : 1,
                  outline: "none",
                },
                hover: {
                  fill: "#FBBF24",
                  stroke: "#FFFFFF",
                  strokeWidth: 2,
                  outline: "none",
                  filter: "brightness(2)",
                },
                pressed: {
                  fill: "#FF8C00",
                  stroke: "#FFFFFF",
                  strokeWidth: 2,
                  outline: "none",
                },
              }}
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
};

export default IndiaMap;
