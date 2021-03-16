import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import Header from "./Header";
import Content from "./Content";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function Application() {
    return (
        <div className={"application"}>
            <Header/>
            <div className={"center"}>
                <Sidebar/>
                <Content/>
            </div>
            <Footer/>
        </div>
    );
}
