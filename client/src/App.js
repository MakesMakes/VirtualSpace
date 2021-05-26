import React from 'react';
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Navbar from './Component/Navbar/Navbar';
import ModelsContainer from './Component/Models/ModelsContainer';
import PageModelContainer from './Component/Models/PageModel/PageModelContainer';
import DetailsContainer from './Component/Models/Details/DetailsContainer';
import PageDetailContainer from './Component/Models/Details/PageDetail/PageDetailContainer'
import Auth from './Component/Auth/Auth'
import {connect} from 'react-redux'
import Register from './Component/Registration/Registration';

const App = (props) => {

  if(props.isAuth || localStorage.getItem('token')){
    return (
      <BrowserRouter>
        <div className="startPage">
          <Switch>
            <Route exact path="/navbar" render={() => <Navbar />} />
            <Route exact path="/models" render={() => <ModelsContainer />} />
            <Route exact path="/models/:id" render={() => <PageModelContainer />} />
            <Route exact path="/models/:id/details" render={() => <DetailsContainer />} />
            <Route exact path="/models/:id/details/:detailId" render={() => <PageDetailContainer />} />
            <Redirect to='/navbar' />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
  return (
    <BrowserRouter>
      <div className="startPage">
        <Switch>
        <Route exact path="/register" render={() => <Register />} />
        <Route exact path="/login" render={() => <Auth />} />
        <Redirect to='/register' />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

let mapStateToProps = (state) => {
  return{
      isAuth: state.login.isAuth
  }
}

export default connect(mapStateToProps, null)(App);
