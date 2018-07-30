import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import NavigateNext from '@material-ui/icons/NavigateNext';
import NavigateBefore from '@material-ui/icons/NavigateBefore';
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./styles";

class ImageSlider extends Component {

  constructor(props){
    super(props);

    this.state = {
      current: 0,
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {

    const { img } = nextProps;

    return {
      slide: img,
    };
  }

  handleNext = () => {

    if(this.state.current < this.state.slide.length-1){

      this.setState({
        current: this.state.current + 1,
      });
    }
  };

  handleBack = () => {
    if(this.state.current > 0){

      this.setState({
        current: this.state.current - 1,
      });
    }
  };

  leftButton = () => {
    if(this.state.slide.length > 1 && this.state.current > 0) {
      return (
        <Button variant='fab' mini onClick={() => this.handleBack()}>
          <NavigateBefore/>
        </Button>)
    } return null;

  };

  rightButton = () => {
    if(this.state.slide.length > 1 && this.state.current < this.state.slide.length-1) {
      return (
        <Button variant='fab' mini onClick={() => this.handleNext()}>
          <NavigateNext />
        </Button>)
    } return null;
  };

  render() {

    const { classes } = this.props;

      return (
        <div className={classes.outerDiv} style={{backgroundImage: 'url(' + this.state.slide[this.state.current].path + ')'}}>
          <div className={classes.button}>
            {this.leftButton()}
          </div>
          <div className={classes.innerDiv}></div>
          <div className={classes.button}>
            {this.rightButton()}
          </div>
        </div>

      )
  }

}

/*      <div>
          <div className={classes.buttonLeft}>
            {this.leftButton()}
          </div>
          <img width={'100%'} src={this.state.slide[this.state.current].path} alt=''/>
          <div className={classes.buttonRight}>
            {this.rightButton()}
          </div>
        </div>
**/

ImageSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageSlider);
