import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Wind,
  Zap,
  Shield,
  Thermometer,
  Filter,
  Fan,
  Cpu,
  Building,
  ArrowRight,
} from "lucide-react";

import DuctedImage from "../../assets/DuctedSplit.png";

const DuctedSplitAirConditioner = () => {
  const [activeProduct, setActiveProduct] = useState(null);
  const products = [
    {
      category: "AWU (Air",
      description:
        "An AHU (Air Handling Unit) is a key component of an air conditioning system that conditions and circulates air as part of a heating, ventilating, and air-conditioning (HVAC) system. It typically contains components such as fans, heating/cooling coils, filters, and dampers. AHUs are used to regulate and distribute air throughout a building, ensuring proper ventilation, temperature control, and air quality.",
      items: [
        {
          title: "Ducted Split AC (High-Efficiency Model)",
          description:
            "This high-efficiency ducted split AC is designed to deliver superior cooling while optimizing energy consumption. It comes with advanced features such as smart temperature control, air filtration, and an inverter compressor, making it ideal for large homes and commercial spaces. The unit can be discreetly installed, with the indoor unit concealed in a ceiling or hidden space, providing uniform air distribution across the room. With its energy-efficient operation and reduced power consumption, this unit helps cut down electricity costs while maintaining a cool and comfortable environment.",
          image: DuctedImage,
          specs: ["5 Star Rating", "Inverter Technology", "Smart Controls"],
        },
        {
          title: "Ducted Split AC (Premium Comfort Model)",
          description:
            "Designed for ultimate comfort, this premium ducted split AC offers powerful cooling with advanced technology such as multi-zone temperature control and humidity regulation. Ideal for high-end homes, offices, and luxury commercial spaces, it ensures that each room maintains the perfect temperature. The system operates quietly, with reduced noise levels to enhance comfort. Equipped with air purifiers, it also improves indoor air quality by removing allergens and pollutants, creating a healthier environment.",
          image:
            "data:image/jpeg;base64,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",
          specs: ["Automated Control", "Energy Saving", "Large Coverage"],
        },
        {
          title: "Ducted Split AC (Smart Inverter Model)",
          description:
            "This smart inverter model provides consistent cooling with variable speed control that adjusts based on room temperature. It ensures optimal comfort while minimizing energy usage, making it a perfect choice for eco-conscious consumers. The intelligent system automatically adjusts power usage to meet the exact cooling demands of the space, avoiding wasteful energy consumption. The system’s ability to operate efficiently under various load conditions makes it suitable for both small and large spaces, ensuring long-term savings and reduced environmental impact.",
          image:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA9AMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQUCAwYEB//EAEIQAAECBAAICwYEBAcAAAAAAAABAgMEBREGEhUWUlSS0SFBUVVWgZGTodLhMWFxgqLTIzNywTREY6MiJENFU3WU/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APuIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFypbhFSX47Wz8FHMe5jkxkujkWyoYrXKav8AuMIC5BTZcpnOEMjLlM5xhgXNxcpsuU3nCGMuU3nCGBdApcuUznCGMuUznCGBcgpsuUznCGRlyl84Q+wC7IuUuXKXzhD7EJy7S+cYfgBc39xJR5bpevw+wLW6Vr8MC7BSJW6XxT8PwGW6Xr8IC8BR5apevwiFrNM1+EBedYKPLNM5xheAyxTdfh+AF5cXKPLFN1+H4EJWabr8NOwC9uLlOyuUxt7z0N3WiGWXqWv85C2gLa4uVOXaZrkLaJy7S9dg7YFsDw02pS1RSKspFbEbCfiOVvEtr28T3AAAAIUkL7APmzsFJ6FNzb2xpZ7Ysw+Ki4zkVEVyrZUsex9In3uVXQKbf5k/Y6WKv4jvipgqgcrHwfn4rmqjZKGiJb8Nzkv4GrNqoacttu3HX3IuByObM/pyu27yjNmf05Xbd5TrrhAOSzYqGnK7btwzYqGnK7btx1xNwOQzYqGnLbbtwzZqGnLbbtx11xcDkM2ahpy227cM2ahpy3eO3HXC4HIZtVDSl9tdwzaqGlL7a7jr7kXA5FcGp/Sl9tdxGbU/pS+2u4665CqByWbVQ0pfvF3DNuocsv3i7jrbi4HI5uVDll+8XcRm5UOWB3noddcXA5DNyof0O89AuDlQ/od56HXXIVQORzdqHJB7z0IzdqPEkHvPQ65VCKByOblR5IPeehOblR5IPeeh11+EyQDVgRS41Kp8dkw6Gr4sdYlmXVGpZE9qoh0p46Z+SvxPYAAAAhSSFApYq/iv/UphcmL+a/8AUpgoEqpFzEgDO5KONdxcDbjDGNdxcDZjEYxhci4GeMFU1qpCuA2YwxjTcYwG3GIVxrVxGMBtxiMY14wuBsxhc13IxgNqqQqmvGFwM7i5hclAM0UyRTXczQC3pf5C/qPaeOl/w/WewAAAAUACkip+I/8AUpgqG+NZIr096mpVTlA1qhipmqt5TFXN5QMASrm8pF26QAXIxm6SC7dICbkKLt0iLt0gIIUm7dJCLt0kAggng0kI4NIApBPBpDg0kAAcGkgumkgAgy4NJCLJyoBAQng5UJ4OVAIQlCU+KE8HKBCGaEJblMkAuKZ/DdZ7DyU1P8snxPWAAAAhSQBVz8HFiLERLtcc/hFPz1Nl4ESnU1k858TEcx0wkLEunAt1RU93WdlEY17cVyXQ8sanSseE6FFhYzHJZWqvAoHzxa9hPx4HLf8A7OHuMMv4SceBzuqqQtx2q4JUZf5Xxua3YHUh3+k5PhbcBxq17CLobE6qnC8pGXsIePA2P1VGHuOwXAykr7GuTqTcYOwJpq+xVT5UA5NK7Xuhs1/7oa/sTl2u9DZ3qnIR07sB5FfZE+j1MFwDk19kdU+RfMBzeXa5x4HT/VNQhl2t34cDqj1TMLedDmFK8UyuyvmMcwoHFNfSu8Cgy7Weh1S7+FvGXav0PqnfQfMX+YkJPZNfSpGYjNbXx3gUWXav0PqvfQfMTlyq9Eat3kHzF5mK3Wl7XbyUwFbrK9qgUaVup8eCVXT54PnMstVDjwTrKdcH7hd5jM1pe1RmMzWl8QKVK1P9Fa1/Y+4MtT3Rat9kD7hdpgND45rwUlMBYPHMrsrvApctznReubMD7oy3N9GK7sQful3mNL607ZXeSmA0rrLtlfMBR5bmejFf7qD90llciK9jYmD1dhNc5G48SFBxW3W11tF9nUXmYsnxzD/q8xslsC5WWmIcZszFXEW6NW9l8QNaQvcvaHWYn+K6dZdpSm2/OXZIdSGOSzorl+VAKhqYyIqItjLE9y9pcJTGf8juxDJlOhNciuc51uJeMDdIw1hSrEcvCvCp6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//2Q==",
          specs: ["Automated Control", "Energy Saving", "Large Coverage"],
        },
        {
          title: "Ducted Split AC (Commercial Model)",
          description:
            "This budget-friendly ducted split AC is perfect for those who need reliable cooling at an affordable price. Despite its cost-effective pricing, it delivers efficient cooling and reliable performance, ensuring a comfortable indoor climate for both residential and commercial spaces. It features easy installation and straightforward operation while maintaining energy efficiency. The unit is designed to offer consistent airflow across the space, making it an ideal choice for areas that require uniform cooling at an economical cost.",
          image:
            "data:image/jpeg;base64,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",
          specs: ["Automated Control", "Energy Saving", "Large Coverage"],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1655039353512-ab38d6a37a92?q=80&w=589&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* <SnowEffect /> */}
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Seamless Comfort with Ducted Split Air Conditioners
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100"
          >
            Transform your space with our Ducted Split Air Conditioners,
            offering invisible yet powerful cooling. Enjoy consistent, quiet,
            and energy-efficient comfort across multiple rooms with a sleek,
            hidden installation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center gap-2 cursor-pointer">
              Get Quote <ArrowRight className="w-5 h-5" />
            </button>
            {/* <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
              Get Quote
            </button> */}
          </motion.div>
        </div>
      </motion.section>

      {/* Products Section */}
      {products.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-20">
          {/* <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              {category.category}
            </h3>
            {category.description && (
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {category.description}
              </p>
            )}
          </div> */}

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-20 gap-8">
            {category.items.map((product, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100"
              >
                {/* Image Container */}
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Floating Badge */}
                  {/* <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold text-gray-900 shadow-lg">
                            Premium
                          </div> */}
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {product.title}
                  </h4>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Specs */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {product.specs.map((spec, specIndex) => (
                        <span
                          key={specIndex}
                          className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-200"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl font-medium">
                    <span>Contact Us</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DuctedSplitAirConditioner;
