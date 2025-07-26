import React from "react";
import {
  CheckCircle,
  Users,
  Award,
  Clock,
  MapPin,
  Wrench,
  Shield,
  Star,
} from "lucide-react";

const ServicesPage = () => {
  const uspFeatures = [
    "Quick replacement of spares",
    "Experience of 20+ Years",
    "Service Team of 180 +",
    "Maintaining 30,000 +TR of Air Conditioning",
    "Well qualified Supervisor & Technician's team",
  ];

  const serviceLocations = [
    "Delhi NCR",
    "Meerut",
    "Moradabad",
    "Agra",
    "Mathura",
    "Bareilly",
    "Dehradun",
    "Ambala",
    "Sirsa",
    "Hisar",
    "Rewari",
    "Panipat",
    "Karnal",
    "Chandigarh",
    "Rohtak",
    "Aligarh",
    "Etawah",
    "Palwal",
    "Sonipat",
    "Ludhiana",
  ];

  const brands = ["Hitachi", "Daikin", "Carrier", "Voltas", "Blue Star"];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Our <span className="text-blue-200">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive HVAC solutions across North India with 20+ years of
              excellence
            </p>
            {/* <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-blue-200">30,000+</div>
                <div className="text-sm">TR Maintained</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-blue-200">180+</div>
                <div className="text-sm">Service Team</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-blue-200">25+</div>
                <div className="text-sm">Service Centers</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-blue-200">20+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 border-t-4 border-blue-600">
              <div className="flex items-center mb-4">
                <Shield className="h-12 w-12 text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">AMC</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Annual Maintenance Contracts for all major AC & Chiller brands
                with comprehensive coverage
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 border-t-4 border-blue-600">
              <div className="flex items-center mb-4">
                <Wrench className="h-12 w-12 text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">OCR</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                On Call One Time Repair with health checkups and prompt problem
                resolution
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 border-t-4 border-blue-600">
              <div className="flex items-center mb-4">
                <Clock className="h-12 w-12 text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">PMS</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Preventative Maintenance Service to enhance system longevity and
                efficiency
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AMC Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Annual Maintenance{" "}
                <span className="text-blue-600">Contracts</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We provide comprehensive AMCs for all major brands of Air
                conditioners & Chillers including Hitachi, Daikin, Carrier,
                Voltas, Blue Star and more. Our dedicated inventory ensures
                major spare parts are always available.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                With over 30,000 TR of AC, VRV, Low Side Equipment & Chiller
                units under maintenance across North India, our permanent
                service teams in 25+ towns ensure prompt and reliable service
                delivery.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {brands.map((brand, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-blue-50 p-3 rounded-lg"
                  >
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                    <span className="font-medium text-gray-800">{brand}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              {/* <div className="bg-blue-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <Shield className="h-24 w-24 text-blue-600 mx-auto mb-4" />
                  <p className="text-blue-800 font-medium">
                    AMC Services Illustration
                  </p>
                </div>
              </div> */}
              <img
                src="https://images.unsplash.com/photo-1642749776312-aa42ce20c9f5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Annual Maintenance"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OCR Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                On Call <span className="text-blue-600">One Time Repair</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our expert team conducts thorough health checkups and performs
                one-time repairs based on approved estimates. We're equipped
                with the latest tools and technology to identify and resolve
                issues quickly and cost-effectively.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Quick Diagnosis
                    </h4>
                    <p className="text-gray-700">
                      Latest tools for rapid problem identification
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Affordable Solutions
                    </h4>
                    <p className="text-gray-700">
                      Cost-effective repair estimates and solutions
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Expert Technicians
                    </h4>
                    <p className="text-gray-700">
                      Skilled professionals with years of experience
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:order-1">
              {/* <div className="bg-blue-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <Wrench className="h-24 w-24 text-blue-600 mx-auto mb-4" />
                  <p className="text-blue-800 font-medium">
                    OCR Services Illustration
                  </p>
                </div>
              </div> */}
              <img
                src="https://img.freepik.com/free-photo/repairman-doing-air-conditioner-service_1303-26541.jpg?t=st=1753207991~exp=1753211591~hmac=3eaf579e09d1f2ffe76696d6b6110a6a96479ba6f8e19b8c6e982759f35315d1&w=996"
                alt="On Call Repair"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PMS Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Preventative{" "}
                <span className="text-blue-600">Maintenance Service</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our service team provides regular preventative maintenance for
                air conditioners through contracts ranging from 3 to 4 months,
                designed to improve system resilience and extend the longevity
                of your cooling systems.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">Benefits</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Prevents unit breakdowns</li>
                    <li>• Improves energy efficiency</li>
                    <li>• Reduces running costs</li>
                    <li>• Lower carbon emissions</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">Coverage</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• System optimization</li>
                    <li>• Performance enhancement</li>
                    <li>• Extended equipment life</li>
                    <li>• Quicker payback periods</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              {/* <div className="bg-blue-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <Clock className="h-24 w-24 text-blue-600 mx-auto mb-4" />
                  <p className="text-blue-800 font-medium">
                    PMS Services Illustration
                  </p>
                </div>
              </div> */}
              <img
                src="https://img.freepik.com/free-photo/checking-conditioner_1098-17787.jpg?t=st=1753208609~exp=1753212209~hmac=f9da5f3425236eec91726f281f3a037f760a57458b854044fcbf5b2926fa0c02&w=996"
                alt="Preventative Maintenance Service"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Network */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Service Network</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              With 100+ service technicians across North India, we ensure prompt
              and reliable service delivery
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <MapPin className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">
                Service Locations
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {serviceLocations.map((location, index) => (
                <div
                  key={index}
                  className="bg-blue-50 px-4 py-2 rounded-lg text-center"
                >
                  <span className="text-gray-800 font-medium">{location}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Unique Selling Points</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              What sets us apart in the HVAC industry
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Backed by a well-equipped store for spares, tools, and supplier
                network, we can supply authentic components of multiple brands
                at competitive prices. Our fast, efficient service ensures parts
                are delivered to your site promptly.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We maintain extensive stocks of spare parts that can normally be
                provided same-day for all your regular maintenance and breakdown
                needs. Our experienced technical team is competent enough to
                detect problems and provide cost-effective solutions quickly.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our team consists of well-qualified technicians backed by
                supervisors with 5 to 20 years of experience in the HVAC
                industry.
              </p>
            </div>

            <div className="rounded-2xl p-8 h-96 flex items-center justify-center">
              {/* <div className="text-center">
                <Star className="h-24 w-24 text-blue-600 mx-auto mb-4" />
                <p className="text-blue-800 font-medium">
                  Our USP Illustration
                </p>
              </div> */}
              <img
                src="https://smallbusiness-staging.s3.amazonaws.com/uploads/2017/10/USP-121017-1568x1045.jpeg"
                alt="USP"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {uspFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-blue-600 text-white p-6 rounded-xl shadow-lg hover:bg-blue-700 transition-colors duration-300"
              >
                <div className="flex items-center">
                  <Award className="h-6 w-6 mr-3 flex-shrink-0" />
                  <span className="font-semibold">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience Excellence?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for all your HVAC maintenance and repair needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => (window.location.href = "tel:919311778119")}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 cursor-pointer transition-colors duration-300"
            >
              Contact Us
            </button>
            {/* <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
              Contact Us
            </button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
