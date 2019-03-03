import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from '../components/pages/Homepage';
import About from '../components/pages/About';
import Contact from '../components/pages/Contact';
import Error from '../components/pages/Error';
import Navigation from '../components/pages/Navigation';
import Footer from '../components/pages/Footer';

const NewRoute = () => {
  return(
    <div>
      <p>New Route</p>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Homepage} exact />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={Error} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
