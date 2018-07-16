import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import './FollowerInfo.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    background: 'none',
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class FollowerInfo extends Component {

  renderItem = (classes, name) => {

    return(
      <Grid item xs={4} sm={4}>
        <Paper className={classes.paper} elevation={0}>
          <Typography variant="headline" color={'inherit'} gutterBottom>
            {this.props[name]}
          </Typography>
          <Typography variant="caption" gutterBottom align="center">
            {name}
          </Typography>
        </Paper>

      </Grid>
    )
  };

  render() {

    const { classes } = this.props;

    return (
      <div className="FollowerInfo">
        <Grid container className={classes.root}>
          {this.renderItem(classes, 'posts')}
          {this.renderItem(classes, 'followers')}
          {this.renderItem(classes, 'following')}
        </Grid>
      </div>
    )
  }
}

FollowerInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FollowerInfo);
