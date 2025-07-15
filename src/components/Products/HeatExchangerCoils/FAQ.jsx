import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQComponent = () => {
  const [openItems, setOpenItems] = useState({ 0: true }); // First item open by default

  const faqData = [
    {
      question: "What are heat exchangers used for in HVAC systems?",
      answer:
        "Heat exchangers transfer thermal energy between two fluids, usually air and water or refrigerant, without mixing them. They are used for both heating and cooling purposes in air handling units and fan coil systems.",
    },
    {
      question: "How do DX cooling coils work?",
      answer:
        "DX (Direct Expansion) cooling coils work by allowing refrigerant to expand directly within the coil, absorbing heat from the air passing over it. The refrigerant evaporates as it absorbs heat, providing efficient cooling for HVAC systems.",
    },
    {
      question:
        "What is the difference between a chilled water coil and a DX coil?",
      answer:
        "Chilled water coils use water as the heat transfer medium, circulating chilled water through the coil to cool air. DX coils use refrigerant that expands directly in the coil. Chilled water systems are better for large applications, while DX systems are more efficient for smaller spaces.",
    },
    {
      question: "Can heat exchangers be customized for my HVAC setup?",
      answer:
        "Yes, heat exchangers can be customized based on your specific HVAC requirements including size, capacity, materials, and configuration. Custom solutions ensure optimal performance and efficiency for your particular application.",
    },
    {
      question: "Where can I find HVAC suppliers in India for heat exchangers?",
      answer:
        "You can find HVAC suppliers for heat exchangers through industry directories, trade associations, online marketplaces, and local distributor networks. Many manufacturers have regional offices and authorized dealers across major Indian cities.",
    },
    {
      question: "What makes Spire's Heat Exchangers energy-efficient?",
      answer:
        "Spire's heat exchangers feature advanced design elements like optimized fin patterns, high-quality materials, enhanced heat transfer surfaces, and precision manufacturing that maximize thermal efficiency while minimizing energy consumption.",
    },
    {
      question: "Can the coils handle aggressive or corrosive environments?",
      answer:
        "Yes, coils can be designed with specialized materials and coatings to handle aggressive or corrosive environments. Options include epoxy coatings, stainless steel construction, and specialized alloys depending on the specific environmental conditions.",
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
              className="w-full px-6 py-4 text-left flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
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

export default FAQComponent;
