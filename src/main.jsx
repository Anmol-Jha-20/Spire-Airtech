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
import CeilingSuspendedAhu from "./components/Products/Ceiling Suspended Ahu/CeilingSuspendedAhu.jsx";
import TFA from "./components/Products/tfa/TFA.jsx";
import SingleStageAirWasher from "./components/Products/SingleStageAirWasher/SingleStageAirWasher.jsx";
import SpireIndirectDirectUnit from "./components/Products/SpireIndirectDirectUnit/SpireIndirectDirectUnit.jsx";
import VRFAirconditioning from "./components/Projects/VRFAirconditioning.jsx";
import Chillers from "./components/Projects/Chillers.jsx";
import FdvFan from "./components/Projects/FdvFan.jsx";
import DuctedSplitAirConditioner from "./components/Projects/DuctedSplitAirconditioner.jsx";
import WaterCooledChiller from "./components/Projects/WaterCooledChiller.jsx";

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
        path: "/ceiling-suspended-ahu",
        element: <CeilingSuspendedAhu />,
      },
      {
        path: "/tfa",
        element: <TFA />,
      },
      {
        path: "/single-stage-air-washer",
        element: <SingleStageAirWasher />,
      },
      {
        path: "/spire-indirect-direct-evaporative-cooling-unit",
        element: <SpireIndirectDirectUnit />,
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
      {
        path: "/vrf-airconditioning",
        element: <VRFAirconditioning />,
      },
      {
        path: "/chillers",
        element: <Chillers />,
      },
      {
        path: "/water-cooled-dx-unit",
        element: <FdvFan />,
      },
      {
        path: "/ducted-split-airconditioners",
        element: <DuctedSplitAirConditioner />,
      },
      {
        path: "/water-cooled-chiller",
        element: <WaterCooledChiller />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
