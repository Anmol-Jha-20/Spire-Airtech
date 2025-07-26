// import React, { useState, useEffect } from "react";
// import FooterImage from "../../assets/FooterImage.png";
// import CertificationOne from "../../assets/certificationOne.png";
// import CertificationFour from "../../assets/certificationFour.png";

// const CertificationsCarousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAutoScrolling, setIsAutoScrolling] = useState(true);

//   const certifications = [
//     {
//       id: 1,
//       name: "ETL Listed - Intertek",
//       logo: CertificationOne,
//       alt: "ETL Listed certification by Intertek",
//     },
//     {
//       id: 2,
//       name: "ISO 9001:2015 Certified Company",
//       logo: CertificationFour,
//       alt: "ISO 9001:2015 quality management certification",
//     },
//     // {
//     //   id: 3,
//     //   name: "Innovative Bi-Analysis",
//     //   logo: CertificationThree,
//     //   alt: "Innovative Bi-Analysis certification",
//     // },
//     // {
//     //   id: 4,
//     //   name: "AHRI Certified",
//     //   logo: "https://webvortexsolutions.com/Spire%20Airtech/images/awards/4.webp",
//     //   alt: "AHRI certification",
//     // },
//     // {
//     //   id: 5,
//     //   name: "CBRI Certified",
//     //   logo: "https://webvortexsolutions.com/Spire%20Airtech/images/awards/5.webp",
//     //   alt: "CBRI certification",
//     // },
//     // {
//     //   id: 6,
//     //   name: "CBRI Certified",
//     //   logo: "https://webvortexsolutions.com/Spire%20Airtech/images/awards/6.webp",
//     //   alt: "CBRI certification",
//     // },
//   ];

//   const totalSlides = certifications.length - 1;

//   useEffect(() => {
//     if (!isAutoScrolling) return;

//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1 > totalSlides - 1 ? 0 : prev + 1));
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [isAutoScrolling, totalSlides]);

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//     setIsAutoScrolling(false);
//     setTimeout(() => setIsAutoScrolling(true), 10000);
//   };

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1 > totalSlides - 1 ? 0 : prev + 1));
//     setIsAutoScrolling(false);
//     setTimeout(() => setIsAutoScrolling(true), 10000);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 < 0 ? totalSlides - 1 : prev - 1));
//     setIsAutoScrolling(false);
//     setTimeout(() => setIsAutoScrolling(true), 10000);
//   };

//   return (
//     <section
//       className="w-full bg-white py-12 px-4"
//       aria-label="Company Certifications"
//     >
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6">
//         {/* Left Sidebar Title */}
//         <div
//           style={{
//             backgroundImage: `url(${FooterImage})`,
//           }}
//           className="bg-blue-600 text-white w-full md:w-[350px] md:h-[200px] flex flex-col items-center justify-center py-10 relative"
//         >
//           <h2 className="text-3xl font-semibold">Certifications</h2>
//           {/* <div className="w-16 h-1 mt-2 bg-white"></div> */}
//           <div className="flex justify-center lg:justify-start mt-4">
//             <div className="flex items-center gap-2">
//               <div className="flex gap-1">
//                 <div className="w-1 h-1 bg-white rounded-full"></div>
//                 <div className="w-1 h-1 bg-white rounded-full"></div>
//                 <div className="w-1 h-1 bg-white rounded-full"></div>
//               </div>
//               <div className="w-20 h-1 bg-white rounded-4xl"></div>
//             </div>
//           </div>
//         </div>

//         {/* Carousel Content */}
//         <div className="relative flex-1 overflow-hidden">
//           <div
//             className="flex transition-transform duration-500 ease-in-out"
//             style={{
//               transform: `translateX(-${currentSlide * (100 / 3)}%)`,
//               width: `${certifications.length * (100 / 3)}%`,
//             }}
//           >
//             {certifications.map((cert) => (
//               <div
//                 key={cert.id}
//                 className="w-1/2 flex-shrink-0 flex flex-col items-center justify-center"
//               >
//                 <img
//                   src={cert.logo}
//                   alt={cert.alt}
//                   className="h-24 md:h-44 object-contain"
//                   loading="lazy"
//                 />
//               </div>
//             ))}
//           </div>

//           {/* Arrows */}
//           {/* <button
//             onClick={prevSlide}
//             className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black bg-white rounded-full shadow px-2"
//           >
//             ❮
//           </button>
//           <button
//             onClick={nextSlide}
//             className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black bg-white rounded-full shadow px-2"
//           >
//             ❯
//           </button> */}

//           {/* Dots */}
//           {/* <div className="flex justify-center mt-6 space-x-1">
//             {certifications
//               .slice(0, certifications.length - 1)
//               .map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => goToSlide(index)}
//                   className={`w-2 h-2 rounded-full ${
//                     index === currentSlide
//                       ? "bg-black"
//                       : "bg-gray-400 hover:bg-black"
//                   }`}
//                 ></button>
//               ))}
//           </div> */}
//         </div>
//         <div
//           style={{
//             backgroundImage: `url(${FooterImage})`,
//           }}
//           className="bg-blue-600 text-blue-600 w-full md:w-[280px] md:h-[200px] flex flex-col items-center justify-center py-10 relative"
//         >
//           <div className="w-16 h-1 mt-2"></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CertificationsCarousel;

// import React from "react";
// import FooterImage from "../../assets/FooterImage.png";
// import CertificationOne from "../../assets/certificationOne.png";
// import CertificationFour from "../../assets/certificationFour.png";

// const CertificationsCarousel = () => {
//   const certifications = [
//     {
//       id: 1,
//       name: "ETL Listed - Intertek",
//       logo: CertificationOne,
//       alt: "ETL Listed certification by Intertek",
//     },
//     {
//       id: 2,
//       name: "ISO 9001:2015 Certified Company",
//       logo: CertificationFour,
//       alt: "ISO 9001:2015 quality management certification",
//     },
//   ];

//   return (
//     <section
//       className="w-full bg-white py-12 px-4"
//       aria-label="Company Certifications"
//     >
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6">
//         {/* Left Title Block */}
//         <div
//           className="bg-blue-600 text-white w-full md:w-[350px] h-[200px] flex flex-col items-center justify-center py-10 relative bg-cover bg-center"
//           style={{ backgroundImage: `url(${FooterImage})` }}
//         >
//           <h2 className="text-3xl font-semibold">Certifications</h2>
//           <div className="flex justify-center mt-4">
//             <div className="flex items-center gap-2">
//               <div className="flex gap-1">
//                 <div className="w-1 h-1 bg-white rounded-full"></div>
//                 <div className="w-1 h-1 bg-white rounded-full"></div>
//                 <div className="w-1 h-1 bg-white rounded-full"></div>
//               </div>
//               <div className="w-20 h-1 bg-white rounded-full"></div>
//             </div>
//           </div>
//         </div>

//         {/* Static Certification Logos */}
//         <div className="flex flex-1 justify-center gap-8 flex-wrap w-full">
//           {certifications.map((cert) => (
//             <div
//               key={cert.id}
//               className="flex flex-col items-center justify-center"
//             >
//               <img
//                 src={cert.logo}
//                 alt={cert.alt}
//                 className="h-24 md:h-44 object-contain"
//                 loading="lazy"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Right Transparent Spacer Block */}
//         <div
//           className="bg-blue-600 w-full md:w-[280px] h-[200px] py-10 bg-cover bg-center"
//           style={{ backgroundImage: `url(${FooterImage})` }}
//         ></div>
//       </div>
//     </section>
//   );
// };

// export default CertificationsCarousel;

import React, { useState } from "react";
import FooterImage from "../../assets/FooterImage.png";
import CertificationOne from "../../assets/certificationFive.png";
import CertificationFour from "../../assets/certificationFour.png";

const CertificationsCarousel = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const certifications = [
    {
      id: 1,
      name: "ETL Listed - Intertek",
      logo: CertificationOne,
      alt: "ETL Listed certification by Intertek",
    },
    {
      id: 2,
      name: "ISO 9001:2015 Certified Company",
      logo: CertificationFour,
      alt: "ISO 9001:2015 quality management certification",
    },
  ];

  return (
    <section
      className="w-full bg-white py-12 px-4"
      aria-label="Company Certifications"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6">
        {/* Left Title */}
        <div
          className="bg-blue-600 text-white w-full md:w-[350px] h-[200px] flex flex-col items-center justify-center py-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${FooterImage})` }}
        >
          <h2 className="text-3xl font-semibold">Certifications</h2>
          <div className="flex justify-center mt-4">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
              </div>
              <div className="w-20 h-1 bg-white rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Certification Images */}
        <div className="flex flex-1 justify-center gap-8 flex-wrap w-full">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="flex flex-col items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => setSelectedImage(cert)}
            >
              <img
                src={cert.logo}
                alt={cert.alt}
                className="h-24 md:h-72 object-contain shadow-md rounded-md"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Right Blank Block */}
        <div
          className="bg-blue-600 w-full md:w-[280px] h-[200px] py-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${FooterImage})` }}
        ></div>
      </div>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full flex items-center justify-center px-4">
            <button
              className="absolute top-2 right-2 text-white text-2xl font-bold hover:text-red-500"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <img
              src={selectedImage.logo}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-xl"
            />
            {/* <p className="text-center text-white mt-4 text-lg font-semibold">
              {selectedImage.name}
            </p> */}
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificationsCarousel;
