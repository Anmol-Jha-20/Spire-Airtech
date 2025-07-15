import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Shield,
  Zap,
  Wrench,
  Heart,
  Droplets,
  Wind,
  Building,
  Truck,
  Settings,
} from "lucide-react";

const PrecisionMaterials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const hoverVariants = {
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const FeatureIcon = ({ icon: Icon, text }) => (
    <motion.div
      className="flex items-center gap-2 text-sm"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <Icon className="w-4 h-4 text-blue-500" />
      <span>{text}</span>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Precision in Every Material
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At SPIRE, we understand that material selection plays a critical
            role in the performance, durability, and efficiency of all air
            distribution systems. That's why we offer ducts fabricated from the
            highest quality materials – Galvanized Iron (GI), Stainless Steel
            (SS), and Aluminum – each suited to different environments and
            project specifications. Explore the strength and suitability of each
            duct type below.
          </p>
        </motion.div>

        {/* Cards Section */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12"
          variants={itemVariants}
        >
          {/* GI Ducts Card */}
          <motion.div
            className="bg-gray-700 text-white rounded-xl p-6 sm:p-8 shadow-lg"
            variants={hoverVariants}
            whileHover="hover"
          >
            <div className="text-center mb-6">
              <h2 className="text-xl sm:text-2xl font-bold mb-2">GI Ducts</h2>
              <p className="text-gray-300 text-sm">(Galvanized Iron)</p>
            </div>

            <p className="text-sm sm:text-base mb-6 leading-relaxed">
              SPIRE GI ducts are fabricated to premium standards using
              high-grade galvanized steel making them the most widely used
              systems in commercial and industrial HVAC systems. These ducts
              offer excellent resistance to corrosion, even in the presence of
              oil and dust particles, making them ideal for diverse indoor
              installations in offices, malls, hotels, and institutions.
            </p>

            <div className="space-y-3">
              <FeatureIcon
                icon={CheckCircle}
                text="Standard HVAC installations"
              />
              <FeatureIcon icon={Building} text="Commercial buildings" />
              <FeatureIcon icon={Shield} text="Medium humidity environments" />
            </div>

            <div className="mt-6 pt-6 border-t border-gray-600">
              <div className="bg-gray-600 text-white px-4 py-2 rounded-lg text-center font-medium">
                Reliable, Cost-Effective, Versatile
              </div>
            </div>
          </motion.div>

          {/* SS Ducts Card */}
          <motion.div
            className="bg-gray-100 text-gray-900 rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200"
            variants={hoverVariants}
            whileHover="hover"
          >
            <div className="text-center mb-6">
              <h2 className="text-xl sm:text-2xl font-bold mb-2 text-blue-600">
                SS Ducts
              </h2>
              <p className="text-gray-600 text-sm">(Stainless Steel)</p>
            </div>

            <p className="text-sm sm:text-base mb-6 leading-relaxed text-gray-700">
              Built from SS 304 or SS 316 grades, SPIRE's Stainless Steel ducts
              are designed for harsh environments where corrosion resistance and
              hygiene are paramount. Perfect for hospitals, pharmaceutical
              plants, food processing units, and chemical and support
              cross-contamination.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Droplets className="w-4 h-4 text-blue-500" />
                <span>High humidity or chemical environments</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Heart className="w-4 h-4 text-blue-500" />
                <span>Healthcare & pharma industries</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Settings className="w-4 h-4 text-blue-500" />
                <span>Food-grade air distribution</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center font-medium">
                Durable, Hygienic, Corrosion-Resistant
              </div>
            </div>
          </motion.div>

          {/* Aluminum Ducts Card */}
          <motion.div
            className="bg-gray-700 text-white rounded-xl p-6 sm:p-8 shadow-lg"
            variants={hoverVariants}
            whileHover="hover"
          >
            <div className="text-center mb-6">
              <h2 className="text-xl sm:text-2xl font-bold mb-2">
                Aluminum Ducts
              </h2>
            </div>

            <p className="text-sm sm:text-base mb-6 leading-relaxed">
              Aluminum ducts are lightweight, corrosion-resistant, and ideal for
              systems that require easy installation and low maintenance. Their
              durability and ease of fabrication make them ideal for exhaust
              systems, advanced heat insulation performance where hygiene and
              cleanliness are crucial.
            </p>

            <div className="space-y-3">
              <FeatureIcon icon={Zap} text="Lightweight installations" />
              <FeatureIcon icon={Wind} text="Coastal & marine zones" />
              <FeatureIcon icon={Wrench} text="Specialized industrial needs" />
            </div>

            <div className="mt-6 pt-6 border-t border-gray-600">
              <div className="bg-gray-600 text-white px-4 py-2 rounded-lg text-center font-medium">
                Lightweight, Non-Corrosive, Easy to Install
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Additional Features Section */}
        <motion.div className="text-center" variants={itemVariants}>
          <motion.div
            className="inline-block bg-white rounded-xl p-6 shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Why Choose SPIRE Materials?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Premium Quality Standards</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Custom Fabrication</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Expert Installation</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PrecisionMaterials;
