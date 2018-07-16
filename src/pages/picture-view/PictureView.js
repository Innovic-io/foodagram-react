import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { tileData } from "../../components/picture-grid/tileData/tileData";
import Profile from "../profile/Profile";

const styles = theme => ({
  card: {
    boxShadow: 'none',
  },
  media: {
    height: 0,
    paddingTop: '80%',
  },
  actions: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  avatar: {
    marginTop: 2,
    marginBottom: 1
  },
});

class PictureView extends Component {

  render() {

      const {id} = this.props.match.params;

      const { classes } = this.props;

      return (
            <Grid container>
              <Grid className={classes.actions} item xs={12} md={9}>
                <img width='100%' src={tileData.find(value => value.id === id).img}/>
              </Grid>
            </Grid>
    )
  }
}
PictureView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PictureView);
