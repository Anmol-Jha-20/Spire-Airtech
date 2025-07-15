import React from "react";
import Snowfall from "react-snowfall";

const SnowEffect = () => {
  return (
    <Snowfall
      color="white"
      snowflakeCount={150}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 5,
        pointerEvents: "none",
      }}
    />
  );
};

export default SnowEffect;
