import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import headerBgImg from '../../assets/img/bonesPattern.png';
import colors from '../../Styles/colors';

const Li = styled.li`
  display: block;
  margin: 10px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid green;
  cursor: pointer;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
`;

const LogoText = styled.h1``;

const Header = styled.header`
  background-image: url(${headerBgImg});
  background-color: ${colors.primaryColor};
  padding: 20px;
  font-size: 20px;
  color: ${colors.lightTextColor};
  text-transform: uppercase;
  margin-bottom: 50px;
  font-family: 'Ostrich';
  letter-spacing: 6px;
  display: flex;
  justify-content: space-between;
`;

const HeaderComponent = () => {
  return (
    <Header>
      <LogoText>dogs 4 adopt</LogoText>
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
    </Header>
  );
};

export default HeaderComponent;
