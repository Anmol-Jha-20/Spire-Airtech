import React, { useState } from "react";
import { ChevronDown, Search, Phone, Menu, X } from "lucide-react";
import AboutSection from "../components/about/AboutSection.jsx";
import Footer from "../components/footer/Footer.jsx";
import ProductRange from "../components/productRange/ProductRange.jsx";
import ManufacturingShowcase from "../components/manufacturing/ManufacturingShowcase.jsx";
import TestimonialsSection from "../components/testimonials/TestimonialsSection.jsx";
import CertificationsCarousel from "../components/hero/Certification.jsx";
import AffiliatesBanner from "../components/hero/AffilatesBanner.jsx";
import SnowEffect from "../components/snow/SnowEffect.jsx";
import Header from "../components/header/Header.jsx";

export default function HomePage() {
  // const [isProductsOpen, setIsProductsOpen] = useState(false);
  // const [isAboutOpen, setIsAboutOpen] = useState(false);
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const [hoveredDropdown, setHoveredDropdown] = useState(null);

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <title>
          Spire AirTech Management System & Solutions - Indian Made, Globally
          Certified
        </title>

        {/* Header */}

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
          <SnowEffect />
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1703260809882-5b0b8d6abc76?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            }}
          ></div>

          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <h1 className="text-white text-2xl md:text-3xl font-extrabold mb-4 leading-tight tracking-wide">
              Air conditioning is our main line of business and specialization
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Spire AirTech Management System & Solutions
            </p>
            <button className="bg-red-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition-all cursor-pointer duration-300 transform hover:scale-105 shadow-lg">
              Get Free Consultation
            </button>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-white" />
          </div>
        </section>
      </div>
      <AboutSection />
      <CertificationsCarousel />
      <ProductRange />
      <ManufacturingShowcase />
      <AffiliatesBanner />
      <TestimonialsSection />
      {/* <Footer /> */}
    </>
  );
}
