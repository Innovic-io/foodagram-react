import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FolderIcon from '@material-ui/icons/Folder'

const styles = {
  root: {
  },
  buttonItem: {
    minWidth: '25%'
  }
};


class Menu extends Component{

  state = {
    value: 'recents',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
        <BottomNavigationAction className={classes.buttonItem} label="Recents" value="recents" icon={<RestoreIcon />} />
        <BottomNavigationAction className={classes.buttonItem} label="Favorites" value="favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction className={classes.buttonItem} label="Nearby" value="nearby" icon={<LocationOnIcon />} />
        <BottomNavigationAction className={classes.buttonItem} label="Folder" value="folder" icon={<FolderIcon/>} />
      </BottomNavigation>
    );
  }
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Menu);
