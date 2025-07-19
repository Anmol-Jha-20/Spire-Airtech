import React from "react";
import AHU from "../PharmaAHU/AHU.jsx";
import TFAApplication from "./TFAApplication.jsx";
import TFAWithHRWImage from "../../../assets/TFAWithHRW.png";
import TFAWithPlateImage from "../../../assets/TFAWithPlate.png";

function TFA() {
  return (
    <>
      <div className="text-center mb-16 lg:mb-24 mt-10">
        {/* <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 shadow-lg">
          <Snowflake className="w-8 h-8 text-white" />
        </div> */}

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6 leading-tight">
          TFA (With Energy Recovery Unit)
        </h2>

        <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          A Treated Fresh Air (TFA) unit with an Energy Recovery Unit (ERU)
          supplies fresh, conditioned air while recovering energy from exhaust
          air. This improves indoor air quality and energy efficiency, making it
          ideal for commercial and industrial spaces.
        </p>
      </div>
      <AHU
        heading={"TFA with Heat Recovery Wheel (HRW)"}
        title={"Fresh Air, Smarter Energy – All Year Long"}
        description={
          "The TFA with Heat Recovery Wheel is engineered to deliver superior indoor air quality while significantly reducing energy consumption. Designed for commercial and industrial spaces, this advanced unit ensures a steady supply of treated fresh air without compromising on sustainability or comfort. With a high-efficiency sensible or enthalpy wheel that recovers up to 85% of exhaust air energy, it offers a sustainable, cost-effective solution for IAQ compliance and energy optimization. Ideal for green buildings, hospitals, offices, and manufacturing setups, this TFA unit is built to perform—efficiently and intelligently."
        }
        image={TFAWithHRWImage}
      />
      <AHU
        heading={"TFA with Plate Type Heat Exchanger (PHE)"}
        title={"Efficient. Hygienic. Space-Saving."}
        description={
          "Our TFA with Plate Type Heat Exchanger (PHE) is engineered for modern ventilation needs, delivering fresh, treated air with high thermal efficiency and zero cross-contamination. Designed for hygienic environments, it offers energy savings of up to 75% through air-to-air heat recovery, ensuring indoor air quality (IAQ) compliance and comfort while minimizing energy load. A perfect fit for commercial, institutional, and industrial buildings aiming for performance and sustainability."
        }
        image={TFAWithPlateImage}
      />
      <TFAApplication />
    </>
  );
}

export default TFA;
