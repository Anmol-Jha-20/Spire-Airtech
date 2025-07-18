import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import Manufacturing from "./pages/manufacturing.jsx";
import ServicePage from "./pages/ServicePage.jsx";
import HeatExchangerCoils from "./components/Products/HeatExchangerCoils/HeatExchangerCoils.jsx";
import AirDistributionDucts from "./components/Products/AirDistributionDucts/AirDistributionDucts.jsx";
import SmartAHU from "./components/Products/SmartAHU/SmartAHU.jsx";
import PharmaAHU from "./components/Products/PharmaAHU/PharmaAHU.jsx";
import CleanroomAHU from "./components/Products/CleanroomAHU/CleanroomAHU.jsx";
import FloorMountedAHU from "./components/Products/FloorMountedAHU/FloorMountedAHU.jsx";
import AirConditioning from "./components/manufacturing/AirConditioning.jsx";
import Ventillation from "./components/manufacturing/Ventillation.jsx";
import PreInsulatedPipes from "./components/Products/Pre-InsulatedPipes/PreInsulatedPipes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about-us",
        element: <AboutPage />,
      },
      {
        path: "/projects",
        element: <ProjectPage />,
      },
      {
        path: "/manufacturing",
        element: <Manufacturing />,
      },
      {
        path: "/services",
        element: <ServicePage />,
      },
      {
        path: "/contact-us",
        element: <ContactPage />,
      },
      {
        path: "/heat-exchanger-coils",
        element: <HeatExchangerCoils />,
      },
      {
        path: "/air-distribution-ducts",
        element: <AirDistributionDucts />,
      },
      {
        path: "/smart-ahu",
        element: <SmartAHU />,
      },
      {
        path: "/pharma-ahu",
        element: <PharmaAHU />,
      },
      {
        path: "/cleanroom-ahu",
        element: <CleanroomAHU />,
      },
      {
        path: "/floor-mounted-ahu",
        element: <FloorMountedAHU />,
      },
      {
        path: "/air-conditioning",
        element: <AirConditioning />,
      },
      {
        path: "/ventillation",
        element: <Ventillation />,
      },
      {
        path: "/pre-insulated-pipes",
        element: <PreInsulatedPipes />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
