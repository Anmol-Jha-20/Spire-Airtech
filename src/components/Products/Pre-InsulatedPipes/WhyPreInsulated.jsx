import React from "react";

const WhyPreInsulatedPipe = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Content Section */}
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-800 leading-tight">
              Why spire Pre-Insulated Pipe?
            </h1>

            <div className="space-y-6">
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                spire provides PIP in variety of insulation and jacket materials
                for high performance:
              </p>

              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-gray-800">
                        Jacket:
                      </span>
                      <span className="text-gray-700 ml-1">
                        HDPE, Aluminum, Stainless Steel and Galvanised Iron.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-gray-800">
                        Insulation:
                      </span>
                      <span className="text-gray-700 ml-1">
                        PU Foam, Calcium Silicate & PU
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                The pipe is directly supporting jacket, which eliminates the
                need to breach the jacket. Thus, the potential for ingress of
                water and moisture is reduced which prevents heating and cooling
                losses.
              </p>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                spire can also provide the heat tracing for freeze protection or
                temperature maintenance resulting in greater overall savings, as
                the heat tube is attached and insulated in the factory.
              </p>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="lg:pl-8">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1707596830261-9c6138a6dd3b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="spire Pre-Insulated Pipe Installation"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
                style={{ aspectRatio: "4/3" }}
              />

              {/* Optional overlay for better text visibility if needed */}
              {/* <div className="absolute inset-0 bg-black bg-opacity-10 rounded-lg"></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyPreInsulatedPipe;
