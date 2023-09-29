import React from "react";
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Page1 from "./pages/Landing/Page1";
import Page2 from "./pages/Landing/Page2";
import Page3 from "./pages/Landing/Page3";
import Page4 from "./pages/Landing/Page4";
import Page5 from "./pages/Landing/Page5";

function Root(){

    return(
        <>
            <Routes>
                <Route path='/' exact={true} element={<Page1 />}/>
                <Route path='/page-2' exact={true} Component={Page2}/>
                <Route path='/page-3' exact={true} Component={Page3}/>
                <Route path='/page-4' exact={true} Component={Page4}/>
                <Route path='/page-5' exact={true} Component={Page5}/>
            </Routes>
        </>
    )
}

if (document.getElementById('root')) {
    const Index = ReactDOM.createRoot(document.getElementById("root"));

    Index.render(
        <BrowserRouter>
            <Root />
        </BrowserRouter>
    )
}
