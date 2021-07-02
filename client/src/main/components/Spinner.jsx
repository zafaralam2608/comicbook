import {CircularProgress, Grid} from '@material-ui/core';
import React from 'react';

const Spinner = () => {
    return (
        <>
            <Grid container spacing={3}
                  direction='column'
                  justify='center'
                  alignItems='center'
            >
                <Grid item>
                    <CircularProgress/>
                </Grid>
                <Grid item>
                    <p>Loading</p>
                </Grid>
            </Grid>
        </>
    );
}

export default Spinner;
