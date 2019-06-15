import styled from 'styled-components';
import headerBgImg from '../../assets/img/bonesPattern.png';
import colors from '../../Styles/colors';

export const Li = styled.li`
  display: block;
  margin: 10px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid green;
  cursor: pointer;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
`;

export const LogoText = styled.h1``;

export const Header = styled.header`
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
