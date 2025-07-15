import React from "react";
import { motion } from "framer-motion";

const AHU = ({ heading, title, description, image }) => {
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
                <img src={image} alt="Air Distribution Ducts" />
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
                  {heading}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-xl md:text-2xl text-gray-600 font-medium mb-8"
                >
                  {title}
                </motion.p>
              </div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-gray-700 leading-relaxed text-lg space-y-4"
              >
                <p>{description}</p>
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
    </>
  );
};

export default AHU;
