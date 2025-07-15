import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Award,
  Zap,
  CheckCircle,
  Lightbulb,
  BarChart3,
} from "lucide-react";
import TempProductUSPs from "../PharmaAHU/ProductUSPs.jsx";
import SmartAHUKeyHighlights from "./SmartAHUKeyHighlights.jsx";
import SmartAHUApplication from "./SmartAHUApplication.jsx";
import SmartAHUFAQComponent from "./SmartAHUFAQs.jsx";

const SmartAHU = () => {
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
                  src="https://zecoaircon.com/wp-content/uploads/2024/12/Smart-AHU-2-1024x705-1.png"
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
                  Smart Air Handling Unit
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-xl md:text-2xl text-gray-600 font-medium mb-8"
                >
                  Smarter Air, Healthier Spaces
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
                  Meet the Smart AHU, a next-generation Air Handling Unit
                  engineered for precision, efficiency, and intelligence.
                  Designed to meet the growing demand for smart building
                  infrastructure, Smart AHU merges advanced HVAC technology with
                  integrated IoT capabilities. With real-time monitoring,
                  predictive maintenance, and seamless BMS integration, it
                  redefines operational efficiency and comfort in commercial and
                  industrial spaces—ensuring air quality and energy savings
                  without compromise.
                </p>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="pt-6"
              >
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 uppercase tracking-wide text-sm">
                  CONSULT OUR SPIRE EXPERTS
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <TempProductUSPs
        heading={"Smart & Cost Efficient AHU"}
        icon1={Shield}
        title1={"IoT-Enabled Intelligence"}
        description1={
          "Smart AHU features built-in IoT technology that allows real-time monitoring, control, and data access from any location via mobile apps or web portals. This connectivity empowers users to respond faster, optimize performance remotely, and gain actionable insights through an intuitive digital interface."
        }
        icon2={Shield}
        title2={"Energy Efficiency at Core"}
        description2={
          "Equipped with EC or VFD-controlled fans and high-performance coils, Smart AHU continuously adjusts airflow and energy use based on demand. This not only reduces power consumption but also aligns with sustainability targets, helping facilities reduce operational costs and carbon footprints over time."
        }
        icon3={Award}
        title3={"Predictive Maintenance"}
        description3={
          "A network of integrated sensors constantly monitors the unit’s critical components—fans, coils, filters, and electrical systems. The system proactively alerts operators before a fault occurs, minimizing downtime, reducing emergency repairs, and extending equipment lifespan through intelligent diagnostics and scheduled maintenance."
        }
        icon4={BarChart3}
        title4={"BMS & Protocol Integration"}
        description4={
          "Smart AHU is designed for seamless interoperability with existing Building Management Systems. It supports BACnet, Modbus RTU/TCP, KNX, and other open protocols, enabling effortless integration with central automation platforms and simplifying centralized control, energy reporting, and compliance tracking."
        }
        icon5={CheckCircle}
        title5={"Advanced Filtration System"}
        description5={
          "A multi-stage filtration setup—including options like HEPA, carbon, and chemical filters—ensures clean, contaminant-free air. Ideal for healthcare, labs, and food industries, the filtration modules are easy to access and maintain, and work in tandem with pressure sensors for filter status alerts."
        }
        icon6={Lightbulb}
        title6={"Flexible Scalability"}
        description6={
          "Smart AHU is designed to be versatile, with airflow capacities ranging from 1,000 CFM to 60,000+ CFM. Whether used in a small office or a large hospital complex, its modular design and customizable components ensure perfect adaptability for varied project scales and HVAC needs."
        }
      />
      <SmartAHUKeyHighlights />
      <SmartAHUApplication />
      <SmartAHUFAQComponent />
    </>
  );
};

export default SmartAHU;
