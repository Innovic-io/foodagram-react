import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { styles } from "./styles";

class FollowerInfo extends Component {

  renderItem = (classes, name) => {

    return(
      <div className={classes.grow}>
        <Typography style={{fontWeight: 600, textAlign: 'left', display: 'inline'}}>
          {this.props[name]}
        </Typography>
        <Typography style={{fontWeight: 'lighter', justifyContent: 'center', display: 'inline', paddingLeft: '5px'}}>
          {name}
        </Typography>
      </div>
    )
  };

  render() {

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {this.renderItem(classes, 'posts')}
        {this.renderItem(classes, 'followers')}
        {this.renderItem(classes, 'following')}
      </div>
    )
  }
}

FollowerInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FollowerInfo);
