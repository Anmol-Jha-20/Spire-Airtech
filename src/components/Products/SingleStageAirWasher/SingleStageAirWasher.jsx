import React from "react";
import AHU from "../PharmaAHU/AHU.jsx";
// import CeillingSuspendedImage from "../../../assets/CeillingSuspendedImage.png";
import SingleStageAirImage from "../../../assets/SingleStageAirWasher.png";
import SingleStageApplication from "./SingleStageApplication.jsx";

function SingleStageAirWasher() {
  return (
    <>
      <AHU
        heading={"Single Stage Air Washer"}
        title={
          "A Single Stage Air Washer cools and cleans air using water spray in one step."
        }
        description={
          "A Single Stage Air Washer is an air cooling and cleaning system that uses water to both lower air temperature and remove dust or impurities. Warm air is drawn through a chamber where it passes over water sprays or wet media, causing evaporation that cools the air while also washing out contaminants. This process adds moisture to the air, making it ideal for industrial or commercial use in hot, dry climates. Constructed with corrosion-resistant materials and equipped with efficient filtration, this system ensures enhanced IAQ, low maintenance, and sustainable operation for commercial, industrial, and institutional spaces."
        }
        image={SingleStageAirImage}
      />
      <SingleStageApplication />
    </>
  );
}

export default SingleStageAirWasher;
