// // Add this inside your main HomePage component at the bottom

// import { Mail } from "lucide-react";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaLinkedinIn,
//   FaYoutube,
//   FaInstagram,
// } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="bg-[#0071ce] text-white pt-12 pb-6 relative z-10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
//         {/* Left */}
//         <div>
//           <h3 className="font-bold text-lg mb-3 border-b-2 w-fit border-white">
//             ZECO AIRCON
//           </h3>
//           <p className="text-sm mb-4">
//             ZECO Aircon is Pioneer in manufacturing of central air conditioning
//             & air distribution systems.
//           </p>
//           <div className="flex space-x-3">
//             <a
//               href="#"
//               aria-label="Facebook"
//               className="bg-white p-2 rounded hover:opacity-80"
//             >
//               <FaFacebookF className="text-[#0071ce] h-4 w-4" />
//             </a>
//             <a
//               href="#"
//               aria-label="Twitter"
//               className="bg-white p-2 rounded hover:opacity-80"
//             >
//               <FaTwitter className="text-[#0071ce] h-4 w-4" />
//             </a>
//             <a
//               href="#"
//               aria-label="LinkedIn"
//               className="bg-white p-2 rounded hover:opacity-80"
//             >
//               <FaLinkedinIn className="text-[#0071ce] h-4 w-4" />
//             </a>
//             <a
//               href="#"
//               aria-label="YouTube"
//               className="bg-white p-2 rounded hover:opacity-80"
//             >
//               <FaYoutube className="text-[#0071ce] h-4 w-4" />
//             </a>
//             <a
//               href="#"
//               aria-label="Instagram"
//               className="bg-white p-2 rounded hover:opacity-80"
//             >
//               <FaInstagram className="text-[#0071ce] h-4 w-4" />
//             </a>
//           </div>
//         </div>

//         {/* Middle */}
//         <div>
//           <h3 className="font-bold text-lg mb-3 border-b-2 w-fit border-white">
//             USEFUL LINKS
//           </h3>
//           <div className="grid grid-cols-2 gap-2 text-sm">
//             <a href="#" className="hover:underline">
//               About Us
//             </a>
//             <a href="#" className="hover:underline">
//               CSR
//             </a>
//             <a href="#" className="hover:underline">
//               Partner With Us
//             </a>
//             <a href="#" className="hover:underline">
//               Privacy Policy
//             </a>
//             <a href="#" className="hover:underline">
//               Infrastructure
//             </a>
//             <a href="#" className="hover:underline">
//               Contact Us
//             </a>
//           </div>
//         </div>

//         {/* Right */}
//         <div>
//           <h3 className="font-bold text-lg mb-3 border-b-2 w-fit border-white">
//             SUBSCRIBE NOW
//           </h3>
//           <p className="text-sm mb-4">
//             Don't miss our future updates! Get Subscribed Today!
//           </p>
//           <div className="flex items-center bg-white rounded-full overflow-hidden max-w-md">
//             <input
//               type="email"
//               placeholder="Your mail here"
//               className="px-4 py-2 flex-grow outline-none text-black"
//               aria-label="Your email"
//             />
//             <button className="bg-[#0071ce] p-3">
//               <Mail className="text-white h-4 w-4" />
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="text-center mt-10 text-xs text-white border-t border-white/20 pt-4">
//         ©2022 All Rights Reserved | Zeco Aircon Ltd. |{" "}
//         <a href="#" className="underline">
//           Sitemap
//         </a>
//       </div>
//     </footer>
//   );
// }

import React, { useState } from "react";
import { Mail } from "lucide-react";
import FooterImage from "../../assets/FooterImage.png";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const ZecoFooter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email.trim()) {
      // Handle subscription logic here
      console.log("Subscribing email:", email);
      setEmail("");
    }
  };

  return (
    <footer
      style={{
        backgroundImage: `url(${FooterImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="relative bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* ZECO AIRCON Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold mb-6 text-blue-700 md:text-white">
                Spire AirTech
              </h2>
              <div className="w-12 h-0.5 bg-white mb-8"></div>
              <p className="md:text-blue-100 text-white leading-relaxed text-lg">
                Spire AirTech is Pioneer in manufacturing of central air
                conditioning & air distribution systems.
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-12 h-12 bg-white text-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                aria-label="Follow us on Facebook"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white text-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                aria-label="Follow us on Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white text-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                aria-label="Connect with us on LinkedIn"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white text-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                aria-label="Subscribe to our YouTube channel"
              >
                <FaYoutube size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white text-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                aria-label="Follow us on Instagram"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* USEFUL LINKS Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold mb-6 text-white">
                USEFUL LINKS
              </h2>
              <div className="w-12 h-0.5 bg-white mb-8"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <nav className="space-y-4">
                <a
                  href="#about"
                  className="flex items-center text-blue-100 hover:text-white transition-colors duration-300 text-lg group"
                >
                  <span className="mr-3 transform group-hover:translate-x-1 transition-transform duration-300">
                    ›
                  </span>
                  About Us
                </a>
                <a
                  href="#partner"
                  className="flex items-center text-blue-100 hover:text-white transition-colors duration-300 text-lg group"
                >
                  <span className="mr-3 transform group-hover:translate-x-1 transition-transform duration-300">
                    ›
                  </span>
                  Partner With Us
                </a>
                <a
                  href="#infrastructure"
                  className="flex items-center text-blue-100 hover:text-white transition-colors duration-300 text-lg group"
                >
                  <span className="mr-3 transform group-hover:translate-x-1 transition-transform duration-300">
                    ›
                  </span>
                  Infrastructure
                </a>
              </nav>

              <nav className="space-y-4">
                <a
                  href="#csr"
                  className="flex items-center text-blue-100 hover:text-white transition-colors duration-300 text-lg group"
                >
                  <span className="mr-3 transform group-hover:translate-x-1 transition-transform duration-300">
                    ›
                  </span>
                  CSR
                </a>
                <a
                  href="#privacy"
                  className="flex items-center text-blue-100 hover:text-white transition-colors duration-300 text-lg group"
                >
                  <span className="mr-3 transform group-hover:translate-x-1 transition-transform duration-300">
                    ›
                  </span>
                  Privacy Policy
                </a>
                <a
                  href="#contact"
                  className="flex items-center text-blue-100 hover:text-white transition-colors duration-300 text-lg group"
                >
                  <span className="mr-3 transform group-hover:translate-x-1 transition-transform duration-300">
                    ›
                  </span>
                  Contact Us
                </a>
              </nav>
            </div>
          </div>

          {/* SUBSCRIBE NOW Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold mb-6 text-white">
                SUBSCRIBE NOW
              </h2>
              <div className="w-12 h-0.5 bg-white mb-8"></div>
              <p className="text-blue-100 leading-relaxed text-lg mb-8">
                Don't miss our future updates! Get Subscribed Today!
              </p>
            </div>

            {/* Email Subscription */}
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your mail here"
                  className="w-full px-6 py-4 rounded-lg bg-white/90 backdrop-blur-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30 focus:bg-white transition-all duration-300"
                />
                <button
                  onClick={handleSubscribe}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
                  aria-label="Subscribe to newsletter"
                >
                  <Mail size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Copyright Section */}
      {/* add backdrop-blur-sm next to the bg-black/20 */}
      <div className="relative z-10 border-t border-white/20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-white font-bold text-center sm:text-left">
              ©2025 All Rights Reserved | Spire AirTech Ltd.
            </p>
            <a
              href="#sitemap"
              className="text-white font-bold hover:text-white transition-colors duration-300"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ZecoFooter;
