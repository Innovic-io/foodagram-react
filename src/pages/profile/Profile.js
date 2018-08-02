import React, { Component } from 'react';

import UserInfo from "../../components/user-info/UserInfo";
import Menu from "../../components/menu/Menu";
import PictureGrid from "../../components/picture-grid/PictureGrid";
import { tileData } from '../../data/tileData/tileData';

export default class Profile extends Component {

  navigateTo(id) {
    this.props.history.push('/picture/' + id);
  }
  onGridViewClick = () => {

    this.onViewChange({
      cols: 3,
      cellHeight: 180,
      tileData: tileData,
    });
  };

  onListViewClick = () => {

    this.onViewChange({
      cols: 1,
      cellHeight: 360,
      tileData: tileData,
    });
  };

  onSavedViewClick = () => {

    this.onViewChange({
      cols: 3,
      cellHeight: 180,
      tileData: tileData.filter(value => value.saved === true),
    });
  };

  constructor(props) {
    super(props);

    this.state = {
      cols: 3,
      cellHeight: 180,
      tileData: tileData,
    }
  }

  onViewChange = (data) => {

    this.setState({
      cols: data.cols,
      cellHeight: data.cellHeight,
      tileData: data.tileData,
    });
  };

  render() {


    return (
      <div>
        <UserInfo name='Jason Momoa' username='mjason'/>
        <Menu onGridViewClick={() => this.onGridViewClick()} onListViewClick={() => this.onListViewClick()} onSavedViewClick={() => this.onSavedViewClick()}  onViewChange={(data) => this.onViewChange(data)}/>
        <PictureGrid gridInfo={this.state} clickOnImage={id => this.navigateTo(id)}/>
      </div>
    )
  }
}
