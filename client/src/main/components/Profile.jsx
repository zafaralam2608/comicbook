import React, {useEffect} from "react";
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Container,
    Divider,
    Grid, Paper,
    Table
} from "@material-ui/core";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import * as profileActions from "../actions/profileActions";
import clsx from "clsx";
import {useStyles} from "../constants/styles";

const Profile = (props) => {

    const classes = useStyles();

    const {id} = 100000;//useParams();

    useEffect(() => {
        props.dispatch(profileActions.getProfile(id));
    }, []);

    const {name, alias, base, debutIn, debutOn} = props.profile;

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

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
                            component="img"
                            image={"/photo/100000"}
                            style={{height: "250px", width: "250px"}}
                        />
                        <CardContent>
                            <Table style={{width: "250px", height: "250px"}}>
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
                                    <td>DC</td>
                                </tr>
                                <tr>
                                    <th>Official</th>
                                    <td>link</td>
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
