import React from "react";
import AHU from "../PharmaAHU/AHU.jsx";
import CleanroomAHUApplication from "./CleanroomAHUApplication.jsx";

function CleanroomAHU() {
  return (
    <>
      <AHU
        heading={"Cleanroom AHU"}
        title={"Precision Air Handling for Controlled Environments."}
        description={
          "A Cleanroom AHU (Air Handling Unit) is a specialized HVAC system designed to control air quality, temperature, humidity, and pressure within a cleanroom environment. It includes high-efficiency filters (like HEPA or ULPA) to remove airborne particles, ensuring a contamination-free space for sensitive processes in industries such as pharmaceuticals, electronics, and biotechnology. Cleanroom AHUs maintain strict air cleanliness standards (ISO classifications) and often support laminar airflow for uniform air distribution."
        }
        image={
          "https://adz-trax.com/website-preview/aumex-cleanroom/wp-content/uploads/2025/01/ot-air-handling-unit-500x500-2-1.webp"
        }
      />
      <CleanroomAHUApplication />
    </>
  );
}

export default CleanroomAHU;
