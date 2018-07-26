import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import NavigateNext from '@material-ui/icons/NavigateNext';
import NavigateBefore from '@material-ui/icons/NavigateBefore';
import { tileData } from "../picture-grid/tileData/tileData";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({

});

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
      console.log(1);

      this.setState({
        current: this.state.current - 1,
      });
    }
  };

/*
  handleStepChange = activeStep => {
    this.setState({ activeStep: slide });
  };
*/
  render() {

    return (
        <div>
          <Button onClick={() => this.handleBack()}>
            <NavigateBefore />
          </Button>
          <img width={'100%'} src={this.state.slide[this.state.current].path} />
          <Button onClick={() => this.handleNext()}>
            <NavigateNext />
          </Button>
        </div>
    )
  }

}

ImageSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageSlider);
