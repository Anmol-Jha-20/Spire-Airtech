// import React from "react";

// const TestimonialsSection = () => {
//   const testimonials = [
//     {
//       id: 1,
//       name: "Dipti Tibrewal",
//       position: "Director - Ace Alliance",
//       rating: 5,
//       testimonial:
//         "We have been using ZECO products including AHU's, FCU's and prefabricated ducting for the last 6-7 years. We are very satisfied with their products and services.",
//       logo: "ACE", // Placeholder for ACE Alliance logo
//       logoStyle: "bg-black text-white",
//     },
//     {
//       id: 2,
//       name: "Rajiv Gupta",
//       position: "Director - Unique Solution",
//       rating: 5,
//       testimonial:
//         "The quality of the products manufactured by ZECO has been found to be good and at par with the requirements of the normal practice of the trade & customer satisfaction.",
//       logo: "UNIQUE", // Placeholder for Unique Solution logo
//       logoStyle: "bg-blue-600 text-white",
//     },
//   ];

//   const StarRating = ({ rating }) => {
//     return (
//       <div
//         className="flex justify-center mb-6"
//         role="img"
//         aria-label={`${rating} out of 5 stars`}
//       >
//         {[...Array(5)].map((_, index) => (
//           <svg
//             key={index}
//             className={`w-5 h-5 ${
//               index < rating ? "text-yellow-400" : "text-gray-300"
//             }`}
//             fill="currentColor"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//           </svg>
//         ))}
//       </div>
//     );
//   };

//   const TestimonialCard = ({ testimonial }) => {
//     return (
//       <article className="bg-white rounded-lg shadow-lg p-8 relative max-w-md mx-auto h-full flex flex-col">
//         {/* Quote Icon */}
//         <div className="absolute -top-4 right-6 bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold">
//           "
//         </div>

//         {/* Company Logo Placeholder */}
//         <div className="flex justify-center mb-6">
//           <div
//             className={`${testimonial.logoStyle} rounded-full w-16 h-16 flex items-center justify-center text-sm font-bold`}
//           >
//             {testimonial.logo}
//           </div>
//         </div>

//         {/* Client Name */}
//         <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
//           {testimonial.name}
//         </h3>

//         {/* Position */}
//         <p className="text-gray-600 text-center mb-4">{testimonial.position}</p>

//         {/* Star Rating */}
//         <StarRating rating={testimonial.rating} />

//         {/* Testimonial Text */}
//         <blockquote className="text-gray-700 text-center leading-relaxed flex-grow">
//           "{testimonial.testimonial}"
//         </blockquote>
//       </article>
//     );
//   };

//   return (
//     <section
//       className="py-16 px-4 bg-gray-50"
//       aria-labelledby="testimonials-heading"
//     >
//       <div className="max-w-6xl mx-auto">
//         {/* Section Header */}
//         <header className="text-center mb-12">
//           <h2
//             id="testimonials-heading"
//             className="text-4xl md:text-5xl font-bold text-blue-600 mb-4"
//           >
//             Testimonials
//           </h2>
//           <div className="flex justify-center items-center space-x-2">
//             <div className="w-8 h-0.5 bg-blue-600"></div>
//             <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
//             <div className="w-8 h-0.5 bg-blue-600"></div>
//           </div>
//         </header>

//         {/* Testimonials Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
//           {testimonials.map((testimonial) => (
//             <TestimonialCard key={testimonial.id} testimonial={testimonial} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;

// import React, { useState, useEffect } from "react";

// const TestimonialsSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const testimonials = [
//     {
//       id: 1,
//       name: "Dipti Tibrewal",
//       position: "Director - Ace Alliance",
//       rating: 5,
//       testimonial:
//         "We have been using ZECO products including AHU's, FCU's and prefabricated ducting for the last 6-7 years. We are very satisfied with their products and services.",
//       logo: "ACE", // Placeholder for ACE Alliance logo
//       logoStyle: "bg-black text-white",
//     },
//     {
//       id: 2,
//       name: "Rajiv Gupta",
//       position: "Director - Unique Solution",
//       rating: 5,
//       testimonial:
//         "The quality of the products manufactured by ZECO has been found to be good and at par with the requirements of the normal practice of the trade & customer satisfaction.",
//       logo: "UNIQUE", // Placeholder for Unique Solution logo
//       logoStyle: "bg-blue-600 text-white",
//     },
//     {
//       id: 3,
//       name: "Vikas Kapoor",
//       position: "Managing Director - MH Air",
//       rating: 5,
//       testimonial:
//         "We have been using ZECO manufactured products since the last 8+ years and are very satisfied with the product quality, delivery, performance, and after-sales services.",
//       logo: "MH", // Placeholder for MH Air logo
//       logoStyle: "bg-blue-500 text-white border-2 border-blue-700",
//     },
//   ];

//   const slides = [
//     [testimonials[0], testimonials[1]], // Slide 1: Dipti + Rajiv
//     [testimonials[1], testimonials[2]], // Slide 2: Rajiv + Vikas
//   ];

//   // Auto scroll effect
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     }, 4000); // Change every 4 seconds

//     return () => clearInterval(interval);
//   }, [slides.length]);

//   const StarRating = ({ rating }) => {
//     return (
//       <div
//         className="flex justify-center mb-6"
//         role="img"
//         aria-label={`${rating} out of 5 stars`}
//       >
//         {[...Array(5)].map((_, index) => (
//           <svg
//             key={index}
//             className={`w-5 h-5 ${
//               index < rating ? "text-yellow-400" : "text-gray-300"
//             }`}
//             fill="currentColor"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//           </svg>
//         ))}
//       </div>
//     );
//   };

//   const TestimonialCard = ({ testimonial }) => {
//     return (
//       <article className="bg-white rounded-lg shadow-lg p-8 relative max-w-md mx-auto h-full flex flex-col">
//         {/* Quote Icon */}
//         <div className="absolute -top-4 right-6 bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold">
//           "
//         </div>

//         {/* Company Logo Placeholder */}
//         <div className="flex justify-center mb-6">
//           <div
//             className={`${testimonial.logoStyle} rounded-full w-16 h-16 flex items-center justify-center text-sm font-bold`}
//           >
//             {testimonial.logo}
//           </div>
//         </div>

//         {/* Client Name */}
//         <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
//           {testimonial.name}
//         </h3>

//         {/* Position */}
//         <p className="text-gray-600 text-center mb-4">{testimonial.position}</p>

//         {/* Star Rating */}
//         <StarRating rating={testimonial.rating} />

//         {/* Testimonial Text */}
//         <blockquote className="text-gray-700 text-center leading-relaxed flex-grow">
//           "{testimonial.testimonial}"
//         </blockquote>
//       </article>
//     );
//   };

//   return (
//     <section
//       className="py-16 px-4 bg-gray-50"
//       aria-labelledby="testimonials-heading"
//     >
//       <div className="max-w-6xl mx-auto">
//         {/* Section Header */}
//         <header className="text-center mb-12">
//           <h2
//             id="testimonials-heading"
//             className="text-4xl md:text-5xl font-bold text-blue-600 mb-4"
//           >
//             Testimonials
//           </h2>
//           <div className="flex justify-center items-center space-x-2">
//             <div className="w-8 h-0.5 bg-blue-600"></div>
//             <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
//             <div className="w-8 h-0.5 bg-blue-600"></div>
//           </div>
//         </header>

//         {/* Testimonials Carousel */}
//         <div className="relative overflow-hidden">
//           <div
//             className="flex transition-transform duration-1000 ease-in-out"
//             style={{
//               transform: `translateX(-${currentIndex * 100}%)`,
//               width: `${slides.length * 100}%`,
//             }}
//           >
//             {slides.map((slide, index) => (
//               <div key={index} className="w-full flex-shrink-0">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 px-4">
//                   <TestimonialCard testimonial={slide[0]} />
//                   <TestimonialCard testimonial={slide[1]} />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Pagination Dots */}
//         <div className="flex justify-center mt-8 space-x-2">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentIndex(index)}
//               className={`w-3 h-3 rounded-full transition-colors duration-300 ${
//                 index === currentIndex ? "bg-blue-600" : "bg-gray-300"
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;

import React, { useState, useEffect } from "react";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Dipti Tibrewal",
      position: "Director - Ace Alliance",
      rating: 5,
      testimonial:
        "We have been using Spire AirTech products including AHU's, FCU's and prefabricated ducting for the last 6-7 years. We are very satisfied with their products and services.",
      logo: "ACE",
      logoStyle: "bg-black text-white",
    },
    {
      id: 2,
      name: "Rajiv Gupta",
      position: "Director - Unique Solution",
      rating: 5,
      testimonial:
        "The quality of the products manufactured by Spire AirTech has been found to be good and at par with the requirements of the normal practice of the trade & customer satisfaction.",
      logo: "UNIQUE",
      logoStyle: "bg-blue-600 text-white",
    },
    {
      id: 3,
      name: "Vikas Kapoor",
      position: "Managing Director - MH Air",
      rating: 5,
      testimonial:
        "We have been using Spire AirTech manufactured products since the last 8+ years and are very satisfied with the product quality, delivery, performance, and after-sales services.",
      logo: "MH",
      logoStyle: "bg-blue-500 text-white border-2 border-blue-700",
    },
  ];

  const slides = [
    [testimonials[0], testimonials[1]], // Dipti + Rajiv
    [testimonials[1], testimonials[2]], // Rajiv + Vikas
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const StarRating = ({ rating }) => (
    <div className="flex justify-center mb-6">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 mx-0.5 ${
            index < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  const TestimonialCard = ({ testimonial }) => (
    <article className="bg-white rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.08)] p-8 relative max-w-md mx-auto h-full flex flex-col">
      {/* Quote Icon */}
      <div className="absolute -top-4 -right-0 w-20 h-20 bg-blue-500 rounded-bl-full flex items-center justify-center">
        <span className="text-white text-2xl font-bold">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios-glyphs/30/quote-left.png"
            alt="quote-left"
          />
        </span>
      </div>

      {/* Company Logo */}
      <div className="flex justify-center mb-6 mt-6">
        <div
          className={`${testimonial.logoStyle} rounded-full w-20 h-20 flex items-center justify-center text-sm font-bold shadow-md`}
        >
          {testimonial.logo}
        </div>
      </div>

      {/* Name and Title */}
      <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">
        {testimonial.name}
      </h3>
      <p className="text-sm text-gray-500 text-center mb-6">
        {testimonial.position}
      </p>

      {/* Stars */}
      <StarRating rating={testimonial.rating} />

      {/* Text */}
      <blockquote className="text-[15px] text-gray-600 text-center leading-relaxed flex-grow px-2">
        "{testimonial.testimonial}"
      </blockquote>
    </article>
  );

  return (
    <section
      className="py-16 px-4 bg-gray-50"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-16">
          <h2
            id="testimonials-heading"
            className="text-5xl font-bold text-blue-600 mb-6"
          >
            Testimonials
          </h2>
          <div className="flex justify-center items-center space-x-2">
            <div className="w-8 h-1 bg-blue-600 rounded"></div>
            <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
            <div className="w-8 h-1 bg-blue-600 rounded"></div>
          </div>
        </header>

        {/* Carousel */}
        {/* <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${slides.length * 100}%`,
            }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 px-4">
                  <TestimonialCard testimonial={slide[0]} />
                  <TestimonialCard testimonial={slide[1]} />
                </div>
              </div>
            ))}
          </div>
        </div> */}

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${slides.length * 100}%`,
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="min-w-full flex justify-center gap-8 px-4"
              >
                <TestimonialCard testimonial={slide[0]} />
                <TestimonialCard testimonial={slide[1]} />
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12 space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-blue-600 scale-110" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
