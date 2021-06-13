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
    Grid,
    Table
} from "@material-ui/core";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import * as profileActions from "../actions/profileActions";

const Profile = (props) => {

    const {id} = useParams();

    useEffect(() => {
        props.dispatch(profileActions.getProfile(id));
    },[]);

    const {name, alias, base, debutIn, debutOn} = props.profile;

    return (
        <>
            <Box
                sx={{
                    backgroundColor: 'background.default',
                    minHeight: '100%',
                    py: 3
                }}
            >
                <Container maxWidth="lg">
                    <Grid
                        container
                        spacing={3}
                    >
                        <Grid
                            item
                            lg={8}
                            md={6}
                            xs={12}
                        >
                            <Card>
                                <Box
                                    sx={{
                                        alignItems: 'center',
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}
                                >
                                    <CardHeader
                                        title={"Abilities"}
                                    />
                                    <CardContent
                                        style={{minHeight: "200px"}}
                                    />
                                    <Divider/>
                                    <CardHeader
                                        title={"Bio"}
                                    />
                                    <CardContent
                                        style={{minHeight: "450px"}}
                                    />
                                </Box>
                            </Card>
                        </Grid>
                        <Grid
                            item
                            lg={4}
                            md={6}
                            xs={12}
                        >
                            <Card>
                                <Box
                                    sx={{
                                        alignItems: 'center',
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}
                                >
                                    <CardHeader
                                        title={name}
                                        subheader={alias}
                                    />
                                    <CardMedia
                                        component="img"
                                        image={"/photo/" + id}
                                        style={{height: "350px", width: "250px"}}
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
                                </Box>
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
                </Container>
            </Box>
        </>
    )
}

export default connect(store => {
    return {
        profile: store.get('profile')
    }
})(Profile);
