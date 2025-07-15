import React from "react";
import {
  Shield,
  Award,
  Zap,
  CheckCircle,
  Lightbulb,
  BarChart3,
} from "lucide-react";

const ProductUSPs = () => {
  const uspData = [
    {
      icon: Shield,
      title: "High-Efficiency Heat Transfer Coils",
      description:
        "Advanced coil designs with up to 12 rows and optimized fin spacing offer maximum surface area and superior thermal exchange rates across chilled water, hot water, DX, or steam applications.",
      delay: 0.1,
    },
    {
      icon: Shield,
      title: "Corrosion-Resistant Construction",
      description:
        "Built with stainless steel, copper tubes, and coated aluminum fins that withstand harsh conditions while maintaining long-term performance and integrity.",
      delay: 0.2,
    },
    {
      icon: Award,
      title: "Versatile Coil Configurations",
      description:
        "Supports both 2-pipe and 4-pipe systems, with customizable tube diameters, fin types, and optional coatings—adaptable to your specific HVAC system design.",
      delay: 0.3,
    },
    {
      icon: BarChart3,
      title: "Energy-Saving Performance",
      description:
        "Delivers exceptional temperature control while significantly reducing energy consumption, operational costs, and environmental impact.",
      delay: 0.4,
    },
    {
      icon: CheckCircle,
      title: "AHRI 410 Certified Quality",
      description:
        "Every coil is rigorously tested and certified under AHRI standards, ensuring verified performance, capacity, and reliability under real-world conditions.",
      delay: 0.5,
    },
    {
      icon: Lightbulb,
      title: "Smart Component Integration",
      description:
        "Features nano media filters, tripod water connections, and capacitor motors to enhance airflow control and filtration—all designed for easy integration into your HVAC infrastructure.",
      delay: 0.6,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
      {/* Header Section */}
      <div className="text-center mb-12 lg:mb-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-4">
          Product USP's
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          Engineered for Efficiency, Built for Endurance
        </p>
      </div>

      {/* USPs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {uspData.map((usp, index) => {
          const IconComponent = usp.icon;

          return (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 lg:p-8 border border-gray-100 hover:border-blue-200 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                  <IconComponent className="w-8 h-8 lg:w-10 lg:h-10 text-blue-600" />
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4 leading-tight">
                  {usp.title}
                </h3>
                <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                  {usp.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Section */}
      <div className="mt-12 lg:mt-16 text-center">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
            Ready to Experience Superior Performance?
          </h2>
          <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
            Discover how our advanced heat transfer solutions can optimize your
            HVAC system's efficiency and reliability.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 transform hover:scale-105">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductUSPs;
