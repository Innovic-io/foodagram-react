import React, {Component} from 'react';
import {styles} from "./styles";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

class Login extends Component {

}


Login.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Login);
