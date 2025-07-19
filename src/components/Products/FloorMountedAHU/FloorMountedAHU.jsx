import React from "react";
import AHU from "../PharmaAHU/AHU.jsx";
import FloorMountedAHUApplication from "./FloorMountedApplication.jsx";
import FloorMountedAHUImage from "../../../assets/FloorMountedImage.jpeg";

function FloorMountedAHU() {
  return (
    <>
      <AHU
        heading={"Floor Mounted Horizontal AHU"}
        title={"Space-Saving Air Handling | Powerful Performance."}
        description={
          "Designed for environments with limited horizontal space, the Floor Mounter delivers high-capacity airflow with vertical configuration, energy-efficient components, and advanced filtration — all in a compact, robust build perfect for commercial and industrial applications."
        }
        image={FloorMountedAHUImage}
      />
      <FloorMountedAHUApplication />
    </>
  );
}

export default FloorMountedAHU;
