import React from "react";
import { useNavigate } from "react-router-dom";
import AboutImage from "../../assets/AboutImage.jpeg";

export default function AboutSection() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      {/* <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-xl font-semibold text-gray-800">
            Best HVAC Manufacturing Company
          </h1>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Blue accent bar */}
              <div className="absolute -left-4 sm:-left-6 lg:-left-8 top-0 w-16 sm:w-20 lg:w-24 h-32 sm:h-40 lg:h-48 bg-blue-500 rounded-r-lg"></div>

              {/* Main image container */}
              <div className="relative z-10 bg-white p-3 sm:p-4 rounded-lg shadow-lg">
                <img
                  src={AboutImage}
                  alt="Zeco Aircon manufacturing facility aerial view showing modern industrial complex with buildings and facilities"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg"
                />
              </div>

              {/* Bottom blue accent */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 lg:-right-8 w-32 sm:w-40 lg:w-48 h-16 sm:h-20 lg:h-24 bg-blue-500 rounded-l-lg"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2 space-y-6 lg:space-y-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              {/* <h1 className="text-xl font-semibold text-gray-800">
                Best HVAC Manufacturing Company
              </h1> */}
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 lg:mb-6">
                About Us
              </h2>
              <p className="text-xl font-medium text-gray-800 leading-relaxed mb-5">
                Top HVAC Manufacturing, Projects, and Services Company
              </p>

              <p className="text-xl text-gray-800 leading-relaxed">
                Spire AirTech Pvt. Ltd. is a fast-growing HVAC solutions
                provider, offering end-to-end services across India. Founded
                with a vision to deliver performance-driven air solutions, we
                specialize in VRF/VRV projects, ventilation & exhaust systems,
                chillers, AMC, and retrofitting of HVAC systems for industrial,
                commercial, hospitality, educational, and residential sectors.
              </p>
            </div>

            <div className="space-y-4 lg:space-y-6">
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                What sets us apart is our deep commitment to quality, technical
                excellence, and timely delivery. From precise design to flawless
                execution, every project is powered by a passionate team of
                engineers, designers, and technicians with hands-on expertise in
                the HVAC domain.
              </p>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                We’re not just a contractor — we’re your project partner. Our
                strength lies in understanding each site’s unique requirements
                and delivering custom solutions that meet performance, budget,
                and sustainability goals.
              </p>
            </div>

            <div className="pt-4">
              <button
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer"
                onClick={() => navigate("/contact-us")}
                aria-label="Learn more about Spire AirTech"
              >
                <span className="mr-2">Know More</span>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* SEO structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Spire AirTech",
            description:
              "Leading HVAC and Air distribution solution provider in India since 2025",
            foundingDate: "2025",
            industry: "HVAC Manufacturing",
            location: {
              "@type": "Place",
              addressCountry: "India",
            },
            numberOfEmployees: "1000+",
            yearsSinceEstablished: 34,
          }),
        }}
      />
    </div>
  );
}
