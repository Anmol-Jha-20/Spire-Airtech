import React, { useState } from "react";
import { motion } from "framer-motion";

const KeyHighlights = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = [
    "Overview",
    "Features",
    "Benefits",
    "Technical Specification",
    "Construction Details",
    "Certifications",
  ];

  const tabContent = {
    Overview: {
      title:
        "Engineered for Precision Heat Transfer and Operational Excellence",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Spire AirTech's Heat Exchanger is a high-performance solution
            crafted to meet the demanding thermal control requirements of modern
            industrial and commercial facilities. With AHRI 410-certified
            performance, these units are engineered to deliver efficient and
            reliable heat exchange while ensuring long-term durability and
            compliance with global HVAC standards.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Built using seamless copper or stainless-steel tubes and
            corrosion-resistant aluminum or hydrophilic fins, our heat
            exchangers offer enhanced surface area and optimized fin spacing for
            maximum thermal transfer. Whether for chilled water, hot water,
            direct expansion (DX), or steam applications, each coil is designed
            with flexibility in mind—available in 2-pipe or 4-pipe
            configurations with up to 12 rows, depending on capacity.
          </p>
          <p className="text-gray-700 leading-relaxed">
            To ensure dependable operation in harsh environments, every unit
            undergoes rigorous testing at up to 450 PSIG and is optionally
            coated with Heresite for extra protection. The SS drain pan and
            tripod water inlets/outlets improve system hygiene and ease of
            integration, while performance-grade motors ensure consistent
            airflow. Optional nano media filters elevate the unit's filtration
            capability, making it an ideal choice for health-critical
            industries.
          </p>
          <p className="text-gray-700 leading-relaxed">
            From healthcare and pharmaceuticals to data centers and
            manufacturing facilities, Spire's Heat Exchangers offer custom-built
            adaptability, energy efficiency, and thermal accuracy—delivering a
            smarter, sustainable HVAC solution for any environment.
          </p>
        </div>
      ),
    },
    Features: {
      title: "Key Features",
      content: (
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">
              Enhanced surface area for heat transfer
            </span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">Seamless copper tubes</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">Aluminum/copper fins</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">Includes an SS drain pan</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">
              AHRI 410 certified coil performance
            </span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">
              3 rows/4 rows cooling/heating coils
            </span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">Tripod water inlet or outlet</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">
              Performance split capacitor motor/AC
            </span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">2 and 4-pipe systems</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">
              Equipped with nano media filters
            </span>
          </div>
        </div>
      ),
    },
    Benefits: {
      title: "Key Benefits",
      content: (
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <span className="font-semibold text-gray-800">
                Energy-efficient refrigeration:
              </span>
              <span className="text-gray-700 ml-1">
                These heat exchangers provide strong cooling while using less
                energy and reducing operational costs.
              </span>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <span className="font-semibold text-gray-800">
                Maximized Cooling Efficiency:
              </span>
              <span className="text-gray-700 ml-1">
                They are built for optimal performance, accurate temperature
                control, and to provide quick and efficient cooling.
              </span>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <span className="font-semibold text-gray-800">
                Corrosion-resistant:
              </span>
              <span className="text-gray-700 ml-1">
                Our heat exchangers are made of stainless steel, copper, and
                aluminum that don't corrode, so they will remain dependable even
                under harsh conditions.
              </span>
            </div>
          </div>
        </div>
      ),
    },
    "Technical Specification": {
      title: "Technical Specifications",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Coil Type</h4>
            <div className="ml-4 text-gray-700">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Chilled Water (CW)
              </a>
              ,{" "}
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Hot Water (HW)
              </a>
              ,{" "}
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Direct Expansion (DX)
              </a>
              , or{" "}
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Steam Coils
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Tube Material</h4>
            <div className="ml-4 text-gray-700">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Copper
              </a>
              ,{" "}
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Stainless Steel
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Fin Material</h4>
            <div className="ml-4 text-gray-700">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Aluminum (standard)
              </a>
              , hydrophilic coated aluminum, or copper fins for corrosion
              resistance
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Fin Spacing</h4>
            <div className="ml-4 text-gray-700">
              Typically 8-14 fins per inch (FPI), depending on desired heat
              transfer and airflow characteristics
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Tube Diameter</h4>
            <div className="ml-4 text-gray-700">
              Common sizes: 3/8", 1/2" OD copper tubes, or 5/8" OD SS tubes
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Tube Thickness</h4>
            <div className="ml-4 text-gray-700">
              0.3 mm to 0.5 mm, depending on requirements
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">No. of Rows</h4>
            <div className="ml-4 text-gray-700">
              1 to 12 rows, depending on capacity
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Connections</h4>
            <div className="ml-4 text-gray-700">
              Copper or MS headers (with threaded, flanged end connections-
              optional)
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">
              Testing Pressure
            </h4>
            <div className="ml-4 text-gray-700">
              Factory-tested up to 400 psi for CHW coils & 600 psi for DX coils.
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">
              Coating (optional)
            </h4>
            <div className="ml-4 text-gray-700">Herasite Coating</div>
          </div>
        </div>
      ),
    },
    "Construction Details": {
      title: "Construction Details",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Coil Type</h4>
            <div className="ml-4 text-gray-700">
              Chilled Water (CW), Hot Water (HW), Direct Expansion (DX), or
              Steam Coils
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Tube Material</h4>
            <div className="ml-4 text-gray-700">Copper, Stainless Steel</div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Fin Material</h4>
            <div className="ml-4 text-gray-700">
              Aluminum (standard), hydrophilic coated aluminum, or copper fins
              for corrosion resistance
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Fin Spacing</h4>
            <div className="ml-4 text-gray-700">
              Typically 8-14 fins per inch (FPI), depending on desired heat
              transfer and airflow characteristics
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Tube Diameter</h4>
            <div className="ml-4 text-gray-700">
              Common sizes: 3/8", 1/2" OD copper tubes, or 5/8" OD SS tubes
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Tube Thickness</h4>
            <div className="ml-4 text-gray-700">
              0.3 mm to 0.5 mm, depending on requirements
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">No. of Rows</h4>
            <div className="ml-4 text-gray-700">
              1 to 12 rows, depending on capacity
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Connections</h4>
            <div className="ml-4 text-gray-700">
              Copper or MS headers (with threaded, flanged end connections-
              optional)
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">
              Testing Pressure
            </h4>
            <div className="ml-4 text-gray-700">
              Factory-tested up to 400 psi for CHW coils & 600 psi for DX coils.
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">
              Coating (optional)
            </h4>
            <div className="ml-4 text-gray-700">Herasite Coating</div>
          </div>
        </div>
      ),
    },
    Certifications: {
      title: "Certifications",
      content: (
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <span className="text-gray-700">AHRI Certified </span>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Chilled Water Coils
              </a>
              <span className="text-gray-700"> : </span>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                AHRI Standard 410
              </a>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <span className="text-gray-700">
                AHRI Certified Hot Water Coils :{" "}
              </span>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                AHRI Standard 410
              </a>
            </div>
          </div>
        </div>
      ),
    },
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      {/* SEO friendly heading */}
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">
        Key Highlights
      </h1>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200 mb-6 sm:mb-8">
        <nav
          className="-mb-px flex flex-wrap gap-2 sm:gap-4"
          aria-label="Key Highlights Navigation"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base font-medium whitespace-nowrap transition-colors duration-200 ${
                activeTab === tab
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              aria-selected={activeTab === tab}
              role="tab"
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-white"
        role="tabpanel"
        aria-labelledby={activeTab}
      >
        {activeTab === "Overview" && (
          <div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-lg sm:text-xl font-semibold text-gray-800 mb-4"
            >
              '{tabContent[activeTab].title}'
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {tabContent[activeTab].content}
            </motion.div>
          </div>
        )}

        {activeTab !== "Overview" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="border border-gray-200 rounded-lg p-4 sm:p-6 bg-gray-50"
          >
            {tabContent[activeTab].content}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default KeyHighlights;
