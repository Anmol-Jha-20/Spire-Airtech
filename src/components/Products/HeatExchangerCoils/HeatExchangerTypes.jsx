import React from "react";
import { motion } from "framer-motion";

const HeatExchangerTypes = () => {
  const coilTypes = [
    {
      id: 1,
      title: "Direct Expansion (DX) Coil",
      description:
        "Direct Expansion (DX) coils effectively cool the area by absorbing heat from the air directly using refrigerant. We have designed our DX coils to operate at high pressures (up to 600 PSI) and with low energy consumption using common refrigerants like R22, R134a, and R407C.",
      image:
        "https://zecoaircon.com/wp-content/uploads/2025/04/Direct-Expansion-DX-Coil.jpg",
    },
    {
      id: 2,
      title: "Chilled Water Coil",
      description:
        "These coils cool air in HVAC systems by moving chilled water via pipes. Our coils are constructed from sturdy materials like copper and aluminum to effectively withstand high pressures, and they include counter-flow heat exchange for optimal heat transmission.",
      image:
        "https://zecoaircon.com/wp-content/uploads/2025/04/Chilled-Water-Coil.jpg",
    },
    {
      id: 3,
      title: "Hot Water Coil",
      description:
        "Hot water coils heat air by passing it over hot water pipes. Our hot water coils, which are composed of corrosion-resistant materials like copper and stainless steel, can tolerate high temperatures and provide dependable and economical heating.",
      image:
        "https://zecoaircon.com/wp-content/uploads/2025/04/Chilled-Water-Coil.jpg",
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
            Spire Heat Exchanger Coils
          </h1>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Spire AirTech Industries is a manufacturer of commercial &
              industrial coils. We manufacture all types of coils i.e.
              Evaporator, Condenser, Steam, Water & Custom coils for specific
              requirements. We enjoy a countrywide reputation for excellence in
              manufacturing of commercial & industrial coils for critical needs.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              <span className="italic font-medium">
                "If it's a coil we can build it"
              </span>{" "}
              is the motto of our coil manufacturing division. Our designers and
              Technicians take pride in living up to the motto.
            </p>
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
            A Mark of Quality:{" "}
            <span className="text-blue-600">three types of Coils</span>
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
      </div>
    </div>
  );
};

export default HeatExchangerTypes;
