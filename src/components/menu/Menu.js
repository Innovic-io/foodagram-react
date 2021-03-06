import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ViewDay from '@material-ui/icons/ViewDay';
import Tagged from '@material-ui/icons/AccountBox';
import Saved from '@material-ui/icons/Bookmark'
import ViewModule from '@material-ui/icons/ViewModule'
import { styles } from "./styles";

class Menu extends Component {

  handleChange = (event, value) => {
    this.setState({ value });
  };

  constructor(props) {
    super(props);

    this.state = {
      value: 'grid',
    };
  }

  render() {

    const { classes, onGridViewClick, onListViewClick,  onSavedViewClick} = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation value={value} onChange={this.handleChange}>
        <BottomNavigationAction className={classes.buttonItem} label="GridView" value="grid" icon={<ViewModule/>} onClick={() => onGridViewClick()}/>
        <BottomNavigationAction className={classes.buttonItem} label="ListView" value="list" icon={<ViewDay/>}
                                onClick={() => onListViewClick()}/>
        <BottomNavigationAction className={classes.buttonItem} label="Tagged" value="tagged" icon={<Tagged/>}/>
        <BottomNavigationAction className={classes.buttonItem} label="Saved" value="saved"
                                onClick={() => onSavedViewClick()} icon={<Saved/>}/>
      </BottomNavigation>
    );
  }
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Menu);
