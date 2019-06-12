import React from 'react';
import { Link, Route } from 'react-router-dom';

import SingleShelterOnListComponent from '../Components/SingleShelterOnList/SingleShelterOnListComponent';
import SheltersListComponent from '../Components/SheltersListComponent/SheltersListComponent';

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
      <Route path={`${match.path}/:name`} component={SingleShelterOnListComponent} />
    </div>
  );
};

export default SheltersPage;
