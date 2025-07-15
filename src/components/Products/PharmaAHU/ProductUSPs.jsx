import React from "react";
import {
  Shield,
  Award,
  Zap,
  CheckCircle,
  Lightbulb,
  BarChart3,
} from "lucide-react";

const TempProductUSPs = ({
  heading,
  icon1,
  title1,
  description1,
  icon2,
  title2,
  description2,
  icon3,
  title3,
  description3,
  icon4,
  title4,
  description4,
  icon5,
  title5,
  description5,
  icon6,
  title6,
  description6,
}) => {
  const uspData = [
    {
      icon: icon1,
      title: title1,
      description: description1,
      delay: 0.1,
    },
    {
      icon: icon2,
      title: title2,
      description: description2,
      delay: 0.2,
    },
    {
      icon: icon3,
      title: title3,
      description: description3,
      delay: 0.3,
    },
    {
      icon: icon4,
      title: title4,
      description: description4,
      delay: 0.4,
    },
    {
      icon: icon5,
      title: title5,
      description: description5,
      delay: 0.5,
    },
    {
      icon: icon6,
      title: title6,
      description: description6,
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
          {heading}
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
    </div>
  );
};

export default TempProductUSPs;
