import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__logo}>dogs 4 adopt</h1>
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
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
