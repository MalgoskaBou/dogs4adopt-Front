import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainPage from './Pages/MainPage';
import DogsPage from './Pages/DogsPage';
import SheltersPage from './Pages/SheltersPage';
import AboutPage from './Pages/AboutPage';

import HeaderComponent from './Components/HeaderComponent/HeaderComponent';
import FooterComponent from './Components/FooterComponent/FooterComponent';

import './styles.css';

const App = () => {
  return (
    <Router>
      <HeaderComponent />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/dogs" component={DogsPage} />
        <Route path="/shelters" component={SheltersPage} />
        <Route path="/about" component={AboutPage} />
      </Switch>

      <FooterComponent />
    </Router>
  );
};

export default App;
