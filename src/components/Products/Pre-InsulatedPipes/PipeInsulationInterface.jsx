import React from "react";
import PreInsulatedPipeImage from "../../../assets/PreInsulatedPipes.png";
import AluminiumStainlessImage from "../../../assets/AluminumStainlessSteel.png";
import GalvanisedIronImage from "../../../assets/GalvanisedIron(GI).png";

const PipeInsulationInterface = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Spire Pipe Insulation Systems
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            High-performance thermal insulation solutions for industrial piping
            applications
          </p>
        </header>

        {/* Jacket/Cladding Types Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Jacket/Cladding Types:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Aluminum, Stainless Steel */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <img
                  src={AluminiumStainlessImage}
                  alt="Aluminum and Stainless Steel Jacket/Cladding"
                  className="w-full h-32 object-contain rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Aluminum, Stainless Steel
              </h3>
              <p className="text-gray-600">Jacket/Cladding</p>
            </div>

            {/* Galvanised Iron */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <img
                  src={GalvanisedIronImage}
                  alt="Galvanised Iron Jacket/Cladding"
                  className="w-full h-32 object-contain rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Galvanised Iron (GI)
              </h3>
              <p className="text-gray-600">Jacket/Cladding</p>
            </div>

            {/* HDPE */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <img
                  src={PreInsulatedPipeImage}
                  alt="HDPE Jacket/Cladding"
                  className="w-full h-32 object-contain rounded"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">HDPE</h3>
              <p className="text-gray-600">Jacket/Cladding</p>
            </div>
          </div>
        </section>

        {/* Cross Section and Technical Details */}

        {/* Cross Section Details */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Cross Section of SPIRE Multilayered Insulation
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Polyurethane Foam Section */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Polyurethane Foam (PU Foam)
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  spire uses low thermal conductivity and high compressive
                  strength PU foam. PU foam can be used as a stand-alone
                  insulation (temperatures below 284°F (140°C), or as an outer
                  layer in a composite insulation system. This combination
                  results in high quality, low cost, energy-efficient piping
                  insulation solution for high temperature above ground piping
                  systems.
                </p>
              </div>

              {/* Calcium-Silicate Section */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Calcium- Silicate & PU
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  spire uses both Calcium-silicate and PU insulations which have
                  excellent compressive strength properties and is suitable for
                  high temperature application.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-white">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Key Features & Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌡️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Thermal Efficiency
                </h3>
                <p className="text-blue-100">
                  Low thermal conductivity for maximum energy savings
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💪</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">High Strength</h3>
                <p className="text-blue-100">
                  Excellent compressive strength properties
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Versatile Application
                </h3>
                <p className="text-blue-100">
                  Suitable for various temperature ranges
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PipeInsulationInterface;
