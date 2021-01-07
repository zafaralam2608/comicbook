import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Header from "./components/Header";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";

export default function Application() {
    return (
        <Container fluid className="justify-content-center">
            <Row>
                <Header/>
            </Row>
            <Row style={{paddingTop: "70px"}}>
                <Content/>
                {/*<Col className="col-sm-1">
                    <Sidebar/>
                </Col>
                <Col className="col-sm-11">
                    <Content/>
                </Col>*/}
            </Row>
        </Container>
    );
}
