import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const SmartAHUFAQComponent = () => {
  const [openItems, setOpenItems] = useState({ 0: true }); // First item open by default

  const faqData = [
    {
      question: "What makes Smart AHU different from conventional AHUs?",
      answer:
        "Smart AHU integrates IoT, predictive maintenance, and real-time monitoring—unlike traditional units that rely on manual operation and periodic checks.",
    },
    {
      question: "Is Smart AHU compatible with my existing BMS?",
      answer:
        "Yes, it supports all major communication protocols like BACnet, Modbus, and KNX for seamless BMS integration.",
    },
    {
      question: "Can I monitor and control Smart AHU remotely?",
      answer:
        "Absolutely. Remote access is available via mobile app, web dashboard, or cloud-based platforms using Wi-Fi, Ethernet, or GSM.",
    },
    {
      question: "How energy efficient is Smart AHU?",
      answer:
        "With EC/VFD fans, optimized coils, and energy logging, it significantly reduces power consumption—improving your facility’s energy performance.",
    },
    {
      question: "What types of filters are available?",
      answer:
        "Standard G4/MERV 8 pre-filters with options for Fine, HEPA, Carbon, and Chemical filters based on your indoor air quality needs.",
    },
    {
      question: "Does Smart AHU support OTA (Over-the-Air) updates?",
      answer:
        "Yes, OTA firmware updates are supported, allowing you to stay updated with the latest features and diagnostics.",
    },
    {
      question: "What is the airflow range of Smart AHU?",
      answer:
        "The unit is scalable from 1,000 CFM to over 60,000 CFM, making it suitable for everything from small offices to large hospitals.",
    },
    {
      question: "Is the construction suitable for hygienic applications?",
      answer:
        "Yes, Smart AHU features stainless steel components, corrosion-resistant coatings, and sloped drain pans, ideal for cleanroom or healthcare settings.",
    },
    {
      question: "What safety standards does Smart AHU comply with?",
      answer:
        "Smart AHU is Eurovent, AHRI, CE, and ISO 9001:2015 certified, ensuring compliance with global safety, quality, and performance standards.",
    },
  ];

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="max-w-4xl ml-6 md:ml-20 p-6 bg-white">
      <h1 className="text-4xl font-bold text-blue-800 mb-8">FAQ's</h1>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <motion.div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
            >
              <span
                className={`text-base font-medium transition-colors duration-200 ${
                  openItems[index] ? "text-blue-600" : "text-gray-700"
                }`}
              >
                {item.question}
              </span>

              <motion.div
                animate={{ rotate: openItems[index] ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0 ml-4"
              >
                {openItems[index] ? (
                  <Minus className="w-5 h-5 text-blue-600" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-500" />
                )}
              </motion.div>
            </button>

            <AnimatePresence>
              {openItems[index] && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 py-4 bg-white border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SmartAHUFAQComponent;
