import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import About from "./About";
import Home from "./Home";
// import your route components too
export default class RouterComponenet extends React.Component{
    render(){
    return(
        <BrowserRouter>
        <Routes>
          <Route path="/about" element={<About />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    )
}
}

