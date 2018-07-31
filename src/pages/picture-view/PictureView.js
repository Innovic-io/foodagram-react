import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Input from '../../components/text-field/TextField';
import Comments from '../../components/comments/Comments';
import ToolBar from '../../components/toolbar/ToolBar'
import { tileData } from "../../data/tileData/tileData";
import PostAvatarUsername from "../../components/post-avatar-username/PostAvatarUsername";
import { styles } from "./styles";
import ImageSlider from "../../components/image-slider/ImageSlider";

class PictureView extends Component {

  constructor(props) {
    super(props);

    this.state = {}
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { id } = nextProps.match.params;

    const currentPicture = tileData.find(value => value.id === id);

    return {
      id: id,
      img: currentPicture.img,
      yummies: currentPicture.yummies,
      comments: currentPicture.comments,
      saved: currentPicture.saved,
    };
  }

  onSubmitComment = (data) => {

    tileData.find(value => value.id === data.id).comments.push({
      id: Math.round(Math.random() * 10000000000),
      comment: data.comment,
      username: 'username',
      tags: []
    });


    this.setState((prevState, props) => {
      return { comments: tileData.find(value => value.id === data.id).comments }
    })
  };

  yummiesIncrement = (id) => {

    const [ item ] = tileData.filter(value => value.id === id);

    this.setState({
      yummies: ++item.yummies,
    });
  };

  addRemoveSaved = (id) => {
    console.log(this.state.saved);
    tileData.find(value => value.id === id).saved = !this.state.saved;

    this.setState(prevState => ({
      saved: !prevState.saved,
    }))
  };
  render() {

    const {classes} = this.props;

    return (
      <Grid container className={classes.appBorder}>

        <Grid className={classes.img} item xs={12} md={8}>
          <ImageSlider img={this.state.img}/>
        </Grid>

        <Grid item xs={12} md={4}>
          <div className={classes.separator}>
            <PostAvatarUsername avatar={'/images/profilepic.jpg'} username={'mjason'}/>
          </div>

          <Grid container className={classes.content}>
            <div className={classes.rightSideFlex}>

              <ToolBar onYummiesIncrement={(pictureID) => this.yummiesIncrement(pictureID)} addRemoveSaved={(picID) => this.addRemoveSaved(picID)} saved={this.state.saved} yummies={this.state.yummies} id={this.state.id}/>

              <Grid item xs={12} md={12} className={classes.sideDisableGrow}>
                <Typography align={"center"} variant={"caption"}> {this.state.yummies} people find this yummy</Typography>
              </Grid>

              <div className={classes.sideFlexCommentBox}>
                <Grid item xs={12} md={12}>
                  <Comments comments={this.state.comments}/>
                </Grid>
              </div>

              <Grid item xs={12} md={12} className={classes.sideDisableGrow}>
                <Input onSubmitComment={(comment) => this.onSubmitComment(comment)} id={this.state.id}/>
              </Grid>

            </div>
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
