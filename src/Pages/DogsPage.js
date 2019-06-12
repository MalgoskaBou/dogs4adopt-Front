import React from 'react';
import SingleDogPopUp from '../Components/SingleDogPopUp/SingleDogPopUp';

class DogsPage extends React.Component {
  state = {
    isPopUpOpen: false,
  };

  openPopUp = () => {
    this.setState(() => {
      return { isPopUpOpen: true };
    });
  };

  handelOnDogIconClick = () => {
    this.openPopUp();
  };

  render() {
    return (
      <div>
        <h1>DogsPage</h1>
        <button type="button" onClick={this.handelOnDogIconClick}>
          Dog 1
        </button>
        <button type="button" onClick={this.handelOnDogIconClick}>
          Dog 2
        </button>
        <button
          type="button"
          onClick={this.handelOnDogIconClick}
          onKeyPress={this.handelOnDogIconClick}
        >
          {' '}
          Dog 3
        </button>
        <SingleDogPopUp isUp={this.state.isPopUpOpen} />
      </div>
    );
  }
}

export default DogsPage;
