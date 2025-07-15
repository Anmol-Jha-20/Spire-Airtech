import React from "react";
import { motion } from "framer-motion";
import HeatExchangerApplicationImage from "../../../assets/ApplicationImage.png";

const HeatExchangerApplication = () => {
  const applications = [
    "Healthcare & Hospitals",
    "Pharmaceuticals",
    "Chemical & Petrochemical",
    "Biotechnology & R&D Facilities",
    "Commercial Buildings",
    "Food & Beverage Industry",
    "Data Centers",
    "Textile & Paper Plants",
    "Automobile & Electronics Manufacturing",
    "Education & Research Institutions",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Applications Section */}
      <motion.section
        className="py-12 px-4 md:px-8 lg:px-16 xl:px-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-700 mb-12"
            variants={itemVariants}
          >
            Applications
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left side - Applications List */}
            <motion.div className="space-y-6" variants={itemVariants}>
              <div className="border-l-4 border-blue-500 pl-6">
                <h2 className="text-xl font-medium text-blue-600 mb-8">
                  Applications
                </h2>
                <motion.ul className="space-y-4" variants={containerVariants}>
                  {applications.map((app, index) => (
                    <motion.li
                      key={index}
                      className="text-gray-700 text-lg leading-relaxed hover:text-blue-600 transition-colors duration-300 cursor-pointer"
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                    >
                      • {app}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>

            {/* Right side - Data Center Image */}
            <motion.div className="lg:pl-8" variants={itemVariants}>
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <motion.div
                  className="bg-gradient-to-br from-slate-800 to-slate-900 h-80 md:h-96 lg:h-80 xl:h-96 flex items-center justify-center relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={HeatExchangerApplicationImage}
                    className="w-full"
                    alt="Heat Exchanger Application Image"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Thermal Efficiency Section */}
      <motion.section
        className="py-16 px-4 md:px-8 lg:px-16 xl:px-24 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInVariants}
      >
        <div className="max-w-4xl ml-6">
          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl font-light text-gray-700 mb-8"
            variants={fadeInVariants}
          >
            Spire Air Engineering Solutions
          </motion.h2>

          <motion.div className="mb-12" variants={fadeInVariants}>
            <h3 className="text-xl md:text-2xl text-gray-600 mb-8 font-medium">
              "Upgrade to Next-Gen Thermal Efficiency with Spire Heat
              Exchangers"
            </h3>

            <motion.p
              className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8"
              variants={fadeInVariants}
            >
              Experience precision-engineered heat transfer with Spire AirTech's
              AHRI-certified Heat Exchangers—customized for your industry,
              tested for durability, and built for energy efficiency.{" "}
              <span className="font-semibold text-gray-800">
                Connect with our HVAC specialists today
              </span>{" "}
              to explore tailored solutions for your cooling and heating needs.
            </motion.p>
          </motion.div>

          <motion.div
            variants={fadeInVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="bg-blue-600 hover:bg-blue-700 rounded cursor-pointer text-white px-8 py-4 text-lg font-medium tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl">
              CONSULT OUR SPIRE EXPERTS
            </button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default HeatExchangerApplication;
