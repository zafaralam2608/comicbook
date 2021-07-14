import React from 'react';
import { CircularProgress, Grid } from '@material-ui/core';

const Spinner = () => (
  <>
    <Grid
      container
      spacing={3}
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <CircularProgress />
      </Grid>
      <Grid item>
        <p>Loading</p>
      </Grid>
    </Grid>
  </>
);

export default Spinner;
