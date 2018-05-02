import React, { Component } from 'react';
import Header from './components/header'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './components/home'
import Developer from './components/developer'
import Gemologist from './components/gemologist'
import Drummer from './components/drummer'
import Iceland from './images/iceland.JPG'


class App extends Component {
  render() {
    return (
      <div className="App vh-100 dt w-100 cover" 
      style={
        {backgroundImage:"url("+Iceland+")",
        backgroundPosition: "no-repeat",
        backgroundAttachment: "fixed"}
        }>
        <Header />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/developer" component={Developer}/>
            <Route exact path="/gemologist" component={Gemologist}/>
            <Route exact path="/drummer" component={Drummer}/>
            <Redirect to="/" />
          </Switch>
      </div>
    );
  }
}

export default App;
