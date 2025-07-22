// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   ChevronRight,
//   Wind,
//   Zap,
//   Shield,
//   Thermometer,
//   Filter,
//   Fan,
//   Cpu,
//   Building,
//   ArrowRight,
// } from "lucide-react";
// import SnowEffect from "../snow/SnowEffect.jsx";
// import WebSucrubber from "../../assets/WebScruber.png";
// import ExhaustAirUnit from "../../assets/ExhaustAirUnit.jpeg";
// import FreshAirUnit from "../../assets/FreshAirUnit.jpeg";
// import DryScruber from "../../assets/DryScruber.jpeg";

// const VRFAirconditioning = () => {
//   const [activeProduct, setActiveProduct] = useState(null);
//   const products = [
//     {
//       category: "AWU (Air",
//       description:
//         "An AHU (Air Handling Unit) is a key component of an air conditioning system that conditions and circulates air as part of a heating, ventilating, and air-conditioning (HVAC) system. It typically contains components such as fans, heating/cooling coils, filters, and dampers. AHUs are used to regulate and distribute air throughout a building, ensuring proper ventilation, temperature control, and air quality.",
//       items: [
//         {
//           title: "Fresh Air Unit",
//           description:
//             "A Fresh Air Unit (FAU) is a ventilation system designed to supply clean, filtered outdoor air into indoor spaces. It helps maintain healthy indoor air quality by diluting pollutants, controlling humidity, and ensuring a consistent flow of oxygen-rich air. FAUs are commonly used in commercial, industrial, and residential buildings as part of HVAC systems.",
//           image: FreshAirUnit,
//           specs: ["5 Star Rating", "Inverter Technology", "Smart Controls"],
//         },
//         {
//           title: "Exhaust Air Unit",
//           description:
//             "An Exhaust Air Unit (EAU) is a ventilation system designed to remove stale, contaminated, or humid air from indoor spaces. It helps maintain indoor air quality by expelling air from areas like kitchens, bathrooms, or industrial zones, often working in coordination with fresh air systems to ensure balanced airflow and a healthier environment.",
//           image: ExhaustAirUnit,
//           specs: ["Automated Control", "Energy Saving", "Large Coverage"],
//         },
//         {
//           title: "Dry Scrubber (Kitchen Exhaust Unit)",
//           description:
//             "A Dry Scrubber (Kitchen Exhaust Unit) is an air filtration system used to remove grease, smoke, odors, and airborne pollutants from kitchen exhaust air without using water. It typically uses filters and adsorbent materials like activated carbon to clean the air before releasing it outdoors.",
//           image: DryScruber,
//           specs: ["Automated Control", "Energy Saving", "Large Coverage"],
//         },
//         {
//           title: "Wet Scrubber",
//           description:
//             "A Wet Scrubber is an air pollution control device that removes contaminants from exhaust gases by spraying them with water or a scrubbing solution. As the gas passes through the scrubber, pollutants like dust, smoke, and chemical vapors are captured and washed out. Commonly used in industrial applications, wet scrubbers are highly effective for controlling both particulate matter and gas emissions.",
//           image: WebSucrubber,
//           specs: ["Automated Control", "Energy Saving", "Large Coverage"],
//         },
//       ],
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
//       {/* Hero Section */}
//       <motion.section
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden"
//         style={{
//           backgroundImage: `url('https://images.unsplash.com/photo-1655039353512-ab38d6a37a92?q=80&w=589&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "center",
//         }}
//       >
//         {/* <SnowEffect /> */}
//         <div className="absolute inset-0 bg-black opacity-10"></div>
//         <div className="relative max-w-7xl mx-auto text-center">
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-4xl md:text-6xl font-bold mb-6"
//           >
//             Next-Generation VRF & V Air Conditioning Systems
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100"
//           >
//             Enjoy optimal comfort and energy efficiency with our advanced VRF
//             and V Air Conditioning systems, offering precise climate control and
//             quiet operation for any space.
//           </motion.p>
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             className="flex flex-wrap justify-center gap-4"
//           >
//             <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center gap-2 cursor-pointer">
//               Get Quote <ArrowRight className="w-5 h-5" />
//             </button>
//             {/* <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
//               Get Quote
//             </button> */}
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* Products Section */}
//       {products.map((category, categoryIndex) => (
//         <div key={categoryIndex} className="mb-20">
//           {/* <div className="text-center mb-12">
//             <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
//               {category.category}
//             </h3>
//             {category.description && (
//               <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
//                 {category.description}
//               </p>
//             )}
//           </div> */}

//           <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-20 gap-8">
//             {category.items.map((product, index) => (
//               <div
//                 key={index}
//                 className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100"
//               >
//                 {/* Image Container */}
//                 <div className="relative h-64 sm:h-72 overflow-hidden">
//                   <img
//                     src={product.image}
//                     alt={product.title}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

//                   {/* Floating Badge */}
//                   {/* <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold text-gray-900 shadow-lg">
//                             Premium
//                           </div> */}
//                 </div>

//                 {/* Content */}
//                 <div className="p-6 sm:p-8">
//                   <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
//                     {product.title}
//                   </h4>

//                   <p className="text-gray-600 mb-6 leading-relaxed">
//                     {product.description}
//                   </p>

//                   {/* Specs */}
//                   <div className="mb-6">
//                     <div className="flex flex-wrap gap-2">
//                       {product.specs.map((spec, specIndex) => (
//                         <span
//                           key={specIndex}
//                           className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-200"
//                         >
//                           {spec}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   {/* CTA Button */}
//                   <button className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl font-medium">
//                     <span>Contact Us</span>
//                     <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default VRFAirconditioning;

import React, { useState } from "react";
import {
  Star,
  Shield,
  Zap,
  Thermometer,
  Wind,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Award,
  Users,
  Clock,
} from "lucide-react";
import VrfImage from "../../assets/vrfImage.png";

const VRFAirconditioning = () => {
  const [activeTab, setActiveTab] = useState("specifications");
  const [selectedImage, setSelectedImage] = useState(0);

  const productImages = [
    VrfImage,
    "data:image/jpeg;base64,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",
    "data:image/jpeg;base64,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",
  ];

  const features = [
    {
      icon: <Thermometer className="w-6 h-6" />,
      title: "Variable Temperature Control",
      description: "Precise temperature control with ±1°C accuracy",
    },
    {
      icon: <Wind className="w-6 h-6" />,
      title: "Advanced Air Flow",
      description: "Multi-directional airflow for optimal comfort",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Energy Efficient",
      description: "Up to 40% energy savings compared to traditional systems",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Reliable Protection",
      description: "Built-in protection against power surges and overheating",
    },
  ];

  const specifications = {
    "Cooling Capacity": "8-56 kW",
    "Heating Capacity": "9-60 kW",
    "Power Supply": "380-415V/50Hz/3Phase",
    Refrigerant: "R32 Eco-friendly",
    "Operating Range": "-20°C to +50°C",
    "Indoor Units": "Up to 64 units",
    Warranty: "5 years comprehensive",
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Green Office Complex",
      rating: 5,
      comment:
        "Outstanding performance and energy efficiency. Our electricity bills dropped by 35% after installation.",
    },
    {
      name: "Michael Chen",
      company: "Tech Solutions Ltd",
      rating: 5,
      comment:
        "Perfect climate control for our office spaces. The system is whisper quiet and incredibly reliable.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Meta Information would be handled by Next.js Head component */}

      <main>
        {/* Breadcrumb */}
        <nav className="bg-gray-50 py-3">
          <div className="container mx-auto px-4">
            {/* <div className="flex items-center space-x-2 text-sm text-gray-600">
              <a href="/" className="hover:text-blue-600">
                Home
              </a>
              <span>/</span>
              <a href="/products" className="hover:text-blue-600">
                Products
              </a>
              <span>/</span>
              <span className="text-blue-600 font-medium">
                VRF & V Air Conditioning Systems
              </span>
            </div> */}
          </div>
        </nav>

        {/* Product Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={productImages[selectedImage]}
                  alt="VRF Air Conditioning System"
                  className="w-full h-96 object-cover transition-transform hover:scale-105"
                />
                {/* <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  New Model
                </div> */}
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-2">
                {productImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index
                        ? "border-blue-600"
                        : "border-gray-200 hover:border-blue-300"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`View ${index + 1}`}
                      className="w-full h-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Information */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  VRF & V Air Conditioning Systems
                </h1>
                <p className="text-xl text-blue-600 font-semibold mb-4">
                  Premium Commercial Solution
                </p>

                {/* <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-gray-600">(48 reviews)</span>
                  <div className="flex items-center space-x-1 text-green-600">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-medium">In Stock</span>
                  </div>
                </div> */}

                <p className="text-gray-700 text-lg leading-relaxed">
                  Advanced Variable Refrigerant Flow (VRF) technology delivers
                  unparalleled energy efficiency and precise climate control for
                  commercial and large residential applications. Experience
                  superior comfort with intelligent zone control and
                  whisper-quiet operation.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Key Benefits
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Up to 40% energy savings</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Individual zone temperature control</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Quiet operation (&lt;35dB)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Eco-friendly R32 refrigerant</span>
                  </li>
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Get Quote
                </button>
                {/* <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Schedule Demo
                </button> */}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Advanced Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="text-blue-600 mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Details Tabs */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Tab Navigation */}
            <div className="border-b border-gray-200 mb-8">
              <nav className="flex space-x-8">
                {["specifications", "installation"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab
                        ? "border-blue-600 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="bg-white">
              {activeTab === "specifications" && (
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Technical Specifications
                    </h3>
                    <div className="space-y-3">
                      {Object.entries(specifications).map(([key, value]) => (
                        <div
                          key={key}
                          className="flex justify-between py-2 border-b border-gray-100"
                        >
                          <span className="font-medium text-gray-600">
                            {key}
                          </span>
                          <span className="text-gray-900">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Performance Highlights
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• SEER rating up to 22</li>
                      <li>• COP up to 4.5 in heating mode</li>
                      <li>• Modular design for easy expansion</li>
                      <li>• Smart control integration ready</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "installation" && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Professional Installation Service
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <Users className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                      <h4 className="font-semibold mb-2">Expert Team</h4>
                      <p className="text-gray-600">
                        Certified technicians with 10+ years experience
                      </p>
                    </div>
                    <div className="text-center">
                      <Clock className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                      <h4 className="font-semibold mb-2">Quick Setup</h4>
                      <p className="text-gray-600">
                        Installation completed within 2-3 business days
                      </p>
                    </div>
                    <div className="text-center">
                      <Award className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                      <h4 className="font-semibold mb-2">Quality Assured</h4>
                      <p className="text-gray-600">
                        100% satisfaction guarantee on all installations
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "warranty" && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Comprehensive Warranty Coverage
                  </h3>
                  <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          What's Covered
                        </h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• 5 years parts warranty</li>
                          <li>• 2 years labor warranty</li>
                          <li>• 10 years compressor warranty</li>
                          <li>• Free annual maintenance (1st year)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Additional Benefits
                        </h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• 24/7 emergency support</li>
                          <li>• Nationwide service network</li>
                          <li>• Extended warranty options</li>
                          <li>• Online warranty registration</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              What Our Customers Say
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
                >
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-white/90 mb-4 italic">
                    "{testimonial.comment}"
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-white/70 text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Get Expert Consultation
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Request a Quote
                </h3>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                  <textarea
                    rows={4}
                    placeholder="Project Details"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                  <button
                    type="button"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    onClick={() =>
                      alert(
                        "Quote request submitted! We will contact you soon."
                      )
                    }
                  >
                    Get Free Quote
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                <div className="text-center p-6 border-2 border-gray-200 rounded-lg">
                  <Phone className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Call Us</h4>
                  <p className="text-blue-600 font-semibold">+91 9311778119</p>
                </div>

                <div className="text-center p-6 border-2 border-gray-200 rounded-lg">
                  <Mail className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Email Us</h4>
                  <p className="text-gray-600">info@airtech.com</p>
                </div>

                <div className="text-center p-6 border-2 border-gray-200 rounded-lg">
                  <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Visit Us</h4>
                  <p className="text-gray-600 text-sm">Delhi, India</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default VRFAirconditioning;
