import React, { Component } from 'react';

import UserInfo from "../../components/user-info/UserInfo";
import Menu from "../../components/menu/Menu";
import PictureGrid from "../../components/picture-grid/PictureGrid";



export default class Profile extends Component {

  navigateTo(id) {

    this.props.history.push('/picture/' + id);
  }

  render() {

    return (
          <div>
            <UserInfo name='Jason Momoa' username='mjason'/>
            <Menu/>
            <PictureGrid clickOnImage={id => this.navigateTo(id)}/>
          </div>
    )
  }
}
