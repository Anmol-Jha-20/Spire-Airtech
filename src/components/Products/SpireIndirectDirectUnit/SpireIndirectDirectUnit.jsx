import React from "react";
import AHU from "../PharmaAHU/AHU.jsx";
import EvaporativeCoolingUnit from "../../../assets/EvaporativeCoolingUnit.png";
import SpireIndirectDirectApplication from "./SpireIndirectDirectApplication.jsx";

function SpireIndirectDirectUnit() {
  return (
    <>
      <AHU
        heading={"Spire Indirect Direct Evaporative Cooling Unit"}
        title={"Breathe Fresh, Stay Cool – Naturally"}
        description={
          "The Spire Indirect Direct Evaporative Cooling (IDEC) Unit is an advanced and energy-efficient air cooling solution designed to provide comfortable indoor conditions with significantly lower energy consumption compared to traditional air conditioning systems. It operates in two stages: first, the air is cooled indirectly by passing it through a heat exchanger where it doesn't come in contact with water, thus maintaining low humidity levels. In the second stage, the already pre-cooled air passes through a direct evaporative cooling section where water is evaporated into the air, further reducing its temperature. This dual-stage process ensures enhanced cooling efficiency while using no harmful refrigerants, making it an environmentally friendly alternative. The Spire IDEC Unit is particularly well-suited for dry and hot climates and is commonly used in commercial, industrial, and institutional buildings for fresh, cool, and filtered air with reduced operational costs. In addition to its cooling performance, the Spire IDEC Unit offers several other advantages such as low maintenance, modular design, and easy integration into existing HVAC systems. It helps improve indoor air quality by continuously introducing fresh outdoor air and removing heat and airborne contaminants. With its ability to maintain thermal comfort without recirculating stale air, the system supports better health and productivity in indoor environments. This makes it an ideal choice for applications like offices, factories, data centers, educational institutions, and healthcare facilities."
        }
        image={EvaporativeCoolingUnit}
      />
      <SpireIndirectDirectApplication />
    </>
  );
}

export default SpireIndirectDirectUnit;
