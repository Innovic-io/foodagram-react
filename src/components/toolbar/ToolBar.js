import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import BookmarkBorder from '@material-ui/icons/BookmarkBorder';
import Bookmark from '@material-ui/icons/Bookmark';

import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
  yummiesColor: {
    color: 'red',
  },
  buttonContainer: {
    display: 'flex',
  },
  buttonSave: {
    flexGrow: 1,
    textAlign: 'right'
  },
  sideDisableGrow: {
    flexBasis: 'auto'
  },
});

class ToolBar extends Component {



  render() {

    const { classes, yummies, id, onYummiesIncrement } = this.props;

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
            <IconButton >
              <BookmarkBorder/>
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
