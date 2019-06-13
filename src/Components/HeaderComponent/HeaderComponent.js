import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderComponent.module.scss';

export const NavElementComponent = ({ linkTo, title }) => {
  return (
    <li className={styles.nav__element}>
      <Link to={linkTo}>{title}</Link>
    </li>
  );
};

export const NavComponent = () => (
  <nav>
    <ul className={styles.nav__menu}>
      <li className={styles.nav__element}>
        <Link to="/">Strona Główna</Link>
      </li>
      <li className={styles.nav__element}>
        <Link to="/dogs">Psy</Link>
      </li>
      <li className={styles.nav__element}>
        <Link to="/shelters">Schroniska</Link>
      </li>
      <li className={styles.nav__element}>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </nav>
);

const HeaderComponent = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__logo}>dogs 4 adopt</h1>
      <NavComponent />
    </header>
  );
};

export default HeaderComponent;
