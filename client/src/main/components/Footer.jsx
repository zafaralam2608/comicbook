import React from "react";
import {Image, Navbar} from "react-bootstrap";

export default function Footer() {
    return (
        <div className={"footer"}>
            <Navbar fixed="bottom" bg="dark">
                <Navbar.Text style={{textAlign: "center", color: "white", fontWeight: "bold", fontSize: "10px"}} >
                    Page Footer
                </Navbar.Text>
            </Navbar>
        </div>
    );
}
