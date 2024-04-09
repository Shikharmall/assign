import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Describe from "./pages/Describe";
import Interest from "./pages/Interest";
import RightPlace from "./pages/RightPlace";
import MathsLevel from "./pages/MathsLevel";
import OnWay from "./pages/OnWay";
import YourResponse from "./pages/YourResponse";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <Routes>
      <Route exact path="/" element={<Describe />} />
      <Route exact path="/interest" element={<Interest />} />
      <Route exact path="/rightplace" element={<RightPlace />} />
      <Route exact path="/mathslevel" element={<MathsLevel />} />
      <Route exact path="/onway" element={<OnWay />} />
      <Route exact path="/yourresponse" element={<YourResponse />} />
    </Routes>
  );
}

export default App;
