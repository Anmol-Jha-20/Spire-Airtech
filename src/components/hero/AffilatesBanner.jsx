import React from "react";
import FooterImage from "../../assets/FooterImage.png";

const AffiliatesBanner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${FooterImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        position: "relative",
        overflow: "hidden",
      }}
      className="w-full bg-gradient-to-r from-blue-600 to-blue-500 py-8 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Section - Our Affiliates */}
          <div className="text-center lg:text-left">
            <h1 className="text-white font-medium text-3xl sm:text-4xl lg:text-5xl tracking-wide">
              Our
            </h1>
            <h2 className="text-white font-medium text-3xl sm:text-4xl lg:text-5xl tracking-wide mt-1">
              Affiliates
            </h2>
            <div className="flex justify-center lg:justify-start mt-4">
              <div className="flex items-center gap-2">
                <div className="w-20 h-1 bg-white rounded-4xl"></div>
                <div className="flex gap-1">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Company Logos */}
          <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
            {/* Purafil Logo */}
            <div className="flex items-center bg-white rounded-lg px-6 py-4 shadow-lg min-w-[280px] sm:min-w-[300px]">
              <div className="flex items-center gap-3">
                {/* Purafil Icon */}
                <div className="relative">
                  <div className="w-12 h-12 relative">
                    {/* Circular pattern made with dots */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="grid grid-cols-6 gap-0.5 w-10 h-10">
                        {[...Array(36)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-1 h-1 rounded-full ${
                              i < 18 ? "bg-green-500" : "bg-blue-500"
                            }`}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-blue-600 text-2xl font-normal">
                    purafil
                  </div>
                  <div className="text-gray-600 text-sm">Filtration Group</div>
                  <div className="text-xs text-gray-400">®</div>
                </div>
              </div>
            </div>

            {/* Ygar Group Logo */}
            <div className="flex items-center bg-white rounded-lg px-6 py-4 shadow-lg min-w-[200px]">
              <div className="flex items-center px-7 py-5 gap-3">
                {/* Ygar Icon - Colorful abstract design */}
                <div className="w-8 h-8 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-6 h-6 bg-gradient-to-br from-red-500 via-yellow-500 to-green-500 rounded-full"></div>
                    <div className="absolute top-0 right-0 w-3 h-3 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="text-gray-800 text-xl font-semibold">
                    YGAR GROUP
                  </div>
                </div>
              </div>
            </div>

            {/* Second Purafil Logo */}
            <div className="flex items-center bg-white rounded-lg px-6 py-4 shadow-lg min-w-[280px] sm:min-w-[300px]">
              <div className="flex items-center gap-3">
                {/* Purafil Icon */}
                <div className="relative">
                  <div className="w-12 h-12 relative">
                    {/* Circular pattern made with dots */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="grid grid-cols-6 gap-0.5 w-10 h-10">
                        {[...Array(36)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-1 h-1 rounded-full ${
                              i < 18 ? "bg-green-500" : "bg-blue-500"
                            }`}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-blue-600 text-2xl font-normal">
                    purafil
                  </div>
                  <div className="text-gray-600 text-sm">Filtration Group</div>
                  <div className="text-xs text-gray-400">®</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliatesBanner;
