import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Outlet } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import Header from "./components/header/Header.jsx";
import ZecoFooter from "./components/footer/Footer.jsx";

function App() {
  return (
    <>
      <Header />

      <Outlet />
      <ZecoFooter />
    </>
  );
}

export default App;
