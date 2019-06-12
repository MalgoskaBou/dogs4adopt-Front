import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainPage from './Pages/MainPage';
import DogsPage from './Pages/DogsPage';
import SheltersPage from './Pages/SheltersPage';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

import './styles.css';
import SingleDogPopUp from './Components/SingleDogPopUp/SingleDogPopUp';

const AboutPage = () => {
  return (
    <div>
      <h1>AboutPage</h1>
      <SingleDogPopUp />
    </div>
  );
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
