import React from "react";
import { motion } from "framer-motion";
import AirDistributionProductUSPs from "./AirDistributionProductUSPs";
import FAQComponent from "../HeatExchangerCoils/FAQ.jsx";
import AirDistributionTypes from "./AirDistributionTypes.jsx";
import AirDistributionKeyHighlights from "./AirDistributionKeyHighlight.jsx";
import AirDistributionApplication from "./AirDistributionApplication.jsx";
import PrecisionMaterials from "./AirDistributionPrecision.jsx";
import FAQAirDistribution from "./AirDistributionFAQs.jsx";

const AirDistributionDucts = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1701074939685-7c182a8ca8f5?q=80&w=1034&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Air Distribution Ducts"
                />
              </div>
            </motion.div>

            {/* Right side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="space-y-8"
            >
              {/* Header */}
              <div className="text-center lg:text-left">
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-4xl md:text-4xl lg:text-5xl font-bold text-blue-800 mb-6"
                >
                  Air Distribution Ducts
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-xl md:text-2xl text-gray-600 font-medium mb-8"
                >
                  "Engineered Ductwork for Superior Air Delivery"
                </motion.p>
              </div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-gray-700 leading-relaxed text-lg space-y-4"
              >
                <p>
                  Air Distribution Ducts are channels used in HVAC systems to
                  deliver conditioned air (cooled or heated) from the air
                  handling unit to different areas within a building. Made from
                  materials like galvanized steel, aluminum, or flexible
                  plastic, these ducts ensure even air distribution, maintain
                  indoor comfort, and help regulate temperature and air quality
                  efficiently. Proper design and insulation of ducts also reduce
                  energy loss and enhance system performance.
                </p>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="pt-6"
              >
                <button
                  onClick={() => (window.location.href = "tel:919311778119")}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold cursor-pointer py-4 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 uppercase tracking-wide text-sm"
                >
                  CONSULT OUR SPIRE EXPERTS
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* <AirDistributionProductUSPs /> */}
      <AirDistributionTypes />
      {/* <AirDistributionKeyHighlights /> */}
      <PrecisionMaterials />
      <AirDistributionApplication />
      <FAQAirDistribution />
    </>
  );
};

export default AirDistributionDucts;
