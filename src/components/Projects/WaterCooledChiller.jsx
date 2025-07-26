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

import DuctedImage from "../../assets/DuctedSplit.png";

const WaterCooledChiller = () => {
  const [activeProduct, setActiveProduct] = useState(null);
  const products = [
    {
      category: "AWU (Air",
      description:
        "An AHU (Air Handling Unit) is a key component of an air conditioning system that conditions and circulates air as part of a heating, ventilating, and air-conditioning (HVAC) system. It typically contains components such as fans, heating/cooling coils, filters, and dampers. AHUs are used to regulate and distribute air throughout a building, ensuring proper ventilation, temperature control, and air quality.",
      items: [
        {
          title: "Air Cooled Screw Chiller",
          description:
            "The Air Cooled Screw Chiller is engineered for maximum energy efficiency and high-capacity cooling. Featuring advanced screw compressor technology, this chiller delivers smooth operation and consistent cooling performance across a variety of industrial and commercial applications. It is designed to operate in challenging environments, offering precise temperature control while minimizing energy consumption. Ideal for large-scale cooling needs, this unit combines reliability with cost-effective operation, ensuring long-term savings and reduced maintenance.",
          image:
            "https://img.freepik.com/free-photo/close-up-heat-pump-outside-home_23-2149250243.jpg?t=st=1753184819~exp=1753188419~hmac=2981314fddf2ef483fe0d324faffc30301a72efcb0501d5f1e4456c791cac219&w=1480",
          specs: ["5 Star Rating", "Inverter Technology", "Smart Controls"],
        },
        {
          title: "Air Cooled Scroll Chiller",
          description:
            "The Air Cooled Scroll Chiller offers a compact, quiet, and highly efficient solution for small to medium-sized commercial and industrial cooling needs. With a scroll compressor, it ensures smooth operation and lower vibration levels, making it an ideal choice for environments requiring low noise levels. This chiller provides excellent energy efficiency and reduced environmental impact. Designed for easy installation and minimal maintenance, the unit is perfect for applications such as hotels, retail outlets, and small manufacturing units.",
          image:
            "https://img.freepik.com/free-photo/close-up-heat-pump-outside-home_23-2149250251.jpg?t=st=1753184938~exp=1753188538~hmac=1f721e58a794c054b4049117bde312187070df1a2d60381c8fbd8d08deb73586&w=996",
          specs: ["Automated Control", "Energy Saving", "Large Coverage"],
        },
        {
          title: "Air Cooled Chiller (High-Efficiency Model)",
          description:
            "This High-Efficiency Air Cooled Chiller is designed for performance and energy savings, delivering optimal cooling with minimal power consumption. It uses an advanced heat exchanger system to increase efficiency and reduce operating costs, making it ideal for commercial complexes and large industrial applications. The unit is built for continuous operation and can handle high ambient temperatures with ease. This model ensures that your cooling systems run efficiently, even during peak demand, reducing electricity bills and improving overall sustainability.",
          image:
            "https://img.freepik.com/free-photo/men-working-with-equipment-full-shot_23-2148921408.jpg?t=st=1753185012~exp=1753188612~hmac=cf508ccfbbb5eae5b635fd486cfc28c47a07a078633ad5f60fdaf80761e63625&w=996",
          specs: ["Automated Control", "Energy Saving", "Large Coverage"],
        },
        {
          title: "Air Cooled Chiller (Compact Model)",
          description:
            "The Compact Air Cooled Chiller is designed to fit into tight spaces without compromising on cooling performance. It’s an ideal choice for facilities with limited space, such as small commercial offices, server rooms, and retail environments. Despite its compact size, it delivers reliable, energy-efficient cooling, offering a perfect solution for localized cooling needs. This unit is easy to install and maintain, and its compact footprint doesn’t interfere with other operations, ensuring smooth and efficient cooling across the area.",
          image:
            "data:image/jpeg;base64,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",
          specs: ["Automated Control", "Energy Saving", "Large Coverage"],
        },
        {
          title: "Air Cooled Chiller (Industrial Model)",
          description:
            "The Industrial Air Cooled Chiller is built for high-demand applications, providing powerful and reliable cooling for large industrial facilities. Whether for manufacturing plants, large data centers, or cold storage, this chiller is designed to withstand continuous heavy use while delivering efficient cooling. It offers advanced features like high-efficiency compressors, intelligent controls, and robust construction, making it a highly durable solution for critical cooling needs. Engineered for maximum uptime, it requires minimal maintenance and offers a long service life, ensuring business continuity even in extreme conditions.",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxqdrMqIv9MrJyZ4RrzXZh5RjlKRoAdhEJww&s",
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
            Air Cooled Chillers: Reliable Cooling with Superior Efficiency
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100"
          >
            Air Cooled Chillers provide exceptional cooling performance while
            offering a more compact, efficient solution for commercial and
            industrial applications. These chillers use ambient air to cool the
            refrigerant, making them ideal for areas where water resources are
            limited or unavailable.
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

export default WaterCooledChiller;
