import React, { useState, useEffect } from "react";

const AnimatedCounter = ({ target, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
      {count.toLocaleString()}
      {suffix}
    </div>
  );
};

const StatCard = ({ value, suffix, label, color, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="text-center p-6">
      <div className="relative">
        <div
          className={`w-3 h-3 rounded-full ${color} absolute -top-2 left-1/2 transform -translate-x-1/2`}
        ></div>
        {isVisible && <AnimatedCounter target={value} suffix={suffix} />}
        <div className="text-gray-500 text-lg font-medium">{label}</div>
      </div>
    </div>
  );
};

export default function ManufacturingShowcase() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO Meta Tags would go in document head */}
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Images Section */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Main Factory Image */}
                <div className="md:col-span-2">
                  <img
                    src="https://zecoaircon.com/wp-content/uploads/2022/07/Factory-Manufacturing-5-scaled.jpg"
                    alt="Modern manufacturing facility with advanced machinery and workers"
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>

                {/* Side Images */}
                <div className="grid grid-cols-1 gap-4">
                  <img
                    src="https://zecoaircon.com/wp-content/uploads/2022/07/Factory-Manufacturing-4-1024x683.jpg"
                    alt="CNC machinery in operation"
                    className="w-full h-32 object-cover rounded-lg shadow-md"
                  />
                  {/* <img
                    src="https://zecoaircon.com/wp-content/uploads/2022/07/Factory-Manufacturing-5-scaled.jpg"
                    alt="Production line with quality control"
                    className="w-full h-32 object-cover rounded-lg shadow-md"
                  /> */}
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 lg:p-8">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                Technology Fueled By Consumer Experience
              </h1>

              <div className="text-gray-600 text-lg leading-relaxed mb-8">
                <p className="mb-4">
                  Covering over a hundred and thirty thousand square feet of
                  sprawling land, our fully integrated plant is outfitted with
                  next-generation machinery.
                </p>

                <p>
                  From turret press, CNC press brakes, polyurethane foam
                  injections in the panel shophouses, to the recently added
                  prefabricated ducts section equipped with one-of-its-kind,
                  special purpose machines. While the design section boasts of
                  the latest in computing with truly customized software's
                  supporting product creation.
                </p>
              </div>

              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 flex items-center gap-2">
                Know More
                <svg
                  className="w-5 h-5"
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
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8">
            <StatCard
              value={69500}
              suffix="+"
              label="Successful Projects"
              color="bg-red-500"
              delay={0}
            />

            <StatCard
              value={140500}
              suffix="+"
              label="Units Delivered"
              color="bg-blue-500"
              delay={500}
            />

            <StatCard
              value={700}
              suffix="+"
              label="Trusted Partners"
              color="bg-green-500"
              delay={1000}
            />

            <StatCard
              value={160}
              suffix=" Millions+"
              label="Sq M Of Air Purification"
              color="bg-red-500"
              delay={1500}
            />
          </div>
        </div>

        {/* Decorative Dots Pattern */}
        <div className="flex justify-center mt-12">
          <div className="grid grid-cols-8 gap-2 opacity-20">
            {[...Array(64)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-gray-400 rounded-full"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// import React, { useState, useEffect } from "react";

// const AnimatedCounter = ({ target, duration = 2000, suffix = "" }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const increment = target / (duration / 16); // 60fps
//     let current = 0;

//     const timer = setInterval(() => {
//       current += increment;
//       if (current >= target) {
//         setCount(target);
//         clearInterval(timer);
//       } else {
//         setCount(Math.floor(current));
//       }
//     }, 16);

//     return () => clearInterval(timer);
//   }, [target, duration]);

//   return (
//     <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
//       {count.toLocaleString()}
//       {suffix}
//     </div>
//   );
// };

// const StatCard = ({ value, suffix, label, color, delay = 0 }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//     }, delay);
//     return () => clearTimeout(timer);
//   }, [delay]);

//   return (
//     <div className="text-left p-6 lg:p-8">
//       <div className="relative">
//         <div
//           className={`w-2.5 h-2.5 rounded-full ${color} absolute -top-1 left-0`}
//         ></div>
//         <div className="ml-6">
//           {isVisible && (
//             <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-2">
//               {value.toLocaleString()}
//               {suffix}
//             </div>
//           )}
//           <div className="text-gray-500 text-base lg:text-lg font-medium">
//             {label}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default function ManufacturingShowcase() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* SEO Meta Tags would go in document head */}
//       <div className="container mx-auto px-4 py-8">
//         {/* Hero Section */}
//         <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             {/* Images Section */}
//             <div className="p-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {/* Main Factory Image */}
//                 <div className="md:col-span-2">
//                   <img
//                     src="https://via.placeholder.com/600x300/4CAF50/FFFFFF?text=Factory+Floor"
//                     alt="Modern manufacturing facility with advanced machinery and workers"
//                     className="w-full h-64 object-cover rounded-lg shadow-md"
//                   />
//                 </div>

//                 {/* Side Images */}
//                 <div className="grid grid-cols-1 gap-4">
//                   <img
//                     src="https://via.placeholder.com/300x200/2196F3/FFFFFF?text=CNC+Machines"
//                     alt="CNC machinery in operation"
//                     className="w-full h-32 object-cover rounded-lg shadow-md"
//                   />
//                   <img
//                     src="https://via.placeholder.com/300x200/FF9800/FFFFFF?text=Production+Line"
//                     alt="Production line with quality control"
//                     className="w-full h-32 object-cover rounded-lg shadow-md"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Content Section */}
//             <div className="p-6 lg:p-8">
//               <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6 leading-tight">
//                 Technology Fueled By Consumer Experience
//               </h1>

//               <div className="text-gray-600 text-lg leading-relaxed mb-8">
//                 <p className="mb-4">
//                   Covering over a hundred and thirty thousand square feet of
//                   sprawling land, our fully integrated plant is outfitted with
//                   next-generation machinery.
//                 </p>

//                 <p>
//                   From turret press, CNC press brakes, polyurethane foam
//                   injections in the panel shophouses, to the recently added
//                   prefabricated ducts section equipped with one-of-its-kind,
//                   special purpose machines. While the design section boasts of
//                   the latest in computing with truly customized software's
//                   supporting product creation.
//                 </p>
//               </div>

//               <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 flex items-center gap-2">
//                 Know More
//                 <svg
//                   className="w-5 h-5"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M9 5l7 7-7 7"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Statistics Section */}
//         <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//           <div className="grid grid-cols-1 lg:grid-cols-2">
//             {/* Left side - Image */}
//             <div className="relative">
//               <img
//                 src="https://via.placeholder.com/600x400/FF9800/FFFFFF?text=Manufacturing+Process"
//                 alt="Manufacturing process with orange machinery and production line"
//                 className="w-full h-full object-cover min-h-80"
//               />

//               {/* Decorative Dots Pattern Overlay */}
//               <div className="absolute bottom-8 right-8 grid grid-cols-8 gap-1 opacity-30">
//                 {[...Array(64)].map((_, i) => (
//                   <div
//                     key={i}
//                     className="w-1.5 h-1.5 bg-white rounded-full"
//                   ></div>
//                 ))}
//               </div>
//             </div>

//             {/* Right side - Statistics */}
//             <div className="p-6 lg:p-8">
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8 h-full">
//                 <StatCard
//                   value={69500}
//                   suffix=" +"
//                   label="Successful Projects"
//                   color="bg-red-500"
//                   delay={0}
//                 />

//                 <StatCard
//                   value={140500}
//                   suffix=" +"
//                   label="Units Delivered"
//                   color="bg-blue-500"
//                   delay={500}
//                 />

//                 <StatCard
//                   value={700}
//                   suffix=" +"
//                   label="Trusted Partners"
//                   color="bg-green-500"
//                   delay={1000}
//                 />

//                 <StatCard
//                   value={160}
//                   suffix=" Millions+"
//                   label="Sq M Of Air Purification"
//                   color="bg-red-500"
//                   delay={1500}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
