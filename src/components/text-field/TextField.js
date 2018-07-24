import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
  },
  bootstrapRoot: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  bootstrapInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    width: '100%',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  bootstrapFormLabel: {
    fontSize: 16,
  },
  inputField: {
    width: '100%',
  }
});

class Input extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      comment: ''
    }
  }

  submit = (event) => {
    event.preventDefault(); //so that the page does not refresh

    this.props.onSubmitComment({id: this.state.id, comment: this.state.comment});
    this.setState({
      comment: '',
    })
  };

  handleChange = comment => event => {
    this.setState({
      comment: event.target.value,
    })
  };

  render() {

    const {classes} = this.props;

    return (
      <form className={classes.container} onSubmit={(e) => this.submit(e)}>
        <TextField
          required={true}
          placeholder="Add a comment"
          id="comment"
          value={this.state.comment}
          onChange={this.handleChange('comment')}
          className={classes.inputField}
          InputProps={{
            disableUnderline: true,
            classes: {
              root: classes.bootstrapRoot,
              input: classes.bootstrapInput,
            },
          }}
          InputLabelProps={{
            shrink: true,
            className: classes.bootstrapFormLabel,
          }}
        />
      </form>
    );
  }
}

Input.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Input);
