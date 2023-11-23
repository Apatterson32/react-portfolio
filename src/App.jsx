// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/" exact component={AboutMe} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

