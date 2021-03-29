import "bootstrap/dist/css/bootstrap.min.css";

import React, {Component} from "react";
import Header from "./Header";
import Content from "./Content";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import {connect} from "react-redux";
import * as appActions from "../actions/appActions";

export class Application extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.retrieveDataFromServer();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //this.retrieveDataFromServer();
    }

    render() {
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

    retrieveDataFromServer() {
        this.props.dispatch(appActions.getProfiles());
    }
}

export default connect(store => {
    return {
        app: store.get('app')
    }
})(Application);
