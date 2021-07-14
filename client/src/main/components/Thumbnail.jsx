import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Card, CardActions, CardHeader, CardMedia,
} from '@material-ui/core';
import { Delete, Edit, Visibility } from '@material-ui/icons';
import useStyles from '../constants/styles';

const Thumbnail = ({ profile }) => {
  const classes = useStyles();

  const { id, name, alias } = profile;

  const [img, setImg] = useState(`../photo/${id}`);

  return (
    <Card className={classes.photoCard}>
      <CardHeader
        title={name}
        subheader={alias}
      />
      <CardMedia
        className={classes.photoSquare}
        component="img"
        image={img}
        onError={() => { setImg('../images/photo'); }}
      />
      <CardActions>
        <Button
          variant="text"
          href={`/profile/${id}`}
        >
          <Visibility />
          View
        </Button>
        <Button
          variant="text"
          href={`/profile/${id}`}
        >
          <Edit />
          Edit
        </Button>
        <Button
          variant="text"
          href={`/profile/${id}`}
        >
          <Delete />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

Thumbnail.propTypes = {
  profile: PropTypes.exact({
    id: PropTypes.number,
    name: PropTypes.string,
    alias: PropTypes.string,
  }).isRequired,
};

export default Thumbnail;
