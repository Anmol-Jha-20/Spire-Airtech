import React from "react";
import { ArrowRight, Snowflake, Zap, Shield, Award } from "lucide-react";
import SmartAHUImage from "../../assets/SmartAHU.png";
import EvaporativeCoolingUnit from "../../assets/EvaporativeCoolingUnit.png";

function AWU() {
  const products = [
    {
      category: "AWU (Air Washer Unit)",
      description:
        "An AHU (Air Handling Unit) is a key component of an air conditioning system that conditions and circulates air as part of a heating, ventilating, and air-conditioning (HVAC) system. It typically contains components such as fans, heating/cooling coils, filters, and dampers. AHUs are used to regulate and distribute air throughout a building, ensuring proper ventilation, temperature control, and air quality.",
      items: [
        {
          title: "Single Stage Air Washer",
          description:
            "A Single Stage Air Washer is an air cooling and cleaning system that uses water to both lower air temperature and remove dust or impurities. Warm air is drawn through a chamber where it passes over water sprays or wet media, causing evaporation that cools the air while also washing out contaminants. This process adds moisture to the air, making it ideal for industrial or commercial use in hot, dry climates.",
          image: SmartAHUImage,
          specs: ["5 Star Rating", "Inverter Technology", "Smart Controls"],
        },
        {
          title: "Spire Indirect Direct Evaporative Cooling Unit",
          description:
            "An Indirect-Direct Evaporative Cooling (IDEC) unit is an energy-efficient system that cools air in two stages. First, it pre-cools outside air without adding moisture using a heat exchanger (indirect stage). Then, it further cools the air by passing it through a wet medium that adds some humidity (direct stage).",
          image: EvaporativeCoolingUnit,
          specs: ["Automated Control", "Energy Saving", "Large Coverage"],
        },
      ],
    },
  ];
  return (
    <>
      {products.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              {category.category}
            </h3>
            {category.description && (
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {category.description}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
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
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default AWU;
