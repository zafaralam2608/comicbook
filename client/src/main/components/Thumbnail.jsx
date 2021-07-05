import {Button, Card, CardActions, CardHeader, CardMedia} from "@material-ui/core";
import {Delete, Edit, Visibility} from "@material-ui/icons";
import React, {useState} from "react";
import {useStyles} from "../constants/styles";

const Thumbnail = (props) => {
    const classes = useStyles();

    const {id, name, alias} = props.profile;

    const [img, setImg] = useState('../photo/' + id);

    return (
        <Card className={classes.photoCard}>
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
            <CardActions>
                <Button
                    variant='text'
                    href={'/profile/' + id}
                >
                    <Visibility/>
                    View
                </Button>
                <Button
                    variant='text'
                    href={'/profile/' + id}
                >
                    <Edit/>
                    Edit
                </Button>
                <Button
                    variant='text'
                    href={'/profile/' + id}
                >
                    <Delete/>
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}

export default Thumbnail;
