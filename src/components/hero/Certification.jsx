// import React, { useState, useEffect } from "react";

// const CertificationsCarousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAutoScrolling, setIsAutoScrolling] = useState(true);

//   const certifications = [
//     {
//       id: 1,
//       name: "ETL Listed - Intertek",
//       logo: "https://webvortexsolutions.com/Spire%20Airtech/images/awards/1.webp",
//       alt: "ETL Listed certification by Intertek",
//     },
//     {
//       id: 2,
//       name: "ISO 9001:2015 Certified Company",
//       logo: "https://webvortexsolutions.com/Spire%20Airtech/images/awards/2.webp",
//       alt: "ISO 9001:2015 quality management certification",
//     },
//     {
//       id: 3,
//       name: "Innovative Bi-Analysis",
//       logo: "https://webvortexsolutions.com/Spire%20Airtech/images/awards/3.webp",
//       alt: "Innovative Bi-Analysis certification",
//     },
//     {
//       id: 4,
//       name: "AHRI Certified",
//       logo: "https://webvortexsolutions.com/Spire%20Airtech/images/awards/4.webp",
//       alt: "AHRI (Air-Conditioning, Heating, and Refrigeration Institute) certification",
//     },
//     {
//       id: 5,
//       name: "CBRI Certified",
//       logo: "https://webvortexsolutions.com/Spire%20Airtech/images/awards/5.webp",
//       alt: "CBRI (Central Building Research Institute) certification",
//     },
//     {
//       id: 6,
//       name: "CBRI Certified",
//       logo: "https://webvortexsolutions.com/Spire%20Airtech/images/awards/6.webp",
//       alt: "CBRI (Central Building Research Institute) certification",
//     },
//   ];

//   const totalSlides = Math.ceil(certifications.length / 3);

//   useEffect(() => {
//     if (!isAutoScrolling) return;

//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % totalSlides);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [totalSlides, isAutoScrolling]);

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//     setIsAutoScrolling(false);
//     // Resume auto-scrolling after 10 seconds of inactivity
//     setTimeout(() => setIsAutoScrolling(true), 10000);
//   };

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % totalSlides);
//     setIsAutoScrolling(false);
//     setTimeout(() => setIsAutoScrolling(true), 10000);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
//     setIsAutoScrolling(false);
//     setTimeout(() => setIsAutoScrolling(true), 10000);
//   };

//   const getCurrentCertifications = () => {
//     const startIndex = currentSlide * 3;
//     return certifications.slice(startIndex, startIndex + 3);
//   };

//   return (
//     <section
//       className="w-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 py-12 px-4"
//       aria-label="Company Certifications"
//       role="region"
//     >
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
//           {/* Title Section */}
//           <div className="flex-shrink-0">
//             <h2 className="text-white text-3xl lg:text-4xl font-bold mb-2">
//               Certifications
//             </h2>
//             <div className="w-16 h-1 bg-white rounded-full"></div>
//           </div>

//           {/* Certifications Display */}
//           <div className="flex-1 max-w-4xl">
//             <div className="relative overflow-hidden">
//               {/* Certifications Container */}
//               <div
//                 className="flex transition-transform duration-500 ease-in-out"
//                 style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//               >
//                 {Array.from({ length: totalSlides }).map((_, slideIndex) => (
//                   <div key={slideIndex} className="w-full flex-shrink-0">
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
//                       {certifications
//                         .slice(slideIndex * 3, slideIndex * 3 + 3)
//                         .map((cert) => (
//                           <div
//                             key={cert.id}
//                             className="flex flex-col items-center justify-center bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-20 transition-all duration-300 min-h-32"
//                           >
//                             <div className="w-24 h-16 bg-white rounded-lg flex items-center justify-center mb-3 shadow-lg">
//                               <img
//                                 src={cert.logo}
//                                 alt={cert.alt}
//                                 className="max-w-20 max-h-12 object-contain"
//                                 loading="lazy"
//                               />
//                             </div>
//                             <h3 className="text-white text-sm font-medium text-center leading-tight">
//                               {cert.name}
//                             </h3>
//                           </div>
//                         ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Navigation Arrows - Hidden on mobile */}
//               <div className="hidden md:block">
//                 <button
//                   onClick={prevSlide}
//                   className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-200"
//                   aria-label="Previous certifications"
//                 >
//                   {/* <svg
//                     className="w-6 h-6 text-white"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M15 19l-7-7 7-7"
//                     />
//                   </svg> */}
//                   &lt;
//                 </button>
//                 <button
//                   onClick={nextSlide}
//                   className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-200"
//                   aria-label="Next certifications"
//                 >
//                   {/* <svg
//                     className="w-6 h-6 text-white"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M9 5l7 7-7 7"
//                     />
//                   </svg> */}
//                   &gt;
//                 </button>
//               </div>
//             </div>

//             {/* Pagination Dots */}
//             <div className="flex justify-center mt-8 space-x-2">
//               {Array.from({ length: totalSlides }).map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => goToSlide(index)}
//                   className={`w-3 h-3 rounded-full transition-all duration-200 ${
//                     index === currentSlide
//                       ? "bg-white scale-110"
//                       : "bg-white bg-opacity-50 hover:bg-opacity-75"
//                   }`}
//                   aria-label={`Go to slide ${index + 1}`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* SEO Content */}
//         <div className="sr-only">
//           <h3>Our Certifications Include:</h3>
//           <ul>
//             {certifications.map((cert) => (
//               <li key={cert.id}>{cert.name}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CertificationsCarousel;

import React, { useState, useEffect } from "react";
import FooterImage from "../../assets/FooterImage.png";

const CertificationsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  const certifications = [
    {
      id: 1,
      name: "ETL Listed - Intertek",
      logo: "https://webvortexsolutions.com/Spire%20Airtech/images/awards/1.webp",
      alt: "ETL Listed certification by Intertek",
    },
    {
      id: 2,
      name: "ISO 9001:2015 Certified Company",
      logo: "https://webvortexsolutions.com/Spire%20Airtech/images/awards/2.webp",
      alt: "ISO 9001:2015 quality management certification",
    },
    {
      id: 3,
      name: "Innovative Bi-Analysis",
      logo: "https://webvortexsolutions.com/Spire%20Airtech/images/awards/3.webp",
      alt: "Innovative Bi-Analysis certification",
    },
    {
      id: 4,
      name: "AHRI Certified",
      logo: "https://webvortexsolutions.com/Spire%20Airtech/images/awards/4.webp",
      alt: "AHRI certification",
    },
    {
      id: 5,
      name: "CBRI Certified",
      logo: "https://webvortexsolutions.com/Spire%20Airtech/images/awards/5.webp",
      alt: "CBRI certification",
    },
    {
      id: 6,
      name: "CBRI Certified",
      logo: "https://webvortexsolutions.com/Spire%20Airtech/images/awards/6.webp",
      alt: "CBRI certification",
    },
  ];

  const totalSlides = certifications.length - 1;

  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1 > totalSlides - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoScrolling, totalSlides]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1 > totalSlides - 1 ? 0 : prev + 1));
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 < 0 ? totalSlides - 1 : prev - 1));
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 10000);
  };

  return (
    <section
      className="w-full bg-white py-12 px-4"
      aria-label="Company Certifications"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6">
        {/* Left Sidebar Title */}
        <div
          style={{
            backgroundImage: `url(${FooterImage})`,
          }}
          className="bg-blue-600 text-white w-full md:w-[350px] md:h-[200px] flex flex-col items-center justify-center py-10 relative"
        >
          <h2 className="text-3xl font-semibold">Certifications</h2>
          {/* <div className="w-16 h-1 mt-2 bg-white"></div> */}
          <div className="flex justify-center lg:justify-start mt-4">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
              </div>
              <div className="w-20 h-1 bg-white rounded-4xl"></div>
            </div>
          </div>
        </div>

        {/* Carousel Content */}
        <div className="relative flex-1 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * (100 / 3)}%)`,
              width: `${certifications.length * (100 / 3)}%`,
            }}
          >
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="w-1/4 flex-shrink-0 flex flex-col items-center justify-center"
              >
                <img
                  src={cert.logo}
                  alt={cert.alt}
                  className="h-24 md:h-44 object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black bg-white rounded-full shadow px-2"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black bg-white rounded-full shadow px-2"
          >
            ❯
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-1">
            {certifications
              .slice(0, certifications.length - 1)
              .map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full ${
                    index === currentSlide
                      ? "bg-black"
                      : "bg-gray-400 hover:bg-black"
                  }`}
                ></button>
              ))}
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${FooterImage})`,
          }}
          className="bg-blue-600 text-blue-600 w-full md:w-[280px] md:h-[200px] flex flex-col items-center justify-center py-10 relative"
        >
          <div className="w-16 h-1 mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsCarousel;
