import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";
import DryScruber from "../../assets/DryScruber.jpeg";
import WaterCooledAirPackage from "../../assets/WaterCooledAirPackaged.png";
import AboutImage from "../../assets/AboutImage.jpeg";

const FdvFan = () => {
  const [activeProduct, setActiveProduct] = useState(null);
  const products = [
    {
      category: "AWU (Air",
      description:
        "An AHU (Air Handling Unit) is a key component of an air conditioning system that conditions and circulates air as part of a heating, ventilating, and air-conditioning (HVAC) system. It typically contains components such as fans, heating/cooling coils, filters, and dampers. AHUs are used to regulate and distribute air throughout a building, ensuring proper ventilation, temperature control, and air quality.",
      items: [
        {
          title: "Water Cooled Scroll Chillers",
          description:
            "These chillers use advanced scroll compressors to offer superior performance and energy efficiency. Ideal for large commercial spaces, they deliver reliable cooling even under varying load conditions. Their water-cooled design ensures stable operation and is particularly effective in high ambient temperatures. With a focus on quiet operation and long-term durability, these units are perfect for facilities requiring consistent cooling over extended periods, reducing downtime and maintenance costs.",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYmZo0qmUq3BB2vMAOdnKZ8c0DUipUDrbQWQ&s",
          specs: ["Efficient", "Compact", "Durable"],
        },
        {
          title: "Water Cooled Packaged Units",
          description:
            "These all-in-one packaged units are designed for ease of installation and operation. Their integrated design ensures reduced installation time and maintenance cost, making them perfect for diverse industrial applications. Whether cooling small offices or large factories, these units offer superior performance in a compact form. With their robust construction and energy-efficient operation, they minimize operational costs and maximize cooling capacity, making them an ideal solution for environments where space and energy are at a premium.",
          image: WaterCooledAirPackage,
          specs: ["Versatile", "Cost-effective", "Reliable"],
        },
        {
          title: "Water Cooled Modular Chillers",
          description:
            "Offering scalability, these modular chillers can be expanded to meet increasing cooling needs. Their modular design ensures ease of maintenance and flexibility, ideal for growing commercial setups. These units are perfect for businesses that need an adaptable cooling system that can grow with their operations. Each module operates independently, which reduces the risk of system failure and allows for efficient servicing without disrupting cooling operations. This flexibility makes it a go-to solution for data centers, large office buildings, and industrial plants.",
          image: DryScruber,
          specs: ["Scalable", "Flexible", "Efficient"],
        },
        {
          title: "Water Cooled Air Handling Units (AHUs)",
          description:
            "These units are designed for precise temperature control in commercial air conditioning systems. The water-cooled design allows them to operate efficiently in larger buildings, optimizing cooling capacity and reducing energy consumption. These AHUs offer superior air quality and comfort by maintaining consistent airflow, temperature, and humidity levels across large spaces. With a focus on reducing energy usage and ensuring seamless integration with other HVAC systems, these units provide optimal climate control and improved indoor air quality, making them ideal for offices, hospitals, and large commercial establishments.",
          image: AboutImage,
          specs: ["Automated Control", "Energy Saving", "Advance"],
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
            Water Cooled DX Units: Efficient, Reliable Cooling Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100"
          >
            Water Cooled DX Units provide cutting-edge cooling technology for
            commercial and industrial applications. These units utilize water as
            the cooling medium, offering superior energy efficiency, compact
            design, and consistent performance even in challenging environments.
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
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl font-medium"
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

export default FdvFan;
