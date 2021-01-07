import React from "react";
import {Image, Navbar} from "react-bootstrap";


export default function Header() {
    return (
        <>
            <Navbar fixed="top" bg="dark">
                <Navbar.Brand href="./" className="col-sm-1">
                    <Image src="favicon.ico"/>
                </Navbar.Brand>
                <Navbar.Text style={{textAlign: "center", color: "white", fontWeight: "bold", fontSize: "20px"}} className="col-sm-11">
                    Page Title
                </Navbar.Text>
            </Navbar>
        </>
    );
}
