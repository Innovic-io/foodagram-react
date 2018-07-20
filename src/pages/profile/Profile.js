import React, { Component } from 'react';

import UserInfo from "../../components/user-info/UserInfo";
import Menu from "../../components/menu/Menu";
import PictureGrid from "../../components/picture-grid/PictureGrid";

export default class Profile extends Component {

  navigateTo(id) {
    this.props.history.push('/picture/' + id);
  }

  constructor(props) {
    super(props);

    this.state = {
      cols: 3,
      cellHeight: 180,
    }
  }

  onViewChange = (data) => {

    this.setState({
      cols: data.cols,
      cellHeight: data.cellHeight,
    });
  };

  render() {

    return (
      <div>
        <UserInfo name='Jason Momoa' username='mjason'/>
        <Menu onViewChange={(data) => this.onViewChange(data)}/>
        <PictureGrid gridInfo={this.state} clickOnImage={id => this.navigateTo(id)}/>
      </div>
    )
  }
}
