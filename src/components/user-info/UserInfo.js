import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import {tileData} from "../picture-grid/tileData/tileData";
import FollowerInfo from "../follower-info/FollowerInfo";


const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    marginTop: 20,
    marginBottom: 20
  },
  bigAvatar: {
    width: 200,
    height: 200,
  },
};

class UserInfo extends Component {

  render () {

    const { classes } = this.props;

    return (
      <Grid container className={classes.avatar}>
        <Grid item xs={12} sm={4}>
          <div className={classes.row}>
            <Avatar src="/images/profilepic.jpg" className={classes.bigAvatar}/>
          </div>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography variant="display1" color={'inherit'} gutterBottom align={'left'}>
            {this.props.name}
          </Typography>
            <FollowerInfo posts={tileData.length} followers='1m' following='251'/>
          <Typography variant="subheading" align={'left'}>
            Urna duis convallis convallis tellus id interdum. Sit amet cursus sit amet dictum sit. Euismod elementum nisi quis eleifend.
          </Typography>
        </Grid>
      </Grid>
    )
  }
}

UserInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string,
  username: PropTypes.string
};

export default withStyles(styles)(UserInfo);
