import React from "react";
import { motion } from "framer-motion";

const AirDistributionTypes = () => {
  const coilTypes = [
    {
      id: 1,
      title: "Rectangular Duct",
      description:
        "SPIRE rectangular ducts are ideal for installations with limited vertical space. Their flat design allows for easy integration into ceiling voids and tight spaces, making them perfect for commercial and industrial buildings where space efficiency is critical.",
      image: "https://zecoaircon.com/wp-content/uploads/2025/04/Ract.jpg",
    },
    {
      id: 2,
      title: "Round Duct",
      description:
        "SPIRE round ducts ensure superior airflow and reduced air resistance, making them highly efficient for ventilation systems. Easy to install and cost-effective, they are a preferred choice for many HVAC applications.",
      image:
        "https://zecoaircon.com/wp-content/uploads/2025/04/Spiral-Seam-Round-Duct.jpg",
    },
    {
      id: 3,
      title: "Oval Duct",
      description:
        "Combining the low-profile advantage of rectangular ducts with the airflow efficiency of round ducts, SPIRE oval ducts offer both aesthetics and performance. They are perfect for exposed installations and environments that require both form and function.",
      image:
        "https://zecoaircon.com/wp-content/uploads/2025/04/Spiral-Seam-Flat-Oval-Duct.jpg",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const CoilImage = ({ index }) => (
    <div className="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden"></div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
            Engineered for Every Space
          </h1>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              At SPIRE, we understand that every project has its own space
              constraints and performance requirements. That’s why we offer
              three precision-crafted types of air distribution ducts:
              Rectangular, Oval, and Round –each designed to optimize airflow,
              maximize efficiency, and adapt to unique architectural and
              operational demands. Whether you’re working with tight ceiling
              spaces, exposed duct layouts, or high-performance systems, SPIRE
              has the perfect ducting solution tailored for you.
            </p>
            {/* <p className="text-lg text-gray-600 leading-relaxed">
              <span className="italic font-medium">
                "If it's a coil we can build it"
              </span>{" "}
              is the motto of our coil manufacturing division. Our designers and
              Technicians take pride in living up to the motto.
            </p> */}
          </div>
        </motion.div>

        {/* Main Content Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            Choose The Right Duct For{" "}
            <span className="text-blue-600">Your HVAC Needs</span>
          </h2>

          {/* Coil Types Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
          >
            {coilTypes.map((coil, index) => (
              <motion.div
                key={coil.id}
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-6">
                  {/* <CoilImage index={index} /> */}
                  <img src={coil.image} alt="coil image" />

                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      {coil.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {coil.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <button className="bg-blue-600 hover:bg-blue-700 rounded cursor-pointer text-white px-6 py-4 text-lg font-medium tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl">
          CONSULT OUR SPIRE EXPERTS
        </button>
      </div>
    </div>
  );
};

export default AirDistributionTypes;
