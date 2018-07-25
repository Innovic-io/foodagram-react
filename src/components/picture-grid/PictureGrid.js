import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {withStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import './PictureGrid.css';
import Slide from '@material-ui/core/Slide';
import {tileData} from '../picture-grid/tileData/tileData';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    height: '100%'
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

class PictureGrid extends Component {

  pictureClick = (id) => {
    this.props.clickOnImage(id);
  };

  handleChange = () => {
    this.setState(state => ({clicked: !state.clicked}));
  };

  constructor(props) {
    super(props);

    this.state = {
      mouseOver: -1,
      cols: props.cols,
      cellHeight: props.cellHeight,
    }
  }

  mouseOut(i) {

    this.setState({
      mouseOver: -1,
    });
  }

  mouseOver(i) {

    this.setState({
      mouseOver: i,
    })
  }

  checkNodes() {}

  render() {

    const { classes, gridInfo } = this.props;

    return (
      <div className={classes.root}>
        <GridList cols={gridInfo.cols} cellHeight={gridInfo.cellHeight}>
          <GridListTile key='Subheader' cols={3} style={{height: 'auto'}}>
          </GridListTile>
          {tileData.map((tile, i) => (
            <GridListTile onMouseLeave={() => this.mouseOut(i)} onMouseEnter={() => this.mouseOver(i)} key={tile.img}
                          onClick={event => this.pictureClick(tile.id)}>
              <img src={tile.img} alt={tile.title}/>
              <Slide in={(this.state.mouseOver === i)} direction='up' unmountOnExit>
                <GridListTileBar
                  key={i}
                  title={tile.title}
                  subtitle={<span>by: {tile.author}</span>}
                  actionIcon={
                    <IconButton className={classes.icon}>
                      <InfoIcon onClick={this.handleChange}/>
                    </IconButton>
                  }
                />
              </Slide>
            </GridListTile>
          ))}
        </GridList>
      </div>
    )
  }
}

PictureGrid.propTypes = {
  classes: PropTypes.object.isRequired,
  clickOnImage: PropTypes.func,
};

export default withStyles(styles)(PictureGrid);

