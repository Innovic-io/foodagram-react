import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {withStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import './PictureGrid.css';
import {tileData} from '../picture-grid/tileData/tileData';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    width: '100%'
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  visibilityHidden: {
    visibility: 'hidden',
  },
  visibilityVisible: {
    visibility: 'visible',
  }
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

    this.nodes = new Map();

    this.state = {
      mouseOver: false,
      cols: props.cols,
      cellHeight: props.cellHeight,
    }
  }

  mouseOut(i) {
    const element = this.nodes.get(i);

    //this.nodes.set napisati u jsx i nekako tu apdejtovati

    this.setState({
      mouseOver: false,
    });
  }

  mouseOver(i) {
    //const element = this.nodes.get(i);
    this.setState({
      mouseOver: true,
    })
  }

  render() {

    const {classes, gridInfo} = this.props;
    console.log(this.state.mouseOver);
    return (
      <div className={classes.root}>
        <GridList cols={gridInfo.cols} cellHeight={gridInfo.cellHeight}>
          <GridListTile key="Subheader" cols={3} style={{height: 'auto'}}>
          </GridListTile>
          {tileData.map((tile, i) => (
            <GridListTile onMouseLeave={() => this.mouseOut(i)} onMouseEnter={() => this.mouseOver(i)} key={tile.img}
                          onClick={event => this.pictureClick(tile.id)}>
              <img src={tile.img} alt={tile.title}/>
              <GridListTileBar
                ref={c => this.nodes.set(i, c)}
                key={i}
                className={(this.state.mouseOver === true) ? classes.visibilityVisible : classes.visibilityHidden}
                title={tile.title}
                subtitle={<span>by: {tile.author}</span>}
                actionIcon={
                  <IconButton className={classes.icon}>
                    <InfoIcon onClick={this.handleChange}/>
                  </IconButton>
                }
              />
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

