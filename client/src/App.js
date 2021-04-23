import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from './Component/Navbar/Navbar';
import ModelsContainer from './Component/Models/ModelsContainer';
import PageModelContainer from './Component/Models/PageModel/PageModelContainer';
import DetailsContainer from './Component/Models/Details/DetailsContainer';
import PageDetailContainer from './Component/Models/Details/PageDetail/PageDetailContainer'

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="startPage">
        <Route exact path="/" render={() => <Navbar />} />
        <Route exact path="/models" render={() => <ModelsContainer/>} />
        <Route exact path="/models/:id" render={() => <PageModelContainer/>} />
        <Route exact path="/models/:id/details" render={() => <DetailsContainer/> } />
        <Route exact path="/models/:id/details/:detailId" render={() => <PageDetailContainer />} />
      </div>
    </BrowserRouter>
  )
}

export default App;
