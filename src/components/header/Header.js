import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom'

import './Header.css';

const styles = {
  appBar: {
    height: 80,
    boxShadow: 'none',
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: 'rgba(0,0,0,.0975)'
  },
  flex: {
    textAlign: 'left',
    flexGrow: 1
  },
  icons: {
    marginRight: '30px'
  }
};

class Header extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div>
        <AppBar position="static" color='inherit' className={classes.appBar}>
          <Grid container>
            <Grid item md={3}/>
            <Grid item xs={12} md={6}>
              <Toolbar>
                <Link to="/">
                  <img className={'App-logo'} src='/images/logo-bigger.png' alt=''></img>
                </Link>
                <Typography variant="title" color="inherit" className={classes.flex}>
                  FoodaGram
                </Typography>
                <IconButton>
                  <AccountCircle/>
                </IconButton>
                <IconButton>
                  <FavoriteIcon/>
                </IconButton>
              </Toolbar>
            </Grid>
            <Grid item md={3}/>
          </Grid>
        </AppBar>
      </div>

    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Header);
