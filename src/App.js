import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';
import Header from "./components/header/Header";
import PictureView from "./pages/picture-view/PictureView";
import Profile from "./pages/profile/Profile";
import Grid from '@material-ui/core/Grid';
import Login from "./pages/login/Login";

export default class App extends Component {

  render() {
    return (
      <div>
        <div className='App-header'>
          <Header/>
        </div>
        <div className='App-container'>
          <Grid container>
            <Grid item md={3}/>
            <Grid item xs={12} md={6}>
              <Switch>
                <Route exact path='/' component={Profile}/>
                <Route path='/picture/:id' component={PictureView}/>
                <Route path='/login' component={Login}/>
              </Switch>
            </Grid>
            <Grid item md={3}/>
          </Grid>
        </div>
      </div>
    );
  }
}
