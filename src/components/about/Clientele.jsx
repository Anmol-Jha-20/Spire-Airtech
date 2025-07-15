// // components/ClienteleSlider.jsx
// import React, { useRef, useEffect } from "react";

// const clienteleData = [
//   {
//     title: "Pharmaceutical & Clean Rooms",
//     img: "https://source.unsplash.com/800x600/?pharmaceutical,laboratory",
//   },
//   {
//     title: "Hospitals & Diagnostics Labs",
//     img: "https://source.unsplash.com/800x600/?hospital,healthcare",
//   },
//   {
//     title: "Corporate Offices & Commercial Buildings",
//     img: "https://source.unsplash.com/800x600/?office,corporate",
//   },
//   {
//     title: "Retail Stores & Shopping Malls",
//     img: "https://source.unsplash.com/800x600/?retail,shopping",
//   },
//   {
//     title: "Schools, Colleges & Universities",
//     img: "https://source.unsplash.com/800x600/?university,classroom",
//   },
//   {
//     title: "Hotels & Hospitality Sector",
//     img: "https://source.unsplash.com/800x600/?hotel,hospitality",
//   },
//   {
//     title: "Warehouses & Logistic Parks",
//     img: "https://source.unsplash.com/800x600/?warehouse,logistics",
//   },
//   {
//     title: "Industrial Manufacturing Plants",
//     img: "https://source.unsplash.com/800x600/?factory,industry",
//   },
//   {
//     title: "IT Parks & Data Centers",
//     img: "https://source.unsplash.com/800x600/?datacenter,technology",
//   },
// ];

// const ClienteleSlider = () => {
//   const scrollRef = useRef(null);

//   useEffect(() => {
//     const container = scrollRef.current;
//     let scrollAmount = 0;

//     const autoScroll = () => {
//       if (container && !container.matches(":hover")) {
//         container.scrollLeft += 1;
//         scrollAmount += 1;
//         if (scrollAmount >= container.scrollWidth / 2) {
//           container.scrollLeft = 0;
//           scrollAmount = 0;
//         }
//       }
//     };

//     const scrollInterval = setInterval(autoScroll, 20);

//     return () => clearInterval(scrollInterval);
//   }, []);

//   return (
//     <section className="w-full bg-gray-50 py-10 px-4">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
//           Our Clientele
//         </h2>

//         <div
//           ref={scrollRef}
//           className="flex gap-6 overflow-x-auto scroll-smooth whitespace-nowrap no-scrollbar"
//         >
//           {[...clienteleData, ...clienteleData].map((item, index) => (
//             <figure
//               key={index}
//               className="relative flex-shrink-0 w-64 h-44 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
//             >
//               <img
//                 src={item.img}
//                 alt={item.title}
//                 className="w-full h-full object-cover"
//                 loading="lazy"
//               />
//               <figcaption className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-sm font-medium text-center py-2 px-1">
//                 {item.title}
//               </figcaption>
//             </figure>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ClienteleSlider;

import React, { useState, useEffect } from "react";
import {
  Building2,
  Hospital,
  Briefcase,
  ShoppingBag,
  GraduationCap,
  Hotel,
  Warehouse,
  Factory,
  Server,
} from "lucide-react";

const ClienteleSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const clienteleData = [
    {
      title: "Pharmaceutical & Clean Rooms",
      icon: <Building2 className="w-8 h-8 text-blue-500" />,
      description:
        "Specialized environments requiring the highest standards of cleanliness and contamination control.",
      gradient: "from-blue-500 to-blue-600",
      image:
        "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80",
    },
    {
      title: "Hospitals & Diagnostics Labs",
      icon: <Hospital className="w-8 h-8 text-red-500" />,
      description:
        "Critical healthcare facilities demanding sterile and safe environments for patient care.",
      gradient: "from-red-500 to-red-600",
      image:
        "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&q=80",
    },
    {
      title: "Corporate Offices & Commercial Buildings",
      icon: <Briefcase className="w-8 h-8 text-gray-600" />,
      description:
        "Professional workspaces designed for productivity and business excellence.",
      gradient: "from-gray-600 to-gray-700",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    },
    {
      title: "Retail Stores & Shopping Malls",
      icon: <ShoppingBag className="w-8 h-8 text-purple-500" />,
      description:
        "Customer-focused environments that enhance shopping experiences and brand presence.",
      gradient: "from-purple-500 to-purple-600",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    },
    {
      title: "Schools, Colleges & Universities",
      icon: <GraduationCap className="w-8 h-8 text-green-500" />,
      description:
        "Educational institutions fostering learning through well-designed infrastructure.",
      gradient: "from-green-500 to-green-600",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
    },
    {
      title: "Hotels & Hospitality Sector",
      icon: <Hotel className="w-8 h-8 text-yellow-500" />,
      description:
        "Luxury accommodations and hospitality venues delivering exceptional guest experiences.",
      gradient: "from-yellow-500 to-yellow-600",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    },
    {
      title: "Warehouses & Logistic Parks",
      icon: <Warehouse className="w-8 h-8 text-orange-500" />,
      description:
        "Efficient storage and distribution facilities optimized for logistics operations.",
      gradient: "from-orange-500 to-orange-600",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    },
    {
      title: "Industrial Manufacturing Plants",
      icon: <Factory className="w-8 h-8 text-indigo-500" />,
      description:
        "Heavy-duty industrial facilities built for manufacturing and production excellence.",
      gradient: "from-indigo-500 to-indigo-600",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    },
    {
      title: "IT Parks & Data Centers",
      icon: <Server className="w-8 h-8 text-cyan-500" />,
      description:
        "Technology hubs and data centers requiring precision cooling and infrastructure.",
      gradient: "from-cyan-500 to-cyan-600",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % clienteleData.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [clienteleData.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % clienteleData.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + clienteleData.length) % clienteleData.length
    );
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Industries <span className="text-blue-600">We Serve</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We proudly serve diverse industries with tailored solutions that
            meet the unique demands of each sector
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Main Carousel */}
        <div className="relative">
          {/* Slides Container */}
          <div className="overflow-hidden rounded-2xl shadow-2xl bg-white">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {clienteleData.map((client, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="relative h-96 md:h-[500px] overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img
                        src={client.image}
                        alt={client.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/40"></div>
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${client.gradient} opacity-20`}
                      ></div>
                    </div>

                    {/* Content Overlay */}
                    <div className="relative z-10 h-full flex items-center justify-center p-8 md:p-12">
                      <div className="text-center max-w-4xl">
                        <div className="mb-6 flex justify-center">
                          <div className="p-4 bg-white/90 backdrop-blur-sm rounded-full shadow-xl">
                            {client.icon}
                          </div>
                        </div>

                        <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                          {client.title}
                        </h3>

                        <p className="text-lg md:text-xl text-white/90 leading-relaxed drop-shadow-md max-w-3xl mx-auto">
                          {client.description}
                        </p>

                        {/* Decorative elements */}
                        <div className="mt-8 flex justify-center space-x-2">
                          <div className="w-12 h-1 bg-white/80 rounded-full"></div>
                          <div className="w-8 h-1 bg-white/60 rounded-full"></div>
                          <div className="w-4 h-1 bg-white/40 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Previous slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Next slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {clienteleData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                index === currentSlide
                  ? "bg-blue-600 w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Bottom Grid Overview */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {clienteleData.map((client, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className={`group relative p-4 rounded-xl transition-all duration-300 cursor-pointer hover:scale-105 overflow-hidden ${
                index === currentSlide
                  ? "bg-blue-50 border-2 border-blue-200 shadow-lg"
                  : "bg-white border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md"
              }`}
            >
              {/* Mini background image */}
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <img
                  src={client.image}
                  alt={client.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="relative z-10 text-center">
                <div className="mb-2 flex justify-center">
                  <div className="p-2 bg-white/90 rounded-lg shadow-sm">
                    {React.cloneElement(client.icon, { className: "w-6 h-6" })}
                  </div>
                </div>
                <h4 className="text-sm font-semibold text-gray-900 leading-tight">
                  {client.title}
                </h4>
              </div>

              {/* Active indicator */}
              {index === currentSlide && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500 rounded-b-xl"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClienteleSlider;
