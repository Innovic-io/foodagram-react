import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ViewDay from '@material-ui/icons/ViewDay';
import Tagged from '@material-ui/icons/AccountBox';
import Saved from '@material-ui/icons/Bookmark'
import ViewModule from '@material-ui/icons/ViewModule'

const styles = {
  root: {},
  buttonItem: {
    minWidth: '25%'
  }
};


class Menu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: 'grid',
    };
  }

  onGridViewClick = () => {

    this.props.onViewChange({
      cols: 3,
      cellHeight: 180,
    });
  };

  onListViewClick = () => {

    this.props.onViewChange({
      cols: 1,
      cellHeight: 720,
    });
  };

  handleChange = (event, value) => {
    this.setState({value});
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
        <BottomNavigationAction className={classes.buttonItem} label="GridView" value="grid" icon={<ViewModule/>}
                                onClick={() => this.onGridViewClick()}/>
        <BottomNavigationAction className={classes.buttonItem} label="ListView" value="list" icon={<ViewDay/>}
                                onClick={() => this.onListViewClick()}/>
        <BottomNavigationAction className={classes.buttonItem} label="Tagged" value="tagged" icon={<Tagged/>}/>
        <BottomNavigationAction className={classes.buttonItem} label="Saved" value="saved" icon={<Saved/>}/>
      </BottomNavigation>
    );
  }
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Menu);
