import React, { Component } from 'react';
import Header from './components/header'
import {Switch, Route} from 'react-router-dom'
import Home from './components/home'
import Portfolio from './components/portfolio'
import About from './components/about'
import Footer from'./components/footer'
import Iceland from './images/iceland.JPG'


class App extends Component {
  render() {
    return (
      <div className="App vh-100 dt w-100 cover" style={{backgroundImage:"url("+Iceland+")"}}>
        <Header />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/portfolio" component={Portfolio}/>
          </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
