import React from "react";
import { ArrowRight, Snowflake, Zap, Shield, Award } from "lucide-react";
import SmartAHUImage from "../../assets/SmartAHU.png";
import AWU from "./AWU.jsx";
import FanCoilsUnit from "./FanCoilsUnit.jsx";
import FanCoilUnitImage from "../../assets/FanCoilsUnit.png";
import IndoorAirQualityImage from "../../assets/IndoorAirQuality.png";
import OutdoorAirQualityImage from "../../assets/OutdoorAirQuality.png";
import PharmaImage from "../../assets/PharmaImage.png";
import { useNavigate } from "react-router-dom";
import SmartAirHandlingImage from "../../assets/SmartAirHandling.jpeg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const slideIn = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

function AirConditioning() {
  const navigate = useNavigate();
  const features = [
    {
      icon: <Snowflake className="w-6 h-6" />,
      title: "Energy Efficient",
      description: "Advanced inverter technology",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Cooling",
      description: "Rapid temperature control",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Silent Operation",
      description: "Ultra-quiet performance",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Premium Quality",
      description: "Built to last",
    },
  ];

  const products = [
    {
      category: "AHU (Air Handling Unit)",
      description:
        "An AHU (Air Handling Unit) is a key component of an air conditioning system that conditions and circulates air as part of a heating, ventilating, and air-conditioning (HVAC) system. It typically contains components such as fans, heating/cooling coils, filters, and dampers. AHUs are used to regulate and distribute air throughout a building, ensuring proper ventilation, temperature control, and air quality.",
      items: [
        {
          title: "Smart AHU",
          description:
            "A Smart AHU (Smart Air Handling Unit) is an advanced air handling system equipped with sensors, automation, and IoT technology to optimize air quality, energy efficiency, and system performance.",
          image: SmartAHUImage,
          specs: ["5 Star Rating", "Inverter Technology", "Smart Controls"],
          link: "/smart-ahu",
        },
        {
          title: "Pharma AHU",
          description:
            "A Pharma AHU (Pharmaceutical Air Handling Unit) is a specialized air handling unit designed to meet the strict environmental and cleanliness standards required in pharmaceutical manufacturing.",
          image: PharmaImage,
          specs: ["Automated Control", "Energy Saving", "Large Coverage"],
          link: "/pharma-ahu",
        },
        {
          title: "Cleanroom AHU",
          description:
            "A Cleanroom AHU (Air Handling Unit) is a precision-engineered system designed to maintain strict environmental control in cleanroom spaces. ",
          image:
            "https://adz-trax.com/website-preview/aumex-cleanroom/wp-content/uploads/2025/01/ot-air-handling-unit-500x500-2-1.webp",
          specs: ["Commercial Grade", "Efficient Airflow", "Easy Installation"],
          link: "/cleanroom-ahu",
        },
        {
          title: "Floor Mounted AHU",
          description:
            "A Floor Mounted AHU (Air Handling Unit) is a type of AHU installed directly on the floor, typically used in large commercial or industrial spaces. It handles high air volumes and provides easy access for maintenance.",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmnlg1cvFddp_H6MGmnAJu5vVA-6iEo_9Org&s",
          specs: ["Commercial Grade", "Efficient Airflow", "Easy Installation"],
          link: "/floor-mounted-ahu",
        },
        {
          title: "Ceiling Suspended AHU",
          description:
            "A Ceiling Suspended AHU (Air Handling Unit) is a compact system mounted to the ceiling, ideal for spaces with limited floor area. It offers efficient air circulation, temperature control, and filtration, making it well-suited for commercial and cleanroom environments.",
          image:
            "https://5.imimg.com/data5/SELLER/Default/2024/1/377313865/HP/LB/JS/72632029/double-skin-ceiling-suspended-air-handling-unit.jpg",
          specs: ["Commercial Grade", "Efficient Airflow", "Easy Installation"],
          link: "/ceiling-suspended-ahu",
        },
        {
          title: "TFA (With Energy Recovery Unit)",
          description:
            "A Treated Fresh Air (TFA) unit with an Energy Recovery Unit (ERU) supplies fresh, conditioned air while recovering energy from exhaust air. This improves indoor air quality and energy efficiency, making it ideal for commercial and industrial spaces.",
          image:
            "https://5.imimg.com/data5/GT/KY/VA/SELLER-14849786/xfresh-air-handling-unit-png-pagespeed-ic-ajpk2-7llv-500x500.png",
          specs: ["Commercial Grade", "Efficient Airflow", "Easy Installation"],
          link: "/tfa",
        },
      ],
    },
  ];

  return (
    <section
      id="products"
      className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 shadow-lg">
            <Snowflake className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6 leading-tight">
            Air Conditioning
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive range of high-quality air conditioning
            systems and industrial engineering solutions designed to keep your
            environment perfectly cool and efficient.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/90 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-white/20"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mb-4 text-white shadow-lg">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Products Section */}
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
                    <button
                      onClick={() => navigate(product.link)}
                      className="w-full sm:w-auto inline-flex cursor-pointer items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl font-medium"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <AWU />
        <FanCoilsUnit
          title={"Fan Coils Units(FCUs)"}
          shortpara={
            "Versatile Fan Coil Units (FCUs) for Efficient and Zoned Heating & Cooling Applications"
          }
          image={FanCoilUnitImage}
          description={
            "Fan Coil Units (FCUs) are compact and flexible HVAC systems designed to provide localized heating and cooling by circulating air over a coil connected to a central water system. Ideal for residential, commercial, and hospitality environments, FCUs enable precise temperature control in individual rooms or zones, enhancing comfort and energy efficiency. Their modular design allows for easy installation and integration into both new and existing buildings."
          }
        />
        <FanCoilsUnit
          title={"Spire Outdoor Air System"}
          shortpara={"Pure Outdoor Air, Perfected for Indoors."}
          image={OutdoorAirQualityImage}
          description={
            "Spire Outdoor Air System is a Dedicated Outdoor Air System (DOAS) designed to deliver fresh, filtered, and conditioned outdoor air directly into the building, independent of the main recirculated air system. It ensures continuous ventilation, improves indoor air quality, and helps maintain ideal temperature and humidity levels. By decoupling ventilation from the main HVAC load, it enhances energy efficiency while ensuring your building breathes clean, healthy air—making it especially suitable for commercial spaces, cleanrooms, and high-occupancy environments."
          }
        />
        <FanCoilsUnit
          title={"Spire Environmental Unit (SEN)"}
          shortpara={"Revolutionizing Air Quality for a Greener Tomorrow"}
          image={IndoorAirQualityImage}
          description={
            "Spire Environmental Unit (SEN) is a cutting-edge HVAC solution engineered to deliver superior indoor air quality while aligning with sustainability goals and stringent regulatory standards. Designed for critical environments such as laboratories, cleanrooms, pharmaceutical facilities, and healthcare spaces, the SEN offers precise control over temperature, humidity, filtration, and pressurization. Its advanced design ensures consistent performance, energy efficiency, and compliance with industry-specific requirements for clean and controlled air."
          }
        />

        {/* Bottom CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 sm:p-12 text-white shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Experience Perfect Climate Control?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Get in touch with our experts to find the perfect air conditioning
              solution for your needs.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AirConditioning;
