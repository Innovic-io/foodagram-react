import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles/index";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = {

};

class Comments extends Component {

  constructor(props) {
    super(props);

    this.state = {
      comments: props.comments,
    };
  }

  render() {

    return(
      <List dense={true} disablePadding={true}>
        {
        this.state.comments.map(comment => (
          <ListItem disableGutters={true} key={comment.id}>
            <ListItemText
              primary={comment.comment}
              secondary={comment.username}
            />
          </ListItem>
        ))
      }
      </List>
    )
  }

}
/*
Comments.propTypes = {
  classes: PropTypes.object.isRequired,
};
*/
export default withStyles(styles)(Comments);
