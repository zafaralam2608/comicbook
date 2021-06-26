import React, {useEffect} from "react";
import {Button, ButtonGroup, Card} from "react-bootstrap";
import {connect} from "react-redux";
import {Delete, Edit, Visibility} from "@material-ui/icons";
import {Link} from "react-router-dom";
import * as appActions from "../actions/appActions";
import {CircularProgress} from "@material-ui/core";


const Album = (props) => {

    const {profiles, profilesLoading} = props.app;

    useEffect(() => (
        props.dispatch(appActions.getProfiles())
    ), [])


    return (
        <>
            {
                profiles.map(
                    (profile, index) => (
                        <Card key={index} className="m-1 p-1 align-items-center"
                              style={{width: "250px", height: "350px", color: "black"}}>
                            <Card.Img variant="top"
                                      src={profile.callsign ? "images/" + profile.callsign : "images/batman"}
                                      style={{width: "150px", height: "200px"}}/>
                            <Card.Body>
                                <Card.Title>{profile.name}</Card.Title>
                                <Card.Subtitle>{profile.alias}</Card.Subtitle>
                                <ButtonGroup size="sm">
                                    <Button className="m-1" href={"/profile/" + profile.id}><Visibility/></Button>
                                    <Button variant="dark" className="m-1"><Edit/></Button>
                                    <Button variant="dark" className="m-1"><Delete/></Button>
                                </ButtonGroup>
                            </Card.Body>
                        </Card>
                    )
                )
            }
        </>
    )

}

export default connect(store => {
    return {
        app: store.get('album')
    }
})(Album);
