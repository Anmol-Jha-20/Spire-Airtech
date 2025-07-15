import React, { useState } from "react";
import { motion } from "framer-motion";

const PharmaAHUKeyHighlights = () => {
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
      title: "A Clean Air Solution Built to Pharmaceutical Standards.",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            The Pharma AHU, also known as a Hygienic Air Handling Unit, is
            purpose-built for industries that require a high level of
            cleanliness, contamination control, and regulatory compliance.
            Unlike standard AHUs, every aspect of the Pharma AHU is engineered
            to uphold hygiene—starting from its SS 304 or aluminium internal
            construction and smooth paneling that prevents dust or microbial
            buildup.
          </p>
          <p className="text-gray-700 leading-relaxed">
            It features advanced filtration up to ULPA levels, backward curved
            or EC plug fans for quiet yet powerful airflow, and integrated
            germicidal options like UV-C lamps. The unit supports airflow
            capacities from 1,000 to over 60,000 CFM and is modular in design
            for space-optimized, flexible integration.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The AHU’s three-sloped stainless steel drain pan, anti-vibration
            mounts, and hermetically sealed filter sections ensure easy
            cleanability and maximum performance. Designed for real-time
            monitoring and BMS/SCADA integration, it’s ideal for environments
            where sterility, safety, and energy efficiency are paramount.
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
            <span className="text-gray-700">GMP-compliant design</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">HEPA/ULPA filtration</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">Stainless steel components</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">Antimicrobial inner surfaces</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">Low-leakage construction</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">Integrated DOP/PAO ports</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">BMS compatible</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">EC/IE5 motors & VFDs</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">UV lamps</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">Smooth internal finish</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">Sectional/modular design</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">Differential pressure gauges</span>
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
            <span className="text-gray-700">Regulatory Compliance</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">Contamination Control</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">
              Sterile & Controlled Environment
            </span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">Energy Efficiency</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">Hygienic Construction</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">Easy Maintenance & Validation</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">Modular & Customizable</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">Real-Time Monitoring</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">Enhanced Product Safety</span>
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
            </div>
          </div>
          <div>
            <div className="flex items-start gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="font-semibold text-gray-800 mb-2">
                Filtration:
              </div>
            </div>
            <div className="ml-4 text-gray-700">
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Pre-filters: G4 / EU4 (90% efficiency)
              </p>
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Fine filters: F7–F9 (up to 95%)
              </p>
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                HEPA filters: H13 / H14 (99.97% @ 0.3 µm)
              </p>
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                ULPA optional: U15–U17 (99.9995%)
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
                EC / backward curved centrifugal / plug fans
              </p>
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                VFD compatible
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
            </div>
          </div>
          <div>
            <div className="flex items-start gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="font-semibold text-gray-800 mb-2">
                Motor & Drive:
              </div>
            </div>
            <div className="ml-4 text-gray-700">
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                IE3 / IE5 energy-efficient motors
              </p>
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Direct or belt-driven (low noise)
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-start gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="font-semibold text-gray-800 mb-2">
                Accessories
              </div>
            </div>
            <div className="ml-4 text-gray-700">
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                UV-C germicidal lamps (optional)
              </p>
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Differential pressure gauges for filters
              </p>
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                DOP/PAO test ports
              </p>
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Anti-vibration mounts
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-start gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="font-semibold text-gray-800 mb-2">
                Controls & Integration
              </div>
            </div>
            <div className="ml-4 text-gray-700">
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                BMS / SCADA compatible
              </p>
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                PLC-based automation (optional)
              </p>
              <p>
                <span class="inline-block w-2 h-2 rounded-full border-2 border-gray-500 align-middle mr-2"></span>
                Temperature / RH sensors & control logic
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

export default PharmaAHUKeyHighlights;
