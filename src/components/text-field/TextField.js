import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { styles } from "./styles";

class Input extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      textField: ''
    }
  }

  submit = (event) => {
    event.preventDefault(); //so that the page does not refresh

    this.props.onSubmitInput({id: this.state.id, textField: this.state.textField});
    this.setState({
      textField: '',
    })
  };

  handleChange = textField => event => {
    this.setState({
      textField: event.target.value,
    })
  };

  render() {

    const {classes, placeholder} = this.props;

    return (
      <form className={classes.container} onSubmit={(e) => this.submit(e)}>
        <TextField
          required={true}
          placeholder={placeholder}
          id="textField"
          value={this.state.textField}
          onChange={this.handleChange('textField')}
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
