/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-expressions */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

import './styles.css';

const MainPage = () => {
  return <h1>MainPage</h1>;
};

const SheltersPage = () => {
  return <h1>SheltersPage</h1>;
};

const DogsPage = () => {
  return <h1>DogsPage</h1>;
};

const AboutPage = () => {
  return <h1>AboutPage</h1>;
};

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/dogs" component={DogsPage} />
        <Route path="/shelters" component={SheltersPage} />
        <Route path="/about" component={AboutPage} />
      </Switch>

      <Footer />
    </Router>
  );
};

export default App;
