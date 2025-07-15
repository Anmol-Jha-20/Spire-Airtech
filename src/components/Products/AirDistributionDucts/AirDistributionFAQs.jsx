import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQAirDistribution = () => {
  const [openItems, setOpenItems] = useState({ 0: true }); // First item open by default

  const faqData = [
    {
      question: "What types of ducts does SPIRE manufacture?",
      answer:
        "SPIRE manufactures three main types of ducts—Rectangular, Oval, and Round—to suit various space layouts, airflow requirements, and aesthetic preferences in HVAC systems.",
    },
    {
      question: "What materials are used in SPIRE’s ducting systems?",
      answer:
        "Our ducts are made from high-quality Galvanized Iron (G.I.), Stainless Steel (SS 304/316), or Aluminum, depending on application needs and environmental conditions.",
    },
    {
      question: "How fast is the installation process?",
      answer:
        "Thanks to prefabricated modular design and precision fitment, installation is quicker and smoother, reducing overall project timelines.",
    },
    {
      question: "Are SPIRE ducts insulated?",
      answer:
        "Yes, we offer both internally and externally insulated ducts using materials like Glass Wool, Rock Wool, or Nitrile Rubber for thermal and acoustic performance.",
    },
    {
      question:
        "Can the ducts be customized for specific project requirements?",
      answer:
        "Absolutely! We manufacture ducts as per your project drawings and specifications, ensuring custom sizes, fittings, and configurations for seamless integration.",
    },
    {
      question: "Do SPIRE ducts comply with industry standards?",
      answer:
        "Yes. Our ducts are manufactured following SMACNA, ASHRAE, and other international standards to ensure top-tier performance, safety, and efficiency.",
    },
    {
      question: "What kind of joints and sealing systems are used?",
      answer:
        "We use leak-proof sealing techniques, including Pittsburgh or Snap Lock seams and high-quality gaskets or sealants, to minimize air leakage and improve system efficiency.",
    },
    {
      question: "What applications are these ducts best suited for?",
      answer:
        "SPIRE ducts are ideal for commercial buildings, industrial plants, hospitals, data centers, malls, airports, and residential projects requiring centralized HVAC systems.",
    },
    {
      question: "How does SPIRE ensure product quality?",
      answer:
        "Each duct undergoes phase-wise quality inspections, precision fabrication, and pressure testing to ensure performance, durability, and compliance.",
    },
    {
      question: "How do you ensure minimal air leakage in your duct systems?",
      answer:
        "We use advanced seam technologies, gaskets, sealants, and flanged joints that comply with SMACNA sealing class A, B, or C for maximum leak prevention.",
    },
    {
      question: "What types of insulation do you offer?",
      answer:
        "We provide both internal and external insulation using closed or open-cell nitrile rubber, depending on acoustic and thermal needs.",
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

export default FAQAirDistribution;
