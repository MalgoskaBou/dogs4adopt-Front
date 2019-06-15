import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { Link } from 'react-router-dom';
import HeaderComponent from './HeaderComponent';
import { Ul, Li } from './HeaderComponent.style';

const stories = storiesOf('HeaderComponent', module);

stories.addDecorator(StoryRouter());

stories.add('Header of page', () => <HeaderComponent />);

stories.add('Nav instate of NavComponent', () => (
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
));
