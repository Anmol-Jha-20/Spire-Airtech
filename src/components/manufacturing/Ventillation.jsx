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
import SnowEffect from "../snow/SnowEffect.jsx";
import WebSucrubber from "../../assets/WebScruber.png";
import ExhaustAirUnit from "../../assets/ExhaustAirUnit.jpeg";
import FreshAirUnit from "../../assets/FreshAirUnit.jpeg";
import DryScruber from "../../assets/DryScruber.jpeg";

const Ventillation = () => {
  const [activeProduct, setActiveProduct] = useState(null);
  const products = [
    {
      category: "AWU (Air",
      description:
        "An AHU (Air Handling Unit) is a key component of an air conditioning system that conditions and circulates air as part of a heating, ventilating, and air-conditioning (HVAC) system. It typically contains components such as fans, heating/cooling coils, filters, and dampers. AHUs are used to regulate and distribute air throughout a building, ensuring proper ventilation, temperature control, and air quality.",
      items: [
        {
          title: "Fresh Air Unit",
          description:
            "A Fresh Air Unit (FAU) is a ventilation system designed to supply clean, filtered outdoor air into indoor spaces. It helps maintain healthy indoor air quality by diluting pollutants, controlling humidity, and ensuring a consistent flow of oxygen-rich air. FAUs are commonly used in commercial, industrial, and residential buildings as part of HVAC systems.",
          image: FreshAirUnit,
          specs: ["5 Star Rating", "Inverter Technology", "Smart Controls"],
        },
        {
          title: "Exhaust Air Unit",
          description:
            "An Exhaust Air Unit (EAU) is a ventilation system designed to remove stale, contaminated, or humid air from indoor spaces. It helps maintain indoor air quality by expelling air from areas like kitchens, bathrooms, or industrial zones, often working in coordination with fresh air systems to ensure balanced airflow and a healthier environment.",
          image: ExhaustAirUnit,
          specs: ["Automated Control", "Energy Saving", "Large Coverage"],
        },
        {
          title: "Dry Scrubber (Kitchen Exhaust Unit)",
          description:
            "A Dry Scrubber (Kitchen Exhaust Unit) is an air filtration system used to remove grease, smoke, odors, and airborne pollutants from kitchen exhaust air without using water. It typically uses filters and adsorbent materials like activated carbon to clean the air before releasing it outdoors.",
          image: DryScruber,
          specs: ["Automated Control", "Energy Saving", "Large Coverage"],
        },
        {
          title: "Wet Scrubber",
          description:
            "A Wet Scrubber is an air pollution control device that removes contaminants from exhaust gases by spraying them with water or a scrubbing solution. As the gas passes through the scrubber, pollutants like dust, smoke, and chemical vapors are captured and washed out. Commonly used in industrial applications, wet scrubbers are highly effective for controlling both particulate matter and gas emissions.",
          image: WebSucrubber,
          specs: ["Automated Control", "Energy Saving", "Large Coverage"],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1655039353512-ab38d6a37a92?q=80&w=589&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* <SnowEffect /> */}
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Smart Ventilation Solutions for Modern Environments
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100"
          >
            Smart ventilation systems ensure a continuous supply of fresh,
            filtered air while efficiently removing stale air and contaminants.
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
      {products.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-20">
          {/* <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              {category.category}
            </h3>
            {category.description && (
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {category.description}
              </p>
            )}
          </div> */}

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-20 gap-8">
            {category.items.map((product, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100"
              >
                {/* Image Container */}
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Floating Badge */}
                  {/* <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold text-gray-900 shadow-lg">
                            Premium
                          </div> */}
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {product.title}
                  </h4>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Specs */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {product.specs.map((spec, specIndex) => (
                        <span
                          key={specIndex}
                          className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-200"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl font-medium">
                    <span>Contact Us</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ventillation;
