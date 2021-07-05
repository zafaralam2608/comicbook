import React, {useEffect, useState} from "react";
import {Box, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Grid, Table} from "@material-ui/core";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import * as profileActions from "../actions/profileActions";
import Spinner from "./Spinner";
import {useStyles} from "../constants/styles";

const Profile = (props) => {
    const classes = useStyles();

    const {id} = useParams();

    const [img, setImg] = useState('../photo/' + id);
    const [logo, setLogo] = useState('../logo/' + id);

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
                                    <td>
                                        <a href={links.official}>
                                            <img src={logo} alt={'o'}
                                                 onError={()=>{setLogo('../images/logo');}}
                                            />
                                        </a>
                                    </td>
                                </tr>
                                </tbody>
                            </Table>
                        </CardContent>
                        <Divider/>
                        <CardActions>
                            <a href={links.wikipedia}>
                                <img src={'../logos/wikipedia.svg'} alt={'w'}/>
                            </a>
                            <a href={links.instagram}>
                                <img src={'../logos/instagram.svg'} alt={'i'}/>
                            </a>
                            <a href={links.twitter}>
                                <img src={'../logos/twitter.svg'} alt={'t'}/>
                            </a>
                            <a href={links.facebook}>
                                <img src={'../logos/facebook.svg'} alt={'f'}/>
                            </a>
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
