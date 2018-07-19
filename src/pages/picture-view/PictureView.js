import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Bookmark from '@material-ui/icons/Bookmark'
import IconButton from '@material-ui/core/IconButton';

import Input from '../../components/text-field/TextField';
import Comments from '../../components/comments/Comments'
import { tileData } from "../../components/picture-grid/tileData/tileData";

const styles = theme => ({
  appBorder: {
    boxShadow: 'none',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(0,0,0,.0975)',
    marginTop: 50,
    marginBottom: 50,
    backgroundColor: theme.palette.background.paper,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: 'rgba(0,0,0,.0975)',
  },
  profileName: {
    textAlign: 'left',
    marginTop: 20,
  },
  img: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    marginTop: 20,
  },
  yummiesColor: {
    color: 'red',
  },
  avatar: {
    margin: 10,
    justifyContent: 'center',
  },
  bookmark: {

  }
});

class PictureView extends Component {

  constructor(props) {
    super(props);

    const { id } = this.props.match.params;

    this.state = {
      id: id,
      yummies: tileData.find(value => value.id === id).yummies,
      comments: tileData.find(value => value.id === id).comments,
    };
  }

  yummiesIncrement = (id) => {
    const [ item ] = tileData.filter(value => value.id === id);
    this.setState({
      yummies: ++item.yummies,
    });
  };

  onSubmitComment = (data) => {

    tileData.find(value => value.id === data.id).comments.push({
      id: Math.round(Math.random()*10000000000),
      comment: data.comment,
      username: 'aaa',
      tags: []
    });

    this.setState({
      comments: tileData.find(value => value.id === data.id).comments
    })
  };

  render() {

    const { classes } = this.props;

    return (
      <Grid container className={classes.appBorder}>
        <Grid className={classes.img} item xs={12} md={8}>
          <img width='100%' src={tileData.find(value => value.id === this.state.id).img} alt=''/>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container className={classes.separator}>
            <Grid item md={3}>
              <Avatar src='/images/profilepic.jpg' className={classes.avatar}/>
            </Grid>
            <Grid item md={9} >
              <Typography className={classes.profileName}> Jason Momoa </Typography>
            </Grid>
          </Grid>
          <Grid container className={classes.content}>
            <Grid item xs={4} md={4}>
              <IconButton>
                <FavoriteIcon className={ (this.state.yummies >= 5) ? classes.yummiesColor : null} onClick={ () => this.yummiesIncrement(this.state.id)}/>
              </IconButton>
            </Grid>
            <Grid item xs={4} md={4} className={classes.bookmark}>
              <IconButton>
                <ShareIcon/>
              </IconButton>
            </Grid>
            <Grid item xs={4} md={4} className={classes.bookmark}>
              <IconButton>
                <Bookmark/>
              </IconButton>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography> {this.state.yummies} people find this yummy</Typography>
            </Grid>
            <Grid item xs={12} md={12} className={classes.avatar}>
              <Comments comments={this.state.comments} />
            </Grid>
            <Grid item xs={12} md={12} className={classes.avatar}>
              <Input onSubmitComment={(comment) => this.onSubmitComment(comment)} id={this.state.id}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

PictureView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PictureView);
