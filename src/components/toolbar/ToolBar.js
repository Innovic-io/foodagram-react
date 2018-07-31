import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { styles } from "./styles";

import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import BookmarkBorder from '@material-ui/icons/BookmarkBorder';
import Bookmark from '@material-ui/icons/Bookmark';

class ToolBar extends Component {

  render() {

    const { classes, yummies, id, onYummiesIncrement, addRemoveSaved, saved } = this.props;

    return(
      <Grid item xs={12} md={12} className={classes.sideDisableGrow}>
        <div className={classes.buttonContainer}>
          <IconButton>
            <FavoriteIcon className={(yummies >= 5) ? classes.yummiesColor : null} onClick={() => onYummiesIncrement(id)}/>
          </IconButton>
          <IconButton>
            <ShareIcon/>
          </IconButton>
          <div className={classes.buttonSave}>
            <IconButton onClick={() => addRemoveSaved(id)}>
              {saved ? (<Bookmark/>) : (<BookmarkBorder/>)}
            </IconButton>
          </div>
        </div>
      </Grid>
    )
  }
}

ToolBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ToolBar);
