import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  User,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Calendar,
  Globe,
  Building,
  ExternalLink,
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    service: "",
    preferredTime: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        service: "",
        preferredTime: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Our Address",
      content: "1896/31, Gaur Potteries, Rajendra Park",
      subcontent: "Near PNB Bank, Gurugram-122001, Haryana, India",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Number",
      content: "+91 93117 78119",
      subcontent: "Mon - Sat: 9:00 AM - 6:00 PM",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Address",
      content: "contact@company.com",
      subcontent: "We'll respond within 24 hours",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      content: "Monday - Saturday",
      subcontent: "9:00 AM - 6:00 PM IST",
      color: "bg-orange-100 text-orange-600",
    },
  ];

  const services = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Digital Marketing",
    "E-commerce Solutions",
    "Custom Software",
    "Consulting",
    "Other",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <motion.div
        className="container mx-auto px-4 py-16 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-gray-800 mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
              Touch
            </span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible. Let's start a conversation about your next
            project.
          </motion.p>
        </motion.div>

        {/* Success Message */}
        <AnimatePresence>
          {submitted && (
            <motion.div
              className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 z-50"
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              transition={{ duration: 0.3 }}
            >
              <CheckCircle className="w-5 h-5" />
              <span>Message sent successfully!</span>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Enhanced Contact Form */}
          <motion.div
            className="bg-white rounded-3xl shadow-2xl p-8 lg:px-12 relative overflow-hidden"
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {/* Form background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-30 -translate-y-16 translate-x-16"></div>

            <div className="flex items-center mb-8 relative z-10">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-3 rounded-lg mr-4">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-800">
                  Send Message
                </h2>
                <p className="text-gray-600">
                  Fill out the form below to get in touch
                </p>
              </div>
            </div>

            <div className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div className="relative" whileFocus={{ scale: 1.02 }}>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg transition-all duration-200 ${
                        errors.name
                          ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                          : "border-gray-200 focus:border-blue-500 focus:ring-blue-200"
                      } focus:ring-2 focus:outline-none`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <motion.p
                        className="text-red-500 text-xs mt-1 flex items-center"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <AlertCircle className="w-3 h-3 mr-1" />
                        {errors.name}
                      </motion.p>
                    )}
                  </div>
                </motion.div>

                <motion.div className="relative" whileFocus={{ scale: 1.02 }}>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg transition-all duration-200 ${
                        errors.email
                          ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                          : "border-gray-200 focus:border-blue-500 focus:ring-blue-200"
                      } focus:ring-2 focus:outline-none`}
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <motion.p
                        className="text-red-500 text-xs mt-1 flex items-center"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <AlertCircle className="w-3 h-3 mr-1" />
                        {errors.email}
                      </motion.p>
                    )}
                  </div>
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <motion.div className="relative" whileFocus={{ scale: 1.02 }}>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </motion.div>

                {/* <motion.div className="relative" whileFocus={{ scale: 1.02 }}>
                  <label
                    htmlFor="service"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Service Interested In
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </motion.div> */}
                <motion.div className="relative" whileFocus={{ scale: 1.02 }}>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg transition-all duration-200 ${
                      errors.subject
                        ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                        : "border-gray-200 focus:border-blue-500 focus:ring-blue-200"
                    } focus:ring-2 focus:outline-none`}
                    placeholder="Enter message subject"
                  />
                  {errors.subject && (
                    <motion.p
                      className="text-red-500 text-xs mt-1 flex items-center"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <AlertCircle className="w-3 h-3 mr-1" />
                      {errors.subject}
                    </motion.p>
                  )}
                </motion.div>
              </div>

              <motion.div className="relative" whileFocus={{ scale: 1.02 }}>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border-2 rounded-lg transition-all duration-200 resize-none ${
                    errors.message
                      ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                      : "border-gray-200 focus:border-blue-500 focus:ring-blue-200"
                  } focus:ring-2 focus:outline-none`}
                  placeholder="Tell us about your project, requirements, or any questions you have..."
                />
                {errors.message && (
                  <motion.p
                    className="text-red-500 text-xs mt-1 flex items-center"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <AlertCircle className="w-3 h-3 mr-1" />
                    {errors.message}
                  </motion.p>
                )}
              </motion.div>

              <motion.div
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transform transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 shadow-lg hover:shadow-xl cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSubmit}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="hidden md:block mt-16 rounded"
              alt=""
            />
          </motion.div>

          {/* Contact Information & Map */}
          <div className="space-y-8">
            {/* Contact Info Cards */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -3, scale: 1.02 }}
                  custom={index}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg ${info.color}`}>
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {info.title}
                      </h3>
                      <p className="text-gray-700 font-medium">
                        {info.content}
                      </p>
                      <p className="text-gray-500 text-sm mt-1">
                        {info.subcontent}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Google Map */}
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-2 flex items-center">
                    <Globe className="w-6 h-6 mr-2" />
                    Find Us Here
                  </h3>
                  <p className="text-blue-100">
                    Visit our office for face-to-face consultation
                  </p>
                </div>
              </div>
              {/* <div className="h-80 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.1234567890!2d77.0412345!3d28.4594567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI3JzM0LjAiTiA3N8KwMDInMjguNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our Office Location - Gaur Potteries, Rajendra Park, Gurugram"
                />
                <div className="absolute inset-0 bg-blue-600 bg-opacity-5 pointer-events-none" />
              </div> */}
              <div className="relative h-96 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.6381968454953!2d77.00518107549566!3d28.490440675742608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d175fb3b99d39%3A0x23d2933aa6f1f9fd!2sGaur%20potteries!5e0!3m2!1sen!2sin!4v1752081301196!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Company Location Map"
                ></iframe>
              </div>
              <div className="mt-7 p-4 flex flex-wrap gap-2">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    "1896/31, Gaur Potteries,Rajendra, Park Gurgaon, Gaur Pottries near PNB Bank, Gurugram-122001, Haryana, India"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors duration-300 font-medium"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white relative overflow-hidden"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-50"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your vision to life. Schedule
              a consultation today!
            </p>
            <motion.button
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Consultation
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
