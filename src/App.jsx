import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./component/Navigation/Header";
import Home from "./component/Home/Home";
import Sidebar from "./component/Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { togglesidebar } from "./Redux/Features/Navcontrol/Controlslice";
import Analytical from "./component/Analytical/Analytical";
import Ecommerce from "./component/Ecommerce/Ecommerce";
function App() {
  const toggle = useSelector((state) => state.control.show);
  const dispatch = useDispatch();
  return (
    <>
      <BrowserRouter>
        <div className="main">
          <Header
            togglesidebar={() => dispatch(togglesidebar())}
            toggle={toggle}
          />
          <div className="content">
            <Sidebar toggle={toggle} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/analytical" element={<Analytical />} />
              <Route path="/ecommerce" element={<Ecommerce />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
