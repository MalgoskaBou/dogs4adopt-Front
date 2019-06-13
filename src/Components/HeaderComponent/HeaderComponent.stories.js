import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { Link } from 'react-router-dom';
import HeaderComponent from './HeaderComponent';
import styles from './HeaderComponent.module.scss';

const stories = storiesOf('HeaderComponent', module);

stories.addDecorator(StoryRouter());

stories.add('Header of page', () => <HeaderComponent />);

stories.add('Nav instate of NavComponent', () => (
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
));
