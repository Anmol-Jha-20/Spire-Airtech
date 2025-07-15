import React from "react";
import AHU from "./AHU.jsx";
import TempProductUSPs from "./ProductUSPs.jsx";
import {
  Shield,
  Award,
  Zap,
  CheckCircle,
  Lightbulb,
  BarChart3,
} from "lucide-react";
import PharmaAHUKeyHighlights from "./PharmaAHUKeyHighlight.jsx";

function PharmaAHU() {
  return (
    <>
      <AHU
        heading={"Pharma Air Handling Unit"}
        title={
          "Precision Air Management for Sterile & Controlled Environments."
        }
        description={
          "Pharma AHUs, also known as Hygienic Air Handling Units, are engineered to meet the strict demands of cleanroom environments across pharmaceutical, biotech, healthcare, and life sciences industries. With a focus on contamination control, microbial resistance, and full regulatory compliance, these units deliver highly filtered, temperature-controlled air to the most sensitive areas. Designed for durability, energy efficiency, and uncompromising hygiene, Pharma AHUs are a cornerstone of controlled environmental solutions."
        }
        image={
          "https://zecoaircon.com/wp-content/uploads/2024/12/Pharma-AHU-1-1024x382-1.png"
        }
      />
      <TempProductUSPs
        heading={"Engineered for Compliance. Designed for Purity"}
        icon1={Shield}
        title1={"Hygienic Construction"}
        description1={
          "Internal parts in SS 304 or aluminium, with smooth surfaces to eliminate microbial growth and contamination."
        }
        icon2={Shield}
        title2={"Certified Cleanroom Compatibility"}
        description2={
          "ISO 846-tested non-metallic parts, HEPA/ULPA filtration options, and microbial inert construction."
        }
        icon3={Award}
        title3={"Modular & Customizable Design"}
        description3={
          "Configurable airflow, coil types, and filtration levels to meet cleanroom class requirements."
        }
        icon4={BarChart3}
        title4={"Superior Accessibility"}
        description4={
          "Easily removable components and flush-mounted, lockable panels for effortless cleaning and maintenance."
        }
        icon5={CheckCircle}
        title5={"Regulatory Compliance"}
        description5={
          "Fully adheres to Eurovent, AHRI, CE, and ISO standards with Class D1/L1/T2 certified casing."
        }
        icon6={Lightbulb}
        title6={"Integrated Hygiene Accessories"}
        description6={
          "UV-C lamps, DOP/PAO ports, and pressure gauges for real-time monitoring and contamination control."
        }
      />
      <PharmaAHUKeyHighlights />
    </>
  );
}

export default PharmaAHU;
