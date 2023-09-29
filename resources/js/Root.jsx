import React from "react";
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Page1 from "./pages/Landing/Page1";
import Page2 from "./pages/Landing/Page2";

function Root(){

    return(
        <>
            <Routes>
                <Route path='/' exact={true} element={<Page1 />}/>
                <Route path='/page-2' exact={true} Component={Page2}/>
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