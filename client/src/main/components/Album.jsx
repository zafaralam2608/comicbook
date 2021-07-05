import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Delete, Edit, Visibility} from '@material-ui/icons';
import * as appActions from '../actions/appActions';
import Spinner from './Spinner';
import {Button, Card, CardActions, CardHeader, CardMedia, Grid} from '@material-ui/core';
import {useStyles} from "../constants/styles";


const Album = (props) => {
    const classes = useStyles();

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
                            <Card key={index} item className={classes.photoCard}>
                                <CardHeader
                                    title={profile.name}
                                    subheader={profile.alias}
                                />
                                <CardMedia
                                    component='img'
                                    image={'photo/' + profile.id}
                                    className={classes.photoSquare}
                                />
                                <CardActions>
                                    <Button
                                        variant='text'
                                        href={'/profile/' + profile.id}
                                    >
                                        <Visibility/>
                                        View
                                    </Button>
                                    <Button
                                        variant='text'
                                        href={'/profile/' + profile.id}
                                    >
                                        <Edit/>
                                        Edit
                                    </Button>
                                    <Button
                                        variant='text'
                                        href={'/profile/' + profile.id}
                                    >
                                        <Delete/>
                                        Delete
                                    </Button>
                                </CardActions>
                            </Card>
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
