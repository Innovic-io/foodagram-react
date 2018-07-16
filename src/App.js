import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';
import Header from "./components/header/Header";
import PictureView from "./pages/picture-view/PictureView";
import Profile from "./pages/profile/Profile";
import Grid from '@material-ui/core/Grid';

export default class App extends Component {

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <Header/>
        </div>
        <div className='App-container'>
          <Grid container>
            <Grid item xs={0} md={3}/>
            <Grid item xs={12} md={6}>
              <Switch>
                <Route exact path='/' component={Profile}/>
                <Route path='/picture/:id' component={PictureView}/>
              </Switch>
            </Grid>
            <Grid item xs={0} md={3}/>
          </Grid>
        </div>
      </div>
    );
  }
}
