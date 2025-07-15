import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Wind,
  Zap,
  Shield,
  Thermometer,
  Filter,
  Fan,
  Cpu,
  Building,
  ArrowRight,
} from "lucide-react";
import SnowEffect from "../components/snow/SnowEffect";

const ManufacturingPage = () => {
  const [activeProduct, setActiveProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Next Gen AHU",
      description:
        "Advanced Air Handling Units with smart controls and energy-efficient design for modern buildings.",
      icon: <Cpu className="w-8 h-8" />,
      features: [
        "Smart Controls",
        "Energy Efficient",
        "Modular Design",
        "IoT Ready",
      ],
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      name: "Standard AHU",
      description:
        "Reliable and cost-effective air handling solutions for commercial and industrial applications.",
      icon: <Building className="w-8 h-8" />,
      features: [
        "Proven Design",
        "Cost Effective",
        "Easy Maintenance",
        "Durable Construction",
      ],
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      name: "Ceiling Suspended AHU",
      description:
        "Space-saving ceiling-mounted units perfect for areas with limited floor space.",
      icon: <Wind className="w-8 h-8" />,
      features: [
        "Space Saving",
        "Easy Installation",
        "Low Noise",
        "Compact Design",
      ],
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      name: "Heat Recovery Unit",
      description:
        "Energy-efficient systems that recover heat from exhaust air to reduce energy consumption.",
      icon: <Thermometer className="w-8 h-8" />,
      features: [
        "Energy Recovery",
        "Reduced Operating Costs",
        "Environmental Friendly",
        "High Efficiency",
      ],
      image:
        "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=400&h=300&fit=crop",
    },
    {
      id: 5,
      name: "Air Washer",
      description:
        "Advanced air cleaning systems that remove contaminants and improve indoor air quality.",
      icon: <Filter className="w-8 h-8" />,
      features: [
        "Deep Cleaning",
        "Removes Contaminants",
        "Improves Air Quality",
        "Low Maintenance",
      ],
      image:
        "https://images.unsplash.com/photo-1516110833967-0b5716ca75b1?w=400&h=300&fit=crop",
    },
    {
      id: 6,
      name: "Air Scrubber",
      description:
        "Industrial-grade air purification systems for demanding environments and applications.",
      icon: <Shield className="w-8 h-8" />,
      features: [
        "Industrial Grade",
        "High Capacity",
        "Robust Design",
        "Continuous Operation",
      ],
      image:
        "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=300&fit=crop",
    },
    {
      id: 7,
      name: "Ventilation Units",
      description:
        "Comprehensive ventilation solutions for optimal air circulation and comfort.",
      icon: <Fan className="w-8 h-8" />,
      features: [
        "Optimal Circulation",
        "Variable Speed",
        "Quiet Operation",
        "Energy Efficient",
      ],
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
    },
    {
      id: 8,
      name: "Kitchen and Hot Air Systems",
      description:
        "Specialized systems designed for high-temperature environments and commercial kitchens.",
      icon: <Zap className="w-8 h-8" />,
      features: [
        "High Temperature Rated",
        "Commercial Grade",
        "Grease Resistant",
        "Fire Safety",
      ],
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
    },
    {
      id: 9,
      name: "Raised Floor Air Handling Units",
      description:
        "Specialized units designed for raised floor environments in data centers and offices.",
      icon: <Building className="w-8 h-8" />,
      features: [
        "Raised Floor Compatible",
        "Precision Cooling",
        "Data Center Ready",
        "Modular Design",
      ],
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
    },
    {
      id: 10,
      name: "Fan Wall Array",
      description:
        "High-performance fan wall systems for large-scale air movement applications.",
      icon: <Fan className="w-8 h-8" />,
      features: [
        "High Performance",
        "Redundant Design",
        "Variable Speed",
        "Energy Efficient",
      ],
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
    },
    {
      id: 11,
      name: "Fan Coil Units",
      description:
        "Compact and efficient fan coil units for individual room climate control.",
      icon: <Wind className="w-8 h-8" />,
      features: [
        "Individual Control",
        "Compact Design",
        "Quiet Operation",
        "Easy Installation",
      ],
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
    },
    {
      id: 12,
      name: "Heat Exchanger Coils",
      description:
        "High-efficiency heat transfer coils for optimal thermal performance in HVAC systems.",
      icon: <Thermometer className="w-8 h-8" />,
      features: [
        "High Efficiency",
        "Corrosion Resistant",
        "Custom Sizing",
        "Long Lasting",
      ],
      image:
        "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=400&h=300&fit=crop",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1703260809882-5b0b8d6abc76?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <SnowEffect />
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Advanced Air Handling Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100"
          >
            Innovative manufacturing of premium air handling units, ventilation
            systems, and climate control solutions for modern buildings.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center gap-2 cursor-pointer">
              Get Quote <ArrowRight className="w-5 h-5" />
            </button>
            {/* <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
              Get Quote
            </button> */}
          </motion.div>
        </div>
      </motion.section>

      {/* Products Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Manufacturing Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of air handling and ventilation
              solutions, engineered for performance, efficiency, and
              reliability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
                onClick={() =>
                  setActiveProduct(
                    activeProduct === product.id ? null : product.id
                  )
                }
              >
                <div
                  style={{
                    backgroundImage: `url(${product.image})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                  className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center"
                >
                  {/* <div className="text-blue-600">{product.icon}</div> */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>

                  <motion.div
                    initial={false}
                    animate={{
                      height: activeProduct === product.id ? "auto" : 0,
                      opacity: activeProduct === product.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-gray-200 pt-4 mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Key Features:
                      </h4>
                      <ul className="space-y-1">
                        {product.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <ChevronRight className="w-4 h-4 text-blue-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            Why Choose Our Solutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="p-6 bg-white bg-opacity-10 rounded-xl backdrop-blur-sm"
            >
              <Shield className="w-12 h-12 mx-auto mb-4 text-blue-700" />
              <h3 className="text-xl text-gray-900 font-bold mb-4">
                Quality Assurance
              </h3>
              <p className="text-gray-900 font-medium">
                Rigorous testing and quality control ensure every product meets
                the highest standards.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="p-6 bg-white bg-opacity-10 rounded-xl backdrop-blur-sm"
            >
              <Zap className="w-12 h-12 mx-auto mb-4 text-blue-700" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Energy Efficiency
              </h3>
              <p className="text-gray-900">
                Advanced technology delivers superior performance while
                minimizing energy consumption.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="p-6 bg-white bg-opacity-10 rounded-xl backdrop-blur-sm"
            >
              <Building className="w-12 h-12 mx-auto mb-4 text-blue-700" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Custom Solutions
              </h3>
              <p className="text-gray-900">
                Tailored designs to meet specific requirements and building
                constraints.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Ready to Transform Your Air Handling System?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact our experts today to discuss your specific requirements and
            discover the perfect solution for your facility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              Get Custom Quote <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300"
            >
              Download Catalog
            </motion.button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ManufacturingPage;
