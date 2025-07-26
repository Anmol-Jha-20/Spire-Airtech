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
import WebSucrubber from "../../assets/WebScruber.png";
import ScrollMegaCondensing from "../../assets/ScrollMegaCondensing.png";
import ScrollMega407c from "../../assets/ScrollCondensingR407c.png";
import WaterCooledScroll from "../../assets/WaterCooledScroll.png";

const Chillers = () => {
  const [activeProduct, setActiveProduct] = useState(null);
  const products = [
    {
      category: "AWU (Air",
      description:
        "An AHU (Air Handling Unit) is a key component of an air conditioning system that conditions and circulates air as part of a heating, ventilating, and air-conditioning (HVAC) system. It typically contains components such as fans, heating/cooling coils, filters, and dampers. AHUs are used to regulate and distribute air throughout a building, ensuring proper ventilation, temperature control, and air quality.",
      items: [
        {
          title: "Scroll Mega Condensing Unit - R22",
          description:
            "The Scroll Mega Condensing Unit - R22 is a high-performance refrigeration system designed to efficiently condense refrigerant (R22). It uses a scroll compressor to provide reliable and consistent cooling, making it ideal for large-scale commercial and industrial applications. The unit is built to handle demanding cooling loads, offering durability, energy efficiency, and easy maintenance, while being specifically designed for use with R22 refrigerant, which is commonly used in older systems.",
          image: ScrollMegaCondensing,
          specs: ["Efficient", "Durable", "Reliable"],
        },
        {
          title: "Scroll Mega Condensing Unit - R407c",
          description:
            "The Scroll Mega Condensing Unit - R407c is a high-performance refrigeration unit designed for commercial and industrial applications. It uses the R407c refrigerant, which is an environmentally friendly alternative to R22, offering improved efficiency and reduced environmental impact. The unit features a scroll compressor for reliable and quiet operation, and it is built to handle a wide range of temperatures, making it suitable for various cooling needs.",
          image:
            "https://image.made-in-china.com/2f0j00eyitFLnHGNqO/R407c-380-415V-50Hz-6HP-SANYO-Panasonic-Scroll-Compressor.webp",
          specs: ["Efficient", "Reliable", "Eco-friendly"],
        },
        {
          title: "Scroll Condensing Unit - R22",
          description:
            "The Scroll Condensing Unit - R22 is a refrigeration unit designed for commercial and industrial cooling systems using the R22 refrigerant. Known for its reliable and efficient performance, it features a scroll compressor that ensures smooth operation and low vibration. It is ideal for applications that require consistent cooling, though it's being phased out due to environmental regulations. The unit is ideal for businesses transitioning to alternative refrigerants, offering a balance of performance and cost-effectiveness before upgrading to newer technologies.",
          image:
            "https://www.miracleref.com/wp-content/uploads/2021/10/R22-Scroll-Condensing-Unit.jpg",
          specs: ["Reliable", "Efficient", "Durable"],
        },
        {
          title: "Scroll Condensing Unit - R407c",
          description:
            "The Scroll Condensing Unit - R407c is an advanced refrigeration solution designed for commercial and industrial applications. Using the environmentally friendly R407c refrigerant, it offers high efficiency, reduced energy consumption, and reliable cooling performance. Featuring a scroll compressor, this unit ensures quiet, smooth operation and is ideal for various temperature-sensitive environments.",
          image: ScrollMega407c,
          specs: ["Energy-efficient", "Quiet", "Reliable"],
        },
        {
          title: "Water Cooled Scroll Condensing Units",
          description:
            "Water Cooled Scroll Condensing Units are high-performance refrigeration systems that use water as the cooling medium instead of air. They are ideal for environments where air-cooled systems might not be efficient or feasible. These units use scroll compressors for smooth and efficient operation, making them highly reliable and energy-efficient for industrial and commercial applications. Water cooling helps to maintain consistent performance, even in high ambient temperatures.",
          image: WaterCooledScroll,
          specs: ["Durable", "Compact", "Sustainable"],
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
          backgroundImage: `url('https://images.unsplash.com/photo-1615870123253-f3de8aa89e24?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
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
            High-Performance Chillers for Efficient Cooling
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100"
          >
            Maximize cooling efficiency with our state-of-the-art chillers,
            designed for seamless operation in industrial and commercial
            applications, ensuring reliable and cost-effective temperature
            control.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {/* <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center gap-2 cursor-pointer">
              Get Quote <ArrowRight className="w-5 h-5" />
            </button> */}
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
                  <button
                    onClick={() => (window.location.href = "tel:919311778119")}
                    className="w-full sm:w-auto inline-flex items-center justify-center cursor-pointer space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl font-medium"
                  >
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

export default Chillers;
