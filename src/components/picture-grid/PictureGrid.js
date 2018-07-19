import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import './PictureGrid.css';
import { tileData } from '../picture-grid/tileData/tileData'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

class PictureGrid extends Component {

  pictureClick = (id) => {
    this.props.clickOnImage(id);
  };

  render() {

    const { classes } = this.props;

    return(
      <div className={classes.root}>
        <GridList cellHeight={360} cols={3} className={classes.gridList}>
          <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
          </GridListTile>
          {tileData.map(tile => (
            <GridListTile key={tile.img} onClick={event => this.pictureClick(tile.id)}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                subtitle={<span>by: {tile.author}</span>}
                actionIcon={
                  <IconButton className={classes.icon}>
                    <InfoIcon />
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

