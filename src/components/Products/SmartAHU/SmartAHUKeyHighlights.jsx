import React, { useState } from "react";
import { motion } from "framer-motion";

const SmartAHUKeyHighlights = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = [
    "Overview",
    "Features",
    "Benefits",
    "Technical Specification",
    "Construction Details",
    "Certifications",
  ];

  const tabContent = {
    Overview: {
      title: "Smart Engineering for Future-Ready Air Handling",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            The Smart AHU is a technologically advanced air handling unit built
            for the future of smart infrastructure. It combines intelligent
            digital controls with robust mechanical engineering to deliver peak
            indoor air quality, energy efficiency, and operational reliability.
            Engineered for smart buildings, healthcare, pharmaceuticals, and
            industrial environments, it ensures seamless climate control through
            a host of connected features.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Its smart controls are powered by a PLC or microcontroller paired
            with a user-friendly touchscreen HMI. The unit offers full
            connectivity via Ethernet, Wi-Fi, GSM, or Bluetooth, enabling remote
            access, real-time diagnostics, and OTA firmware updates. Sensor
            integration includes temperature, humidity, CO₂, VOC, airflow, and
            pressure for intelligent automation and real-time feedback.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The construction features a modular, double-skin panel system with
            galvanized steel, stainless steel, or aluminum skins and insulation
            options ranging from PUF to rockwool. Fans are EC or VFD-driven and
            mounted on vibration-isolating platforms, ensuring quiet and
            efficient operation. The coil section includes copper tubes with
            aluminum fins and is supported by advanced pressure and temperature
            sensors.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Smart AHU’s electrical and control compartments are pre-wired for
            easy integration with BMS platforms using open protocols. The unit
            is Eurovent, AHRI, CE, and ISO certified, ensuring compliance with
            global standards for safety, efficiency, and durability. With
            continuous data logging, customizable IAQ and energy reports, and
            predictive analytics, Smart AHU turns your HVAC system into a
            proactive, high-performance asset.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Whether deployed in a hospital ICU, pharmaceutical cleanroom, or a
            green-certified office tower, Smart AHU adapts and delivers with
            precision—ensuring your facility stays efficient, healthy, and
            future-proof.
          </p>
        </div>
      ),
    },
    Features: {
      title: "Key Features",
      content: (
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">Integrated Smart Controls</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">IoT Connectivity</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">Energy Optimization</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">Sensor-Driven Operation</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">Predictive Maintenance</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">User-Friendly Interface</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">Data Logging & Reports</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">BMS Integration</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">Flexible Operation Modes</span>
          </div>
        </div>
      ),
    },
    Benefits: {
      title: "Key Benefits",
      content: (
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">Enhanced Energy Efficiency</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">Improved Indoor Air Quality</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">Remote Monitoring & Control</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">Predictive Maintenance</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">Optimized Comfort</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">Operational Transparency</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">Reduced Maintenance Costs</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">Quick Integration</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">Sustainability Compliance</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">Future-Proof Performance</span>
          </div>
        </div>
      ),
    },
    "Technical Specification": {
      title: "Technical Specifications",
      content: (
        <div className="space-y-4">
          <div>
            <div className="flex items-start gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="font-semibold text-gray-800 mb-2">
                Airflow Capacity:
              </div>
            </div>
            <div className="ml-4 text-gray-700">
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Ranges from 1,000 CFM to 60,000+ CFM
              </p>
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Scalable based on application (offices, hospitals, malls, etc.)
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-start gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="font-semibold text-gray-800 mb-2">
                Fan System:
              </div>
            </div>
            <div className="ml-4 text-gray-700">
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                EC or VFD-controlled centrifugal fans
              </p>
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Direct or belt-driven, with real-time speed modulation
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-start gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="font-semibold text-gray-800 mb-2">
                Filter Section:
              </div>
            </div>
            <div className="ml-4 text-gray-700">
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                G4/MERV 8 pre-filters standard
              </p>
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Optional FIne, HEPA, or carbon filters
              </p>
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Pressure sensors for filter status monitoring
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-start gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="font-semibold text-gray-800 mb-2">
                Cooling/Heating Coils:
              </div>
            </div>
            <div className="ml-4 text-gray-700">
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Chilled water, DX, hot water, or electric heater
              </p>
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Copper tubes with aluminum fins
              </p>
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Multiple rows for high efficiency
              </p>
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Pressure sensors for coil status monitoring
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-start gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="font-semibold text-gray-800 mb-2">
                Smart Controls:
              </div>
            </div>
            <div className="ml-4 text-gray-700">
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                PLC or microcontroller with touchscreen HMI
              </p>
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Wireless/Bluetooth, Ethernet, or GSM connectivity
              </p>
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Remote access via mobile app or web dashboard
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-start gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="font-semibold text-gray-800 mb-2">
                Power Supply:
              </div>
            </div>
            <div className="ml-4 text-gray-700">
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                230V/1Ph/50Hz or 400V/3Ph/50Hz
              </p>
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Integrated power and control panel with safety features
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-start gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="font-semibold text-gray-800 mb-2">
                BMS Compatibility:
              </div>
            </div>
            <div className="ml-4 text-gray-700">
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Supports BACnet, Modbus RTU/TCP, KNX, and other open protocols
              </p>
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Seamless integration with centralized building automation
                systems
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-start gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="font-semibold text-gray-800 mb-2">
                Data & Reporting:
              </div>
            </div>
            <div className="ml-4 text-gray-700">
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Continuous data logging
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
              </p>
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Customizable energy, IAQ, and runtime reports
              </p>
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                OTA firmware updates and diagnostic logs
              </p>
            </div>
          </div>
        </div>
      ),
    },
    "Construction Details": {
      title: "Construction Details",
      content: (
        <div className="space-y-4">
          <div>
            <div className="flex items-start gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="font-semibold text-gray-800 mb-2">
                Casing/Frame:
              </div>
            </div>
            <div className="ml-4 text-gray-700">
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Rigid, galvanized or powder-coated steel Stainless Steel,
                Aluminum
              </p>
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Modular, double & single skin panel construction
              </p>
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Extruded Aluminum Profile Frame Work (Thermal break &
                Non-Thermal break)
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-start gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="font-semibold text-gray-800 mb-2">
                Insulation:
              </div>
            </div>
            <div className="ml-4 text-gray-700">
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                25 mm to 50 mm thick insulation (Density-40 kg/m3 (48 kg/m3, 64
                kg/m3, 96 kg/m3 – Optional) (PUF, Glasswool, Rockwool, PIR))
              </p>
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Provides thermal insulation and acoustic insulation
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-start gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="font-semibold text-gray-800 mb-2">
                Base Frame:
              </div>
            </div>
            <div className="ml-4 text-gray-700">
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Heavy-duty steel or aluminum base
              </p>
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Designed for floor mounting and vibration isolation
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-start gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="font-semibold text-gray-800 mb-2">Panels:</div>
            </div>
            <div className="ml-4 text-gray-700">
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Removable or hinged access doors
              </p>
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Inner skin: galvanized steel (pre-coated or powder coated),
                stainless steel, aluminum
              </p>
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Outer skin: pre-coated, powder-coated steel, stainless steel,
                aluminium
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-start gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="font-semibold text-gray-800 mb-2">Drain Pan:</div>
            </div>
            <div className="ml-4 text-gray-700">
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Sloped stainless steel design
              </p>
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Anti-corrosive and insulated to prevent condensation buildup
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-start gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="font-semibold text-gray-800 mb-2">
                Fan Section:
              </div>
            </div>
            <div className="ml-4 text-gray-700">
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                EC or VFD-driven centrifugal fans
              </p>
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Mounted on vibration-absorbing platforms
              </p>
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Dynamically balanced for low-noise, high-efficiency airflow
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-start gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="font-semibold text-gray-800 mb-2">
                Coil Section:
              </div>
            </div>
            <div className="ml-4 text-gray-700">
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Copper tubes with aluminum fins
              </p>
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Housed in corrosion-resistant frames with drain connections
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-start gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="font-semibold text-gray-800 mb-2">
                Filter Section:
              </div>
            </div>
            <div className="ml-4 text-gray-700">
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Pre-filters in slide-in frames
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
              </p>
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Fine filters, HEPA filters, Carbon filters, Chemical Filters,
                Electronic Air Cleaner
              </p>
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Easy access for replacement
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-start gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="font-semibold text-gray-800 mb-2">
                Electrical & Controls Compartment:
              </div>
            </div>
            <div className="ml-4 text-gray-700">
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Sealed section with microcontroller or PLC-based smart
                controller.
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
              </p>
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Pre-wired for power, sensors, and communication protocols
                (Modbus, BACnet)
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-start gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="font-semibold text-gray-800 mb-2">
                Sensor Integration:
              </div>
            </div>
            <div className="ml-4 text-gray-700">
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Embedded temperature, humidity, CO₂, VOC, airflow, and pressure
                sensors.
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
              </p>
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Real-time data collection for intelligent control
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-start gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="font-semibold text-gray-800 mb-2">
                Connectivity Interface:
              </div>
            </div>
            <div className="ml-4 text-gray-700">
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Includes ports or modules for Wi-Fi, Ethernet, GSM, or
                Bluetooth.
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
              </p>
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Supports remote access, monitoring, and firmware updates
              </p>
            </div>
          </div>
        </div>
      ),
    },
    Certifications: {
      title: "Certifications",
      content: (
        <div className="space-y-4">
          <div>
            <div className="flex items-start gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="font-semibold text-gray-800 mb-2">
                Eurovent Certified : (Standard EN 13053 & EN 1886)
              </div>
            </div>
            <div className="ml-4 text-gray-700">
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Casing strength class : D1
              </p>
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Casing air leakage class at -400 Pa : L1
              </p>
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Casing air leakage at +700 Pa : L1
              </p>
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Filter bypass leakage class : F9
              </p>
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Thermal transmittance class : T2
              </p>
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Thermal bridging factor class : TB2
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-start gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="font-semibold text-gray-800 mb-2">
                AHRI Certified : Standard 1350
              </div>
            </div>
            <div className="ml-4 text-gray-700">
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Casing Deflection Rating Class (Positive) : CD4
              </p>
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Casing Deflection Rating Class (Negative) : CD4
              </p>
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Casing Air Leakage Class (Positive) : CL2
              </p>
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Casing Air Leakage Class (Negative) : CL2
              </p>
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Thermal Transmittance Class With Leakage : CT2
              </p>
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Thermal Transmittance Class Without Leakage : CT2
              </p>
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Thermal Bridging Class : CB2
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-start gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="font-semibold text-gray-800 mb-2">
                CE Certified : (EN ISO 12100:2010, EN 60204-1:2018)
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-start gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="font-semibold text-gray-800 mb-2">
                ISO Certified : (ISO 9001:2015)
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-start gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="font-semibold text-gray-800 mb-2">
                AHRI Certified Chilled Water Coils : AHRI Standard 410
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-start gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="font-semibold text-gray-800 mb-2">
                AHRI Certified Hot Water Coils : AHRI Standard 410
              </div>
            </div>
          </div>
        </div>
      ),
    },
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      {/* SEO friendly heading */}
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">
        Key Highlights
      </h1>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200 mb-6 sm:mb-8">
        <nav
          className="-mb-px flex flex-wrap gap-2 sm:gap-4"
          aria-label="Key Highlights Navigation"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base font-medium whitespace-nowrap transition-colors cursor-pointer duration-200 ${
                activeTab === tab
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              aria-selected={activeTab === tab}
              role="tab"
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-white"
        role="tabpanel"
        aria-labelledby={activeTab}
      >
        {activeTab === "Overview" && (
          <div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-lg sm:text-xl font-semibold text-gray-800 mb-4"
            >
              '{tabContent[activeTab].title}'
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {tabContent[activeTab].content}
            </motion.div>
          </div>
        )}

        {activeTab !== "Overview" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="border border-gray-200 rounded-lg p-4 sm:p-6 bg-gray-50"
          >
            {tabContent[activeTab].content}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default SmartAHUKeyHighlights;
