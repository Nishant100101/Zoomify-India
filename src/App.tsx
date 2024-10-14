import { geoPath } from "d3-geo";
import React, { MouseEvent, useState } from "react";
import * as topojson from "topojson-client";
import MapContainer from "./Components/MapContiner";
import StateModal from "./Components/StateModal";
import Tooltip from "./Components/ToolTip";
import india_state from "./map-data/india_state.json";
import andamanNicobar from "./map-data/states/andamanNicobar.json";
import andhraPradesh from "./map-data/states/andhraPradesh.json";
import arunachalPradesh from "./map-data/states/arunachalPradesh.json";
import assam from "./map-data/states/assam.json";
import bihar from "./map-data/states/bihar.json";
import chhattisgarh from "./map-data/states/chhattisgarh.json";
import delhi from "./map-data/states/delhi.json";
import goa from "./map-data/states/goa.json";
import gujarat from "./map-data/states/gujarat.json";
import haryana from "./map-data/states/haryana.json";
import himachalPradesh from "./map-data/states/himachalPradesh.json";
import jammuKashmir from "./map-data/states/jammuKashmir.json";
import jharkhand from "./map-data/states/jharkhand.json";
import karnataka from "./map-data/states/karnataka.json";
import kerala from "./map-data/states/kerala.json";
import ladakh from "./map-data/states/ladakh.json";
import lakshadweep from "./map-data/states/lakshadweep.json";
import madhyaPradesh from "./map-data/states/madhyaPradesh.json";
import maharashtra from "./map-data/states/maharashtra.json";
import manipur from "./map-data/states/manipur.json";
import meghalaya from "./map-data/states/meghalaya.json";
import mizoram from "./map-data/states/mizoram.json";
import nagaland from "./map-data/states/nagaland.json";
import odisha from "./map-data/states/odisha.json";
import punjab from "./map-data/states/punjab.json";
import rajasthan from "./map-data/states/rajasthan.json";
import sikkim from "./map-data/states/sikkim.json";
import tamilNadu from "./map-data/states/tamilNadu.json";
import telangana from "./map-data/states/telangana.json";
import tripura from "./map-data/states/tripura.json";
import uttarakhand from "./map-data/states/uttarakhand.json";
import uttarPradesh from "./map-data/states/uttarPradesh.json";
import westBengal from "./map-data/states/westBengal.json";

interface ProjectionConfig {
  scale: number;
  center: [number, number];
}

interface TooltipPosition {
  x: number;
  y: number;
}

export default function App() {
  const [tooltipContent, setTooltipContent] = useState<string>("");
  const [tooltipPosition, setTooltipPosition] = useState<TooltipPosition>({
    x: 0,
    y: 0,
  });
  const [selectedState, setSelectedState] = useState<any>(null);
  const [projectionConfig, setProjectionConfig] = useState<ProjectionConfig>({
    scale: 950,
    center: [80, 22],
  });
  const [stateCenter, setStateCenter] = useState<[number, number] | null>(null);
  const [stateScale, setStateScale] = useState<number | null>(null);
  const [stateName, setStateName] = useState<string>("");

  const handleMouseEnter = (geo: any) => {
    setTooltipContent(geo.properties.ST_NM);
  };

  const handleMouseLeave = () => {
    setTooltipContent("");
  };

  const handleMouseMove = (event: MouseEvent) => {
    setTooltipPosition({ x: event.pageX, y: event.pageY });
  };

  const handleStateMouseEnter = (geo: any) => {
    setTooltipContent(geo.properties.district);
  };

  const handleClick = (event: MouseEvent, geo: any) => {
    event.stopPropagation();
    setStateCenter(null);

    switch (geo.properties.ID) {
      case "AP":
        stateBound(andhraPradesh, "andhra-pradesh");
        setStateName(geo.properties.ST_NM);
        setSelectedState(andhraPradesh);
        break;

      case "AR":
        stateBound(arunachalPradesh, "arunachal-pradesh");
        setStateName(geo.properties.ST_NM);
        setSelectedState(arunachalPradesh);
        break;

      case "AS":
        stateBound(assam, "assam");
        setStateName(geo.properties.ST_NM);
        setSelectedState(assam);
        break;

      case "BR":
        stateBound(bihar, "bihar");
        setStateName(geo.properties.ST_NM);
        setSelectedState(bihar);
        break;

      case "CT":
        stateBound(chhattisgarh, "chhattisgarh");
        setStateName(geo.properties.ST_NM);
        setSelectedState(chhattisgarh);
        break;

      case "GA":
        stateBound(goa, "goa");
        setStateName(geo.properties.ST_NM);
        setSelectedState(goa);
        break;

      case "GJ":
        stateBound(gujarat, "gujarat");
        setStateName(geo.properties.ST_NM);
        setSelectedState(gujarat);
        break;

      case "HR":
        stateBound(haryana, "haryana");
        setStateName(geo.properties.ST_NM);
        setSelectedState(haryana);
        break;

      case "HP":
        stateBound(himachalPradesh, "himachal-pradesh");
        setStateName(geo.properties.ST_NM);
        setSelectedState(himachalPradesh);
        break;

      case "JH":
        stateBound(jharkhand, "jharkhand");
        setStateName(geo.properties.ST_NM);
        setSelectedState(jharkhand);
        break;

      case "KA":
        stateBound(karnataka, "karnataka");
        setStateName(geo.properties.ST_NM);
        setSelectedState(karnataka);
        break;

      case "KL":
        stateBound(kerala, "kerala");
        setStateName(geo.properties.ST_NM);
        setSelectedState(kerala);
        break;

      case "MP":
        stateBound(madhyaPradesh, "madhya-pradesh");
        setStateName(geo.properties.ST_NM);
        setSelectedState(madhyaPradesh);
        break;

      case "MH":
        stateBound(maharashtra, "maharashtra");
        setStateName(geo.properties.ST_NM);
        setSelectedState(maharashtra);
        break;

      case "MN":
        stateBound(manipur, "manipur");
        setStateName(geo.properties.ST_NM);
        setSelectedState(manipur);
        break;

      case "ML":
        stateBound(meghalaya, "meghalaya");
        setStateName(geo.properties.ST_NM);
        setSelectedState(meghalaya);
        break;

      case "MZ":
        stateBound(mizoram, "mizoram");
        setStateName(geo.properties.ST_NM);
        setSelectedState(mizoram);
        break;

      case "NL":
        stateBound(nagaland, "nagaland");
        setStateName(geo.properties.ST_NM);
        setSelectedState(nagaland);
        break;

      case "OR":
        stateBound(odisha, "odisha");
        setStateName(geo.properties.ST_NM);
        setSelectedState(odisha);
        break;

      case "PB":
        stateBound(punjab, "punjab");
        setStateName(geo.properties.ST_NM);
        setSelectedState(punjab);
        break;

      case "RJ":
        stateBound(rajasthan, "rajasthan");
        setStateName(geo.properties.ST_NM);
        setSelectedState(rajasthan);
        break;

      case "SK":
        stateBound(sikkim, "sikkim");
        setStateName(geo.properties.ST_NM);
        setSelectedState(sikkim);
        break;

      case "TN":
        stateBound(tamilNadu, "tamil-nadu");
        setStateName(geo.properties.ST_NM);
        setSelectedState(tamilNadu);
        break;

      case "TG":
        stateBound(telangana, "telangana");
        setStateName(geo.properties.ST_NM);
        setSelectedState(telangana);
        break;

      case "TR":
        stateBound(tripura, "tripura");
        setStateName(geo.properties.ST_NM);
        setSelectedState(tripura);
        break;

      case "UP":
        stateBound(uttarPradesh, "uttar-pradesh");
        setStateName(geo.properties.ST_NM);
        setSelectedState(uttarPradesh);
        break;

      case "UT":
        stateBound(uttarakhand, "uttarakhand");
        setStateName(geo.properties.ST_NM);
        setSelectedState(uttarakhand);
        break;

      case "WB":
        stateBound(westBengal, "west-bengal");
        setStateName(geo.properties.ST_NM);
        setSelectedState(westBengal);
        break;

      case "AN":
        stateBound(andamanNicobar, "andaman-nicobar");
        setStateName(geo.properties.ST_NM);
        setSelectedState(andamanNicobar);
        break;

      case "LD":
        stateBound(lakshadweep, "lakshadweep");
        setStateName(geo.properties.ST_NM);
        setSelectedState(lakshadweep);
        break;

      case "DL":
        stateBound(delhi, "delhi");
        setStateName(geo.properties.ST_NM);
        setSelectedState(delhi);
        break;

      case "JK":
        stateBound(jammuKashmir, "jammu-kashmir");
        setStateName(geo.properties.ST_NM);
        setSelectedState(jammuKashmir);
        break;

      case "LA":
        stateBound(ladakh, "ladakh");
        setStateName(geo.properties.ST_NM);
        setSelectedState(ladakh);
        break;

      default:
        break;
    }
  };

  const stateBound = (stateJson: any, stateName: string) => {
    const featureCollection = topojson.feature(
      stateJson,
      stateJson.objects[stateName]
    );

    const bounds = geoPath().bounds(featureCollection);

    const width = bounds[1][0] - bounds[0][0];
    const height = bounds[1][1] - bounds[0][1];

    const scale = Math.min(750 / width, 600 / height) * 0.8;

    const xOffset = (bounds[0][0] + bounds[1][0]) / 2;
    const yOffset = (bounds[0][1] + bounds[1][1]) / 2;

    setStateCenter([xOffset, yOffset]);
    setStateScale(scale * 60);
  };

  return (
    <div className="relative flex flex-col h-screen">
      <div className="shadow-md w-full fixed z-[100] bg-white top-0 left-0 shadow-slate-300 py-2 text-center font-semibold text-2xl">
        Zoomify India
      </div>
      <div className="mt-14">
        <MapContainer
          selectedState={selectedState}
          setSelectedState={setSelectedState}
          projectionConfig={projectionConfig}
          india_state={india_state}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          handleMouseMove={handleMouseMove}
          handleClick={handleClick}
        />
        <StateModal
          selectedState={selectedState}
          setSelectedState={setSelectedState}
          stateName={stateName}
          stateScale={stateScale}
          stateCenter={stateCenter}
          handleStateMouseEnter={handleStateMouseEnter}
          handleMouseLeave={handleMouseLeave}
          handleMouseMove={handleMouseMove}
        />

        <Tooltip
          tooltipContent={tooltipContent}
          tooltipPosition={tooltipPosition}
        />
      </div>
    </div>
  );
}
