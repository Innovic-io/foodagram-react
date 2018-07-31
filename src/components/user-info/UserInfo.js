import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'

import {tileData} from "../../data/tileData/tileData";
import FollowerInfo from "../follower-info/FollowerInfo";
import { styles } from "./styles";

class UserInfo extends Component {

  render () {

    const { classes } = this.props;

    return (
      <Grid container className={classes.margin}>

        <Grid item xs={12} sm={4}>
          <div className={classes.row}>
            <Avatar src="/images/profilepic.jpg" className={classes.bigAvatar}/>
          </div>
        </Grid>

        <Grid item xs={12} sm={4}>

          <Grid container >

            <Grid item xs={5} sm={5}>
              <Typography variant='headline' align={'left'}>
                {this.props.username}
              </Typography>
            </Grid>

            <Grid item xs={7} sm={7} className={classes.button}>
              <Button size={"small"} variant="outlined">
                Edit Profile
              </Button>
            </Grid>

            <Grid item xs={12} sm={12}>
              <FollowerInfo posts={tileData.length} followers='1m' following='251'/>
              <Typography variant='body1' align={'left'} >
                {this.props.name}
              </Typography>
              <Typography variant='caption' align={'left'}>
                Urna duis convallis convallis tellus id interdum. Sit amet cursus sit amet dictum sit. Euismod elementum nisi quis eleifend.
              </Typography>
            </Grid>

          </Grid>
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
