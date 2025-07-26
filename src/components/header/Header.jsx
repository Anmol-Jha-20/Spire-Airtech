import React, { useState } from "react";
import { ChevronDown, Search, Phone, Menu, X, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Header() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [hoveredSubcategory, setHoveredSubcategory] = useState(null);
  const [mobileOpenMenus, setMobileOpenMenus] = useState({});
  const navigate = useNavigate();

  const manufacturingData = {
    "Air Conditioning": [],
    Ventillation: [],
    "Heat Exchanger Coils": [],
    "Air Distribution Ducts": [],
  };

  const ManufacturingDropdown = ({ data }) => {
    const hasSubcategories =
      hoveredCategory &&
      data[hoveredCategory] &&
      data[hoveredCategory].length > 0;
    const currentSubcategory =
      hoveredCategory &&
      hoveredSubcategory &&
      data[hoveredCategory].find((item) => item.name === hoveredSubcategory);
    const hasItems =
      currentSubcategory &&
      currentSubcategory.items &&
      currentSubcategory.items.length > 0;
    return (
      <div
        className={`absolute top-full left-0 ${
          hasSubcategories
            ? hasItems
              ? "w-[700px]"
              : "w-[600px]"
            : "w-[300px]"
        } shadow-xl z-50`}
      >
        <div className="flex">
          {/* Left Column - Categories */}
          <div
            style={{ width: hasSubcategories ? "33.333%" : "100%" }}
            className="w-1/3 bg-gray-50 p-4 space-y-1"
          >
            {Object.entries(data).map(([category, items]) => {
              const hasChildren = items.length > 0;
              return (
                <div
                  key={category}
                  className={`p-3 rounded cursor-pointer flex items-center justify-between ${
                    hoveredCategory === category
                      ? "bg-red-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onMouseEnter={() => setHoveredCategory(category)}
                  onClick={() => {
                    if (!hasChildren) {
                      navigate(
                        `/${category.toLowerCase().replace(/\s+/g, "-")}`
                      );
                    }
                  }}
                >
                  <span className="text-sm font-medium">{category}</span>
                  {/* <Plus className="w-4 h-4" /> */}
                  {items.length > 0 && <Plus className="w-4 h-4" />}
                </div>
              );
            })}
          </div>

          {/* Middle Column - Subcategories */}
          {hasSubcategories && (
            <div className="w-1/3 bg-white p-4 space-y-1">
              {hoveredCategory && data[hoveredCategory] && (
                <>
                  {data[hoveredCategory].map((item, index) => {
                    const hasItems = item.items && item.items.length > 0;
                    return (
                      <div
                        key={index}
                        className={`p-3 rounded cursor-pointer flex items-center justify-between ${
                          hoveredSubcategory === item.name
                            ? "bg-red-50 text-blue-600"
                            : "text-gray-700 hover:bg-gray-200"
                        }`}
                        onMouseEnter={() => setHoveredSubcategory(item.name)}
                        onClick={() => {
                          if (!hasItems) {
                            navigate(
                              `/${item.name.toLowerCase().replace(/\s+/g, "-")}`
                            );
                          }
                        }}
                      >
                        <span className="text-sm">{item.name}</span>
                        {item.items && item.items.length > 0 && (
                          <Plus className="w-4 h-4" />
                        )}
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          )}

          {/* Right Column - Items */}
          {hasItems && (
            <div className="w-1/3 bg-white p-4 space-y-1">
              {hoveredCategory && hoveredSubcategory && (
                <>
                  {data[hoveredCategory]
                    .find((item) => item.name === hoveredSubcategory)
                    ?.items?.map((subItem, subIndex) => (
                      <div
                        key={subIndex}
                        onClick={() =>
                          navigate(
                            `/${subItem.toLowerCase().replace(/\s+/g, "-")}`
                          )
                        }
                        className="p-3 text-gray-700 hover:text-blue-600 cursor-pointer rounded hover:bg-red-50"
                      >
                        <span className="text-sm">{subItem}</span>
                      </div>
                    ))}
                </>
              )}
            </div>
          )}
        </div>
      </div>
    );
  };

  const toggleMobileMenu = (menuName) => {
    setMobileOpenMenus((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  const MobileDropdown = ({ title, items }) => (
    <div>
      <button
        onClick={() => toggleMobileMenu(title)}
        className="w-full flex items-center justify-between px-3 py-2 text-gray-700 cursor-pointer hover:bg-gray-50"
      >
        <span>{title}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            mobileOpenMenus[title] ? "rotate-180" : ""
          }`}
        />
      </button>
      {mobileOpenMenus[title] && (
        <div className="ml-4 space-y-1">
          {items.map((item, index) => (
            <a
              key={index}
              href="#"
              className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );

  const MobileProductsDropdown = ({ title, data }) => (
    <div>
      <button
        onClick={() => toggleMobileMenu(title)}
        className="w-full flex items-center justify-between py-2 font-medium cursor-pointer text-gray-700 hover:bg-gray-50"
      >
        <span>{title}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            mobileOpenMenus[title] ? "rotate-180" : ""
          }`}
        />
      </button>
      {mobileOpenMenus[title] && (
        <div className="ml-4 space-y-1">
          {Object.entries(data).map(([category, items]) => {
            const hasSub = items.length > 0;
            return (
              <div key={category}>
                <button
                  onClick={() => {
                    if (hasSub) {
                      toggleMobileMenu(category);
                    } else {
                      navigate(
                        `/${category.toLowerCase().replace(/\s+/g, "-")}`
                      );
                      setIsMobileMenuOpen(false);
                    }
                  }}
                  className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                >
                  <span>{category}</span>
                  {hasSub && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        mobileOpenMenus[category] ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>
                {mobileOpenMenus[category] && (
                  <div className="ml-4 space-y-1">
                    {items.map((item, index) => {
                      const hasItems = item.items && item.items.length > 0;
                      return (
                        <div key={index}>
                          <button
                            onClick={() => {
                              if (hasItems) {
                                toggleMobileMenu(`${category}-${item.name}`);
                              } else {
                                navigate(
                                  `/${item.name
                                    .toLowerCase()
                                    .replace(/\s+/g, "-")}`
                                );
                                setIsMobileMenuOpen(false);
                              }
                            }}
                            className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"
                          >
                            <span>{item.name}</span>
                            {item.items && item.items.length > 0 && (
                              <ChevronDown
                                className={`w-4 h-4 transition-transform ${
                                  mobileOpenMenus[`${category}-${item.name}`]
                                    ? "rotate-180"
                                    : ""
                                }`}
                              />
                            )}
                          </button>
                          {mobileOpenMenus[`${category}-${item.name}`] &&
                            item.items &&
                            item.items.length > 0 && (
                              <div className="ml-4 space-y-1">
                                {item.items.map((subItem, subIndex) => (
                                  <button
                                    key={subIndex}
                                    onClick={() => {
                                      navigate(
                                        `/${subItem
                                          .toLowerCase()
                                          .replace(/\s+/g, "-")}`
                                      );
                                      setIsMobileMenuOpen(false);
                                    }}
                                    className="block px-3 py-2 text-xs text-gray-500 hover:bg-gray-50"
                                  >
                                    {subItem}
                                  </button>
                                ))}
                              </div>
                            )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );

  return (
    <header className="bg-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex-shrink-0">
            <div className="flex items-center">
              {/* <div className="text-2xl md:text-3xl font-bold text-blue-600">
                Spire AirTech
              </div> */}
              <img
                src={"Logo.png"}
                className="h-10 md:h-12 lg:h-12 object-contain"
                alt="Logo"
              />
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => navigate("/")}
              className="text-gray-700 hover:text-red-500 font-medium transition-colors cursor-pointer"
            >
              HOME
            </button>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setHoveredDropdown("about")}
              onMouseLeave={() => setHoveredDropdown(null)}
            >
              <button
                onClick={() => navigate("/about-us")}
                className="flex items-center text-gray-700 hover:text-red-500 font-medium transition-colors cursor-pointer"
              >
                ABOUT
              </button>
            </div>

            {/* Projects Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setHoveredDropdown("projects")}
              onMouseLeave={() => setHoveredDropdown(null)}
            >
              <button className="flex items-center text-gray-700 hover:text-red-500 font-medium transition-colors">
                PROJECTS
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {/* {hoveredDropdown === "projects" && (
                <div
                  className="absolute top-full left-0 w-48 bg-white rounded-md shadow-lg py-2 z-50"
                  onMouseEnter={() => setHoveredDropdown("projects")}
                  onMouseLeave={() => setHoveredDropdown(null)}
                >
                  <Link
                    to={"/chillers"}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    AIR COOLER CHILLERS
                  </Link>
                  <Link
                    to={"/vrf-airconditioning"}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    VRF/V AIRCONDITIONING SYSTEMS
                  </Link>
                  <Link
                    to={"/water-cooled-dx-unit"}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    WATER COOLED DX UNIT
                  </Link>
                  <Link
                    to={"/ducted-split-airconditioners"}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    DUCTED SPLIT AIRCONDITIONERS
                  </Link>
                  <Link
                    to={"/water-cooled-chiller"}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    WATER COOLED CHILLER
                  </Link>
                </div>
              )} */}
              {hoveredDropdown === "projects" && (
                <div
                  className="absolute top-full left-0 w-56 bg-white rounded-md shadow-lg py-2 z-50"
                  onMouseEnter={() => setHoveredDropdown("projects")}
                  onMouseLeave={() => setHoveredDropdown(null)}
                >
                  {/* Chillers with Submenu */}
                  <div className="relative group">
                    <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer flex justify-between items-center">
                      CHILLERS
                      <ChevronDown className="w-4 h-4 ml-2" />
                    </div>
                    <div className="absolute top-0 left-full ml-1 w-56 bg-white rounded-md shadow-lg py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
                      <Link
                        to="/chillers"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        AIR COOLED CHILLER
                      </Link>
                      <Link
                        to="/water-cooled-chiller"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        WATER COOLED CHILLER
                      </Link>
                    </div>
                  </div>

                  {/* Other Project Links */}
                  <Link
                    to="/vrf-airconditioning"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    VRF/VRV AIRCONDITIONING SYSTEMS
                  </Link>
                  <Link
                    to="/water-cooled-dx-unit"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    WATER COOLED DX UNIT
                  </Link>
                  <Link
                    to="/ducted-split-airconditioners"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    DUCTED SPLIT AIRCONDITIONERS
                  </Link>
                </div>
              )}
            </div>

            {/* Manufacturing Dropdown - New Enhanced Version */}
            <div
              className="relative"
              onMouseEnter={() => setHoveredDropdown("manufacturing")}
              onMouseLeave={() => {
                setHoveredDropdown(null);
                setHoveredCategory(null);
                setHoveredSubcategory(null);
              }}
            >
              <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors">
                MANUFACTURING
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {hoveredDropdown === "manufacturing" && (
                <ManufacturingDropdown data={manufacturingData} />
              )}
            </div>

            <button
              onClick={() => navigate("/services")}
              className="text-gray-700 hover:text-red-500 font-medium transition-colors cursor-pointer"
            >
              SERVICES
            </button>

            <button
              onClick={() => navigate("/contact-us")}
              className="text-gray-700 hover:text-red-500 font-medium transition-colors cursor-pointer"
            >
              CONTACT
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            {/* <button className="hidden md:block p-2 text-gray-500 hover:text-gray-700">
              <Search className="h-5 w-5" />
            </button> */}

            <a
              href="tel:+919311778119"
              className="bg-red-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center"
            >
              <Phone className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">+91 9311778119</span>
              <span className="sm:hidden">Call</span>
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-500 hover:text-gray-700"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <div className="px-4 py-2 space-y-2">
              <button
                onClick={() => {
                  navigate("/");
                  setIsMobileMenuOpen(false);
                }}
                className="block py-2 text-gray-700 hover:text-red-500 font-medium"
              >
                HOME
              </button>
              <div className="py-2">
                <button
                  onClick={() => {
                    navigate("/about-us");
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center w-full text-left text-gray-700 hover:text-red-500 font-medium"
                >
                  ABOUT
                  {/* <ChevronDown className="ml-1 h-4 w-4" /> */}
                </button>
                {/* {isAboutOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <a
                      href="#our-story"
                      className="block py-1 text-sm text-gray-600"
                    >
                      Our Story
                    </a>
                    <a
                      href="#team"
                      className="block py-1 text-sm text-gray-600"
                    >
                      Team
                    </a>
                    <a
                      href="#certifications"
                      className="block py-1 text-sm text-gray-600"
                    >
                      Certifications
                    </a>
                  </div>
                )} */}
              </div>
              <div className="py-2">
                <button
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className="flex items-center w-full text-left text-gray-700 hover:text-red-500 font-medium"
                >
                  PROJECTS
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isProductsOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {/* <Link
                      to={"/chillers"}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      AIR COOLER CHILLERS
                    </Link>
                    <Link
                      to={"/vrf-airconditioning"}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      VRF/V AIRCONDITIONING SYSTEMS
                    </Link>
                    <Link
                      to={"/water-cooled-dx-unit"}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      WATER COOLED DX UNIT
                    </Link>
                    <Link
                      to={"/ducted-split-airconditioners"}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      DUCTED SPLIT AIRCONDITIONERS
                    </Link>
                    <Link
                      to={"/water-cooled-chiller"}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      WATER COOLED CHILLER
                    </Link> */}
                    {/* CHILLERS with nested mobile menu */}
                    <div>
                      <button
                        onClick={() => toggleMobileMenu("chillers")}
                        className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <span>CHILLERS</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            mobileOpenMenus["chillers"] ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {mobileOpenMenus["chillers"] && (
                        <div className="ml-4 space-y-1">
                          <button
                            onClick={() => {
                              navigate("/chillers");
                              setIsMobileMenuOpen(false);
                            }}
                            className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"
                          >
                            AIR COOLED CHILLER
                          </button>
                          <button
                            onClick={() => {
                              navigate("/water-cooled-chiller");
                              setIsMobileMenuOpen(false);
                            }}
                            className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"
                          >
                            WATER COOLED CHILLER
                          </button>
                        </div>
                      )}
                    </div>
                    <Link
                      to="/vrf-airconditioning"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      VRF/VRV AIRCONDITIONING SYSTEMS
                    </Link>
                    <Link
                      to="/water-cooled-dx-unit"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      WATER COOLED DX UNIT
                    </Link>
                    <Link
                      to="/ducted-split-airconditioners"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      DUCTED SPLIT AIRCONDITIONERS
                    </Link>
                  </div>
                )}
              </div>

              {/* <a
                href="#manufacturing"
                className="block py-2 text-gray-700 hover:text-red-500 font-medium"
              >
                MANUFACTURING <ChevronDown className="w-4 h-4 ml-1" />
              </a> */}
              <MobileProductsDropdown
                title="MANUFACTURING"
                data={manufacturingData}
              />

              <button
                onClick={() => {
                  navigate("/services");
                  setIsMobileMenuOpen(false);
                }}
                className="block py-2 text-gray-700 hover:text-red-500 font-medium"
              >
                SERVICES
              </button>
              <button
                onClick={() => {
                  navigate("/contact-us");
                  setIsMobileMenuOpen(false);
                }}
                className="block py-2 text-gray-700 hover:text-red-500 font-medium"
              >
                CONTACT
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
