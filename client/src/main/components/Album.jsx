import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import * as appActions from '../actions/appActions';
import Spinner from './Spinner';
import Thumbnail from './Thumbnail';

const Album = ({ app, dispatch }) => {
  const { profiles, profilesLoading } = app;

  useEffect(() => (
    dispatch(appActions.getProfiles())
  ), []);

  if (profilesLoading) { return <Spinner />; }

  return (
    <>
      <Grid container>
        {
          profiles.map(
            (profile) => (
              <Thumbnail key={profile.id} profile={profile} />
            ),
          )
        }
      </Grid>
    </>
  );
};

Album.propTypes = {
  dispatch: PropTypes.func.isRequired,
  app: PropTypes.exact({
    profilesLoading: PropTypes.bool,
    profiles: PropTypes.arrayOf(PropTypes.element),
  }).isRequired,
};

export default connect((store) => ({
  app: store.get('album'),
}))(Album);
