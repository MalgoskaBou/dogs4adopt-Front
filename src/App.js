/* eslint-disable import/no-duplicates */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-expressions */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

import './styles.css';

const MainPage = () => {
  return <h1>MainPage</h1>;
};

const SingleShelterListComponent = ({ match }) => {
  return (
    <div className="shelters--single-shelter">
      <h1>This is shelter: {match.params.name}</h1>
    </div>
  );
};

const SheltersListComponent = () => {
  return <div className="shelters--list">Here you see whole list of shelters</div>;
};

const SheltersPage = ({ match }) => {
  return (
    <div className="shelters--container">
      <h1>SheltersPage</h1>
      <div className="shelters--side-bar">
        <ul>
          <li>
            <Link to={`${match.url}`}>All</Link>
          </li>
          <li>
            <Link to={`${match.url}/lodz`}>Łódź</Link>
          </li>
          <li>
            <Link to={`${match.url}/jelenia-gora`}>Jelenia Góra</Link>
          </li>
        </ul>
      </div>
      <Route exact path={match.path} render={() => <SheltersListComponent />} />
      <Route path={`${match.path}/:name`} component={SingleShelterListComponent} />
    </div>
  );
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
