import React from 'react';
import SingleDogPopUp from '../SingleDogPopUp/SingleDogPopUp';

const SingleShelterOnListComponent = ({ match }) => {
  return (
    <div className="shelters--single-shelter">
      <h1>This is shelter: {match.params.name}</h1>
      <SingleDogPopUp />
    </div>
  );
};

export default SingleShelterOnListComponent;
