import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import * as appActions from '../actions/appActions';
import Spinner from './Spinner';
import {Grid} from '@material-ui/core';
import Thumbnail from "./Thumbnail";


const Album = (props) => {

    const {profiles, profilesLoading} = props.app;

    useEffect(() => (
        props.dispatch(appActions.getProfiles())
    ), [])


    if (profilesLoading)
        return <Spinner/>

    return (
        <>
            <Grid container>
                {
                    profiles.map(
                        (profile, index) => (
                            <Thumbnail key={index} profile={profile}/>
                        )
                    )
                }
            </Grid>
        </>
    )

}

export default connect(store => {
    return {
        app: store.get('album')
    }
})(Album);
