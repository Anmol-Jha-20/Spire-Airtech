import React from "react";
import AHU from "../PharmaAHU/AHU.jsx";
import CeillingSuspendedImage from "../../../assets/CeillingSuspendedImage.png";
import CeilingSuspendedApplication from "./CeilingSuspendedApplication.jsx";

function CeilingSuspendedAhu() {
  return (
    <>
      <AHU
        heading={"Ceiling Suspended AHU"}
        title={
          "A Ceiling Suspended AHU is a compact air handling unit mounted on the ceiling."
        }
        description={
          "Designed for efficiency in compact spaces, Spire’s Ceiling Suspended AHU offers powerful air handling performance without occupying valuable floor area. Engineered with premium components, this unit ensures clean, conditioned air with whisper-quiet operation, ideal for modern commercial and industrial environments where space and air quality are both critical."
        }
        image={CeillingSuspendedImage}
      />
      <CeilingSuspendedApplication />
    </>
  );
}

export default CeilingSuspendedAhu;
