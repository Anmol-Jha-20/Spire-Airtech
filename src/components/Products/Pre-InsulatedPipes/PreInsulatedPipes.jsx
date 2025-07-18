import React from "react";
import { motion } from "framer-motion";
import PreInsulatedPipeImage from "../../../assets/PreInsulatedPipes.png";
import WhyPreInsulatedPipe from "./WhyPreInsulated";
import PreInsulatedPipeApplication from "./PreInsulatedApplication";
import PipeInsulationInterface from "./PipeInsulationInterface";

const PreInsulatedPipes = () => {
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
                <img src={PreInsulatedPipeImage} alt="Pre Insulated Pipes" />
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
                  Pre-Insulated Pipes
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-xl md:text-2xl text-gray-600 font-medium mb-8"
                >
                  "Efficient Thermal Protection in Every Length"
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
                  Pre-Insulated Pipes are piping systems designed with built-in
                  thermal insulation to minimize heat loss or gain during fluid
                  transport. Commonly used in HVAC, district heating, and
                  cooling systems, they consist of a carrier pipe, insulating
                  layer (usually polyurethane foam), and a protective outer
                  jacket. These pipes improve energy efficiency, reduce
                  installation time, and offer long-term durability in both
                  underground and above-ground applications.
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
      <WhyPreInsulatedPipe />
      <PipeInsulationInterface />
      <PreInsulatedPipeApplication />
    </>
  );
};

export default PreInsulatedPipes;
