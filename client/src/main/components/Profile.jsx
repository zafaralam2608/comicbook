import React, {useEffect, useState} from "react";
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Divider,
    Grid,
    Table
} from "@material-ui/core";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import * as profileActions from "../actions/profileActions";
import Spinner from "./Spinner";
import {useStyles} from "../constants/styles";

const Profile = (props) => {
    const classes = useStyles();

    const {id} = useParams();

    const [img, setImg] = useState('../photo/' + id);

    useEffect(() => {
        props.dispatch(profileActions.getProfile(id));
    }, []);

    const {loading, name, alias, base, debutIn, debutOn, universe, links} = props.profile;

    if (loading)
        return <Spinner/>;


    return (
        <>
            <Grid container spacing={3}>
                <Grid item lg={8} md={6} xs={12}>
                    <Card>
                        <CardHeader
                            title={"Abilities"}
                        />
                        <CardContent
                            style={{minHeight: "200px"}}
                        />
                    </Card>
                    <Box p={2}/>
                    <Card>
                        <CardHeader
                            title={"Bio"}
                        />
                        <CardContent
                            style={{minHeight: "450px"}}
                        />
                    </Card>
                </Grid>
                <Grid item lg={4} md={6} xs={12}>
                    <Card>
                        <CardHeader
                            title={name}
                            subheader={alias}
                        />
                        <CardMedia
                            className={classes.photoSquare}
                            component='img'
                            image={img}
                            onError={()=>{setImg('../images/photo');}}
                        />
                        <CardContent>
                            <Table className={classes.photoSquare}>
                                <tbody>
                                <tr>
                                    <th>Base</th>
                                    <td>{base}</td>
                                </tr>
                                <tr>
                                    <th>Debut in</th>
                                    <td>{debutIn}</td>
                                </tr>
                                <tr>
                                    <th>Debut on</th>
                                    <td>{debutOn}</td>
                                </tr>
                                <tr>
                                    <th>Universe</th>
                                    <td>{universe.name}</td>
                                </tr>
                                <tr>
                                    <th>Official</th>
                                    <td>{links.official}</td>
                                </tr>
                                </tbody>
                            </Table>
                        </CardContent>
                        <Divider/>
                        <CardActions>
                            <Button
                                color="primary"
                                fullWidth
                                variant="text"
                            >
                                Upload picture
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default connect(store => {
    return {
        profile: store.get('profile')
    }
})(Profile);
