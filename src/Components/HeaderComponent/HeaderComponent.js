import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Ul, Li, LogoText } from './HeaderComponent.style';

export const NavComponent = () => (
  <nav>
    <Ul>
      <Li>
        <Link to="/">Strona Główna</Link>
      </Li>
      <Li>
        <Link to="/dogs">Psy</Link>
      </Li>
      <Li>
        <Link to="/shelters">Schroniska</Link>
      </Li>
      <Li>
        <Link to="/about">About</Link>
      </Li>
    </Ul>
  </nav>
);

const HeaderComponent = () => {
  return (
    <Header>
      <LogoText>dogs 4 adopt</LogoText>
      <NavComponent />
    </Header>
  );
};

export default HeaderComponent;
