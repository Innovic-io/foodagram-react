import React, {Component} from 'react';
import {styles} from "./styles";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'
import TextField from '../../components/text-field/TextField'

class Login extends Component {

  onSubmitUsername = (data) => {

  };
  onSubmitPassword = (data) => {

  };
  buttonSubmit = () => {

  };
  render() {

    const { classes } = this.props;

    return(

      <div>
        <Card className={classes.card}>
          <CardHeader title='Foodagram' className={classes.header}/>
          <CardActions className={classes.cardActions}>
            <div className={classes.div}>
              <TextField onSubmitInput={(data) => this.onSubmitUsername(data)} placeholder='Phone number, username, or email' id='username'/>
            </div>
            <div className={classes.div}>
              <TextField onSubmitInput={() => this.onSubmitPassword()} placeholder='Password' id='password'/>
            </div>
            <div style={{width: '100%'}}>
              <Button onClick={() => this.buttonSubmit()} style={{width: '100%', marginTop: 5}} disabled={true} variant='contained' color='primary'>Log in</Button>
            </div>
          </CardActions>
          <CardContent style={{textAlign: 'center'}}>
            <Typography variant='caption'>
              <a href='/'>Forgot password?</a>
            </Typography>
          </CardContent>
        </Card>
        <Paper className={classes.paper}>
          <Typography>
            Don't have an account?
            <a href='/'> Sign up</a>
          </Typography>
        </Paper>
      </div>
    )
  }
}


Login.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Login);
