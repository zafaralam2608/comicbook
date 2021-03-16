import React, {Component} from "react";
import {Card, Col, Container, Image, Row, Table} from "react-bootstrap";

export default class Profile extends Component {
    render() {
        return (
            <>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <div style={{width: "300px", height: "600px", alignItems: "center"}}>
                        <Image style={{width: "225px", height: "300px"}} src={"/images/wonderwoman"}/>
                        <Table style={{width: "300px", height: "300px"}} variant={"dark"}>
                            <tbody>
                            <tr>
                                <th>Alias</th>
                                <td>Diana Prince</td>
                            </tr>
                            <tr>
                                <th>Base</th>
                                <td>Themyscira</td>
                            </tr>
                            <tr>
                                <th>Debut in</th>
                                <td>name</td>
                            </tr>
                            <tr>
                                <th>Debut on</th>
                                <td>year</td>
                            </tr>
                            <tr>
                                <th>Some</th>
                                <td>some</td>
                            </tr>
                            <tr>
                                <th>Universe</th>
                                <td>DC</td>
                            </tr>
                            <tr>
                                <th>Official</th>
                                <td>link</td>
                            </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div style={{width: "100%", minHeight: "600px", alignItems: "center"}}>
                        <Card style={{minHeight: "300px"}}>
                            <Card.Header>Abilities</Card.Header>
                            <Card.Text>
                                Content
                            </Card.Text>
                        </Card>
                        <Card style={{minHeight: "300px"}}>
                            <Card.Header>Bio</Card.Header>
                            <Card.Text>
                                Content
                            </Card.Text>
                        </Card>
                    </div>
                </div>
            </>
        )
    }
}
