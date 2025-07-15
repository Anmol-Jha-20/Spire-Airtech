import React, { useState } from "react";
import { motion } from "framer-motion";

const AirDistributionKeyHighlights = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = [
    "Overview",
    "Features",
    "Benefits",
    "Technical Specification",
    "Construction Details",
  ];

  const tabContent = {
    Overview: {
      title:
        "Custom-Fabricated Ducting for High-Efficiency Air Distribution Across All Building Types",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Zeco’s Air Distribution Ducts redefine reliability and performance
            in HVAC airflow systems. Manufactured from high-grade GI, stainless
            steel, or aluminum, these ducts are crafted for durability and
            long-term efficiency. Their modular design and options for
            rectangular, round, or oval shapes allow seamless integration across
            various building types—from cleanrooms to corporate offices.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Seamless joint technology and Pittsburgh/Snap Lock seams paired with
            high-seal gaskets ensure minimal air leakage, reducing strain on
            HVAC systems and cutting operational costs. To combat thermal loss
            and prevent condensation, both internal and external insulation
            options are available using closed- or open-cell nitrile rubber.
          </p>
          <p className="text-gray-700 leading-relaxed">
            With precision fabrication powered by CNC automation, every duct
            section matches design specifications, allowing for quick
            installation and superior airflow. Zeco ducts meet pressure class
            ratings up to 2000 Pa and adhere to stringent SMACNA sealing
            standards, making them a trusted choice for architects, HVAC
            consultants, and facility managers across sectors.
          </p>
        </div>
      ),
    },
    Features: {
      title: "Key Features",
      content: (
        <div className="space-y-4">
          <div>
            <div className="flex items-start gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="font-semibold text-gray-800 mb-2">Coil Type:</div>
            </div>
            <div className="ml-4 text-gray-700">
              <p>
                Galvanized Steel:{" "}
                <span className="text-gray-800">
                  Commonly used due to its durability and corrosion resistance.
                </span>
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-start gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="font-semibold text-gray-800 mb-2">Aluminum:</div>
            </div>
            <div className="ml-4 text-gray-700">
              <p>
                Lightweight and corrosion-resistant, often used in coastal or
                high-humidity areas.
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-start gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="font-semibold text-gray-800 mb-2">
                Shapes and Sizes:
              </div>
            </div>
            <div className="ml-4 text-gray-700">
              <p>Rectangular, Round & Oval</p>
            </div>
          </div>
          <div>
            <div className="flex items-start gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="font-semibold text-gray-800 mb-2">
                Custom Sizes can be fabricated to suit specific building
                designs.
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-start gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="font-semibold text-gray-800 mb-2">
                Insulation Properties:
              </div>
            </div>
            <div className="ml-4 text-gray-700">
              Internal or External Insulation: Reduces energy loss and prevents
              condensation.
            </div>
          </div>
          <div>
            <div className="flex items-start gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="font-semibold text-gray-800 mb-2">
                Leak Resistance:
              </div>
            </div>
            <div className="ml-4 text-gray-700">
              Sealed Joints and Connections: Minimize leakage, enhancing energy
              efficiency.
            </div>
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
                Enhanced Indoor Air Quality
              </span>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <span className="font-semibold text-gray-800">
                Improved Thermal Comfort
              </span>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <span className="font-semibold text-gray-800">
                Energy Efficiency
              </span>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <span className="font-semibold text-gray-800">
                Well-designed ducts minimize air leakage, reducing energy waste.
              </span>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <span className="font-semibold text-gray-800">
                Insulated ducts lower heat gain or loss, improving HVAC
                performance.
              </span>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <span className="font-semibold text-gray-800">
                Long-Term Cost Savings
              </span>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <span className="font-semibold text-gray-800">
                Efficient air delivery reduces strain on HVAC units, extending
                equipment lifespan.
              </span>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <span className="font-semibold text-gray-800">
                Minimizes maintenance costs with durable, low-maintenance
                materials.
              </span>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <span className="font-semibold text-gray-800">
                Quick Installation: Prefabricated and modular systems speed up
                installation time.
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
            <div className="flex items-start gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="font-semibold text-gray-800 mb-2">
                Material Thickness Ranges:
              </div>
            </div>
            <div className="ml-4 text-gray-700">
              <p>
                Galvanized Iron (GI):{" "}
                <span className="text-gray-800">0.5 mm to 1.2 mm</span>
              </p>
              <p>
                Stainless Steel 304 (SS 304):{" "}
                <span className="text-gray-800">0.5 mm to 0.8 mm</span>
              </p>
              <p>
                Aluminum (AL):{" "}
                <span className="text-gray-800">0.8 mm to 1.2 mm</span>
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-start gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="font-semibold text-gray-800 mb-2">
                Pressure Class:
              </div>
            </div>
            <div className="ml-4 text-gray-700">
              <p>Designed to withstand pressures up to 2000 Pa</p>
            </div>
          </div>
          <div>
            <div className="flex items-start gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="font-semibold text-gray-800 mb-2">
                Insulation Options:
              </div>
            </div>
            <div className="ml-4 text-gray-700">
              <p>Closed-cell nitrile rubber</p>
              <p>
                Open-cell nitrile rubber (For thermal and acoustic performance)
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-start gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="font-semibold text-gray-800 mb-2">
                Sealing Standards:
              </div>
            </div>
            <div className="ml-4 text-gray-700">
              Conforms to Class A, B, and C as per SMACNA standards
            </div>
          </div>
        </div>
      ),
    },
    "Construction Details": {
      title: "Construction Details",
      content: (
        <div className="space-y-4">
          <div>
            <div className="flex items-start gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="font-semibold text-gray-800 mb-2">
                Material Selection:
              </div>
            </div>
            <div className="ml-4 text-gray-700">
              <p>
                Fabricated from high-grade Galvanized Iron (G.I.), Stainless
                Steel (SS 304), or Aluminum based on project requirements.{" "}
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-start gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="font-semibold text-gray-800 mb-2">
                Seam & Joint Technology:
              </div>
            </div>
            <div className="ml-4 text-gray-700">
              <p>
                Uses Pittsburgh or Snap Lock seams, with gaskets and sealants
                applied at joints to ensure airtight connections and minimal
                leakage.
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-start gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="font-semibold text-gray-800 mb-2">
                Reinforced Corners & Flanges:
              </div>
            </div>
            <div className="ml-4 text-gray-700">
              <p>
                All duct sections include reinforced corners and flanged ends
                (TDF/TDC or angle flanges) to ensure structural integrity and
                easy assembly.
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-start gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="font-semibold text-gray-800 mb-2">
                Surface Finish & Coating:
              </div>
            </div>
            <div className="ml-4 text-gray-700">
              Galvanized Steel enhanced corrosion resistance and aesthetic
              compatibility in visible installations.
            </div>
          </div>
          <div>
            <div className="flex items-start gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="font-semibold text-gray-800 mb-2">
                Insulation Options:
              </div>
            </div>
            <div className="ml-4 text-gray-700">
              Internal or external insulation available using closed or
              open-cell nitrile rubber to meet thermal and acoustic needs.
            </div>
          </div>
          <div>
            <div className="flex items-start gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="font-semibold text-gray-800 mb-2">
                Automated Fabrication:
              </div>
            </div>
            <div className="ml-4 text-gray-700">
              CNC-based cutting, folding, and assembling ensures consistent
              quality, precise dimensions, and minimal wastage.
            </div>
          </div>
          <div>
            <div className="flex items-start gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="font-semibold text-gray-800 mb-2">
                Custom Fit:
              </div>
            </div>
            <div className="ml-4 text-gray-700">
              Each duct is tailored as per design drawings to ensure perfect
              alignment, reduced site modifications, and smoother installation.
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

export default AirDistributionKeyHighlights;
