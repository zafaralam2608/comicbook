import React, {Component} from "react";
import Album from "./Album";
import {connect} from "react-redux";
import {Application} from "./Application";

class Content extends Component {
    render() {
        return (
            <div className={"content"}>
                <Album/>
            </div>
        );
    }

}

export default connect(store => {
    return {
        app: store.get('app')
    }
})(Content);
