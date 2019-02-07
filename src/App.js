import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomeContainer from "./containers/HomeContainer";
import EventsContainer from "./containers/event/EventsContainer";

class App extends Component {
  
  renderHome = () => <HomeContainer/>;
  
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={this.renderHome} />
          <Route exact path="/events" component={EventsContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
