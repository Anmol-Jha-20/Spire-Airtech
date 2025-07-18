import React from "react";
import { motion } from "framer-motion";
import ProductUSPs from "./ProductUsp";
import HeatExchangerTypes from "./HeatExchangerTypes";
import KeyHighlights from "./KeyHighlight";
import HeatExchangerApplication from "./HeatExchangerApplication.jsx";
import FAQComponent from "./FAQ.jsx";
import HeatExchangerImage from "../../../assets/HeatExchanger.png";

const HeatExchangerCoils = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="bg-white rounded-lg shadow-xl p-8 overflow-hidden">
                <img
                  src={HeatExchangerImage}
                  className="rounded"
                  alt="Heat Exchanger Coils"
                />
              </div>
            </motion.div>

            {/* Right side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="space-y-8"
            >
              {/* Header */}
              <div className="text-center lg:text-left">
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-4xl md:text-4xl lg:text-5xl font-bold text-blue-800 mb-6"
                >
                  Heat Exchanger Coils
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-xl md:text-2xl text-gray-600 font-medium mb-8"
                >
                  "Precision Cooling Meets Performance Engineering"
                </motion.p>
              </div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-gray-700 leading-relaxed text-lg space-y-4"
              >
                <p>
                  Heat Exchanger Coils are critical components in HVAC (Heating,
                  Ventilation, and Air Conditioning) systems, designed to
                  transfer heat between two fluids—typically air and a
                  refrigerant or water—without allowing them to mix. These coils
                  are made from highly conductive materials such as copper tubes
                  with aluminum or copper fins to maximize surface area and
                  enhance thermal efficiency.Heat exchanger coils function in
                  both heating and cooling applications: in cooling mode, they
                  absorb heat from the air passing over the coils and transfer
                  it to a cooler fluid (usually a refrigerant or chilled water);
                  in heating mode, they do the opposite, transferring heat from
                  a hot fluid to the air.
                </p>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="pt-6"
              >
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 uppercase tracking-wide text-sm">
                  CONSULT OUR AIR EXPERTS
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* <ProductUSPs /> */}
      <HeatExchangerTypes />
      {/* <KeyHighlights /> */}
      <HeatExchangerApplication />
      <FAQComponent />
    </>
  );
};

export default HeatExchangerCoils;

// import React from "react";
// import { motion } from "framer-motion";
// import HeatExchanger from "../../../assets/HeatExchanger.png";

// const HeatExchangerCoils = () => {
//   return (
//     <>
//       {/* Hero Section with Full Screen Layout */}
//       <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
//         {/* Animated Background Pattern */}
//         <div className="absolute inset-0">
//           <div
//             className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg')] width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30`}
//           ></div>
//           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 animate-pulse"></div>
//         </div>

//         {/* Main Content Container */}
//         <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
//           <div className="min-h-screen flex flex-col">
//             {/* Top Section - Brand & Navigation */}

//             {/* Main Hero Content */}
//             <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
//               {/* Left Content - 7 columns */}
//               <div className="lg:col-span-7 space-y-8">
//                 <motion.div
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8, delay: 0.4 }}
//                 >
//                   <div className="inline-flex items-center bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 mb-6">
//                     <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
//                     <span className="text-blue-200 text-sm font-medium">
//                       AHRI 410 Certified Excellence
//                     </span>
//                   </div>

//                   <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
//                     Next-Gen
//                     <br />
//                     <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
//                       Heat Exchanger
//                     </span>
//                     <br />
//                     <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-blue-200">
//                       Coils
//                     </span>
//                   </h1>

//                   <p className="text-xl lg:text-2xl text-blue-100/90 leading-relaxed mb-8 max-w-2xl">
//                     Where precision engineering meets uncompromising
//                     performance. Revolutionizing thermal management for
//                     industrial excellence.
//                   </p>
//                 </motion.div>

//                 {/* Stats Row */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: 0.8 }}
//                   className="grid grid-cols-3 gap-6 mb-8"
//                 >
//                   {[
//                     { number: "450", unit: "PSIG", label: "Tested Pressure" },
//                     { number: "99.9", unit: "%", label: "Efficiency Rate" },
//                     { number: "24/7", unit: "", label: "Support Available" },
//                   ].map((stat, index) => (
//                     <div key={index} className="text-center">
//                       <div className="text-2xl lg:text-3xl font-bold text-white">
//                         {stat.number}
//                         <span className="text-blue-300 text-lg">
//                           {stat.unit}
//                         </span>
//                       </div>
//                       <div className="text-blue-200 text-sm mt-1">
//                         {stat.label}
//                       </div>
//                     </div>
//                   ))}
//                 </motion.div>

//                 {/* CTA Buttons */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: 1 }}
//                   className="flex flex-col sm:flex-row gap-4"
//                 >
//                   <button className="group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-8 py-4 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
//                     <span className="relative z-10 flex items-center justify-center">
//                       Get Expert Consultation
//                       <svg
//                         className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
//                         fill="currentColor"
//                         viewBox="0 0 20 20"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
//                           clipRule="evenodd"
//                         />
//                       </svg>
//                     </span>
//                   </button>

//                   <button className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
//                     View Technical Specs
//                   </button>
//                 </motion.div>
//               </div>

//               {/* Right Image - 5 columns */}
//               <div className="lg:col-span-5">
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
//                   animate={{ opacity: 1, scale: 1, rotateY: 0 }}
//                   transition={{ duration: 1, delay: 0.6 }}
//                   className="relative"
//                 >
//                   {/* Floating Elements */}
//                   <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-20 animate-pulse"></div>
//                   <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse"></div>

//                   {/* Main Image Container */}
//                   <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
//                     <div className="relative overflow-hidden rounded-2xl">
//                       <img
//                         src={HeatExchanger}
//                         alt="Heat Exchanger Coils"
//                         className="w-full h-auto transform hover:scale-110 transition-transform duration-700"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
//                     </div>

//                     {/* Floating Info Cards */}
//                     {/* <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg animate-bounce">
//                       ✓ Certified
//                     </div>

//                     <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg">
//                       Custom Built
//                     </div> */}
//                   </div>
//                 </motion.div>
//               </div>
//             </div>

//             {/* Bottom Features */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 1.2 }}
//               className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6"
//             >
//               {[
//                 {
//                   icon: "🔧",
//                   title: "Custom Engineering",
//                   desc: "Tailored solutions for every project",
//                 },
//                 {
//                   icon: "⚡",
//                   title: "High Performance",
//                   desc: "Tested up to 450 PSIG pressure",
//                 },
//                 {
//                   icon: "🏆",
//                   title: "Industry Leading",
//                   desc: "AHRI 410 certified excellence",
//                 },
//                 {
//                   icon: "🌍",
//                   title: "Global Standards",
//                   desc: "Meeting international requirements",
//                 },
//               ].map((feature, index) => (
//                 <div
//                   key={index}
//                   className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
//                 >
//                   <div className="text-3xl mb-4">{feature.icon}</div>
//                   <h3 className="text-white font-semibold mb-2">
//                     {feature.title}
//                   </h3>
//                   <p className="text-blue-200/80 text-sm">{feature.desc}</p>
//                 </div>
//               ))}
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* Content Sections */}
//       <div className="bg-white py-24">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-6">
//               Product Excellence
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               At Spire AirTech, we redefine heat transfer efficiency with our
//               AHRI 410-certified Heat Exchangers—engineered for precision,
//               reliability, and performance. Each unit is tested up to 450 PSIG
//               and custom-built based on project requirements.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <div className="space-y-6">
//               <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
//                 <h3 className="text-xl font-semibold text-gray-900 mb-3">
//                   Superior Thermal Comfort
//                 </h3>
//                 <p className="text-gray-700">
//                   Designed to deliver superior indoor thermal comfort, these
//                   high-performance units ensure seamless heat transfer between
//                   fluids without cross-contamination.
//                 </p>
//               </div>

//               <div className="bg-indigo-50 rounded-xl p-6 border-l-4 border-indigo-500">
//                 <h3 className="text-xl font-semibold text-gray-900 mb-3">
//                   Custom Solutions
//                 </h3>
//                 <p className="text-gray-700">
//                   As leading HVAC suppliers in India, we offer tailored
//                   solutions for industrial and commercial applications,
//                   combining durability, energy savings, and compliance.
//                 </p>
//               </div>
//             </div>

//             <div className="bg-gray-50 rounded-2xl p-8">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">
//                 Technical Specifications
//               </h3>
//               <div className="space-y-4">
//                 <div className="flex justify-between items-center py-2 border-b border-gray-200">
//                   <span className="text-gray-600">Pressure Rating</span>
//                   <span className="font-semibold text-gray-900">
//                     Up to 450 PSIG
//                   </span>
//                 </div>
//                 <div className="flex justify-between items-center py-2 border-b border-gray-200">
//                   <span className="text-gray-600">Certification</span>
//                   <span className="font-semibold text-gray-900">
//                     AHRI 410 Certified
//                   </span>
//                 </div>
//                 <div className="flex justify-between items-center py-2 border-b border-gray-200">
//                   <span className="text-gray-600">Customization</span>
//                   <span className="font-semibold text-gray-900">
//                     Project-based
//                   </span>
//                 </div>
//                 <div className="flex justify-between items-center py-2">
//                   <span className="text-gray-600">Application</span>
//                   <span className="font-semibold text-gray-900">
//                     Industrial & Commercial
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Other sections with modern styling */}
//       <div className="bg-gray-50 py-24">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">
//               Product USPs
//             </h2>
//             <p className="text-gray-600 text-lg">
//               This section would contain the ProductUSPs component
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="bg-white py-24">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">
//               Heat Exchanger Types
//             </h2>
//             <p className="text-gray-600 text-lg">
//               This section would contain the HeatExchangerTypes component
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="bg-gray-50 py-24">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">
//               Key Highlights
//             </h2>
//             <p className="text-gray-600 text-lg">
//               This section would contain the KeyHighlights component
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="bg-white py-24">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">
//               Heat Exchanger Applications
//             </h2>
//             <p className="text-gray-600 text-lg">
//               This section would contain the HeatExchangerApplication component
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="bg-gray-50 py-24">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">FAQ</h2>
//             <p className="text-gray-600 text-lg">
//               This section would contain the FAQComponent
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HeatExchangerCoils;
