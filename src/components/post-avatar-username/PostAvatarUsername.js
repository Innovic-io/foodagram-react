import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import MoreButton from "@material-ui/icons/MoreVert"
import IconButton from "@material-ui/core/IconButton"

import  React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';

import { styles } from "./styles";

class PostAvatarUsername extends Component{

  render() {

    const { classes, avatar, username} = this.props;

    return(
    <Grid container>
      <Grid item md>
        <Avatar src={avatar} className={classes.avatar}/>
      </Grid>
      <Grid item md={6} className={classes.middleGrid}>
        <Typography className={classes.profileName}>{username}</Typography>
      </Grid>
      <Grid item md className={classes.button}>
        <IconButton>
          <MoreButton/>
        </IconButton>

      </Grid>
    </Grid>
    )
  }
}

PostAvatarUsername.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostAvatarUsername);
