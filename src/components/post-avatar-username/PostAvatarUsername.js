import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

import  React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';

const styles = theme => ({

  profileName: {
    fontWeight: 600,
    textAlign: 'left',
    marginTop: 20,
  },
  avatar: {
    margin: 10,
    justifyContent: 'center',

  },

});

class PostAvatarUsername extends Component{

  render() {

    const { classes, avatar, username} = this.props;

    return(
    <Grid container>
      <Grid item md={3}>
        <Avatar src={avatar} className={classes.avatar}/>
      </Grid>
      <Grid item md={9}>
        <Typography className={classes.profileName}>{username}</Typography>
      </Grid>
    </Grid>
    )
  }
}

PostAvatarUsername.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostAvatarUsername);
