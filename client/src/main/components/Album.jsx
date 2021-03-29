import React, {Component} from "react";
import {Button, ButtonGroup, Card} from "react-bootstrap";
import Content from "./Content";
import {connect} from "react-redux";
import {Application} from "./Application";


class Album extends Component {

    render() {

        const profiles = this.props.app.albumList;

        return profiles && profiles.length > 0
            ?
            (
                <div className={"album"}>
                    {
                        profiles.map(
                            (profile, index) => (
                                <Card key={index} className="m-1 p-1 align-items-center"
                                      style={{width: "250px", height: "350px"}}>
                                    <Card.Img variant="top" src={"images/" + profile.callsign}
                                              style={{width: "150px", height: "200px"}}/>
                                    <Card.Body>
                                        <Card.Title>{profile.name}</Card.Title>
                                        <Card.Subtitle>{profile.alias}</Card.Subtitle>
                                        <ButtonGroup size="sm">
                                            {
                                                ['View', 'Edit', 'Delete'].map(
                                                    (a) => (
                                                        <Button key={a} variant="dark" className="m-1">{a}</Button>
                                                    )
                                                )
                                            }
                                        </ButtonGroup>
                                    </Card.Body>
                                </Card>
                            )
                        )
                    }
                </div>
            )
            : <div>No Profile found. Create new</div>
            ;
    }
}

export default connect(store => {
    return {
        app: store.get('app')
    }
})(Album);
