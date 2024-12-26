import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";



const Router = () => {

    return(
        <>
        <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Login />} />
  
        </Routes>
        </>
    );
};

export default Router;
