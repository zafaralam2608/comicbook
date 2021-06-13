import React, {Component} from "react";
import {Button, ButtonGroup, Card} from "react-bootstrap";
import {connect} from "react-redux";
import {Delete, Edit, Visibility} from "@material-ui/icons";
import * as appActions from "../actions/appActions";
import {Link} from "react-router-dom";


class Album extends Component {

    componentDidMount() {
        this.retrieveDataFromServer();
    }

    retrieveDataFromServer() {
        this.props.dispatch(appActions.getProfiles());
    }

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
                                      style={{width: "250px", height: "350px", color: "black"}}>
                                    <Card.Img variant="top" src={"images/" + profile.callsign}
                                              style={{width: "150px", height: "200px"}}/>
                                    <Card.Body>
                                        <Card.Title>{profile.name}</Card.Title>
                                        <Card.Subtitle>{profile.alias}</Card.Subtitle>
                                        <ButtonGroup size="sm">
                                            <Link to={"/profile/" + profile.callsign}>
                                            <Button className="m-1"><Visibility/></Button>
                                            </Link>
                                            <Button variant="dark" className="m-1"><Edit/></Button>
                                            <Button variant="dark" className="m-1"><Delete/></Button>
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
