// import React from "react";
// import {
//   CheckCircle,
//   Factory,
//   Users,
//   Award,
//   Wrench,
//   Clock,
//   Star,
//   Wind,
//   Settings,
//   Shield,
//   Snowflake,
//   Building2,
//   Zap,
// } from "lucide-react";

// const AboutPage = () => {
//   const products = [
//     {
//       category: "Air Grills",
//       items: [
//         {
//           name: "Return Air Grills (RAG)",
//           desc: "Maximum free area with low resistance to airflow",
//         },
//         {
//           name: "Supply Air Grills",
//           desc: "Fixed or adjustable louvers for directional airflow",
//         },
//         {
//           name: "Linear Bar Grills",
//           desc: "Sleek design for modern interiors",
//         },
//         {
//           name: "Egg Crate Grills",
//           desc: "High free area, ideal for return or exhaust air",
//         },
//         {
//           name: "Floor Grills",
//           desc: "Heavy-duty design for high-traffic areas",
//         },
//         {
//           name: "Deflection Grills",
//           desc: "Single and double deflection types",
//         },
//       ],
//     },
//     {
//       category: "Dampers",
//       items: [
//         {
//           name: "Volume Control Dampers (VCDs)",
//           desc: "Manually or motor-operated for airflow balancing",
//         },
//         {
//           name: "Backdraft Dampers",
//           desc: "Prevent reverse airflow in exhaust systems",
//         },
//         {
//           name: "Fire Dampers",
//           desc: "Resist flame passage with smoke detection integration",
//         },
//         {
//           name: "Motorized Dampers",
//           desc: "Automated airflow control via BMS",
//         },
//         {
//           name: "Opposed Blade & Parallel Blade Dampers",
//           desc: "Precise air balancing and isolation",
//         },
//       ],
//     },
//   ];

//   const hvacSystems = [
//     "VRF (Variable Refrigerant Flow) Systems",
//     "Ductable Split ACs",
//     "Cassette ACs",
//     "Water-Cooled DX Systems",
//     "Air-Cooled and Water-Cooled Chillers",
//   ];

//   const whyChooseUs = [
//     {
//       icon: <Star className="w-6 h-6" />,
//       text: "Authorized Blue Star Commercial HVAC Dealer",
//     },
//     {
//       icon: <Factory className="w-6 h-6" />,
//       text: "In-house Manufacturing of Grills & Dampers",
//     },
//     {
//       icon: <Settings className="w-6 h-6" />,
//       text: "Customized Solutions for Complex Projects",
//     },
//     {
//       icon: <Wrench className="w-6 h-6" />,
//       text: "Project Design, Supply, Installation & AMC",
//     },
//     {
//       icon: <Users className="w-6 h-6" />,
//       text: "Skilled Engineers & Professional Team",
//     },
//     {
//       icon: <Clock className="w-6 h-6" />,
//       text: "Quality Workmanship and On-Time Delivery",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
//       {/* SEO Meta Tags would go in document head */}
//       <div className="container mx-auto px-4 py-8 md:py-12">
//         {/* Header Section */}
//         <div className="text-center mb-12 md:mb-16">
//           <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
//             <Wind className="w-8 h-8 text-white" />
//           </div>
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
//             About <span className="text-blue-600">Spire AirTech</span>
//           </h1>
//           <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
//           <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             A trusted name in the HVAC industry, delivering reliable, efficient,
//             and custom-engineered climate control solutions
//           </p>
//         </div>

//         {/* Company Overview */}
//         <div className="mb-16 md:mb-20">
//           <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-blue-100">
//             <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
//               <div>
//                 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//                   Your Climate Control Partner
//                 </h2>
//                 <p className="text-gray-600 text-lg leading-relaxed mb-6">
//                   <strong>Spire AirTech Pvt. Ltd.</strong> is proud to be an{" "}
//                   <strong className="text-blue-600">
//                     Authorized Channel Partner of Blue Star
//                   </strong>
//                   , offering a full range of commercial air conditioning systems
//                   along with{" "}
//                   <strong className="text-blue-600">
//                     in-house manufacturing of high-quality HVAC components
//                   </strong>
//                   , including all types of Air Grills and Dampers.
//                 </p>
//                 <p className="text-gray-600 text-lg leading-relaxed">
//                   We specialize in{" "}
//                   <strong className="text-blue-600">
//                     turnkey HVAC solutions
//                   </strong>{" "}
//                   for commercial and industrial projects—covering everything
//                   from system design and product supply to installation and
//                   after-sales service.
//                 </p>
//               </div>
//               <div className="relative">
//                 <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-8 text-white">
//                   <Building2 className="w-12 h-12 mb-4" />
//                   <h3 className="text-xl font-semibold mb-4">Our Clientele</h3>
//                   <ul className="space-y-2 text-blue-100">
//                     <li>• Corporate Offices</li>
//                     <li>• IT Parks</li>
//                     <li>• Malls & Hotels</li>
//                     <li>• Hospitals</li>
//                     <li>• Manufacturing Facilities</li>
//                     <li>• Institutional Buildings</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* In-House Manufacturing Section */}
//         <div className="mb-16 md:mb-20">
//           <div className="text-center mb-12">
//             <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
//               <Factory className="w-8 h-8 text-white" />
//             </div>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               In-House Manufacturing
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               HVAC Grills & Dampers fabricated using high-grade materials with
//               precision engineering
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {products.map((category, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100 hover:shadow-xl transition-shadow duration-300"
//               >
//                 <div className="flex items-center mb-6">
//                   <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
//                     {category.category === "Air Grills" ? (
//                       <Wind className="w-6 h-6 text-blue-600" />
//                     ) : (
//                       <Settings className="w-6 h-6 text-blue-600" />
//                     )}
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-900">
//                     {category.category}
//                   </h3>
//                 </div>
//                 <div className="space-y-4">
//                   {category.items.map((item, itemIndex) => (
//                     <div
//                       key={itemIndex}
//                       className="border-l-4 border-blue-200 pl-4 py-2"
//                     >
//                       <h4 className="font-semibold text-gray-900 mb-1">
//                         {item.name}
//                       </h4>
//                       <p className="text-gray-600 text-sm">{item.desc}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="mt-8 bg-blue-50 rounded-2xl p-6 md:p-8">
//             <p className="text-center text-gray-700 text-lg">
//               <strong>Custom Solutions:</strong> All products available in
//               custom sizes and finishes, fabricated using
//               <span className="text-blue-600 font-semibold">
//                 {" "}
//                 GI, aluminium, powder-coated steel, or stainless steel
//               </span>{" "}
//               based on application needs.
//             </p>
//           </div>
//         </div>

//         {/* HVAC Systems Section */}
//         <div className="mb-16 md:mb-20">
//           <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
//             <div className="text-center mb-8">
//               <Snowflake className="w-16 h-16 mx-auto mb-4" />
//               <h2 className="text-3xl md:text-4xl font-bold mb-4">
//                 Our HVAC System Offerings
//               </h2>
//               <p className="text-xl text-blue-100">Blue Star Products</p>
//             </div>
//             <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
//               {hvacSystems.map((system, index) => (
//                 <div
//                   key={index}
//                   className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 hover:bg-white/20 transition-all duration-300"
//                 >
//                   <div className="flex items-center">
//                     <CheckCircle className="w-5 h-5 mr-3 text-blue-200" />
//                     <span className="text-white font-medium">{system}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Why Choose Us Section */}
//         <div className="mb-16 md:mb-20">
//           <div className="text-center mb-12">
//             <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
//               <Award className="w-8 h-8 text-white" />
//             </div>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Why Choose Spire AirTech?
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Excellence in every aspect of HVAC solutions and manufacturing
//             </p>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//             {whyChooseUs.map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-blue-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300"
//               >
//                 <div className="flex items-start">
//                   <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
//                     <div className="text-blue-600">{item.icon}</div>
//                   </div>
//                   <p className="text-gray-700 font-medium leading-relaxed">
//                     {item.text}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Call to Action */}
//         <div className="text-center">
//           <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
//             <Zap className="w-16 h-16 mx-auto mb-6" />
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Ready to Transform Your Space?
//             </h2>
//             <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
//               Experience the perfect blend of innovation, quality, and
//               reliability with our comprehensive HVAC solutions.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
//                 Get Quote
//               </button>
//               <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
//                 Contact Us
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutPage;

import React from "react";
import {
  CheckCircle,
  Factory,
  Users,
  Award,
  Wrench,
  Clock,
  Star,
  Wind,
  Settings,
  Shield,
  Snowflake,
  Building2,
  Zap,
} from "lucide-react";
import ClienteleSlider from "../components/about/Clientele.jsx";
import DamperImage from "../assets/DamperImage.png";

// Simple animation utilities (Framer Motion alternative)
const useInView = (threshold = 0.1) => {
  const [isInView, setIsInView] = React.useState(false);
  const ref = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return [ref, isInView];
};

const AnimatedSection = ({ children, className = "", delay = 0 }) => {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const AnimatedCard = ({ children, className = "", delay = 0, index = 0 }) => {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isInView
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-6 scale-95"
      } ${className}`}
      style={{ transitionDelay: `${delay + index * 100}ms` }}
    >
      {children}
    </div>
  );
};

const FloatingIcon = ({ children, className = "" }) => {
  return (
    <div
      className={`animate-bounce ${className}`}
      style={{ animationDuration: "3s" }}
    >
      {children}
    </div>
  );
};

const AboutPage = () => {
  const products = [
    {
      category: "Air Grills",
      items: [
        {
          name: "Return Air Grills (RAG)",
          desc: "Maximum free area with low resistance to airflow",
        },
        {
          name: "Supply Air Grills",
          desc: "Fixed or adjustable louvers for directional airflow",
        },
        {
          name: "Linear Bar Grills",
          desc: "Sleek design for modern interiors",
        },
        {
          name: "Egg Crate Grills",
          desc: "High free area, ideal for return or exhaust air",
        },
        {
          name: "Floor Grills",
          desc: "Heavy-duty design for high-traffic areas",
        },
        {
          name: "Deflection Grills",
          desc: "Single and double deflection types",
        },
      ],
    },
    {
      category: "Dampers",
      items: [
        {
          name: "Volume Control Dampers (VCDs)",
          desc: "Manually or motor-operated for airflow balancing",
        },
        {
          name: "Backdraft Dampers",
          desc: "Prevent reverse airflow in exhaust systems",
        },
        {
          name: "Fire Dampers",
          desc: "Resist flame passage with smoke detection integration",
        },
        {
          name: "Motorized Dampers",
          desc: "Automated airflow control via BMS",
        },
        {
          name: "Opposed Blade & Parallel Blade Dampers",
          desc: "Precise air balancing and isolation",
        },
      ],
    },
  ];

  const hvacSystems = [
    "VRF (Variable Refrigerant Flow) Systems",
    "Ductable Split ACs",
    "Cassette ACs",
    "Water-Cooled DX Systems",
    "Air-Cooled and Water-Cooled Chillers",
  ];

  const whyChooseUs = [
    {
      icon: <Star className="w-6 h-6" />,
      text: "Authorized Blue Star Commercial HVAC Dealer",
    },
    {
      icon: <Factory className="w-6 h-6" />,
      text: "In-house Manufacturing of Grills & Dampers",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      text: "Customized Solutions for Complex Projects",
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      text: "Project Design, Supply, Installation & AMC",
    },
    {
      icon: <Users className="w-6 h-6" />,
      text: "Skilled Engineers & Professional Team",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      text: "Quality Workmanship and On-Time Delivery",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* SEO Meta Tags would go in document head */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <style>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes expand {
            from {
              width: 0;
            }
            to {
              width: 6rem;
            }
          }

          @keyframes slide-in-left {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .animate-fade-in {
            animation: fade-in 1s ease-out;
          }

          .animate-expand {
            animation: expand 1s ease-out 0.5s both;
          }

          .animate-slide-in-left {
            animation: slide-in-left 0.5s ease-out both;
          }

          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}</style>

        {/* Header Section */}
        <AnimatedSection className="text-center mb-12 md:mb-16">
          {/* <FloatingIcon className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
            <Wind className="w-8 h-8 text-white" />
          </FloatingIcon> */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 animate-fade-in">
            About{" "}
            <span className="text-blue-600 animate-pulse">Spire AirTech</span>
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 animate-expand"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A trusted name in the HVAC industry, delivering reliable, efficient,
            and custom-engineered climate control solutions
          </p>
        </AnimatedSection>

        {/* Company Overview */}
        <AnimatedSection className="mb-16 md:mb-20" delay={200}>
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-blue-100 hover:shadow-2xl transition-shadow duration-500">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <AnimatedSection delay={400}>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Your Climate Control Partner
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  <strong>Spire AirTech Pvt. Ltd.</strong> is proud to be an{" "}
                  <strong className="text-blue-600">
                    Authorized Channel Partner of Blue Star
                  </strong>
                  , offering a full range of commercial air conditioning systems
                  along with{" "}
                  <strong className="text-blue-600">
                    in-house manufacturing of high-quality HVAC components
                  </strong>
                  , including{" "}
                  <strong className="text-blue-600">
                    all types of Air Grills and Dampers.
                  </strong>
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We specialize in{" "}
                  <strong className="text-blue-600">
                    turnkey HVAC solutions
                  </strong>{" "}
                  for commercial and industrial projects—covering everything
                  from system design and product supply to installation and
                  after-sales service.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={600}>
                <div className="relative">
                  {/* <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-8 text-white transform hover:scale-105 transition-transform duration-300">
                    <Building2 className="w-12 h-12 mb-4 animate-pulse" />
                    <h3 className="text-xl font-semibold mb-4">
                      Our Clientele
                    </h3>
                    <ul className="space-y-2 text-blue-100">
                      <li
                        className="animate-slide-in-left"
                        style={{ animationDelay: "0.1s" }}
                      >
                        • Pharmaceutical & Clean Rooms
                      </li>
                      <li
                        className="animate-slide-in-left"
                        style={{ animationDelay: "0.2s" }}
                      >
                        • Hospitals & Diagnostics Labs
                      </li>
                      <li
                        className="animate-slide-in-left"
                        style={{ animationDelay: "0.3s" }}
                      >
                        • Corporate Offices & Commercial Buildings
                      </li>
                      <li
                        className="animate-slide-in-left"
                        style={{ animationDelay: "0.4s" }}
                      >
                        • Retail Stores & Shopping Malls
                      </li>
                      <li
                        className="animate-slide-in-left"
                        style={{ animationDelay: "0.5s" }}
                      >
                        • Schools, Colleges & Universities
                      </li>
                      <li
                        className="animate-slide-in-left"
                        style={{ animationDelay: "0.6s" }}
                      >
                        • Hotels & Hospitality Sector
                      </li>
                      <li
                        className="animate-slide-in-left"
                        style={{ animationDelay: "0.6s" }}
                      >
                        • Warehouses & Logistic Parks
                      </li>
                      <li
                        className="animate-slide-in-left"
                        style={{ animationDelay: "0.6s" }}
                      >
                        • Industrial Manufacturing Plants
                      </li>
                      <li
                        className="animate-slide-in-left"
                        style={{ animationDelay: "0.6s" }}
                      >
                        • IT Parks & Data Centers
                      </li>
                    </ul>
                  </div> */}
                  <img
                    src={DamperImage}
                    className="rounded"
                    alt="Damper Image"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>

        <ClienteleSlider />

        {/* In-House Manufacturing Section */}
        <AnimatedSection className="mb-16 md:mb-20" delay={800}>
          <div className="text-center mb-12">
            <FloatingIcon className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
              <Factory className="w-8 h-8 text-white" />
            </FloatingIcon>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              In-House Manufacturing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              At <strong>Spire AirTech Pvt. Ltd.</strong>, we manufacture a
              complete range of{" "}
              <strong className="text-blue-600">
                {" "}
                Air Distribution Products
              </strong>{" "}
              essential for efficient airflow, temperature control, and
              ventilation in HVAC systems. All products are fabricated using
              high-grade materials with precision engineering to meet
              project-specific requirements and industry standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((category, index) => (
              <AnimatedCard
                key={index}
                delay={1000}
                index={index}
                className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100 hover:shadow-xl hover:border-blue-200 transition-all duration-500 transform hover:scale-105"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 animate-pulse">
                    {category.category === "Air Grills" ? (
                      <Wind className="w-6 h-6 text-blue-600" />
                    ) : (
                      <Settings className="w-6 h-6 text-blue-600" />
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {category.category}
                  </h3>
                </div>
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="border-l-4 border-blue-200 pl-4 py-2 hover:border-blue-400 transition-colors duration-300 transform hover:translate-x-2"
                    >
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {item.name}
                      </h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </AnimatedCard>
            ))}
          </div>

          <AnimatedSection
            delay={1400}
            className="mt-8 bg-blue-50 rounded-2xl p-6 md:p-8"
          >
            <p className="text-center text-gray-700 text-lg">
              <strong>Custom Solutions:</strong> All products available in
              custom sizes and finishes, fabricated using
              <span className="text-blue-600 font-semibold">
                {" "}
                GI, aluminium, powder-coated steel, or stainless steel
              </span>{" "}
              based on application needs.
            </p>
          </AnimatedSection>
        </AnimatedSection>

        {/* HVAC Systems Section */}
        <AnimatedSection className="mb-16 md:mb-20" delay={1600}>
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white transform hover:scale-105 transition-transform duration-500">
            <div className="text-center mb-8">
              <FloatingIcon>
                <Snowflake className="w-16 h-16 mx-auto mb-4" />
              </FloatingIcon>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our HVAC System Offerings
              </h2>
              <p className="text-xl text-blue-100">Blue Star Products</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {hvacSystems.map((system, index) => (
                <AnimatedCard
                  key={index}
                  delay={1800}
                  index={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-blue-200 animate-pulse" />
                    <span className="text-white font-medium">{system}</span>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Why Choose Us Section */}
        <AnimatedSection className="mb-16 md:mb-20" delay={2000}>
          <div className="text-center mb-12">
            <FloatingIcon className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
              <Award className="w-8 h-8 text-white" />
            </FloatingIcon>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Spire AirTech?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Excellence in every aspect of HVAC solutions and manufacturing
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {whyChooseUs.map((item, index) => (
              <AnimatedCard
                key={index}
                delay={2200}
                index={index}
                className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-blue-100 hover:shadow-xl hover:border-blue-200 transition-all duration-500 transform hover:scale-105 hover:rotate-1"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 animate-pulse">
                    <div className="text-blue-600">{item.icon}</div>
                  </div>
                  <p className="text-gray-700 font-medium leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection delay={2400}>
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white transform hover:scale-105 transition-transform duration-500">
              <FloatingIcon>
                <Zap className="w-16 h-16 mx-auto mb-6" />
              </FloatingIcon>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Space?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Experience the perfect blend of innovation, quality, and
                reliability with our comprehensive HVAC solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  Get Quote
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default AboutPage;
