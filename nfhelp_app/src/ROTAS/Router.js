import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../HOME/Home";
import RecepcaoNf from "../NF/RECEPCAO/RecepcaoNf";
//import Nf from "./NF/Nf";
//import Links from "./LINKS/Links";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/Home"} element={<Home />} exact />

                <Route path={"/Recepcao"} element={<RecepcaoNf />} exact />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;